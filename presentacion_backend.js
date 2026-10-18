/* ====================================================================
 DIAPOSITIVAS DE BACKEND (Germán Muñoz) — motor de recorridos animados
 --------------------------------------------------------------------
 .be-stepper           contenedor de un recorrido paso a paso
   data-dur="5200"     duración de cada paso (ms)
   ol.be-src > li      define los pasos: <li data-tab="x"><b>Título</b> texto</li>
   [data-on="1 3"]     recibe la clase .on solo en esos pasos
   [data-from="3"]     recibe la clase .in desde ese paso en adelante
   [data-tab="x"]      recibe .on cuando el paso actual pertenece a esa pestaña
 Arranca de cero cada vez que se llega a la diapositiva y se detiene al salir.
 ==================================================================== */
(function () {
  function onSlideActive(slide, enter, leave) {
    new MutationObserver(() => {
      if (slide.classList.contains("active")) enter();
      else if (leave) leave();
    }).observe(slide, { attributes: true, attributeFilter: ["class"] });
    if (slide.classList.contains("active")) enter();
  }
  window.beOnSlideActive = onSlideActive;

  function initStepper(root) {
    const slide = root.closest(".slide");
    const src = [...root.querySelectorAll(".be-src > li")];
    const steps = src.map((li) => ({
      tab: li.dataset.tab || "",
      title: li.querySelector("b") ? li.querySelector("b").textContent : "",
      text: li.textContent.replace(li.querySelector("b") ? li.querySelector("b").textContent : "", "").trim(),
    }));
    const DUR = Number(root.dataset.dur) || 5200;
    const nEl = root.querySelector(".be-n");
    const totalEl = root.querySelector(".be-total");
    const titleEl = root.querySelector(".be-title");
    const textEl = root.querySelector(".be-text");
    const bar = root.querySelector(".be-progress i");
    const dotsBox = root.querySelector(".be-dots");
    const playBtn = root.querySelector(".be-play");
    const onEls = [...root.querySelectorAll("[data-on]")];
    const fromEls = [...root.querySelectorAll("[data-from]")];
    const tabEls = [...root.querySelectorAll("[data-tab]:not(li)")];
    if (totalEl) totalEl.textContent = String(steps.length);

    const dots = steps.map((s, i) => {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "be-dot";
      b.textContent = String(i + 1);
      b.title = s.title;
      b.addEventListener("click", (e) => {
        e.stopPropagation();
        go(i);
      });
      dotsBox && dotsBox.appendChild(b);
      return b;
    });

    let cur = 0;
    let timer = null;
    let playing = true;

    function render() {
      const step = cur + 1;
      root.dataset.step = String(step);
      onEls.forEach((el) => {
        const list = el.dataset.on.split(/\s+/).map(Number);
        el.classList.toggle("on", list.includes(step));
      });
      fromEls.forEach((el) => el.classList.toggle("in", step >= Number(el.dataset.from)));
      tabEls.forEach((el) => el.classList.toggle("on", el.dataset.tab === steps[cur].tab));
      dots.forEach((d, i) => {
        d.classList.toggle("on", i === cur);
        d.classList.toggle("done", i < cur);
      });
      if (nEl) nEl.textContent = String(step);
      if (titleEl) titleEl.textContent = steps[cur].title;
      if (textEl) textEl.textContent = steps[cur].text;
      if (bar) {
        bar.style.transition = "none";
        bar.style.width = "0%";
        if (playing) {
          requestAnimationFrame(() =>
            requestAnimationFrame(() => {
              bar.style.transition = `width ${DUR}ms linear`;
              bar.style.width = "100%";
            }),
          );
        }
      }
    }
    function schedule() {
      clearTimeout(timer);
      if (!playing) return;
      const last = cur + 1 >= steps.length;
      timer = setTimeout(() => go(last ? 0 : cur + 1), last ? DUR + 2500 : DUR);
    }
    function go(i) {
      cur = i;
      render();
      schedule();
    }
    if (playBtn) {
      playBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        playing = !playing;
        playBtn.textContent = playing ? "❚❚ Pausar" : "▶ Reanudar";
        render();
        schedule();
      });
    }
    onSlideActive(
      slide,
      () => {
        playing = true;
        if (playBtn) playBtn.textContent = "❚❚ Pausar";
        go(0);
      },
      () => clearTimeout(timer),
    );
    render();
  }

  document.querySelectorAll(".be-stepper").forEach(initStepper);

  /* ---------- Diapositiva 33: pipeline de CI (pasa / falla) ---------- */
  (function () {
    const root = document.getElementById("be-ci");
    if (!root) return;
    const slide = root.closest(".slide");
    const tests = [...root.querySelectorAll(".be-test")];
    const stations = [...root.querySelectorAll(".be-ci-st")];
    const btns = [...root.querySelectorAll(".be-ci-mode button")];
    const status = root.querySelector(".be-ci-status");
    const suffixEls = [...root.querySelectorAll("[data-rand]")];
    let run = 0;
    let mode = "fail";
    let auto = true;
    let randTimer = null;
    const wait = (ms, id) => new Promise((ok, ko) => setTimeout(() => (id === run ? ok() : ko()), ms));

    function rand(kind) {
      if (kind === "num") return String(Math.floor(100000 + Math.random() * 900000));
      return Math.random().toString(36).slice(2, 7);
    }
    function rollSuffix() {
      suffixEls.forEach((el) => {
        el.classList.remove("flash");
        void el.offsetWidth;
        el.textContent = rand(el.dataset.rand);
        el.classList.add("flash");
      });
    }
    function reset() {
      root.classList.remove("is-ok", "is-fail", "is-running");
      tests.forEach((t) => t.classList.remove("run", "ok", "ko"));
      stations.forEach((s) => s.classList.remove("on", "done"));
      btns.forEach((b) => b.classList.toggle("on", b.dataset.mode === mode));
      status.textContent = "Esperando Pull Request…";
    }
    async function play(id) {
      for (;;) {
        reset();
        await wait(600, id);
        root.classList.add("is-running");
        const say = ["Pull Request abierto hacia main", "GitHub Actions levanta el runner", "Base de datos de testing aislada", "Corriendo pruebas E2E con Playwright"];
        for (let i = 0; i < 4; i++) {
          stations.forEach((s, j) => s.classList.toggle("on", j === i));
          if (i > 0) stations[i - 1].classList.add("done");
          status.textContent = say[i];
          if (i === 2) rollSuffix();
          await wait(i === 3 ? 400 : 1100, id);
        }
        const failAt = mode === "fail" ? 2 : -1;
        let failed = false;
        for (let i = 0; i < tests.length; i++) {
          tests[i].classList.add("run");
          await wait(750, id);
          tests[i].classList.remove("run");
          if (i === failAt) {
            tests[i].classList.add("ko");
            failed = true;
          } else tests[i].classList.add("ok");
        }
        stations[3].classList.add("done");
        stations.forEach((s, j) => s.classList.toggle("on", j === 4));
        root.classList.remove("is-running");
        root.classList.add(failed ? "is-fail" : "is-ok");
        status.textContent = failed
          ? "1 prueba falló → merge bloqueado · artefactos guardados 7 días"
          : "Todas las pruebas pasaron → merge habilitado";
        await wait(failed ? 6500 : 4500, id);
        if (auto) mode = mode === "fail" ? "ok" : "fail";
      }
    }
    function start() {
      run++;
      play(run).catch(() => {});
      clearInterval(randTimer);
    }
    btns.forEach((b) =>
      b.addEventListener("click", (e) => {
        e.stopPropagation();
        mode = b.dataset.mode;
        auto = false;
        start();
      }),
    );
    onSlideActive(
      slide,
      () => {
        auto = true;
        mode = "fail";
        start();
      },
      () => run++,
    );
  })();

  /* ---------- Contadores animados (data-count) ---------- */
  document.querySelectorAll("[data-count]").forEach((el) => {
    const slide = el.closest(".slide");
    const target = Number(el.dataset.count);
    let raf = null;
    onSlideActive(
      slide,
      () => {
        cancelAnimationFrame(raf);
        const t0 = performance.now() + (Number(el.dataset.delay) || 0);
        const tick = (t) => {
          const p = Math.max(0, Math.min(1, (t - t0) / 1100));
          el.textContent = String(Math.round(target * (1 - Math.pow(1 - p, 3))));
          if (p < 1) raf = requestAnimationFrame(tick);
        };
        el.textContent = "0";
        raf = requestAnimationFrame(tick);
      },
      () => cancelAnimationFrame(raf),
    );
  });

  /* ---------- Diapositiva 38: interruptor Antes / Ahora ---------- */
  (function () {
    const root = document.getElementById("be-impact");
    if (!root) return;
    const slide = root.closest(".slide");
    const btns = [...root.querySelectorAll(".be-switch button")];
    let timer = null;
    let state = "antes";
    function set(s) {
      state = s;
      root.dataset.state = s;
      btns.forEach((b) => b.classList.toggle("on", b.dataset.state === s));
    }
    function loop() {
      clearTimeout(timer);
      timer = setTimeout(() => {
        set(state === "antes" ? "ahora" : "antes");
        loop();
      }, state === "antes" ? 3200 : 6000);
    }
    btns.forEach((b) =>
      b.addEventListener("click", (e) => {
        e.stopPropagation();
        clearTimeout(timer);
        set(b.dataset.state);
      }),
    );
    onSlideActive(
      slide,
      () => {
        set("antes");
        loop();
      },
      () => clearTimeout(timer),
    );
  })();
})();

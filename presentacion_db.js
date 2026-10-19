/* ====================================================================
 DIAPOSITIVAS DE BASE DE DATOS (Elenio García) — líneas de relación
 --------------------------------------------------------------------
 .db-er                       contenedor del diagrama (grid)
   <svg class="db-link"        una relación entre dos cajas
        data-a="id" data-b="id"
        data-ca="1" data-cb="N"   cardinalidad junto a cada extremo
        data-label="texto"        etiqueta opcional al medio
        data-from / data-on>      los maneja el stepper de backend
 Recalcula el trazado al entrar a la diapositiva y al cambiar el tamaño.
 ==================================================================== */
(function () {
  const NS = "http://www.w3.org/2000/svg";

  // Usa offsetLeft/Top (ignora transform y zoom): las cajas son hijas directas de .db-er
  function box(el) {
    const l = el.offsetLeft;
    const t = el.offsetTop;
    return {
      l, t,
      r: l + el.offsetWidth,
      b: t + el.offsetHeight,
      cx: l + el.offsetWidth / 2,
      cy: t + el.offsetHeight / 2,
    };
  }

  function route(A, B, mode) {
    const GAP = 4;
    if (mode === "bus") {
      // baja desde A, recorre en horizontal y entra por arriba de B
      const my = (A.b + B.t) / 2;
      return { pts: [[A.cx, A.b + GAP], [A.cx, my], [B.cx, my], [B.cx, B.t - GAP]] };
    }
    const overlapY = Math.min(A.b, B.b) - Math.max(A.t, B.t);
    const overlapX = Math.min(A.r, B.r) - Math.max(A.l, B.l);
    if (overlapY > 18 && (B.l > A.r || B.r < A.l)) {
      const y = (Math.max(A.t, B.t) + Math.min(A.b, B.b)) / 2;
      const x1 = B.l > A.r ? A.r + GAP : A.l - GAP;
      const x2 = B.l > A.r ? B.l - GAP : B.r + GAP;
      return { pts: [[x1, y], [x2, y]] };
    }
    if (overlapX > 18 && (B.t > A.b || B.b < A.t)) {
      const x = (Math.max(A.l, B.l) + Math.min(A.r, B.r)) / 2;
      const y1 = B.t > A.b ? A.b + GAP : A.t - GAP;
      const y2 = B.t > A.b ? B.t - GAP : B.b + GAP;
      return { pts: [[x, y1], [x, y2]] };
    }
    // Codo: sale por el costado de A y entra por arriba/abajo de B
    const right = B.cx > A.cx;
    const x1 = right ? A.r + GAP : A.l - GAP;
    const y1 = A.cy;
    const down = B.cy > A.cy;
    const x2 = B.cx;
    const y2 = down ? B.t - GAP : B.b + GAP;
    return { pts: [[x1, y1], [x2, y1], [x2, y2]] };
  }

  function d(pts) {
    return pts.map((p, i) => (i ? "L" : "M") + p[0].toFixed(1) + " " + p[1].toFixed(1)).join(" ");
  }

  function along(pts, fromStart, dist, flip) {
    const a = fromStart ? pts[0] : pts[pts.length - 1];
    const b = fromStart ? pts[1] : pts[pts.length - 2];
    const len = Math.hypot(b[0] - a[0], b[1] - a[1]) || 1;
    const ux = (b[0] - a[0]) / len;
    const uy = (b[1] - a[1]) / len;
    // horizontal: número arriba de la línea · vertical: a la derecha
    const horiz = Math.abs(ux) > 0.5;
    const side = flip ? -1 : 1; // en relaciones cortas, un número de cada lado
    return [a[0] + ux * dist + (horiz ? 0 : 9 * side), a[1] + uy * dist + (horiz ? -7 * side + (flip ? 9 : 0) : 4)];
  }

  function middle(pts) {
    let total = 0;
    const segs = [];
    for (let i = 1; i < pts.length; i++) {
      const l = Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]);
      segs.push(l);
      total += l;
    }
    let half = total / 2;
    for (let i = 0; i < segs.length; i++) {
      if (half <= segs[i]) {
        const t = half / (segs[i] || 1);
        return [pts[i][0] + (pts[i + 1][0] - pts[i][0]) * t, pts[i][1] + (pts[i + 1][1] - pts[i][1]) * t];
      }
      half -= segs[i];
    }
    return pts[0];
  }

  function ensure(svg, tag, cls) {
    let el = svg.querySelector("." + cls);
    if (!el) {
      el = document.createElementNS(NS, tag);
      el.setAttribute("class", cls);
      svg.appendChild(el);
    }
    return el;
  }

  function drawER(er) {
    if (!er.offsetWidth) return;
    er.querySelectorAll("svg.db-link").forEach((svg) => {
      const a = er.querySelector("#" + svg.dataset.a);
      const b = er.querySelector("#" + svg.dataset.b);
      if (!a || !b) return;
      const { pts } = route(box(a), box(b), svg.dataset.route);
      const path = ensure(svg, "path", "db-ln");
      path.setAttribute("pathLength", "1");
      path.setAttribute("d", d(pts));
      ensure(svg, "path", "db-fl").setAttribute("d", d(pts));
      [["ca", true], ["cb", false]].forEach(([k, start]) => {
        if (!svg.dataset[k]) return;
        const t = ensure(svg, "text", "db-cd db-cd-" + k);
        const seg = Math.hypot(pts[1][0] - pts[0][0], pts[1][1] - pts[0][1]);
        const p = along(pts, start, 14, !start && pts.length === 2 && seg < 70);
        t.setAttribute("x", p[0].toFixed(1));
        t.setAttribute("y", p[1].toFixed(1));
        t.setAttribute("text-anchor", "middle");
        t.textContent = svg.dataset[k];
      });
      if (svg.dataset.label) {
        const g = ensure(svg, "g", "db-lb");
        const rect = g.querySelector("rect") || g.appendChild(document.createElementNS(NS, "rect"));
        const txt = g.querySelector("text") || g.appendChild(document.createElementNS(NS, "text"));
        txt.textContent = svg.dataset.label;
        const m = middle(pts);
        const last = pts[pts.length - 1];
        const prev = pts[pts.length - 2];
        if (Math.abs(last[1] - prev[1]) < 1) m[1] += 17; // en tramos horizontales va debajo de la línea
        const w = svg.dataset.label.length * 6.6 + 14;
        rect.setAttribute("x", (m[0] - w / 2).toFixed(1));
        rect.setAttribute("y", (m[1] - 10).toFixed(1));
        rect.setAttribute("width", w.toFixed(1));
        rect.setAttribute("height", "20");
        rect.setAttribute("rx", "10");
        txt.setAttribute("x", m[0].toFixed(1));
        txt.setAttribute("y", (m[1] + 4).toFixed(1));
        txt.setAttribute("text-anchor", "middle");
      }
    });
  }

  document.querySelectorAll(".db-er").forEach((er) => {
    const slide = er.closest(".slide");
    const redraw = () => requestAnimationFrame(() => drawER(er));
    if (window.ResizeObserver) new ResizeObserver(redraw).observe(er);
    window.addEventListener("resize", redraw);
    if (slide) {
      new MutationObserver(() => {
        if (slide.classList.contains("active")) {
          redraw();
          setTimeout(redraw, 120);
          setTimeout(redraw, 650);
        }
      }).observe(slide, { attributes: true, attributeFilter: ["class"] });
    }
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(redraw);
    redraw();
  });
})();

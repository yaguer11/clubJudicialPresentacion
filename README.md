# Presentacion Club Judicial



Presentacion web de la PPS del Club Judicial.



## Estructura



- `presentacion_pps.html`: archivo principal de la presentacion.

- `slides/`: carpeta con cada diapositiva separada en archivos `.js`.

- `slides/index.js`: archivo central que importa todas las diapositivas y exporta `slideDefinitions` y `speakerNotesData`.



## Como editar



1. Abri `presentacion_pps.html` para cambiar la estructura general, CSS o comportamiento global.

2. Para modificar el contenido de una diapositiva, editá el archivo correspondiente en `slides/slide-XX.js`.

3. Si queres cambiar el texto de las notas del orador, editá tambien el objeto `notes` dentro de la misma diapositiva.

4. Si agregas o quitas slides, actualizá el orden en `slides/index.js` para que queden importados correctamente.



## Ejecutar en local



Desde la carpeta del proyecto:



```bash
python -m http.server 8000
```



Luego abri en el navegador:



```text
http://localhost:8000/presentacion\_pps.html
```



## Deploy en GitHub Pages



La rama publicada es `gh-pages`. El flujo correcto es traer lo ultimo de `origin/main` a `gh-pages` y despues subir `gh-pages` al remoto.



Paso a paso:



1. Hacer los cambios en `main` y verificar que la presentacion funcione en local.

2. Asegurarte de que no haya cambios pendientes en el working tree.

3. Cambiar a la rama de publicacion:



```bash
git checkout gh-pages
```



4. Traer la informacion mas reciente del remoto:



```bash
git fetch origin
```



5. Mezclar `origin/main` dentro de `gh-pages`:



```bash
git merge origin/main
```



6. Si aparecen conflictos, resolverlos, agregar los archivos resueltos y terminar el merge:



```bash
git add .
git commit
```



7. Revisar que el contenido final en `gh-pages` sea el que queres publicar.

8. Subir `gh-pages` al remoto:



```bash
git push origin gh-pages
```



9. Esperar a que GitHub Pages termine de redeployar el sitio.



Comandos utiles para volver a publicar:



```bash

git checkout main
git pull origin main
git checkout gh-pages
git fetch origin
git merge origin/main
git push origin gh-pages

```



Si queres volver a publicar una version generada desde el contenido modular, primero regenerá los archivos correspondientes en `main`, asegurate de commitearlos, y despues repetí el merge de `origin/main` hacia `gh-pages` antes del push.


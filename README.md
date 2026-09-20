# Presentación Club Judicial

Presentación web de la PPS del Club Judicial.

## Estructura

- `presentacion_pps.html`: archivo principal de la presentación.
- `slides/`: carpeta con cada diapositiva separada en archivos `.js`.
- `slides/index.js`: archivo central que importa todas las diapositivas y exporta `slideDefinitions` y `speakerNotesData`.

## Cómo editar

1. Abrí `presentacion_pps.html` para cambiar la estructura general, CSS o comportamiento global.
2. Para modificar el contenido de una diapositiva, editá el archivo correspondiente en `slides/slide-XX.js`.
3. Si querés cambiar el texto de las notas del orador, editá también el objeto `notes` dentro de la misma diapositiva.
4. Si agregás o quitás slides, actualizá el orden en `slides/index.js` para que queden importados correctamente.

## Ejecutar

Desde la carpeta del proyecto:

```bash
python -m http.server 8000
```

Luego abrí en el navegador:

```text
http://localhost:8000/presentacion_pps.html
```

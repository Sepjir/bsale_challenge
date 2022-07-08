# DESAFIO BSALE

## DOCUMENTACION

### USO DE LA APLICACIÓN LOCAL

1. Usar dentro de la carpeta del proyecto `NPM INSTALL` en la terminal
2. Cambiar la constante `URL` que está dentro de la carpeta `public/index.js` a `http://localhost:5000/`
3. Iniciar el proyecto en la terminal con código `NPM RUN DEV`
4. iniciar navegador en la url [localhost:5000](http://localhost:5000/)

### USO EN DESPLIEGUE

La aplicación fue desplegada en `HEROKU` y su dirección es [https://bsale-devsafio.herokuapp.com/](https://bsale-devsafio.herokuapp.com/)

### INTERACCIÓN CON APLICACIÓN CLIENTE

* El `BUSCADOR` de productos tiene cargado el nombre de todos los productos de la base de datos, basta con elegir uno, clickear en el botón `BUSCAR` o dar `ENTER` luego de seleccionar la opción y se cargará el articulo abajo. 

* También permite escribir el nombre del producto lo que acota la lista desplegada.

* El botón de `Categorías`, al pinchar en el se desplegarán las categorías disponibles en la `BD` y al hacer `Click` en alguna de ellas, cargará los productos pertenecientes a esa categoría en especifico.

* Más abajo la aplicación por defecto tiene una paginación, que contiene el resto de los productos de la `BD` de Bsale, al hacer click en cada botón mostrará los productos correspondientes a cada página, la cual está separada de 10 en 10 `PRODUCTOS` la página final (6) contiene únicamente 7 de estos.

### INTERACCIÓN CON BACKEND

* En el `Backend` se han dejado de forma pública algunos end-points tales como:

> ```api/v1/products ---> muestra los primeros 10 productos de la BD añadiendo mediante INNER JOIN el nombre de su categoría```
> ```api/v1/products/all ---> Muestra todos los productos de la BD añadiendo mediante INNER JOIN el nombre de su categoría```
> ```api/v1/products?page=numero ---> Dirige a cada paginación de productos de la BD (sólo se muestran 10 por cada página), el "numero" deberá ser mayor a 0 y sólo un número```
> ```api/v1/categories ---> Muestra todas las categorías de la BD```



# Quick Order

Este proyecto tiene como objetivo poder realizar una compra rapida de un producto desde la tienda Easy con el numero de SKU del producto, de igual forma este proyecto hace parte de los Custom Component del tema base de: [Store Theme Easy](https://github.com/Maikyjar/store-theme-easy).

![imagen](quickOrderpng.png)

# Configuraciones

### Paso 1 - Configuración Básica

Para iniciar con el desarrollo de este proyecto, inicialmente debes instalar un editor de codigo, ademas de tener instalado Git y Git Bash, ademas de realizar la instalacion y configuracion del CLI de VTEX IO.

### Paso 2 - Clonación del repositorio

Estando en este repositorio te dirijes a la parte superior derecha das click en "Code", copias la direccion HTTPS, te dirijes al directorio o carpeta de tu computador en donde deseas colocar el proyecto, con click izquierdo seleccionas "Git Bash here" y despues escribes el comando: git clone "y pegas la direccion que copiaste anteriormente".

### Paso 3 - Editar el Manifest.json

En el Manifest.json debes cambiar el nombre del vendor por el correspondiente, colocar el nombre de preferencia a la aplicacion y de ser necesario cambiar la version.

### Paso 4 - Instalar apps necesarias

Debe estar instalado y ejecutandose el tema base de la tienda el cual cuenta con la documentacion para estos procesos, Todas las apps necesarias para el inicio del proyecto se van a instalar en el momento que se realice el link de la aplicacion lo unico es verificar que el vendor corresponda al partner habilitado ya que se va a realizar la respectiva autenticacion en el momento de la ejecuccion del proyecto.

### Paso 5 - Ejecute un preview de la tienda

Por ultimo procedemmos a colocar el comando `vtex link` en nuestra consola estando en la raiz del proyecto, ya con este proceso se debe mostrar el custom component en el tema base.

### Dependencies
1. Store-theme
2. Store GraphQl

### Store Component Apps nativas VTEX IO

```json
    "vtex.checkout-graphql": "0.x",
    "vtex.search-graphql": "0.x"
```

Contributors
1. Michael Alvarez.

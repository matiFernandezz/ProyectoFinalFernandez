# Proyecto Final de React JS de CoderHouse

Soy Matias Fernandez y vengo a presentarles mi proyecto "MF Gamer". El mismo es un eCommerce de componentes de computadoras, el cual está desarrollado utilizando React con JavaScript y me permite ver una plataforma para comprar una variedad de componentes gamers. 

## Tabla de Contenidos

1. [Instalación](#instalación)
2. [Uso de la App](#uso)
3. [Características principales](#características)
4. [Tecnologías Implementadas](#tecnologías-utilizadas)
5. [Componentes](#componentes)
    - [App](#app)
    - [NavBar](#navbar)
    - [ItemListContainer](#itemlistcontainer)
    - [ItemDetailContainer](#itemdetailcontainer)
    - [Cart](#cart)
    - [CartContext](#cartcontext)
    - [Checkout](#checkout)
    - [Footer](#footer)
    - [Page](#page)
6. [Deploy y Visualización](#deploy)

## Instalación

1. Clona este repositorio: `git clone https://github.com/matiFernandezz/ProyectoFinalFernandez`
2. Ve al directorio del proyecto: `cd ProyectoFinalFernandez`
3. Instala las dependencias: `npm install`
4. Inicia la aplicación: `npm run dev`

## Uso de la App
Una vez instalado e iniciado el proyecto, podrás ver la página web MF Gamer. En la cual vas a poder navegar por la tienda de componentes gamer, buscar por categoria, ver el detalle de cada componente, agregar productos al carrito y generar una compra desde el carrito. 

## Características

- Filtrado de componentes de computadoras por categoria.
- Funcionalidad de carrito de compra para agregar y eliminar productos.
- Proceso de Checkout, ingreso de datos en un formulario y generacion de la compra.
- Comunicación con Firebase, colección de productos y ventas.

## Tecnologías Implementadas
He implementado una gran variedad de tecnologías con el propósito de generar una plataforma que ofrezca una experiencia de compra fluida y tambíen que sea atractiva. A continuación detallaré las principales tecnologías utilizadas en el proyecto "MF Gamer": 

- [React](https://reactjs.org/): Una biblioteca de JavaScript para construir interfaces de usuario.
- [React Router](https://reactrouter.com/): Un enrutador para aplicaciones React que permite la navegación declarativa y basada en componentes.
- [Firebase](https://firebase.google.com/): Una plataforma que me ofrece la posibilidad de generar una Base de Datos, en la cual he agregado todos los productos disponibles.
- [Ant Design](https://ant.design/): Una biblioteca de componentes de IU para React que ofrece una amplia gama de componentes listos para usar.
- [React Toastify](https://fkhadra.github.io/react-toastify/introduction): Una biblioteca que  e permite mostrar notificaciones estilo toast en aplicaciones React.
- [Tailwind CSS](https://tailwindcss.com/): Un marco de trabajo CSS utilitario que permite construir rápidamente interfaces de usuario personalizadas.
- [Bootstrap](https://getbootstrap.com/): Un framework que permite construir páginas web responsives de una forma más rápida y sencilla.
- [Lucide-React](https://lucide.dev/guide/packages/lucide-react): Es una biblioteca de iconos de código abierto diseñada para ser simple y fácil de usar. 

Cabe destacar que cada una de estas bibliotecas y herramientas tienen su propio proceso de instalación, los cuales estan detallados en cada una de sus páginas principales.

---

## Componentes

A continuación dejo una breve explicación de cada componente creado y utilizado en este proyecto.

### App

El componente `App` es el componente principal de la aplicación. Utiliza React Router (`BrowserRouter`, `Routes`, `Route`) para manejar la navegación entre diferentes páginas de la aplicación. A continuación, se describen los componentes principales utilizados en `App`:

### Header
El componente `Header` solo se utiliza para alojar el componente `NavBar`, lo he implementado a modo de dar un mejor orden al código.

### NavBar
El componente `NavBar` representa la barra de navegación superior de la aplicación. A continuación se describen sus características principales:

- **Logo**: Muestra el nombre de la tienda con un enlace a la página principal.
- **Menú de Navegación**: Proporciona enlaces a diferentes secciones de la tienda que actúan como filtro. Estas secciones son: Productos (va a la página principal), Procesadores, Monitores y Periféricos. Estos enlaces utilizan el componente NavLink de React Router para la navegación.
- **Carrito**: Muestra un icono de carrito de compras y utiliza el componente CartWidget para gestionar el contenido del carrito. A su vez, utiliza el componente Link de React Router que hace que cuando lo toquemos nos movilizamos hacia la página del carrito.
- **Navegacion Responsive**: Implemente la funcionalidad de un menu hamburgesa cuando la pantalla es mas chica que 768px.

### Main
Este componete lo he utilizado para generar todas los links para navegar por la página. Es donde se van a alojar todos los componentes que voy a mencionar a continuacion, exceptuando el Footer.

### ItemListContainer 
Este componente muestra una lista de productos disponibles para la venta. A continuación se describen sus características principales:
- **Consulta a Firebase**: Utiliza Firebase para obtenerlos datos de los productos desde una colección en la basede datos. Dependiendo del parámetro de URL `categoria`, se filtran los productos por categoria.
- **Renderizado Condicional**: Muestra la lista de productos utilizando el componente `ItemList` cuando los datos están disponibles.

### ItemDetailContainer 
Este componente muestra los detalles de un producto específico. Recibe un `itemId` como parámetro de URL y muestra la información detallada del producto, como su nombre, precio y descripción:
- **Consulta a Firebase**: Utiliza Firebase para obtener los datos de un producto específico desde la base de datos.
- **Renderizado Condicional**: Muestra los detalles del producto utilizando el componente `ItemDetail` cuando losdatos están disponibles.

### Cart 
El componente `Cart` muestra el contenido del carrito de compras. Permite al usuario ver los productos que ha agregado al carrito y realizar acciones como eliminar productos y proceder al proceso de Finalizar compra.
- **Gestión de Carrito**: Utiliza el contexto de`CartContext` para acceder al estado del carrito, incluidos los productos agregados, la cantidad total y el precio total, junto con algunas funciones como agregar productos, eliminar productos y vaciar carrito.
- **Renderizado Condicional**: Muestra los productos en el carrito utilizando el componente `CartItem`. Si el carrito está vacío, muestra un mensaje indicando que el carrito está vacío y un enlace para volver a la tienda.
- **Acciones de Carrito**: Permite al usuario eliminar productos del carrito y proceder al proceso de pago con el botón "Ir a Pagar". 

### CartContext
Este componente proporciona un contexto para gestionar el estado del carrito de compras en toda la aplicación.
- **Contexto de Carrito**: Utiliza el contexto de React para compartir el estado del carrito entre componentes en diferentes partes de la aplicación.
- **Estado del Carrito**: Utiliza el estado local para almacenar la lista de productos en el carrito, la cantidad total de productos y el precio total de la compra.
- **Funciones de Carrito**: Proporciona funciones para agregar, eliminar y vaciar elementos del carrito. Además, verifica si un producto ya está en el carrito antes para impedir agregarlo nuevamente. Ademas he implementado la interaccion con el usuario a traves de react-toastify para mostrar notificaciones cuando se agregan o eliminan productos.


### Checkout
El componente `Checkout` representa la página de pago de la aplicación. Permite al usuario ingresar su información de contacto y completar la compra de los productos en su carrito.
- **Pago**: Permite al usuario ingresar su información de contacto para completar la compra a traves del componente `CheckoutForm`. Por el momento no se incorpora metodos de pago.
- **Gestión de Estado**: Utiliza el estado local para gestionar el estado de carga y el ID de la compra generada.
- **Creación de Venta**: Utiliza Firebase para crear una nueva venta en la base de datos. Verifica que los objetos en el carrito tengan los campos necesarios antes de proceder con la compra.



### Footer 
El componente `Footer` representa el pie de página de la aplicación. Lo he implementado utilizando un diseño simple, muestra un mensaje sobre derechos de autor con mi nombre y año actual.



---
## Deploy
Para realizar el Deploy de mi proyecto "MF Gamer" he utilizado el repositorio de Vercel, el cual permite visualizar la página a traves del siguiente link:
**Link:**
[Proyecto Final ReactJS](https://proyecto-final-fernandez-iota.vercel.app/)

### Capturas de imágenes:

#### Pantalla Principal
![Captura Principal](/src/multimedia/PaginaPrincipal.png)
#### Detalle de Producto
![Captura Detalle](/src/multimedia/CapturaDetalle.png)
#### Carrito de Compras
![Captura Carrito](/src/multimedia/CapturaCarrito.png)
#### Checkout
![Captura Checkout](/src/multimedia/CapturaCheckOut.png)
#### Compra Finalizada
![Compra Finalizada](/src/multimedia/CapturaCompra.png)
#### Carrito Vacío
![Carrito Vacio](/src/multimedia/CapturaCarritoVacio.png)

---
*© 2024 - Matias Fernandez. Todos los derechos reservados.*
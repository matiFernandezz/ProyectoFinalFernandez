const productos = [
    {id:"1", nombre:"AMD Ryzen 5 5600G", imagen: "https://app.contabilium.com/files/explorer/20302/Productos-Servicios/concepto-6214868.jpeg" , categoria:"Procesador", precio:201530, stock:10},
    {id:"2", nombre:"Intel Core i7 12700F",imagen: "https://fullh4rd.com.ar/img/productos/1/micro-intel-core-i7-12700-cvideo-ccooler--barato-q-12700f-0.jpg" , categoria:"Procesador", precio:432999, stock:5},
    {id:"3", nombre:"AMD Ryzen 7 5800X",imagen: "https://mexx-img-2019.s3.amazonaws.com/procesador-cpu-ryzen_40369_1.jpeg?v252?v348?v928" ,categoria:"Procesador", precio:360000, stock:3},
    {id:"4", nombre:"Monitor Samsung 27",imagen: "https://images.fravega.com/f500/32397e21c5240c13f2d32ad3842cd3e8.jpg", categoria:"Monitor", precio:219900, stock:7},
    {id:"5", nombre:"Monitor Samsung 24 Curvo" ,imagen: "https://fullh4rd.com.ar/img/productos/18/monitor-24-samsung-cf390-curvo-freesync-0.jpg" ,categoria:"Monitor", precio:261500, stock:8},
    {id:"6", nombre:"Monitor Gamer LG 27",imagen: "https://fullh4rd.com.ar/img/productos/18/monitor-lg-27-gamer-27gl650f-full-hd-144hz-0.jpg" ,categoria:"Monitor", precio:355900, stock:9},
    {id:"7", nombre:"Teclado Mecanico Redragon", imagen: "https://acdn.mitiendanube.com/stores/001/329/380/products/61dtr681tl-_ac_ss450_1-01e514b62c2869abea16482455101434-640-0.jpg" ,categoria:"Periferico", precio:39130, stock:15},
    {id:"8", nombre:"Auriculares Redragon", imagen: "https://mexx-img-2019.s3.amazonaws.com/Auricular-Gamer-Redragon-Zeus-H510-Rgb_41187_1.jpeg" ,categoria:"Periferico", precio: 21999, stock:20},
    {id:"9", nombre:"Mouse Redragon", imagen: "https://s3-sa-east-1.amazonaws.com/saasargentina/js5YAR90pHrt0Vvo5kCB/imagen" ,categoria:"Periferico", precio: 25740, stock:13}
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos)
        }, 1000)
    })
}

export const getProductosPorId = (productoId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos.find(prod => prod.id === productoId))
        },1000)
    })
}

export const getProductosPorCategoria = (categoria) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos.filter(prod => prod.categoria === categoria))
        }, 1000)
    })
}
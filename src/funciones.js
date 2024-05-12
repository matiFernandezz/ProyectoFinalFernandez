import { collection, getDoc, getDocs, doc, getFirestore, query, where, addDoc } from "firebase/firestore";
import { app } from "./firebase.js";

export const getProducts = () => {
    const bd = getFirestore(app);

    const productsCollection = collection (bd, "products");

    const query = getDocs(productsCollection);
    return query 
      .then((resultado)=>{
      const products = resultado.docs.map((doc)=>{
        const product = doc.data();
        product.id = doc.id;
        return product});

      return products;
    })
      .catch((error)=>{
      console.log(error);
    })
}




export const getProductsByCategory = (categoria) => {
    const bd = getFirestore(app);

    const productsCollection = collection (bd, "products");
    const filter = query(productsCollection, where("categoria", "==", categoria));

    const consulta = getDocs(filter);
    return consulta 
      .then((resultado)=>{
      const products = resultado.docs.map((doc)=>{
        const product = doc.data();
        product.id = doc.id;
        return product});

      return products;
    })
      .catch((error)=>{
      console.log(error);
    })
}

export const getItemsDetail = (id) => {
  const bd = getFirestore(app);
  const productsCollection = collection (bd, "products");
  const filtro = doc(productsCollection, id)
  const consulta = getDoc(filtro)
  
  return consulta
    .then((respuesta) => {
      const producto = respuesta.data()
      producto.id = respuesta.id
      return producto
    })
    .catch((error) => {
      console.log(error);
    })
}

export const crearVenta = () => {
  const bd = getFirestore(app);
  const salesCollection = collection (bd, "ventas");
}
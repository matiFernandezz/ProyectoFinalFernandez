import { useState, useEffect } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { getProducts, getProductsByCategory } from '../funciones.js';






const ItemListContainer = ({greeting})=> {

  const [productos, setProductos] = useState([]);
  
  
  const {categoria} = useParams();
  
  useEffect(() => {
    
    if(categoria){
      getProductsByCategory(categoria) 
      .then(resultado=>{
      setProductos(resultado);
    })
    }else {
      getProducts()
      .then(resultado => {
      setProductos(resultado);
      })
     }
    }, [categoria]);
  
 

  return (
    <div>
        <h1 className="text-xl font-bold p-3">{greeting}</h1>
        <ItemList productos={productos} className="grid grid-cols-3 gap-10  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 " />
    </div>
  )
}

export default ItemListContainer
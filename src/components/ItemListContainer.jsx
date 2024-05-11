import { useState, useEffect } from 'react';
import { getProductos, getProductosPorCategoria } from '../asyncMock.jsx';

import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
const ItemListContainer = ({greeting})=> {
  const [productos, setProductos] = useState([]);
  
  const {categoria} = useParams();
  
  useEffect(() => {
    const asyncFunc = categoria ? getProductosPorCategoria : getProductos;
    asyncFunc(categoria)
    .then(data =>{
      setProductos(data);
      
  })
    .catch(error => 
      console.log(error));
  }, [categoria]);

  return (
    <div>
        <h1 className="text-xl font-bold p-3">{greeting}</h1>
        <ItemList productos={productos} className="grid grid-cols-3 gap-10  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3" />
    </div>
  )
}

export default ItemListContainer
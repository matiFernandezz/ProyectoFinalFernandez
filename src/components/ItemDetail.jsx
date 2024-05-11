import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";

const ItemDetail = ({id, nombre, imagen, categoria, precio,stock})=> {
    const [quantityAdded, setQuantityAdded] = useState(0);
    const { addItem } = useContext(CartContext);

  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity);
    
    const item = {
      id, nombre, precio, imagen
    }

    addItem(item, quantity);
  }
    
    return (
        <article className="card bg-orange-300 shadow-sm" style={{width: '25rem'}}>
        <header>
            <h2 className="font-bold p-2">
                {nombre}
            </h2>
        </header>
        <picture >
            <img src={imagen} alt={nombre} className="card-img-top"/>
        </picture>
        <section>
            <p>
                Categoría: {categoria}
            </p>
            <p >
                Precio: ${precio}
            </p>
            <p>
                Stock: {stock}
            </p>
        </section>
        <footer>
        <div className='p-3 flex justify-center align-center'>
        {
          quantityAdded > 0 ? (
            <Link to={"/cart"} className=" btn btn-warning">Finalizar Compra</Link>
          ) : (
            <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
          )
        }
      </div>

        </footer>
    </article>
    )
}

export default ItemDetail
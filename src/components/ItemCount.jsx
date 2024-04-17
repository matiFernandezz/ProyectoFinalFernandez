import { useState } from "react";
import { Button } from "antd";




const ItemCount = ({initial, stock, onAdd}) => {
    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if(quantity < stock){
            setQuantity(quantity + 1)
        }
    }

    const decrement = () => {
        if(quantity > 1){
            setQuantity(quantity - 1)
        }
    }

    return(
        <div>
            <div className="flex justify-between align-center p-3">
                <Button type="bg-orange-400 hover:bg-orange-500" onClick={decrement} shape="circle">-</Button>
                <h4>{quantity}</h4>
                <Button type="bg-orange-400 hover:bg-orange-500" onClick={increment} shape="circle">+</Button>
            </div>
            <div>
                <Button type=" bg-orange-400 hover:bg-orange-500" onClick={() => onAdd(quantity)} disabled={!stock}>Agregar al carrito</Button>
            </div>
        </div>
    )
}

export default ItemCount;
import { Button } from "antd"
import { useContext } from "react"
import { CartContext } from "../context/CartContext"

const CartItem = ({ id, nombre, precio, imagen, quantity }) => {
    const { removeItem } = useContext(CartContext)

    return(
       <tr className="card mt-3 bg-orange-200 shadow-sm d-flex flex-row justify-content-between align-items-center">
        <td>
        <img src={imagen} alt={nombre} height={150} width={150} className="rounded-lg"/>
        </td>
        <td>
            <h3 className="font-semibold">
                        {nombre}
            </h3>
            <p>Precio: ${precio}</p>
            <p>Cantidad: {quantity}</p>
        </td>
        <td >
            <h3 className="font-semibold">
                SubTotal: ${precio * quantity}
            </h3>
        </td>
        <td className="pr-3">
            <Button onClick={() => removeItem(id)} danger ghost>Eliminar</Button>
        </td>
       </tr>
    )
}

export default CartItem;
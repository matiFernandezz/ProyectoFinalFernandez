import { useContext } from "react"
import {Link} from "react-router-dom"
import { CartContext } from "../context/CartContext"
import CartItem from "./CartItem"
import { Button } from "antd"


const Cart = () => {
    const { cart, clearCart, totalQuantity, total} = useContext(CartContext)

    if(totalQuantity === 0){
        return(
            <>
                <div className="flex flex-col justify-center items-center mt-6">
                    <h1 className="text-White font-semibold text-3xl">UPS! Su carrito está vacío</h1>
                </div>
                <div className="flex flex-col justify-center items-center mt-6">
                <Button><Link to="/" className="text-White">Seguir buscando</Link></Button>
                </div>
            </>
        )
    }

    return(
        <>  
            
            {cart.map(products => <CartItem key={products.id} {...products} className="group relative"/>)}
            <div className="m-3 d-flex justify-content-end">
                <Button type="primary" danger onClick={() => clearCart()}>Vaciar carrito</Button>
            </div>
            <div className="m-3 d-flex justify-end ">
            <h3 className="font-semibold text-2xl pr-3">Total: ${total}</h3>
            <Link to='/checkout' className="btn bg-orange-300 shadow-md hover:bg-orange-400">Ir a pagar</Link>
            </div>
        </>
    )
}

export default Cart;
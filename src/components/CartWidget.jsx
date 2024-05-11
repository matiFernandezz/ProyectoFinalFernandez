import { ShoppingCart } from "lucide-react"
import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { Link } from "react-router-dom"

function CartWidget() {
  const {totalQuantity} = useContext (CartContext)
  return (
    <div className="flex items-center ">
    <Link to="/cart" className="btn bg-orange-300 hover:bg-orange-300 position-relative flex ">
      <ShoppingCart className="pr-2" />
      
      {totalQuantity}
      
    
    </Link>
    
    </div>
  )
}

export default CartWidget
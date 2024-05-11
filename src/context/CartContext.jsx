import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const CartContext = createContext({
    cart: [],
    totalQuantity: 0,
    total: 0,
    addItem: () => {},
    removeItem: () => {},
    clearCart: () => {},
})

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const [totalQuantity, setTotalQuantity] = useState(0);
    const [total, setTotal] = useState(0);
    console.log(cart);
    const addItem = (item, quantity) => {
        if (!isInCart(item.id)){
            toast.success("El producto fue agregado al carrito")
            setCart(prev => [...prev, {...item, quantity}]);
            setTotalQuantity(prev => prev + quantity);
            setTotal(prev => prev + item.precio * quantity);
        }else{
            toast.error ("El producto ya fue agregado")
        }
    }

    const removeItem = (itemId) => {
        const cartUpdated = cart.filter(prod => prod.id !== itemId);
        setCart(cartUpdated);
        setTotalQuantity(prev => prev - cart.find((prod) => prod.id === itemId).quantity);
        setTotal(prev => prev - cart.find((prod) => prod.id === itemId).precio * cart.find((prod) => prod.id === itemId).quantity);
        
    }

    const clearCart = () => {
        setCart([]);
        setTotalQuantity(0);
        setTotal(0);
        console.log("se vacio el carrito");
    }

    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId)
    }

    return (
        <CartContext.Provider value={{cart, addItem, removeItem, clearCart, totalQuantity, total}}>
            {children}
        </CartContext.Provider>
    )
}
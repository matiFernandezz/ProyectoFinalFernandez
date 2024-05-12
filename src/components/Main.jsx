import ItemListContainer from "./ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer";
import Cart from "./Cart";
import { Route, Routes } from "react-router-dom";
import Checkout from "./CheckOut";

function Main(){
    return (
        <main className='p-4 grow '>
           
           <Routes>
               <Route path="/" element={<ItemListContainer greeting={"BIENVENIDO A NUESTRA TIENDA"}/>}/>
               <Route path="/categoria/:categoria" element={<ItemListContainer />}/>
               <Route path="/item/:itemId" element={<ItemDetailContainer/>}/>
               <Route path="/cart" element={<Cart/>} />
               <Route path="/checkout" element={<Checkout/>} />
               <Route path="*" element= {<h1>404 NOT FOUND</h1>}/>
           </Routes>
        </main>
    )
}

export default Main;
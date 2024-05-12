import { BrowserRouter } from "react-router-dom";
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Main from './components/Main.jsx';
import { CartProvider } from "./context/CartContext.jsx";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import  './App.css'


function App() {
  

  return (
    <BrowserRouter>
      <CartProvider>
      <Header> </Header>
      <Main></Main>
      <Footer></Footer>
      </CartProvider>
      <ToastContainer />
    </BrowserRouter>
  )
}

export default App

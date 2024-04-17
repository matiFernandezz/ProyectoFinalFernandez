import { BrowserRouter } from "react-router-dom"
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Main from './components/Main.jsx'
import  './App.css'


function App() {
  

  return (
    <BrowserRouter>
       
      <Header> </Header>
      <Main></Main>
      <Footer></Footer>
      
    </BrowserRouter>
  )
}

export default App

import {useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail.jsx"
import { getItemsDetail } from "../funciones.js"


const ItemDetailContainer = () => {

    const [producto, setProducto] = useState(null)

    const {itemId}=useParams()

    useEffect(() => {
       /* getProductosPorId(itemId)
        .then(data => {
            setProducto(data)})
        .catch (error => {
            console.log(error)
        })
        */
       getItemsDetail(itemId)
            .then(resultado => {
                setProducto(resultado)
            })
    

    }, [itemId])
    
    return(
        <div className="flex justify-center p-4">
             <ItemDetail {...producto}/>
             
        </div>
    )

}

export default ItemDetailContainer
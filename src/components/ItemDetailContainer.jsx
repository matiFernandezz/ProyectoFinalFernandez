import {useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getProductosPorId } from "../asyncMock"
import ItemDetail from "./ItemDetail.jsx"


const ItemDetailContainer = () => {

    const [producto, setProducto] = useState(null)

    const {itemId}=useParams()

    useEffect(() => {
        getProductosPorId(itemId)
        .then(data => {
            setProducto(data)})
        .catch (error => {
            console.log(error)
        })

    }, [itemId])
    
    return(
        <div className="flex justify-center">
             <ItemDetail {...producto}/>
             
        </div>
    )

}

export default ItemDetailContainer
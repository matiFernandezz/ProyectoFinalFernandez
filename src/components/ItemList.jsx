import Item from "./Item.jsx"

const ItemList = ({productos}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {productos.map(producto => <Item key={producto.id} {...producto}/>)}
    </div>
  )
}

export default ItemList
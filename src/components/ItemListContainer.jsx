function ItemListContainer(props) {
  return (
    <div>
        <h1 className="text-xl font-bold">{props.greeting}</h1>
        <p className="text-s">Próximamente, mostraremos todos los productos que venderemos...</p>
    </div>
  )
}

export default ItemListContainer
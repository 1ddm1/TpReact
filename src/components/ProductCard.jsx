
function ProductCard ({producto,onAddToCart}){
  return (

    <div className="product-card">
        <img src={producto.src} alt={producto.nombre} />
        <h3>{producto.nombre}</h3>
        <p>${producto.precio}</p>
        <button onClick={() => onAddToCart(producto)}>
        Agregar al Carrito
        </button>
    </div>
  )
}

export default ProductCard

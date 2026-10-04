import { productos } from "../../productos.js";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useCarrito } from "../components/CarritoContext.jsx";

function ProductList() {
  const { agregarAlCarrito } = useCarrito();

  return (
    <div className="product-grid" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
      {productos.map((producto) => (
        <Card className="product-card" key={producto.id} style={{ width: '18rem' }}>
          
          <Card.Img 
            variant="top" 
            src={producto.imagen} 
            alt={producto.nombre} 
            style={{ height: '200px', objectFit: 'contain', padding: '10px' }}
          />
          
          <Card.Body className="d-flex flex-column">
           
            <Card.Title>{producto.nombre}</Card.Title>
            <Card.Text style={{ flexGrow: 1 }}>
              {producto.descripcion}
            </Card.Text>
            
           
            <Card.Text className="fw-bold fs-5">
              ${producto.precio}
            </Card.Text>
            
            
            <Button 
              variant="primary" 
              onClick={() => agregarAlCarrito(producto)}
            >
              Agregar al carrito
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}


export default ProductList

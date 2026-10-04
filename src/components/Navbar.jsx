import logo from '../assets/logo/logo.png'
import "../styles/Nav.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Button from 'react-bootstrap/Button';
import { useCarrito } from "../components/CarritoContext.jsx";
import {Link} from "react-router-dom";

function Navigation() {
 
  const { carrito, vaciarCarrito, agregaralCarrito } = useCarrito();

  
  const disminuirCantidad = (item) => {
    if (item.cantidad > 1) {
      const updatedItem = { ...item, cantidad: item.cantidad - 1 };
      agregaralCarrito(updatedItem);
    }
  };

  return (
    <div>
      <nav className="Navbar">
        <div className="menu-container">
          <Link to="/Home" className="logo-link">
            <img src={logo} alt="Logo" className="logo-img" />
          </Link>
          <ul className="menu">
            <li><Link to="/Home" className="link">Inicio</Link></li>
            <li><Link to="/about" className="link">Nosotros</Link></li>
            <li><Link to="/productList" className="link">Productos</Link></li>
            <li><Link to="/contacto" className="link">Contacto</Link></li>
          </ul>
        </div>
     
        <div className="submenu">
          <ul>
            <li>
              <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
              {carrito.length > 0 && <span className="cart-count">{carrito.length}</span>}
              
              <div id="carrito">
                <table id="lista-carrito">
                  <thead>
                    <tr>
                      <th>Producto</th>
                      <th>Precio</th>
                      <th>Cantidad</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {carrito.length === 0 ? (
                      <tr>
                        <td colSpan="4" className="text-center py-3">El carrito está vacío</td>
                      </tr>
                    ) : (
                      carrito.map(item => (
                        <tr key={item.id}>
                          <td className="fw-bold">{item.nombre}</td>
                          <td>${item.precio}</td>
                          <td>
                            <div className="d-flex justify-content-center align-items-center gap-2">
                              <Button 
                                variant="outline-secondary" 
                                size="sm"
                                disabled={item.cantidad <= 1}
                                onClick={() => disminuirCantidad(item)}
                              >
                                -
                              </Button>
                              <span className="fw-semibold px-2">{item.cantidad}</span>
                              <Button 
                                variant="outline-secondary" 
                                size="sm"
                                onClick={() => agregaralCarrito(item)} // Reutiliza tu función que suma +1
                              >
                                +
                              </Button>
                            </div>
                          </td>
                          
                          {/* Subtotal del ítem */}
                          <td>${item.precio * item.cantidad}</td>
                          
                          {/* Botón de eliminación */}
                          <td className="text-center">
                            <Button 
                              variant="danger" 
                              size="sm"
                              onClick={() => {/* aquí irá tu función para eliminar */}}
                            >
                              Eliminar
                            </Button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
                
                {/* 3. CONECTaDO: Vinculamos la función vaciarCarrito al botón */}
                <Button 
                  variant="secondary" 
                  size="sm" 
                  onClick={vaciarCarrito} 
                  id="vaciar-carrito"
                  disabled={carrito.length === 0}
                >
                  Vaciar Carrito
                </Button>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navigation;


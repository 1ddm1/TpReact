import "../styles/Nav.css"
  
function Footer() {

  return (
  <div>
        <nav className="Navbar">
          <div className="menu-container">
           
            <ul className="menu">
              <li><a href="/Home" className="link">Inicio</a></li>
              <li><a href="/about" className="link">Nosotros</a></li>
              <li><a href="/productList" className="link">Productos</a></li>
              <li><a href="/contacto" className="link">Contacto</a></li>
            </ul>
          </div>
              <div className="media">
              <i className="fa-brands fa-facebook"></i> <a href="https://www.facebook.com/KioFriedChicken" target="_blank" rel="noopener noreferrer"></a>
              <i className="fa-brands fa-instagram" /> <a href="https://www.instagram.com/kiofriedchicken/" target="_blank" rel="noopener noreferrer"></a>
              <i className="fa-brands fa-tiktok" /> <a href="https://www.tiktok.com/@kiofriedchicken" target="_blank" rel="noopener noreferrer"></a>
            </div>
            </nav>
          <p> 2026 Kio-Fried Chicken, Inc. Todos los derechos reservados.</p>
  
     </div>
  )
}

export default Footer;

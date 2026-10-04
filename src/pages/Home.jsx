import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import hamburguesa from '/images/pollo_hamburguesa.png';
import pollo_1 from '/images/pollo_1.png'
import pollo_gangnam from '/images/pollo_gangnam.png'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';


function Home() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
    
    <div className="hero">
            <h1 className="title">KIO</h1>
            <h2 className="subtitle">El Mejor Pollo Frito</h2>
            <h3 className="description">Disfruta de un riquisimo pollo frito al mejor estilo coreano, sandwiches, alitas,buckets y mucho mas. </h3>
           
                <Button className="btn-hero" href="/productList">
                  Hace tu pedido
                </Button>
                <Button className="btn-hero" href="/contacto">
                  Contactanos
                </Button> 
        </div>
       
    <div className="div-carousel">
      <Carousel className='carousel' activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img 
        src={pollo_1}
        alt="First Slide"
        />
        <Carousel.Caption>
          <h3>Conoce nuestras promos</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img 

        src={hamburguesa}
        alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Hamburguesas</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
             <img 
                
                src={pollo_gangnam}
                alt="Third slade"
              />
               <Carousel.Caption>
          <h3>Sabores unicos</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      <Container className="container-carousel" fluid="md">
      </Container>
    </div>
    <div className="contact-container">
      <div className="contact-content">
      <h2 className="subtitulo">Encontranos</h2>
      <div className="contact-section">
        <ul className="contact-infoList">
          <li className="contact-info">
            <i class="fa-solid fa-map"></i><i>158 Av.Corrientes, Corrientes,Corrientes.</i>
          </li>
          <li  className="contact-info">
            <i></i>
          </li>
          <li  className="contact-info">
            <i className="fa-solid fa-shop"></i><i>Martes-Domingo: 11:00 a 14:00 y 19:00 a 01:00 HRS</i>
          </li>
          <li  className="contact-info">
            <i className="fa-solid fa-shop-slash"></i><i>Lunes: Cerrado</i>
          </li>
          <li className="contact-info">
            <i className="fa-solid fa-at"></i> <i>contacto@mailKio.com</i>
          </li>
        </ul>
        </div>
        </div>
    
         <div className="social-media">
        <h2 className="subtitulo">Nuestras Redes</h2>  
        <ul className="social-media-links">
          <li className="social-media-info">
            <i className="fa-brands fa-facebook" /> <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          </li>
          <li className="social-media-info">
            <i className="fa-brands fa-instagram" /> <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          </li>
          <li className="social-media-info">
            <i className="fa-brands fa-tiktok" /> <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">Tiktok</a>
          </li>
        </ul>
    </div>
    </div>
    </div>
  );
}


export default Home

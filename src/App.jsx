import{BrowserRouter,Route,Routes}from"react-router-dom";
import Inicio from "./pages/Home";
import About from "./pages/about";
import {CarritoProvider} from "./components/CarritoContext";;
import Productos from "./pages/ProductList";
import Contacto from "./pages/contacto";
import Pagina404 from "./pages/Pagina404";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div>
        
      <BrowserRouter>
      <CarritoProvider>
      <Navbar />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/Home" element={<Inicio />} />
          <Route path="/about" element={<About />} />
          <Route path="/productList" element={<Productos />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="*" element={<Pagina404 />} />
        </Routes>
         <Footer />
      
      </CarritoProvider>
  
      </BrowserRouter>
     
    </div>
  )
}

export default App

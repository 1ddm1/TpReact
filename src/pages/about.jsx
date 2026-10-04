import { productos } from "../../productos.js";

function Galeria(){
  return(
    <div>
      <div className="about-container">
        <div className="about-card1"> 
        <div className="about-card-content">  
        <h1>Nosotros</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies aliquet, nunc nisl aliquam nunc, eget ultricies nisl nunc eget nunc.</p>
        </div>
        </div>
        <div className="about-card">
        <div className="about-card-content">
          <h2>Misión</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies aliquet, nunc nisl aliquam nunc, eget ultricies nisl nunc eget nunc.</p>
        </div>
        <div className="about-card-content">
          <h2>Sabores</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies aliquet, nunc nisl aliquam nunc, eget ultricies nisl nunc eget nunc.</p>
        </div>
        </div>
      </div>
      <div className="galeria-container">
        <div className="grid-galeria">
        {productos.slice(0,6).map((producto) => (
        <div className="galeria-item" key={producto.id}>
        <img src={producto.imagen} alt={producto.alt} />
        </div>
        ))}
      </div>
      </div>
    </div>
  );
}
  
export default Galeria;
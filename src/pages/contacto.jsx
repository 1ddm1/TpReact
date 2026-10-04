import '../styles/contacto.css';

import { useState } from 'react';

export  function FormularioContacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    telefono: '',
    email: '',
    motivo: 'Incidente o reclamo sobre un pedido',
    radioSiNo: 'true',
    mensaje: ''
  });

  const [enviado, setEnviado] = useState(false);

 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos del formulario:', formData);
    setEnviado(true);
  };

  const handleReset = () => {
    setFormData({
      nombre: '',
      apellido: '',
      telefono: '',
      email: '',
      motivo: 'Incidente o reclamo sobre un pedido',
      radioSiNo: 'true',
      mensaje: ''
    });
    setEnviado(false);
  };

  return (
    <div className="form-group">
      <h2 className="form-title">Contacto</h2>
      {enviado ? (
        <p className="form-message">¡Gracias por tu mensaje! Te responderemos pronto.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div  className="form-content">
            <label>Nombre:</label><br />
            <input className="form-input"
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-content">
            <label>Apellido:</label><br />
            <input className="form-input"
              type="text"
              name="apellido"
              value={formData.apellido}
              onChange={handleChange}
              required
            />
          </div>
            <div className="form-content">
            <label>Teléfono:</label><br /
            ><input className="form-input"
              type="text"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              required
            
            />
          </div>
          <div className="form-content">
            <label>Correo Electrónico:</label><br />
            <input className="form-input"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-content">
            <label>Motivo de contacto:</label><br />
            <select className="form-select"
            value={formData.motivo} onChange={handleChange} name="motivo">
              <option value="Incidente o reclamo sobre un pedido">Incidente o reclamo</option>
              <option value="Consulta de horarios, locales o menú">Consulta de horarios, locales o menú</option>
              <option value="Consulta sobre oportunidades laborales">Consulta sobre oportunidades laborales</option>
            </select>
           
          </div>
              <div className="form-content"> 
                <label>Es cliente?</label>
                <div className="radio-group">
                  Si: <input className="form-input"
                  type="radio"
                  name="radioSiNo"
                  value="true" 
                  checked={formData.radioSiNo === 'true'}
                  onChange={handleChange} />
                  {' '}No: <input className="form-input"
                  type="radio"
                  name="radioSiNo"
                  value="false"
                  checked={formData.radioSiNo === 'false'}
                  onChange={handleChange} />
                 </div>
              </div>
          <div  className="form-content">
            <label>Mensaje:</label><br />
            <textarea className="form-textarea"
              name="mensaje"
              placeholder="Escribe tu mensaje aquí..."
              value={formData.mensaje}
              onChange={handleChange}
              required
              rows="4"
            
            /> 
          </div>
          <button className="form-button" type="submit" >
            Enviar
          </button>
          <button className="form-button" type="button"  
          onClick={handleReset}>
            Limpiar
          </button>
        </form>
      )}
  
    </div>
    
  );

}
export default FormularioContacto;

import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    
    console.log("Formulario enviado:", { nombre, email, mensaje });

    setEnviado(true); // Mostrar mensaje de confirmación
    setNombre("");
    setEmail("");
    setMensaje("");

    setTimeout(() => setEnviado(false), 5000); 
  };

  return (
    <div className="contact-container">
      <h2>Contacto</h2>
      <p>Envianos tu consulta y te responderemos a la brevedad.</p>

      {enviado && <p className="contact-success">¡Formulario enviado con éxito!</p>}

      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <textarea
          placeholder="Mensaje"
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
          required
        ></textarea>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Contact;

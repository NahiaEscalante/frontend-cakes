import React from 'react';
import './App.css';
import cookieImage from './img/banner.png'; 
import cheesecake from './img/cheesecake.png'; 
import galleta from './img/galleta.png'; 
import torta from './img/torta.png'; 

function App() {
  return (
    <div>
      {/* Header */}
      <header>
        <div className="logo">
          <h1>DOLCE BAKERY</h1>
        </div>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#sienna">DOLCE</a></li>
            <li><a href="#shop">Shop</a></li>
            <li><a href="#contact">Contacto</a></li>
            <li><a href="#stores">Tiendas</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-images">
          {/* Usa la imagen importada */}
          <img src={cookieImage} alt="Cookie" className="cookie-image" />
        </div>
      </section>

      {/* Productos */}
      <section className="products">
  <div className="product">
    <img src={torta} alt="Torta" className="torta-image" />
    <h3>Tortas</h3>
  </div>
  <div className="product">
    <img src={galleta} alt="Galleta" className="galleta-image" />
    <h3>Galletas</h3>
  </div>
  <div className="product">
    <img src={cheesecake} alt="Cheesecakes" className="cheesecake-image" />
    <h3>Cheesecake</h3>
  </div>
</section>


      {/* Footer */}
      <footer>
  <div className="footer-info">
    <div className="logo-section">
      <img src="logo.png" alt="Logo de Dolce Bakery" />
    </div>
    <div className="pages">
      <h4>PÁGINAS</h4>
      <ul>
        <li><a href="#shop">Shop</a></li>
        <li><a href="#stores">Tiendas</a></li>
      </ul>
    </div>
    <div className="sienna">
      <h4>SIENNA</h4>
      <ul>
        <li><a href="#home">Inicio</a></li>
        <li><a href="#sienna">Sienna</a></li>
        <li><a href="#contact">Contacto</a></li>
      </ul>
    </div>
    <div className="information">
      <h4>INFORMACIÓN</h4>
      <ul>
        <li><a href="#envios">Envíos y Devolución</a></li>
        <li><a href="#terms">Términos y Condiciones</a></li>
        <li><a href="#privacy">Política de Privacidad</a></li>
      </ul>
    </div>
    <div className="social">
      <h4>SÍGUENOS</h4>
      <ul>
        <li><a href="#facebook">Facebook</a></li>
        <li><a href="#instagram">Instagram</a></li>
      </ul>
    </div>
  </div>
</footer>

    </div>
  );
}

// Función para manejar el envío del formulario
function handleSubscribe(event) {
  event.preventDefault();
  alert("Gracias por suscribirte!");
}

export default App;

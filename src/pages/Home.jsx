import React from "react";
import { Link } from "react-router-dom"; // Importar Link de React Router
import "../styles/App.css"; // Corregir la ruta para App.css
import cookieImage from "../img/banner.png"; // Corregir la ruta para la imagen
import cheesecake from "../img/cheesecake.png";
import galleta from "../img/galleta.png";
import torta from "../img/torta.png";
import "../styles/index.css"; // Corregir la ruta para index.css
import ProductosRelacionados from "./ProductosRelacionados";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-images">
          <img src={cookieImage} alt="Cookie" className="cookie-image" />
        </div>
      </section>

      <section className="product">
        <h2>Productos</h2>
      </section>

      {/* Productos */}
      <section className="products">
        <div className="product">
          <img src={torta} alt="Torta" className="torta-image" />
          <Link to="/producto/torta">
            <button className="torta-btn">Tortas</button>
          </Link>
        </div>

        <div className="product">
          <div className="image-container">
            <img
              src={cheesecake}
              alt="Cheesecake"
              className="cheesecake-image"
            />
            <Link to="/producto/cheesecake">
              <button className="cheesecake-btn">Cheesecakes</button>
            </Link>
          </div>
        </div>

        <div className="product">
          <img src={galleta} alt="Galleta" className="galleta-image" />
          {/* Añadir un botón debajo de la imagen */}
          <Link to="/producto/galleta">
            <button className="galleta-btn">Galletas</button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="footer-info">
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
              <li><a href="/home">Inicio</a></li>
              <li><a href="/home">DOLCE</a></li>
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
};

export default Home;

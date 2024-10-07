import React from 'react';
import Slider from "react-slick"; 
import "slick-carousel/slick/slick.css";  
import "slick-carousel/slick/slick-theme.css"; 
import { Link } from 'react-router-dom';  
import '../styles/index.css';  

const ProductosRelacionados = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div className="related-products">
      <h2>Más productos</h2>
      <Slider {...settings}>

        <div className="related-product">
          <Link to="/producto/torta">
            <img src="/src/img/torta1.png" alt="Torta" className="product-image" />
            <p>TORTA LA CÁBALA</p>
          </Link>
        </div>
        
        <div className="related-product">
          <Link to="/producto/cheesecake">
            <img src="/src/img/cheesecake.png" alt="Florencia" className="product-image" />
            <p>CHEESECAKE DE FRESA</p>
          </Link>
        </div>


        <div className="related-product">
          <Link to="/producto/galleta">
            <img src="/src/img/galleta.png" alt="Cheesecake" className="product-image" />
            <p>GALLETA</p>
          </Link>
        </div>

        <div className="related-product">
          <Link to="/producto/torta">
            <img src="/src/img/torta.png" alt="Chocovainilla" className="product-image" />
            <p>TORTA DE CHOCOLATE</p>
          </Link>
        </div>
      </Slider>

      <footer>
        <div className="footer-info">
          <div className="pages"></div>
          <div className="sienna">
            <h4>DOLCE</h4>
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
        <p className="footer-text">© 2024 Dolce Bakery. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default ProductosRelacionados;

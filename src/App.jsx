import './styles/App.css';
import { 
  BrowserRouter as Router, 
  Routes, 
  Route
} from 'react-router-dom';
import Navbar from './layout/Navbar'; 
import Home from './pages/Home';  
import Galleta from './pages/Galleta';
import Torta from './pages/Torta';
import Cheesecake from './pages/Cheesecake';
import './styles/index.css';
import CarritoModal from './pages/CarritoModal';
import { useState } from 'react';
import { CartProvider } from './context/CartContext';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para abrir/cerrar modal

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <CartProvider>
      <Router>
        <Navbar />
        <button onClick={toggleModal}>Ver Carrito</button> {/* Botón para abrir el modal */}
        <CarritoModal isOpen={isModalOpen} onClose={toggleModal} />
        <Routes>
          <Route path="/" exact element={<Home />} /> {/* Cambié component a element */}
          <Route path="/home" element={<Home />} />
          <Route path="/producto/cheesecake" element={<Cheesecake />} /> 
          <Route path="/producto/galleta" element={<Galleta />} /> 
          <Route path="/producto/torta" element={<Torta />} /> 
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;

import './styles/App.css';
import { 
  BrowserRouter as Router, 
  Routes, 
  Route,
  Navigate 
} from 'react-router-dom';
import Navbar from './layout/Navbar'; // Ruta correcta para Navbar
import Home from './pages/Home';  // Importación correcta de Home
import Galleta from './pages/Galleta';
import Torta from './pages/Torta';
import Cheesecake from './pages/Cheesecake';
import './styles/index.css'; // Esta importación ya está correcta
import { CartContext } from './context/CartContext';
import { CartProvider } from './context/CartContext';
function App() {
  return (
 
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/producto/cheesecake" element={<Cheesecake />} /> 
        <Route path="/producto/galleta" element={<Galleta />} /> 
        <Route path="/producto/torta" element={<Torta />} /> 
      </Routes>
    </Router>

  );
}

export default App;

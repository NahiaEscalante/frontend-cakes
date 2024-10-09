import axios from "axios";
import { getToken } from "./tokenService";

const API_ORQUESTADORA = import.meta.env.VITE_API_ORQUESTADORA;
const API_PRODUCTO = import.meta.env.VITE_API_PRODUCTO;
const API_RESENIA = import.meta.env.VITE_API_RESENIA;
const API_PEDIDO = import.meta.env.VITE_API_PEDIDO;

// Ejemplo de función para obtener datos de la orquestadora
export const getAllOrquestadora = async () => {
  try {
    const token = getToken();
    const response = await axios.get(`${API_ORQUESTADORA}/orquestadora/all`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data || "Algo salió mal");
  }
};

// Funciones similares para productos, reseñas y pedidos
export const getAllProductos = async () => {
  try {
    const token = getToken();
    const response = await axios.get(`${API_PRODUCTO}/productos/all`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data || "Algo salió mal");
  }
};

// Continúa con las demás funciones para las APIs...

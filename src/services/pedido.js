import axios from "axios";

// URL base para la API de pedidos
const API_PEDIDO = import.meta.env.VITE_API_PEDIDO;

// ::::::::::::::::::: Endpoints de Pedido ::::::::::::::::::

// Crear un nuevo pedido (POST)
export const crearPedido = async (pedidoData) => {
    try {
        const response = await axios.post(`${API_PEDIDO}/create/pedido/`, pedidoData);
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data || "Error al crear el pedido");
    }
};

// Actualizar un pedido por su ID (PUT)
export const actualizarPedido = async (pedidoId, pedidoData) => {
    try {
        const response = await axios.put(`${API_PEDIDO}/update/pedido/${pedidoId}`, pedidoData);
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data || "Error al actualizar el pedido");
    }
};

// Agregar un producto a un pedido (PATCH)
export const agregarProductoAPedido = async (pedidoId, productoData) => {
    try {
        const response = await axios.patch(`${API_PEDIDO}/update/pedido/producto/${pedidoId}`, productoData);
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data || "Error al agregar producto al pedido");
    }
};

// Leer un pedido por su ID (GET)
export const leerPedido = async (pedidoId) => {
    try {
        const response = await axios.get(`${API_PEDIDO}/pedido/${pedidoId}`);
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data || "Error al obtener el pedido");
    }
};

// Eliminar un pedido por su ID (DELETE)
export const eliminarPedido = async (pedidoId) => {
    try {
        const response = await axios.delete(`${API_PEDIDO}/delete/pedido/${pedidoId}`);
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data || "Error al eliminar el pedido");
    }
};

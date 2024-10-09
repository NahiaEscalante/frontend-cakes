import axios from "axios";

// URL base para la API de productos
const API_PRODUCTO = import.meta.env.VITE_API_PRODUCTO;

// ::::::::::::::::::: Endpoints de Producto ::::::::::::::::::

// Crear un nuevo producto (POST)
export const crearProducto = async (productoData) => {
    try {
        const response = await axios.post(`${API_PRODUCTO}/productos/`, productoData);
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data || "Error al crear producto");
    }
};

// Leer un producto por su ID (GET)
export const leerProducto = async (productoId) => {
    try {
        const response = await axios.get(`${API_PRODUCTO}/productos/${productoId}`);
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data || "Error al obtener el producto");
    }
};

// Actualizar un producto por su ID (PUT)
export const actualizarProducto = async (productoId, productoData) => {
    try {
        const response = await axios.put(`${API_PRODUCTO}/productos/${productoId}`, productoData);
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data || "Error al actualizar el producto");
    }
};

// Eliminar un producto por su ID (DELETE)
export const eliminarProducto = async (productoId) => {
    try {
        const response = await axios.delete(`${API_PRODUCTO}/productos/${productoId}`);
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data || "Error al eliminar el producto");
    }
};

// Leer productos paginados (GET)
export const leerProductosPaginados = async () => {
    try {
        const response = await axios.get(`${API_PRODUCTO}/productos/pageable`);
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data || "Error al obtener los productos paginados");
    }
};

// ::::::::::::::::::: Endpoints de Categoría ::::::::::::::::::

// Crear una nueva categoría (POST)
export const crearCategoria = async (categoriaData) => {
    try {
        const response = await axios.post(`${API_PRODUCTO}/categorias/`, categoriaData);
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data || "Error al crear la categoría");
    }
};

// Leer una categoría por su ID (GET)
export const leerCategoria = async (categoriaId) => {
    try {
        const response = await axios.get(`${API_PRODUCTO}/categorias/${categoriaId}`);
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data || "Error al obtener la categoría");
    }
};

// Eliminar una categoría por su ID (DELETE)
export const eliminarCategoria = async (categoriaId) => {
    try {
        const response = await axios.delete(`${API_PRODUCTO}/categorias/${categoriaId}`);
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data || "Error al eliminar la categoría");
    }
};

// Leer productos por categoría (GET)
export const leerProductosPorCategoria = async (categoriaId) => {
    try {
        const response = await axios.get(`${API_PRODUCTO}/categorias/${categoriaId}/productos`);
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data || "Error al obtener los productos por categoría");
    }
};

// Leer productos paginados por categoría (GET)
export const leerProductosPaginadosPorCategoria = async (categoriaId) => {
    try {
        const response = await axios.get(`${API_PRODUCTO}/categorias/${categoriaId}/productos/pageable`);
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data || "Error al obtener los productos paginados por categoría");
    }
};

import axios from 'axios'

export const getAllProducts = async()=>axios.get('/api/products');

export const getProduct = async (productId) => await axios.get(`/api/products/${productId}`);
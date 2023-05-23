import axios from 'axios'

export const GetAllProducts = async()=>axios.get('/api/products');

export const GetProduct = async()=> axios.get(`/api/products/${productId}`)
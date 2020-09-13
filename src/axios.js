import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5001/ecommerce-clone-86587/us-central1/api'
})

export default instance;
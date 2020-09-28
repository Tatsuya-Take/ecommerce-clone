import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://us-central1-ecommerce-clone-86587.cloudfunctions.net/api'
})

export default instance;
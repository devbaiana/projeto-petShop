import axios from 'axios';


const API_BASE_URL = 'http://192.168.1.78:8080/cadastrar'; 

export const createPost = async (postData) => {
  try {
    const response = await axios.post(API_BASE_URL, postData);
    return response.data; 
  } catch (error) {
    throw error;
  }
};
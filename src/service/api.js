import axios from "axios";

axios.defaults.baseURL = "http://localhost:4000";
axios.interceptors.request.use(config => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  config.headers['Content-Type'] = 'application/json';
  return config;
});


export const getNewsAll = async () =>{
    try{
        const response = await axios.get('/News')
        return response.data;
    }catch(error){
        console.error(error)
        throw error;
    }
}

export const getOneNews = async (NesId)=>{
    try{
        const response = await axios.get(`/News/${NesId}`)
        return response.data;

    }catch(err){
        console.error(err)
        throw err
    }
}

export const getByCategory = async (category)=>{
    try{
        const response = await axios.get(`/News/category/${category}`)
        return response.data;

    }catch(err){
        console.error(err)
        throw err
    }
}


const API_URL = "/auth";
export const loginUser = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    return response.data; // { access_token: "..." }
  } catch (error) {
    const message = error.response?.data?.message || "Login failed";
    console.error("Login Error:", message);
    throw message;
  }
};

import axios from "axios";

const api = axios.create({baseURL: "https://webby-music.onrender.com/api"})


api.interceptors.request.use((config)=>{
    config.headers = {
        Authorization: 
            "Bearer e1ca6eb2990a48de1659966f53cafe37c620572b0d4f62fbed0e11c06d243b6d5118ef066fe8828f3980f9d88b244d39ec07dc98241e2943ab0ece7edde203c4937caeaff18ac3e35917d0ef1c0bb5894494c16589e8621bb399c9962f0b081a7914d1b8798303283bb8e878971e1fdca291615e89f1aee7f0b599e38f1a0cd2"
        };

       return config; 
});



export { api };
import axios from "axios";


export const Api = axios.create({
    baseURL: "https://hamburgueria-api-json-server.herokuapp.com"
});
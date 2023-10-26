import axios from "axios";

const URL_CONTRACT = "http://localhost:8080/contracts";

export const getAll = async (data) => {
    const response = await axios.get(URL_CONTRACT + "?name_like" + `${data}`);
    return response.data;
}

export const create = async (data) => {
    const response = await axios.post(URL_CONTRACT,data);
    return response;
}
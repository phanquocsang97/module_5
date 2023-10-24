import axios from "axios";

const URL_BOOK = "http://localhost:8080/books";
export const getAll = async () => {
    try {
        const response = await axios.get(URL_BOOK);
        return response.data;
    } catch (e) {
        alert("No data");
    }
}

export const create = async (data) => {
    try {
        const response = await axios.post(URL_BOOK + "/" ,data);
        return response.status;
    }catch (e) {
        alert("Add Fail");
    }
}
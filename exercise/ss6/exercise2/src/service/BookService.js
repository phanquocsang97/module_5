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
        const response = await axios.post(URL_BOOK + "/", data);
        return response.status;
    } catch (e) {
        alert("Add Fail");
    }
}

export const findById = async (id) => {
    try {
        const response = await axios.get(URL_BOOK + `/${id}`);
        console.log(id);
        return response.data;
    } catch (e) {
        alert("Can't find !!")
    }
}

export const deleteBook = async (id) => {
    try {
        const response = await axios.delete(URL_BOOK + `/${id}`);
        return response.status;
    } catch (e) {
        alert("Delete fail!");
    }
}

export const updateBook = async (book) => {
    try {
        const response = await axios.put(URL_BOOK + `/${book.id}`, book)
        return response.status;
    } catch (e) {
        alert("Update fail!");
    }
}
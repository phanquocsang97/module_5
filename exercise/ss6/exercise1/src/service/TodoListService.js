import axios from "axios";


export const getAll = async () => {
    try {
        const response = await axios.get("http://localhost:8080/todos");
        return response.data;
    } catch (e) {
        alert("No data");
    }
}

export const create = async (data) => {
    try {
        const response = await axios.post("http://localhost:8080/todos", data)
        return response.status;
    } catch (e) {
        alert("Add Fail");
    }
}

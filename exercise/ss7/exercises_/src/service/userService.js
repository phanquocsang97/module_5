import axios from "axios";
const URL_USERS = "https://jsonplaceholder.typicode.com/users";
export const getAll = async () => {
    try {
        let temp = await axios.get(URL_USERS);
        return temp.data;
    } catch (e) {}
};

export const deleteUser = async (id) => {
    try {
        let temp = await axios.delete(URL_USERS + "/" + id);
        console.log(temp);
        return temp.status;
    } catch (e) {}
};
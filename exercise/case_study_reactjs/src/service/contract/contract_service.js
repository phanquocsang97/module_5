import axios from "axios";

const URL_CONTRACT = "http://localhost:8080/contracts";

export const getAll = async (data1,data2) => {
    const response = await axios.get(URL_CONTRACT + "?contractNumber_like=" + `${data1}` + "&" + "startDate_like=" + `${data2}` + "&_sort=id&_order=desc");
    return response.data;
}

export const create = async (data) => {
    const response = await axios.post(URL_CONTRACT,data);
    return response;
}
export const deleteContract = async (id) => {
    const response = await axios.delete(URL_CONTRACT + `/${id}`);
    console.log(response);
    return response.status;
}

export const updateContract = async (contract) => {
    const response = await axios.put(URL_CONTRACT + `/${contract.id}` ,contract);
    console.log(response);
    return response;
}

export const findById = async (id) => {
    const response = await axios.get(URL_CONTRACT + `/${id}`);
    return response.data;
}
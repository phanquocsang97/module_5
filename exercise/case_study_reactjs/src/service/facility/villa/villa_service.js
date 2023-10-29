import axios from "axios";

const URL_VILLA = "http://localhost:8080/villas";
const URL_TYPE_RENT = "http://localhost:8080/typeRent";

export const getAll = async (data1,data2)=>{
    const response = await axios.get(URL_VILLA + "?name_like=" + `${data1}` + "&" + "typeRent.name_like=" + `${data2}` );
    // console.log(response);
    return response;
}

export const create = async (data) => {
    console.log(data);
    const response = await axios.post(URL_VILLA,data);
    console.log(response);
    return response;
}

export const getTypeRent = async () => {
    const response = await axios.get(URL_TYPE_RENT);
    return response.data;
}

export const deleteVilla = async (id) => {
    const response = await axios.delete(URL_VILLA + `/${id}`);
    console.log(response)
    return response.status;
}

export const findById = async (id) => {
    const response = await axios.get(URL_VILLA + `/${id}`);
    return response.data;
}

export const updateVilla = async (villa) => {
    const response = await axios.put(URL_VILLA + `/${villa.id}`,villa);
    console.log(response)
    return response;
}
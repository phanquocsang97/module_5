import axios from "axios";

const URL_CUSTOMER = "http://localhost:8080/customers";
const URl_CUSTOMER_TYPE = "http://localhost:8080/customerType";

export const getAll = async () => {
    try {
        const response = await axios.get(URL_CUSTOMER);
        return response.data;
    }catch (e) {
        alert("No data");
    }
}

export const create = async (data) => {
    try {
        const response = await axios.post(URL_CUSTOMER , data);
        return response.status;
    }catch (e) {
        alert("Create Fail");
    }
}
export const getTypeCustomer = async ()=> {
    try {
        const res = await axios.get(URl_CUSTOMER_TYPE);
        return res.data
    }catch (e){
        alert("Loại khách bị lỗi!")
    }
}
import axios from "axios";


const URL_CUSTOMER = "http://localhost:8080/customers";
const URl_CUSTOMER_TYPE = "http://localhost:8080/customerType";

export const getAll = async (data1,data2,page) => {
    console.log(data1);
    const response = await axios.get(URL_CUSTOMER + "?name_like=" + `${data1}` + "&" + "customerType.name_like=" + `${data2}` + `&_page=${page}` + `&_limit=5` + "&_sort=id&_order=desc");
    console.log(response)
    return response;
}

export const create = async (data) => {
    console.log(data)
    const response = await axios.post(URL_CUSTOMER, data);
    console.log(response)
    return response;
}
export const getTypeCustomer = async () => {
    const response = await axios.get(URl_CUSTOMER_TYPE);
    return response.data;
}

export const deleteCustomer = async (id) => {
    const response = await axios.delete(URL_CUSTOMER + `/${id}`);
    return response.status;
}

export const updateCustomer = async (customer) => {
    const response = await axios.put(URL_CUSTOMER + `/${customer.id}`, customer);
    console.log(response)
    return response;
}

export const findById = async (id) => {
    const response = await axios.get(URL_CUSTOMER + `/${id}`);
    console.log(response)
    console.log(id);
    return response.data;
}
import React, {useEffect, useState} from "react";
import * as customerService from "../../service/customer/customer_service";
import {Link} from "react-router-dom";

function CustomerList() {
    const [customers, setCustomers] = useState([]);
    useEffect(() => {
        getCustomer();
    }, []);

    const getCustomer = async () => {
        const response = await customerService.getAll() ;
        console.log(response)
        setCustomers(response);
    }

    return (
        <div className="cointainer">
            <h1 style={{textAlign:"center"}}>Customer List</h1>
            <Link to="/customers/create">
                <button>Create</button>
            </Link>
            <table className="table table-striped">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Birthday</th>
                    <th>Gender</th>
                    <th>Identity</th>
                    <th>Phone Number</th>
                    <th>Email</th>
                    <th>Type Customer</th>
                    <th>Address</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {customers.map((customer,index) => (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{customer.name}</td>
                        <td>{customer.birthday}</td>
                        <td>{customer.gender === 0 ? "Women" : "Men"}</td>
                        <td>{customer.identity}</td>
                        <td>{customer.phoneNumber}</td>
                        <td>{customer.email}</td>
                        <td>{customer.customerType.name}</td>
                        <td>{customer.address}</td>
                        <td></td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}

export default CustomerList;
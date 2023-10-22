import React from "react";
import {getAll} from "../../service/customer/customer_service";

function CustomerList() {
    return(
        <div>
            <h1>Customer List</h1>
            <table>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Day Of Birth</th>
                    <th>Gender</th>
                    <th>Identity</th>
                    <th>Phone Number</th>
                    <th>Email</th>
                    <th>Type Customer</th>
                    <th>Address</th>
                </tr>
                </thead>
                <tbody>
                {getAll().map(customer =>(
                    <tr key={customer.id}>
                       <td>{customer.id}</td>
                       <td>{customer.name}</td>
                       <td>{customer.dayOfBirth}</td>
                       <td>{customer.gender}</td>
                       <td>{customer.identity}</td>
                       <td>{customer.phoneNumber}</td>
                       <td>{customer.email}</td>
                       <td>{customer.typeCustomer}</td>
                       <td>{customer.address}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}
export default CustomerList;
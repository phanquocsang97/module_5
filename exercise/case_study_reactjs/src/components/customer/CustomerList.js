import React, {useEffect, useState} from "react";
import * as customerService from "../../service/customer/customer_service";
import {Link} from "react-router-dom";
import ModalDelete from "./ModalDelete";
import {toast} from "react-toastify";


function CustomerList() {
    const [customers, setCustomers] = useState([]);
    const [customer, setCustomer] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const [nameSearch, setNameSearch] = useState("");
    // const [typeSearch, setTypeSearch] = useState("");
    const [pages, setPages] = useState(1);
    const [total, setTotal] = useState(0);
    const [customerType, setCustomerType] = useState({});
    const [types, setTypes] = useState([]);

    useEffect(() => {
        getCustomer()
        listCustomerType()
    }, [nameSearch, customerType, pages]);

    const getCustomer = async () => {
        const res = await customerService.getAll(nameSearch, customerType, pages);
        setTotal(res.headers["x-total-count"]);
        console.log(res)
        setCustomers(res.data);
    }
    const listCustomerType = async () => {
        const res = await customerService.getTypeCustomer();
        setTypes(res);
    }

    const handleModal = (data) => {
        setIsOpen(true);
        setCustomer(data);
    }

    const onCloseModal = () => {
        setIsOpen(false);
        getCustomer();
    }

    const handleSubmit = async (id) => {
        console.log(id)
        try {
            const status = await customerService.deleteCustomer(id);
            if (status === 200) {
                toast.success("Delete Success");
            } else {
                toast.warn("Delete Fail");
            }
            console.log(status);
        } catch (e) {

        }
        onCloseModal();
    }
    // const handlePageClick = () => {
    //
    // }

    return (

        <div className="container-fluid" style={{minHeight: " 10px"}}>
            <h1 style={{textAlign: "center"}}>Customer List</h1>
            <Link to="/customers/create" className="btn btn-outline-primary">
                Create
            </Link>
            <input type="text" onChange={(evt) => setNameSearch(evt.target.value)} placeholder="Enter name customer"/>
            {/*<input type="text" onChange={(evt) => setTypeSearch(evt.target.value)} placeholder="Enter type customer"/>*/}
            <select is="select" className='form-control' name="customerType" style={{
                textAlign: 'center'
            }} onChange={(event) => setCustomerType(event.target.value)}>
                {
                    types.map(type => (
                        <option key={type.id} value={type.name}>{type.name}</option>
                    ))
                }
            </select>
            <table className="table table-striped" style={{width: "100%"}}>
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
                    <th style={{textAlign: "center"}}>Action</th>
                </tr>
                </thead>
                <tbody>
                {customers.length !== 0 ?

                    customers.map((customer, index) => (
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
                            <td>
                                <Link className="btn btn-outline-success"
                                      to={`/customers/update/${customer.id}`}>Update</Link>
                                <Link style={{marginLeft: "10px"}} to="/customers" className="btn btn-outline-secondary"
                                      onClick={() => handleModal(customer)}>
                                    Delete
                                </Link>
                            </td>
                        </tr>
                    ))
                    : (
                        <td colSpan="10" style={{textAlign: "center", fontSize: "25px"}}>No Data</td>
                    )
                }
                </tbody>
            </table>
            {/*<ReactPaginate*/}
            {/*    breakLabel="..."*/}
            {/*    nextLabel="next >"*/}
            {/*    onPageChange={handlePageClick}*/}
            {/*    pageRangeDisplayed={5}*/}
            {/*    pageCount={50}*/}
            {/*    previousLabel="< previous"*/}
            {/*    renderOnZeroPageCount={null}*/}
            {/*    pageClassName="page-item"*/}
            {/*    pageLinkClassName="page-link"*/}
            {/*    previousClassName="page-item"*/}
            {/*    previousLinkClassName="page-link"*/}
            {/*    nextClassName="page-item"*/}
            {/*    nextLinkClassName="page-link"*/}
            {/*    breakClassName="page-item"*/}
            {/*    breakLinkClassName="page-link"*/}
            {/*    containerClassName="pagination"*/}
            {/*    activeClassName="active"*/}
            {/*/>*/}
            {isOpen && <ModalDelete isOpen={isOpen} customer={customer}
                                    onCloseModal={onCloseModal}
                                    handleSubmit={handleSubmit}
            />}
            {/*<PaginationCustomer*/}
            {/*    setPages={setPages}*/}
            {/*    total={total}*/}
            {/*    page={pages}*/}
            {/*/>*/}
        </div>
    )
}

export default CustomerList;
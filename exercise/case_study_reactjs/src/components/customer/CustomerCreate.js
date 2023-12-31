import {Link, useNavigate} from "react-router-dom";
import * as Yup from "yup";
import * as customerService from "../../service/customer/customer_service";
import {ErrorMessage, Field, Form, Formik} from "formik";
import React, {useEffect, useState} from "react";
import {toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function CustomerCreate() {
    const navigate = useNavigate();
    const [types, setTypes] = useState([]);
    useEffect(() => {
        listCustomerType();
    }, []);

    const listCustomerType = async () => {
        try {
            const res = await customerService.getTypeCustomer();
            setTypes(res);

        } catch (e) {
            toast.warn("Fail");
        }
    }
    const initValue = {
        name: "",
        birthday: "",
        gender: 0,
        identity: "",
        phoneNumber: "",
        email: "",
        customerType: JSON.stringify({
            id: 1,
            name: "Diamond"
        }),
        address: ""
    }

    const validateObject = {
        name: Yup.string()
            .required("Please input!!!"),
        birthday: Yup.date()
            .required("Please input!!!")
            .max(new Date(), "Please input day bigger than today"),
        identity: Yup.string()
            .required("Please input!!!")
            .length(12, "At least 12 numbers"),
        phoneNumber: Yup.string()
            .required("Please input!!!")
            .length(10, "At least 10 numbers"),
        email: Yup.string()
            .required("Please input!!!")
            .matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, "Input Wrong Format!"),
        address: Yup.string()
            .required("Please Input!!!")
    }
    const create = async (customer) => {
        try {
            const response = {...customer, customerType: JSON.parse(customer.customerType)}
            const newCustomer = await customerService.create(response);
            if (newCustomer.status === 201) {
                toast.success("Create Success");
                // alert("Create Success");
                navigate("/customers");
            } else {
                toast.warn("Create Fail");
                // alert("Create Fail");
                navigate("/customers");
            }
        } catch (e) {
            toast.warn("Create Fail");
        }

    }
    return (
        <>
            <Formik
                initialValues={initValue}
                onSubmit={(values) => {
                    create(values);
                }}
                validationSchema={Yup.object(validateObject)}>
                <div className='container'>
                    <h1 style={{textAlign: "center"}}>Create Customer</h1>
                    <Form>
                        <div className='mb-3'>
                            <label htmlFor='name' className='form-label'>Name</label>
                            <Field type='text' name="name" className='form-control' id='name'/>
                            <ErrorMessage name="name" component="span" style={{color: "red"}}/>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='birthday' className='form-label'>Birthday</label>
                            <Field type='date' name="birthday" className='form-control' id='birthday'/>
                            <ErrorMessage name="birthday" component="span" style={{color: "red"}}/>
                        </div>
                        <div className='mb-3'>
                            <label className='form-label'>Gender</label>
                            <Field as="select" className='form-control' name="gender" style={{
                                textAlign: 'center',
                            }}>
                                <option className="option" value>--Gender--</option>
                                <option className="option" value="0">Women</option>
                                <option className="option" value="1">Men</option>

                            </Field>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='identity' className='form-label'>Identity</label>
                            <Field type='text' name="identity" className='form-control' id='identity'/>
                            <ErrorMessage name="identity" component="span" style={{color: "red"}}/>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='phoneNumber' className='form-label'>Phone number</label>
                            <Field type='text' name="phoneNumber" className='form-control' id='phoneNumber'/>
                            <ErrorMessage name="phoneNumber" component="span" style={{color: "red"}}/>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='email' className='form-label'>Email</label>
                            <Field type='text' name="email" className='form-control' id='email'/>
                            <ErrorMessage name="email" component="span" style={{color: "red"}}/>
                        </div>
                        <div className='mb-3'>
                            <label>Customer Type</label>
                            <Field as="select" className='form-control' name="customerType" style={{
                                textAlign: 'center'
                            }}>
                                {
                                    types.map(type => (
                                        <option key={type.id} value={JSON.stringify(type)}>{type.name}</option>
                                    ))
                                }
                            </Field>
                            <ErrorMessage name="customerType" component="span" style={{color: "red"}}/>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='address' className='form-label'>Address</label>
                            <Field type='text' name="address" className='form-control' id='address'/>
                            <ErrorMessage name="address" component="span" style={{color: "red"}}/>
                        </div>
                        {/*<button type='submit' className='btn btn-primary' style={{marginLeft:"520px"}}>Submit</button>*/}
                        <div className="d-flex justify-content-center mt-2">
                            <Link to="/customers">
                                <button className="btn btn-warning" >Cancel</button>
                            </Link>
                            <button type='submit' className='btn btn-primary' style={{marginLeft:"10px"}} >Submit</button>
                        </div>
                    </Form>
                </div>
            </Formik>
        </>
    )
}

export default CustomerCreate;
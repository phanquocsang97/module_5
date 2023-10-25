import {useNavigate} from "react-router-dom";
// import {toast} from "react-toastify";
import * as Yup from "yup";
import * as customerService from "../../service/customer/customer_service";
import {ErrorMessage, Field, Form, Formik} from "formik";
import React, {useEffect, useState} from "react";
import * as types from "async";

function CustomerCreate() {
    const navigate = useNavigate();
    const [types, setTypes] = useState([]);
    useEffect(() => {
        display();
    }, []);

    const display = async () => {
        const res = await customerService.getTypeCustomer();
        setTypes(res);
    }
    const initValue = {
        id: 0,
        name: "",
        birthday: "",
        gender: 0,
        identity: "",
        phoneNumber: "",
        email: "",
        customerType: JSON.stringify({
            id: 0,
            name: ""
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
            .length(12,"At least 12 numbers"),
        phoneNumber: Yup.string()
            .required("Please input!!!")
            .length(10,"At least 10 numbers"),
        email: Yup.string()
            .required("Please input!!!")
            .matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, "Input Wrong Format!"),
        address: Yup.string()
            .required("Please Input!!!")
    }
    const add = async (customer) => {
        const response = {...customer,customerType: JSON.parse(customer.customerType)}
        const newCustomer = await customerService.create(response);
        if (newCustomer.status === 201){
            // toast.success("Create Success");
            alert("Create Success");
            navigate("/customers");
        }else {
            // toast.warn("Create Fail");
            alert("Create Fail");
            navigate("/customers");
        }
    }
    return (
        <>
            <Formik
                initialValues={initValue}
                onSubmit={(values) => {
                    add(values);
                }}
                validationSchema={Yup.object(validateObject)}>
                <div className='container'>
                    <h1>Create Customer</h1>
                    <Form>
                        <div className='mb-3'>
                            <label htmlFor='name' className='form-label'>Name</label>
                            <Field type='text' name="name" className='form-control' id='name'/>
                            <ErrorMessage name="name" component="span" style={{color: "red"}}/>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='dateOfBirth' className='form-label'>Birthday</label>
                            <Field type='date' name="dateOfBirth" className='form-control' id='dateOfBirth'/>
                            <ErrorMessage name="dateOfBirth" component="span" style={{color: "red"}}/>
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
                            <label htmlFor='phone' className='form-label'>Phone number</label>
                            <Field type='text' name="phone" className='form-control' id='phone'/>
                            <ErrorMessage name="phone" component="span" style={{color: "red"}}/>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='email' className='form-label'>Email</label>
                            <Field type='text' name="email" className='form-control' id='email'/>
                            <ErrorMessage name="email" component="span" style={{color: "red"}}/>
                        </div>
                        <div className='mb-3'>
                            <label>Customer Type</label>
                            <Field as="select" className='form-control' name="typeCustomer" style={{
                                textAlign: 'center'
                            }}>
                                {
                                    types.map(type => (
                                        <option key={type.id} value={JSON.stringify(type)}>{type.name}</option>
                                    ))
                                }
                            </Field>
                            <ErrorMessage name="typeCustomer" component="span" style={{color: "red"}}/>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='address' className='form-label'>Address</label>
                            <Field type='text' name="address" className='form-control' id='address'/>
                            <ErrorMessage name="address" component="span" style={{color: "red"}}/>
                        </div>
                        <button type='submit' className='btn btn-primary'>Submit</button>
                    </Form>
                </div>
            </Formik>
        </>
    )
}
export default CustomerCreate;
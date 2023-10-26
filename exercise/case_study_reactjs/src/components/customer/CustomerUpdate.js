import {Link, useNavigate, useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import * as customerService from "../../service/customer/customer_service"
import {toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";

export function CustomerUpdate() {
    const navigate = useNavigate();
    const [customer, setCustomer] = useState();
    const [types, setTypes] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        findById();
        listCustomerType()
    },[id])

    const listCustomerType = async () => {
        try {
            const res = await customerService.getTypeCustomer();
            setTypes(res);

        } catch (e) {
            toast.warn("Fail");
        }
    }

    const findById = async () => {
        try {
            const response = await customerService.findById(id);
            setCustomer(response);
        } catch (e) {
            toast.warn("Cant Find Id");
        }
    }
    console.log(customer);

    const update = async (customer) => {
        try {
            const response = await customerService.updateCustomer(customer);
            console.log(response);
            if (response.status === 200){
                toast.success("Update Success");
                navigate("/customers");
            }else {
                toast.warn("Update Fail");
            }
        }catch (e) {
            toast.warn("Update Fail");
        }
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

    if (!customer){
        return null;
    }

    return (
        <>
            <Formik
                initialValues={customer}
                onSubmit={(values) => {
                    update(values);
                }}
                validationSchema={Yup.object(validateObject)}>
                <div className='container'>
                    <h1 style={{textAlign: "center"}}>Update Customer</h1>
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
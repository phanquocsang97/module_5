import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import * as Yup from "yup";
import * as contractService from "../../service/contract/contract_service"
import {toast} from "react-toastify";
import React from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";

function ContractCreate() {
    const navigate = useNavigate();
    const contractCreate = async (data) => {
        const status = await contractService.create(data)
        if (status === 201) {
            navigate("/contracts");
            toast.success("Create Success");
        } else {
            navigate("/contracts")
            toast.warn("Create Fail");
        }
    }
    const initValue = {
        contractNumber: "",
        startDate: "",
        endDate: "",
        deposit: 0,
        total: 0
    }

    const validateObject = {
        contractNumber: Yup.string()
            .required("Please input !!!")
            .matches(/^HD-\d{3}$/, "Input wrong format"),
        startDate: Yup.string()
            .required("Please input !!!"),
        endDate: Yup.string()
            .required("Please input !!!"),
        deposit: Yup.number()
            .required("Please input !!!")
            .min(1, "Input bigger than 1"),
        total: Yup.number()
            .required("Please input !!!")
            .min(1, "Input bigger than 1")
    }

    const create = async (contract) => {
        try {
            const response = await contractService.create(contract);
            if (response.status === 201) {
                toast.success("Create Success");
                navigate("/contracts");
            } else {
                toast.warn("Create Fail");
            }
        } catch (e) {
            toast.warn("Create Fail");
        }
    }
    return (
        <Formik
            initialValues={initValue}
            onSubmit={(values) => {
                create(values);
            }}
            validationSchema={Yup.object(validateObject)}
        >
            <div>
                <h1 style={{textAlign: "center"}}>Create Contract</h1>
                <Form>
                    <div className='mb-3'>
                        <label htmlFor='contractNumber' className='form-label'>Contract Number</label>
                        <Field type='text' name="contractNumber" className='form-control' id='contractNumber'/>
                        <ErrorMessage name="contractNumber" component="span" style={{color: "red"}}/>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='startDate' className='form-label'>Start Date</label>
                        <Field type='date' name="startDate" className='form-control' id='startDate'/>
                        <ErrorMessage name="startDate" component="span" style={{color: "red"}}/>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='endDate' className='form-label'>End Date</label>
                        <Field type='date' name="endDate" className='form-control' id='endDate'/>
                        <ErrorMessage name="endDate" component="span" style={{color: "red"}}/>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='deposit' className='form-label'>Deposit</label>
                        <Field type='number' name="deposit" className='form-control' id='deposit'/>
                        <ErrorMessage name="deposit" component="span" style={{color: "red"}}/>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='total' className='form-label'>Total</label>
                        <Field type='number' name="total" className='form-control' id='total'/>
                        <ErrorMessage name="total" component="span" style={{color: "red"}}/>
                    </div>
                    <div className="d-flex justify-content-center mt-2">
                        <Link to="/contracts">
                            <button className="btn btn-warning">Cancel</button>
                        </Link>
                        <button type='submit' className='btn btn-primary' style={{marginLeft: "10px"}}>Submit
                        </button>
                    </div>
                </Form>
            </div>
        </Formik>
    )
}
export default ContractCreate;
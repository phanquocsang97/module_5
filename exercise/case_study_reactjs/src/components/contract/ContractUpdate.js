import {Link, useNavigate, useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import * as contractService from "../../service/contract/contract_service";
import {toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as Yup from "yup";
import {ErrorMessage, Field, Form, Formik} from "formik";

export function ContractUpdate() {
    const navigate = useNavigate();
    const [contract, setContract] = useState();
    const {id} = useParams();

    useEffect(() => {
        findById();
    }, [id]);

    const findById = async () => {
        try {
            const response = await contractService.findById(id);
            setContract(response);
        } catch (e) {
            toast.warn("Cant find Id!!!");
        }
    }
    console.log(contract);

    const update = async (contract) => {
        try {
            const response = await contractService.updateContract(contract);
            console.log(response);
            if (response.status === 200) {
                toast.success("Update success");
                navigate("/contracts");
            } else {
                toast.warn("Update fail");
                navigate("/contracts");
            }
        } catch (e) {

        }
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

    if (!contract) {
        return null;
    }

    return (
        <>
            <Formik
                initialValues={contract}
                onSubmit={(values) => {
                    update(values);
                }}
                validationSchema={Yup.object(validateObject)}
            >
                <div>
                    <h1 style={{textAlign: "center"}}>Update Contract</h1>
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
        </>
    )
}
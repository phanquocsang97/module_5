import {Link, useNavigate, useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import * as villaService from "../../../service/facility/villa/villa_service";
import {toast} from "react-toastify";
import * as Yup from "yup";
import {ErrorMessage, Field, Form, Formik} from "formik";

export function VillaUpdate() {
    const navigate = useNavigate();
    const [villa, setVilla] = useState();
    const [types, setTypes] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        findById()
        listTypeRent()
    }, [id])

    const listTypeRent = async () => {
        try {
            const response = await villaService.getTypeRent();
            setTypes(response);
        } catch (e) {
            toast.warn("Fail");
        }
    }
    const findById = async () => {
        try {
            const response = await villaService.findById(id);
            setVilla(response);
        } catch (e) {
            toast.warn("Cant find Id");
        }
    }
    console.log(villa);

    const update = async (villa) => {
        try {
            const response = await villaService.updateVilla(villa);
            console.log(response);
            if (response.status === 200) {
                toast.success("Update Success");
                navigate("/villas");
            } else {
                toast.warn("Update Fail");
            }
        } catch (e) {

        }
    }
    const validateObject = {
        name: Yup.string()
            .required("Please input !!!"),
        area: Yup.number()
            .moreThan(0, "Input number bigger than 0")
            .required("Please input"),
        cost: Yup.number()
            .required("Please input !!!")
            .moreThan(0, "Input number bigger than 0"),
        capacity: Yup.number()
            .required("Please input !!!")
            .moreThan(0, "Input number bigger than 0"),
        image: Yup.string()
            .required("Please input !!!"),
        standard: Yup.string()
            .required("Please input !!!"),
        poolArea: Yup.number()
            .required("Please input !!!")
            .moreThan(0, "Input number bigger than 0"),
        floor: Yup.number()
            .required("Please input !!!")
            .moreThan(0, "Input number bigger than 0")
    }
    if (!villa) {
        return null;
    }
    return (
        <>
            <Formik
                initialValues={villa}
                onSubmit={(values) => {
                    update(values);
                }}
                validationSchema={Yup.object(validateObject)}>
                <div className='container'>
                    <h1 style={{textAlign: "center"}}>Create Villa</h1>
                    <Form>
                        <div className='mb-3'>
                            <label htmlFor='name' className='form-label'>Name</label>
                            <Field type='text' name="name" className='form-control' id='name'/>
                            <ErrorMessage name="name" component="span" style={{color: "red"}}/>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='area' className='form-label'>Area</label>
                            <Field type='number' name="area" className='form-control' id='area'/>
                            <ErrorMessage name="area" component="span" style={{color: "red"}}/>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='cost' className='form-label'>Cost</label>
                            <Field type='number' name="cost" className='form-control' id='cost'/>
                            <ErrorMessage name="cost" component="span" style={{color: "red"}}/>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='capacity' className='form-label'>Capacity</label>
                            <Field type='number' name="capacity" className='form-control' id='capacity'/>
                            <ErrorMessage name="capacity" component="span" style={{color: "red"}}/>
                        </div>
                        <div className='mb-3'>
                            <label>Type Rent</label>
                            <Field as="select" className='form-control' name="typeRent" style={{
                                textAlign: 'center'
                            }}>
                                {
                                    types.map(type => (
                                        <option key={type.id} value={JSON.stringify(type)}>{type.name}</option>
                                    ))
                                }
                            </Field>
                            <ErrorMessage name="typeRent" component="span" style={{color: "red"}}/>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='image' className='form-label'>Image</label>
                            <Field type='text' name="image" className='form-control' id='image'/>
                            <ErrorMessage name="image" component="span" style={{color: "red"}}/>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='standard' className='form-label'>Standard</label>
                            <Field type='text' name="standard" className='form-control' id='standard'/>
                            <ErrorMessage name="standard" component="span" style={{color: "red"}}/>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='description' className='form-label'>Description</label>
                            <Field type='text' name="description" className='form-control' id='description'/>
                            <ErrorMessage name="description" component="span" style={{color: "red"}}/>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='poolArea' className='form-label'>Pool Area</label>
                            <Field type='number' name="poolArea" className='form-control' id='poolArea'/>
                            <ErrorMessage name="poolArea" component="span" style={{color: "red"}}/>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='floor' className='form-label'>Floor</label>
                            <Field type='number' name="floor" className='form-control' id='floor'/>
                            <ErrorMessage name="floor" component="span" style={{color: "red"}}/>
                        </div>
                        <div className="d-flex justify-content-center mt-2">
                            <Link to="/villas">
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
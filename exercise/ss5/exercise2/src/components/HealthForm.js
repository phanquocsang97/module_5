import * as Yup from "yup";
import React from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {toast} from "react-toastify";

function HealthForm() {
    const initValue = {
        name: "",
        identity: "",
        // dayOfBirth: 1900,
        gender: "",
        nationality: "",
        company: "",
        position: "",
        healthInsurance: "",
        city: "",
        province: "",
        ward: "",
        houseNumber: "",
        phoneNumber: "",
        email: "",
        comeAround: "",
        signal: [],
        contact: []
    }

    const validateObject = {
        name: Yup.string()
            .required("Required"),
        identity: Yup.string()
            .required("Required"),
        dayOfBirth: Yup.number()
            .required("Required")
            .min(1900, "Bigger than 1900"),
        nationality: Yup.string()
            .required("Required"),
        city: Yup.string()
            .required("Required"),
        province: Yup.string()
            .required("Required"),
        houseNumber: Yup.string()
            .required("Required"),
        phoneNumber: Yup.string()
            .required("Required"),
        email: Yup.string()
            .required("Required")
            .matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, "Invalid email address")
    }
    return (
        <>
            <Formik
                initialValues={initValue}
                onSubmit={(values) => {
                    values.gender = +values.gender;
                    toast("Success!!")
                    console.log(values);
                }}
                validationSchema={Yup.object(validateObject)}
            >
                <div>
                    <h1 style={{textAlign: "center"}}>Health Form</h1>
                    <Form className="container">
                        <div className='mb-3'>
                            <label htmlFor='name' className='form-label'>Name</label>
                            <Field type='text' name="name" className='form-control' id='name'/>
                            <ErrorMessage name="name" component="span" style={{color: "red"}}/>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='identity' className='form-label'>Identity</label>
                            <Field type='text' name="identity" className='form-control' id='identity'/>
                            <ErrorMessage name="identity" component="span" style={{color: "red"}}/>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='dayOfBirth' className='form-label'>Day Of Birth</label>
                            <Field type='number' name="dayOfBirth" className='form-control' id='dayOfBirth'/>
                            <ErrorMessage name="dayOfBirth" component="span" style={{color: "red"}}/>
                        </div>
                        <div className='mb-3'>
                            <div className="form-check form-check-inline">
                                <Field className="form-check-input" type="radio" name="gender"
                                       id="inlineRadio1"
                                       value="1"/>
                                <label className="form-check-label" htmlFor="inlineRadio1">Male</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <Field className="form-check-input" type="radio" name="gender"
                                       id="inlineRadio2"
                                       value="0"/>
                                <label className="form-check-label" htmlFor="inlineRadio2">FeMale</label>
                            </div>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='nationality' className='form-label'>Nationality</label>
                            <Field type='text' name="nationality" className='form-control' id='nationality'/>
                            <ErrorMessage name="nationality" component="span" style={{color: "red"}}/>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='company' className='form-label'>Company</label>
                            <Field type='text' name="Company" className='form-control' id='Company'/>
                            <ErrorMessage name="Company" component="span" style={{color: "red"}}/>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='position' className='form-label'>Position in Company</label>
                            <Field type='text' name="position" className='form-control' id='position'/>
                            <ErrorMessage name="position" component="span" style={{color: "red"}}/>
                        </div>
                        <div className="form-check">
                            <Field className="form-check-input" type="checkbox" value="healthInsurance"
                                   name="healthInsurance"
                                   id="cb1"/>
                            <label className="form-check-label" htmlFor="healthInsurance">
                                Health Insurance
                            </label>
                        </div>
                        <h3>Contact address in Vietnam</h3>
                        <div className='mb-3'>
                            <label htmlFor='city' className='form-label'>City</label>
                            <Field type='text' name="city" className='form-control' id='city'/>
                            <ErrorMessage name="city" component="span" style={{color: "red"}}/>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='province' className='form-label'>Province</label>
                            <Field type='text' name="province" className='form-control' id='province'/>
                            <ErrorMessage name="province" component="span" style={{color: "red"}}/>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='ward' className='form-label'>Ward</label>
                            <Field type='text' name="ward" className='form-control' id='ward'/>
                            <ErrorMessage name="ward" component="span" style={{color: "red"}}/>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='houseNumber' className='form-label'>House Number</label>
                            <Field type='text' name="houseNumber" className='form-control' id='houseNumber'/>
                            <ErrorMessage name="houseNumber" component="span" style={{color: "red"}}/>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='phoneNumber' className='form-label'>Phone Number</label>
                            <Field type='text' name="phoneNumber" className='form-control' id='phoneNumber'/>
                            <ErrorMessage name="phoneNumber" component="span" style={{color: "red"}}/>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='email' className='form-label'>Email</label>
                            <Field type='text' name="email" className='form-control' id='email'/>
                            <ErrorMessage name="email" component="span" style={{color: "red"}}/>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='email' className='form-label'>In the past 14 days, have you been to any
                                country/territory? (can go through many countries)
                            </label>
                            <Field type='comeAround' name="comeAround" className='form-control' id='comeAround'/>
                        </div>
                        <label htmlFor='studentAge' className='form-label'>During the past 14 days, have you seen any of
                            these signs?
                        </label>
                        <div className="form-check">
                            <Field name="signal" className="form-check-input" type="checkbox" value="Sick"
                                   id="flexCheckDefault"/>
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                Sick
                            </label>
                        </div>
                        <div className="form-check">
                            <Field name="signal" className="form-check-input" type="checkbox" value="Cough" id="cb1"/>
                            <label className="form-check-label" htmlFor="cb1">
                                Cough
                            </label>
                        </div>
                        <div className="form-check">
                            <Field name="signal" className="form-check-input" type="checkbox" value="Breath"
                                   id="cb2"/>
                            <label className="form-check-label" htmlFor="cb2">
                                Difficult Breath
                            </label>
                        </div>
                        <label htmlFor='contact' className='form-label'>During the past 14 days, have you been in
                            contact with anyone?
                        </label>
                        <div className="form-check">
                            <Field name="contact" className="form-check-input" type="checkbox" value="yes"
                                   id="flexCheckDefault"/>
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                Yes
                            </label>
                        </div>
                        <div className="form-check">
                            <Field name="contact" className="form-check-input" type="checkbox" value="no" id="cb1"/>
                            <label className="form-check-label" htmlFor="cb1">
                                No
                            </label>
                        </div>
                        <button type='submit' className='btn btn-primary'>Submit</button>
                    </Form>
                </div>
            </Formik>
        </>
    )
}

export default HealthForm;
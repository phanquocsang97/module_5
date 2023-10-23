import React from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";

function ContactForm() {
    const initValue = {
        name: "",
        email: "",
        phone: "",
        message: ""
    }

    const validateObject = {
        name: Yup.string()
            .required("Required")
            .matches(/^[A-Za-z\s.'-]+$/, "Please enter the correct syntax"),
        email: Yup.string()
            .required("Required")
            .matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, "Please enter the correct syntax"),
        phone: Yup.string()
            .required("Required")
            .matches(/^(0|\+84)\d{9,10}$/, "Please enter the correct syntax start with 0 or+84"),

    }

    return (
        <>
            <Formik
                initialValues={initValue}
                onSubmit={(values) => {
                    console.log(values)
                }}
                validationSchema={Yup.object(validateObject)}
            >
                <div>
                    <h1>Contact Form</h1>
                    <Form style={{width: "50%"}} className="container">
                        <div className='mb-3'>
                            <label htmlFor='name' className='form-label'>Name</label>
                            <Field type='text' name="name" className='form-control' id='name'/>
                            <ErrorMessage name="name" component="span" style={{color: "red"}}/>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='email' className='form-label'>Email</label>
                            <Field type='text' name="email" className='form-control' id='email'/>
                            <ErrorMessage name="email" component="span" style={{color: "red"}}/>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='phone' className='form-label'>Phone</label>
                            <Field type='text' name="phone" className='form-control' id='phone'/>
                            <ErrorMessage name="phone" component="span" style={{color: "red"}}/>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='Message' className='form-label'>Message</label>
                            <Field type='text' name="Message" className='form-control' id='Message'/>
                        </div>
                        <button type='submit' className='btn btn-primary'>Submit</button>
                    </Form>
                </div>
            </Formik>
        </>
    )
}

export default ContactForm;
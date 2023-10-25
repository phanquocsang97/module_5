import * as BookService from "../service/BookService";
import { useNavigate} from "react-router-dom";
import React from "react";
import {Form,Field, Formik} from "formik";
import {toast} from "react-toastify";


function BookCreate() {

    const navigate = useNavigate();

    const bookCreate = async (data) => {
        console.log(data);
        const status = await BookService.create(data);
        if (status === 201) {
            navigate("/")
            toast.success("Create Success")
        } else {
            toast.warn("Create fail")
        }
    }
    const initValue = {
        id: 0,
        title: "",
        quantity: 0
    }

    return (<>
            <Formik
                initialValues={initValue}
                onSubmit={(values) => {
                    bookCreate(values)
                    console.log(values)
                }}
            >
                <div>
                    <h1>Book Create</h1>
                    <Form style={{width: "50%"}} className="container">
                        <div className='mb-3'>
                            <label htmlFor='title' className='form-label'>Title</label>
                            <Field type='text' name="title" className='form-control' id='title'/>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='quantity' className='form-label'>Quantity</label>
                            <Field type='number' name="quantity" className='form-control' id='quantity'/>
                        </div>
                        <button type='submit' className='btn btn-primary'>Submit</button>
                    </Form>
                </div>

            </Formik>
        </>
    )
}

export default BookCreate;
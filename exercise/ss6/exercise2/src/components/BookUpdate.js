import {useNavigate, useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import * as bookService from "../service/BookService"
import {toast} from "react-toastify";
import {Field, Form, Formik} from "formik";

export function BookUpdate() {
    const navigate = useNavigate();
    const [book, setBook] = useState()
    const {id} = useParams();
    useEffect(() => {
        findById()
    }, [id]);

    const findById = async () => {
        const response = await bookService.findById(id);
        setBook(response);
    }
    console.log(book);

    const update = async (book) => {
        const response = await bookService.updateBook(book);
        console.log(response);
        if (response.status === 200) {
            toast.success("Update success");
            navigate("/");
        } else {
            toast.warn("Update fail");
            navigate("/");
        }
    }

    if (!book) {
        return null;
    }
    return (
        <Formik
            initialValues={book}
            onSubmit={(book) => {
                update(book);
            }}
        >
            <div className='container'>
                <h1>Edit book</h1>
                <Form>
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
    )
}
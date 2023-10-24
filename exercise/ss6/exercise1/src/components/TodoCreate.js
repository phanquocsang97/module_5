import {Field, Form, Formik} from "formik";
import * as Yup from "yup";
import * as TodoListService from "../service/TodoListService"

import React from "react";
import {useNavigate} from "react-router-dom";

function TodoCreate() {
    const navigate = useNavigate()
    const todoCreate = async (data) => {
        console.log(data);
        const status = await TodoListService.create(data);
        if (status === 201) {
            navigate("/");
            alert("Success");
        } else {
            alert("Fail");
        }
    }
    const initValue = {
        id: 0,
        userId: 0,
        title: "",
        complete: "",
    }

    return (
        <Formik
            initialValues={initValue}
            onSubmit={(values) => {
                todoCreate(values);
                console.log(values)
            }}
        >
            <div>
                <h1>To Do Create</h1>
                <Form style={{width: "50%"}} className="container">
                    <div className='mb-3'>
                        <label htmlFor='userId' className='form-label'>User Id</label>
                        <Field type='number' name="userId" className='form-control' id='userId'/>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='title' className='form-label'>Title</label>
                        <Field type='text' name="title" className='form-control' id='title'/>
                    </div>
                    <div className='mb-3'>
                        <div>Completed</div>
                        <div className="form-check form-check-inline">
                            <Field className="form-check-input" type="radio" name="completed"
                                   id="inlineRadio1"
                                   value="1"/>
                            <label className="form-check-label" htmlFor="inlineRadio1">True</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <Field className="form-check-input" type="radio" name="completed"
                                   id="inlineRadio2"
                                   value="0"/>
                            <label className="form-check-label" htmlFor="inlineRadio2">False</label>
                        </div>
                    </div>
                    <button type='submit' className='btn btn-primary'>Submit</button>
                </Form>
            </div>
        </Formik>
    )
}

export default TodoCreate;
import * as bookService from "../service/BookService"
import {toast} from "react-toastify";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React from "react";

export function BookDelete(props) {
    console.log(props)
    const {handleClose,show,select} = props;


    const deleteBook = async (book) => {
        try {
            const status = await bookService.deleteBook(book.id);
            if (status === 200) {
                handleClose();
                toast.success("Delete Success");
            } else {
                toast.warn("Delete Fail");
            }
        } catch (e) {
            handleClose();
            toast("Delete Fail");
        }
    }
    return (show === true && (
        <>
        <div
            className="modal show"
            style={{display: 'block', position: 'initial'}}
        >
            <Modal.Dialog>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Delete</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>Are you sure want to delete this book {select.title}</p>
                </Modal.Body>

                <Modal.Footer>
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal"
                            onClick={handleClose}>Close
                    </button>

                    <Button variant="primary" onClick={() => deleteBook(select)}>Delete</Button>
                </Modal.Footer>
            </Modal.Dialog>
        </div>
            </>
        )
    )
}
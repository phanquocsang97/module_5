import React, {useEffect, useState} from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export function ModalDeleteVilla(props) {
     const {isOpen,villa,onCloseModal,handleSubmit} = props;


     useEffect(() => {
         setShow(isOpen);
     },[isOpen,villa,villa.id])
    const [show,setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
        onCloseModal();
    }
    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete</Modal.Title>
                </Modal.Header>
                <Modal.Body>Do you want to delete <b style={{color:"red"}}>{villa.name}</b>?
                    <p style={{color: "red"}}>  Notice: This action cannot be undone!</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => handleSubmit(villa.id)}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
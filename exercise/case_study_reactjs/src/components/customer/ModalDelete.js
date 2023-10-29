import React, {useEffect, useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalDeleteContract(props) {
    const {isOpen, customer, onCloseModal, handleSubmit} = props;

    useEffect(() => {
        setShow(isOpen)
    }, [isOpen, customer, customer.id])

    const [show, setShow] = useState(false);

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
                <Modal.Body>Do you want to delete <b style={{color:"red"}}>{customer.name}</b>?
                <p style={{color: "red"}}>  Notice: This action cannot be undone!</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => handleSubmit(customer.id)}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalDeleteContract;
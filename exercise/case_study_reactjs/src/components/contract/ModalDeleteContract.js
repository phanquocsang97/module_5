import React, {useEffect, useState} from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function ModalDeleteContract(props) {
    const {isOpen, contract, onCloseModal, handleSubmit} = props;
    const [show, setShow] = useState(false);

    useEffect(() => {
        setShow(isOpen);
    }, [isOpen, contract, contract.id])

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
                <Modal.Body>Do you want to delete {contract.contractNumber}?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => handleSubmit(contract.id)}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
export default ModalDeleteContract;
import React, {useEffect, useState} from "react";
import * as contractService from "../../service/contract/contract_service";
import {Link} from "react-router-dom";
import {toast} from "react-toastify";
import ModalDeleteContract from "./ModalDeleteContract";


function ContractList() {
    const [contracts, setContracts] = useState([]);
    const [contract, setContract] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const [nameSearch,setNameSearch] = useState("");
    const [startDateSearch,setStartDateSearch] = useState("");


    useEffect(() => {
        getContract();
    }, [nameSearch,startDateSearch]);

    const getContract = async () => {
        const response = await contractService.getAll(nameSearch,startDateSearch);
        setContracts(response);
    }

    const handleModal = (data) => {
        setIsOpen(true);
        setContract(data);
    }

    const onCloseModal = () => {
        setIsOpen(false);
        getContract();
    }

    const handleSubmit = async (id) => {
        console.log(id);
        try {
            const status = await contractService.deleteContract(id);
            if (status === 200) {
                toast.success("Delete Success");
            } else {
                toast.warn("Delete Fail");
            }
        } catch (e) {

        }
        onCloseModal();
    }
    const VND = new Intl.NumberFormat('vi-VN',{
        style : "currency",
        currency : "VND"
    })

    return (
        <div className="container-fluid" style={{minHeight: " 10px"}}>
            <h1 style={{textAlign: "center"}}>Contract List</h1>
            <Link to="/contracts/create" className="btn btn-outline-primary">
                Create
            </Link>
            <input type="text" onChange={(event) => setNameSearch(event.target.value)} placeholder="Enter Contract Number"/>
            <input type="text" onChange={(event) => setStartDateSearch(event.target.value)} placeholder="Enter Start Date"/>
            <table className="table table-striped" style={{width: "100%"}}>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Contract Number</th>
                    <th>Start Day</th>
                    <th>End Day</th>
                    <th>Deposit</th>
                    <th>Total</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {contracts.length!== 0 ?
                    contracts.map((contract, index) => (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{contract.contractNumber}</td>
                        <td>{contract.startDate}</td>
                        <td>{contract.endDate}</td>
                        <td>{VND.format(contract.deposit)}</td>
                        <td>{VND.format(contract.total)}</td>
                        <td>
                            <Link className="btn - btn-outline-success"
                                  to={`/contracts/update/${contract.id}`}>
                                Update
                            </Link>
                            <Link style={{marginLeft: "10px"}}
                                  to="/contracts" className="btn btn-outline-secondary"
                                  onClick={() => handleModal(contract)}>
                                Delete
                            </Link>
                        </td>
                    </tr>
                ))
                :(
                        <td colSpan="10" style={{textAlign: "center", fontSize: "25px"}}>No Data</td>
                    )
                }
                </tbody>
            </table>
            {isOpen && <ModalDeleteContract isOpen={isOpen}
                                            contract={contract}
                                            onCloseModal={onCloseModal}
                                            handleSubmit={handleSubmit}
            />

            }
        </div>
    )
}

export default ContractList;
import React, {useEffect, useState} from "react";
import * as contractService from "../../service/contract/contract_service";
import {Link} from "react-router-dom";


function ContractList() {
    const [contracts,setContracts] = useState([]);
    const [contract,setContract] = useState(null);

    useEffect(() => {
        getContract();
    },[])

    const getContract = async () => {
        const response = await contractService.getAll();
        setContracts(response);
    }


    return (
        <div className="container-fluid" style={{minHeight: " 10px"}}>
            <h1 style={{textAlign: "center"}}>Contract List</h1>
            <Link to="/contracts/create" className="btn btn-outline-primary">
                Create
            </Link>
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
                {contracts.map((contract,index) => (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{contract.contractNumber}</td>
                        <td>{contract.startDate}</td>
                        <td>{contract.endDate}</td>
                        <td>{contract.deposit}</td>
                        <td>{contract.total}</td>
                        <td></td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}
export default ContractList;
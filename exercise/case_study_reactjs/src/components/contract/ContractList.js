import React from "react";
import {getAll} from "../../service/contract/contract_service";

function ContractList() {
    return (
        <div>
            <h1>Contract List</h1>
            <table>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Contract Number</th>
                    <th>Start Day</th>
                    <th>End Day</th>
                    <th>Deposit</th>
                    <th>Cost</th>
                </tr>
                </thead>
                <tbody>
                {getAll().map(contract => (
                    <tr key={contract.id}>
                        <td>{contract.id}</td>
                        <td>{contract.contractNumber}</td>
                        <td>{contract.startDay}</td>
                        <td>{contract.endDay}</td>
                        <td>{contract.deposit}</td>
                        <td>{contract.cost}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}
export default ContractList;
import React from "react";
import {getAll} from "../../service/facility/facility_service";

function FacilityList() {
    return(
        <div>
            <h1>Facility List</h1>
            <table>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Area</th>
                    <th>Cost</th>
                    <th>Capacity</th>
                    <th>Type</th>
                    <th>Image</th>
                </tr>
                </thead>
                <tbody>
                {getAll().map(facility =>(
                    <tr key={facility.id}>
                        <td>{facility.id}</td>
                        <td>{facility.name}</td>
                        <td>{facility.area}</td>
                        <td>{facility.cost}</td>
                        <td>{facility.capacity}</td>
                        <td>{facility.type}</td>
                        <td>{facility.image}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}
export default FacilityList;
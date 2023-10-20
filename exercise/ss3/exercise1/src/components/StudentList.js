import React, {Component} from 'react';
import App from "../App";

class StudentList extends Component {
    constructor() {
        super();
        this.state = {
            list: [
                {
                    id: 1,
                    name: "Nguyễn Văn A",
                    age: 30,
                    address: "Hà Nội"
                }
                ,
                {
                    id: 2,
                    name: "Nguyễn Văn B",
                    age: 31,
                    address: "Đà Nẵng"
                },
                {
                    id: 3,
                    name: "Nguyễn Văn C",
                    age: 32,
                    address: "Huế"
                }
            ]
        }
    }

    render() {
        return (
            <div className="container">
                <h1>Student List</h1>
                <table border="1px">
                    <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Address</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.list.map((student) => (
                        <tr key={student.id}>
                            <td>{student.id}</td>
                            <td>{student.name}</td>
                            <td>{student.age}</td>
                            <td>{student.address}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default StudentList;



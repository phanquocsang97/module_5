import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, getAll } from "../reduxs/middlewares/UserMiddleware";

export function UserList() {
    const users = useSelector((store) => store.users);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAll());
    }, []);

    async function deleteByid(id) {
        dispatch(deleteUser(id));
        console.log(typeof id);
    }
    if (!users) {
        return null;
    }
    return (
        <>
        <h1>users List</h1>
    <table>
    <thead>
    <tr>
    <th>Id</th>
    <th>Name</th>
    <th>email</th>
    <th>Website</th>
    </tr>
    </thead>
    <tbody>
    {users
        ? users.map((temp, index) => {
            return (
                <tr key={index}>
                <td>{temp.id}</td>
                <td>{temp.name}</td>
                <td>{temp.email}</td>
                <td>{temp.Website}</td>
                <button onClick={(event) => deleteByid(temp.id)}>
            delete
            </button>
            </tr>
        );
        })
        : ""}
</tbody>
    </table>
    </>
);
}
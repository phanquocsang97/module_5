import React, {useEffect, useState} from "react";
import * as TodoListService from "../service/TodoListService"
import {NavLink} from "react-router-dom";

function TodoList() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        getTodos()
    }, [])
    console.log(todos)

    const getTodos = async () => {
        setTodos(await TodoListService.getAll())
    }
    return (
        <div>
            <NavLink to="/create">
                <button className="btn btn-primary">Create</button>
            </NavLink>
            <h1>To Do List</h1>
            <table>
                <thead>
                <tr>
                    <th>Id</th>
                    <th>User Id</th>
                    <th>Title</th>
                    <th>Completed</th>
                </tr>
                </thead>
                <tbody>
                {todos.map((todo) => (
                    <tr key={todo.id}>
                        <td>{todo.id}</td>
                        <td>{todo.userId}</td>
                        <td>{todo.title}</td>
                        <td>{todo.completed ? "Yes" : "No"}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}

export default TodoList
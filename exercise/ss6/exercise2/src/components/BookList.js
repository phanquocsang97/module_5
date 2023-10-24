import React, {useEffect, useState} from "react";
import * as BookService from "../service/BookService"
import {Link, NavLink} from "react-router-dom";
function BookList() {

    const [books,setBooks] = useState([]);

    useEffect(() => {
        getBook();
    },[])

    console.log(books)

    const getBook = async() => {
        setBooks(await BookService.getAll())
    }
     return(
        <div className="container" >
            <Link to="/create">
                create
            </Link>
            <h1>Book List</h1>
            <table className="table">
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Quantity</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {books.map((book) => (
                    <tr key={book.id}>
                        <td>{book.id}</td>
                        <td>{book.title}</td>
                        <td>{book.quantity}</td>
                        <td></td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
     )
}
export default BookList;
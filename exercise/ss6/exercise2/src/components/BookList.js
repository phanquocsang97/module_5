import React, {useEffect, useState} from "react";
import * as bookService from "../service/BookService";
import {BookDelete} from "./BookDelete";
import {Link} from "react-router-dom";

function BookList() {

    const [books, setBooks] = useState([]);
    const [book, setBook] = useState(null);
    const [status, setStatus] = useState(false);

    useEffect(() => {
        getBook();
    }, []);

    const getBook = async () => {
        setBooks(await bookService.getAll())
    }

    const handleModal = (data) => {
        setStatus(true);
        setBook(data);
    }

    const closeModel = () => {
        setStatus(false);
        getBook();
    }
    return (
        <div className="container">
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
                        <td>
                            <Link to="/" className="btn btn-outline-secondary"
                                  onClick={() => handleModal(book)}>Delete</Link>
                            <Link className="btn btn-success" to={`/update/${book.id}`}>Update</Link>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            <BookDelete
                show={status}
                select={book}
                handleClose={closeModel}
            />
        </div>
    )
}

export default BookList;
import './App.css';
import React from "react";
import {Routes, Route} from "react-router-dom";
import BookList from "./components/BookList";
import BookCreate from "./components/BookCreate";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {BookUpdate} from "./components/BookUpdate";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<BookList/>}/>
                <Route path="/create" element={<BookCreate/>}/>
                <Route path="/update/:id" element={<BookUpdate/>}/>
            </Routes>
            <ToastContainer/>
        </div>
    );
}

export default App;

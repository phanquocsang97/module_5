import logo from './logo.svg';
import './App.css';
import React from "react";
import {Routes,Route} from "react-router-dom";
import BookList from "./components/BookList";
import BookCreate from "./components/BookCreate";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<BookList/>}/>
        <Route path="/create" element={<BookCreate/>}/>
      </Routes>
    </div>
  );
}

export default App;

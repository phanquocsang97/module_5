import logo from './logo.svg';
import './App.css';
import TodoList from "./components/TodoList";
import React from "react";
import {Routes,Route} from "react-router-dom";
import TodoCreate from "./components/TodoCreate";



function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<TodoList/>}/>
          <Route path="/create" element={<TodoCreate/>}/>
        </Routes>

    </div>
  );
}

export default App;

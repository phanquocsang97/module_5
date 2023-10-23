import logo from './logo.svg';
import './App.css';
import React from "react";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HealthForm from "./components/HealthForm";

function App() {
    return (
        <div>
            <HealthForm/>
            <ToastContainer></ToastContainer>
        </div>
    );
}

export default App;

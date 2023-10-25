import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import React from "react";
import Footer from "./components/Footer";
import {Route, Routes} from "react-router-dom";
import CustomerList from "./components/customer/CustomerList";
import CustomerCreate from "./components/customer/CustomerCreate";


function App() {
    return (
        <div>
            {/*<Header/>*/}
            <Routes>
                <Route path="/customers" element={<CustomerList/>}/>
                <Route path="/customers/create" element={<CustomerCreate/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;

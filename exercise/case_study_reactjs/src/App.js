import './App.css';
import React from "react";
import {Route, Routes} from "react-router-dom";
import CustomerList from "./components/customer/CustomerList";
import CustomerCreate from "./components/customer/CustomerCreate";
import {ToastContainer} from "react-toastify";
import {CustomerUpdate} from "./components/customer/CustomerUpdate";
import Footer from "./components/Footer";
import ContractList from "./components/contract/ContractList";
import ContractCreate from "./components/contract/ContractCreate";
import {ContractUpdate} from "./components/contract/ContractUpdate";


function App() {
    return (
        <div>
            {/*<Header/>*/}
            <Routes>
                <Route path="/customers" element={<CustomerList/>}/>
                <Route path="/customers/create" element={<CustomerCreate/>}/>
                <Route path="/customers/update/:id" element={<CustomerUpdate/>}/>
                <Route path="/contracts" element={<ContractList/>}/>
                <Route path="/contracts/create" element={<ContractCreate/>}/>
                <Route path="/contracts/update/:id" element={<ContractUpdate/>}/>
            </Routes>
            <Footer/>
            <ToastContainer/>
        </div>
    );
}

export default App;

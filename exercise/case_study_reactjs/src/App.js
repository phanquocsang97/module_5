import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import React from "react";
import Footer from "./components/Footer";
import {Route, Routes} from "react-router-dom";
import FacilityList from "./components/facility/FacilityList";
import CustomerList from "./components/customer/CustomerList";
import ContractList from "./components/contract/ContractList";


function App() {
    return (
        <div>
            <Header/>
            <Routes>
                <Route path="/facilities" element={<FacilityList/>}/>
                <Route path="/customers" element={<CustomerList/>}/>
                <Route path="/contracts" element={<ContractList/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;

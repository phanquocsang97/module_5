import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import React from "react";
import Footer from "./components/Footer";
import Body from "./components/Body";

let facility = [
    {
        id: 1,
        img: "https://www.monchericruises.vn/wp-content/uploads/2020/09/4-5.jpg",
        title: "OCEAN SUTIE",
        size: 85.8
    },
    {
        id: 2,
        img: "https://www.sooribali.com/img/site_images/soori-bali-accommodation-deluxe-ocean-pool-villa-02-mh.jpg",
        title: "OCEAN STUDIO SUTIE",
        size: 40.1
    },
    {
        id: 3,
        img: "https://sooribali.com/img/site_images/soori-bali-hotel-accommodations-deluxe-ocean-pool-villa.jpg",
        title: "OCEAN DELUXE",
        size: 43.7
    },
    {
        id: 4,
        img: "https://media-cdn.tripadvisor.com/media/photo-s/29/ad/27/bb/soori-bali-ocean-pool.jpg",
        title: "GARDEN DELUXE",
        size: 40.1
    },
]

function App() {
    return (
        <div>
            <Header/>
            <Body facility = {facility}/>
            <Footer/>
        </div>
    );
}

export default App;

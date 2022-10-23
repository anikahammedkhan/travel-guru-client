import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';
import Navigation from '../Components/Navbar/Navbar';


const Main = () => {
    return (
        <div>
            <Navigation />
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;
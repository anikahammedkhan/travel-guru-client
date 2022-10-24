import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Assets/logo1.png';


const Navbar = () => {
    return (
        <header className="p-2 bg-amber-400 text-gray-100">
            <div className="container flex justify-between h-16 mx-auto">
                <div className="flex">
                    <Link to="/" aria-label="Back to homepage" className="flex items-center p-2">
                        <img src={logo} alt="" />
                    </Link>
                    <ul className="items-stretch hidden space-x-3 lg:flex">
                        <li className="flex">
                            <Link to="/news" className="flex items-center px-4 -mb-1 border-b-2 border-transparent text-xl font-semibold">News</Link>
                        </li>
                        <li className="flex">
                            <Link to="/destination" className="flex items-center px-4 -mb-1 border-b-2 border-transparent text-xl font-semibold">Destination</Link>
                        </li>
                        <li className="flex">
                            <Link to="/blog" className="flex items-center px-4 -mb-1 border-b-2 border-transparent text-xl font-semibold">Blog</Link>
                        </li>
                        <li className="flex">
                            <Link to="/contact" className="flex items-center px-4 -mb-1 border-b-2 border-transparent text-xl font-semibold">Contact</Link>
                        </li>
                    </ul>
                </div>
                <div className="items-center flex-shrink-0 hidden lg:flex">
                    <div className="flex items-center md:space-x-4">
                        <button type="button" className="px-8 py-3 font-semibold rounded bg-indigo-600 text-white mr-3">Log in</button>
                    </div>
                    <button className="px-8 py-3 font-semibold rounded bg-sky-600 text-white">Register</button>
                </div>
                <button className="p-4 lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-gray-100">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
        </header>
    );
};

export default Navbar;
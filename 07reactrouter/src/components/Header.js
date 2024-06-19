import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <img
                            src="data:image/jpeg;base64,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"
                            className="mr-3 h-12"
                            alt="Logo"
                        />
                    </Link>
                    <div className="flex items-center lg:order-2">
                        <Link
                            to="#"
                            className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Log in
                        </Link>
                        <Link
                            to="#"
                            className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Get started
                        </Link>
                    </div>
                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                       <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                to="/"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
                                        ${isActive ? "text-orange-700" : "text-gray-700" } lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/about"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
                                        ${isActive ? "text-orange-700" : "text-gray-700" } lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/contact"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
                                        ${isActive ? "text-orange-700" : "text-gray-700" } lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Contact
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/github"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
                                        ${isActive ? "text-orange-700" : "text-gray-700" } lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Github
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/user"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
                                        ${isActive ? "text-orange-700" : "text-gray-700" } lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    User
                                </NavLink>
                            </li>
                            
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}



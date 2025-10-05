import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { SearchForm } from "../common/SearchForm";

const Navbar: React.FC = () => {
    const location = useLocation();
    const isHome = location.pathname === "/";

    return (
        <nav className="bg-[#212121] shadow-[0_8px_16px_-6px_rgba(0,0,0,1)] py-4">
            <div className="flex items-center justify-around">
                <Link to="/" className="text-2xl font-bold text-white">
                    Movie Search App
                </Link>

                {isHome ? (
                    <SearchForm />
                ) : (
                    <Link to="/" className="flex items-center text-blue-500 hover:text-blue-300">
                        <ArrowLeft className="w-5 h-5 mr-1" /> Back
                    </Link>
                )}
            </div>
        </nav>
    );
};

export default Navbar;

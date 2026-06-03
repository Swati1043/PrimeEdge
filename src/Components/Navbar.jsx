import React, { useContext } from 'react'
import { Link, useLocation, useNavigate } from "react-router-dom"
import { SearchContext } from '../App'
function Navbar() {

    const navigate = useNavigate()
    const location = useLocation()
    const { search, setSearch } = useContext(SearchContext)

    return (
    <nav className="sticky top-0 z-50 bg-[#111827]/90 backdrop-blur-lg border-b border-cyan-500/20 shadow-[0_4px_20px_rgba(6,182,212,0.15)] text-white px-4 md:px-8 py-4">
        
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

        {/* Logo */}
        <h2
            onClick={() => navigate("/")}
            className="font-extrabold text-2xl md:text-3xl cursor-pointer text-[#06B6D4] tracking-wide hover:scale-105 transition-all duration-300 text-center md:text-left"
        >
            PrimeEdge
        </h2>

        {/* Search */}
        {location.pathname === "/products" && (
            <div className="w-full md:flex-1 md:max-w-xl md:mx-10">
            <div className="relative">
                <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search products..."
                className="
                    w-full
                    py-3
                    pl-5
                    pr-4
                    rounded-full
                    bg-[#1F2937]
                    border border-[#374151]
                    text-white
                    placeholder-gray-400
                    outline-none
                    focus:border-[#06B6D4]
                    focus:ring-4
                    focus:ring-cyan-500/20
                    transition-all
                "
                />
            </div>
            </div>
        )}

        {/* Nav Links */}
        <div className="flex items-center justify-center md:justify-end gap-5 md:gap-8 flex-wrap">

            <Link
            to="/home"
            className="
                relative
                text-gray-300
                hover:text-[#06B6D4]
                transition-all
                after:absolute
                after:left-0
                after:-bottom-1
                after:w-0
                after:h-[2px]
                after:bg-[#06B6D4]
                after:transition-all
                hover:after:w-full
            "
            >
            Home
            </Link>

            <Link
            to="/products"
            className="
                relative
                text-gray-300
                hover:text-[#06B6D4]
                transition-all
                after:absolute
                after:left-0
                after:-bottom-1
                after:w-0
                after:h-[2px]
                after:bg-[#06B6D4]
                after:transition-all
                hover:after:w-full
            "
            >
            Products
            </Link>

            {/* Profile */}
            <div className="w-10 h-10 rounded-full bg-[#06B6D4] text-black flex items-center justify-center font-bold cursor-pointer hover:scale-110 transition-all">
            P
            </div>

        </div>

        </div>
    </nav>
    )
}

export default Navbar
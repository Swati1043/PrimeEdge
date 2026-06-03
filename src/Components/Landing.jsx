import React from 'react'
import { useNavigate } from 'react-router-dom'

function Landing() {
  const navigate = useNavigate()

  return (
    <div className="min-h-[87vh] flex items-center justify-center px-4 sm:px-6 bg-[#111827]">

      <div className="text-center max-w-4xl">

        <span className="inline-block px-4 sm:px-5 py-2 mb-6 text-xs sm:text-sm font-semibold text-[#06B6D4] bg-[#1F2937] border border-[#06B6D4] rounded-full">
          💎 Multi Category E-Commerce Platform
        </span>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white leading-tight">
          Welcome to{" "}
          <span className="text-[#06B6D4]">
            PrimeEdge
          </span>
        </h1>

        <p className="mt-5 sm:mt-6 text-base sm:text-lg md:text-2xl text-gray-400 px-2">
          Discover Amazing Products at the Best Prices
        </p>

        <button
          onClick={() => navigate("/products")}
          className="
            mt-8 sm:mt-10
            px-6 sm:px-8
            py-3 sm:py-4
            bg-[#06B6D4]
            text-black
            font-semibold
            text-sm sm:text-base
            rounded-full
            hover:bg-[#0891B2]
            transition-all
            duration-300
            hover:scale-105
          "
        >
          Explore Categories →
        </button>

      </div>

    </div>
  )
}

export default Landing
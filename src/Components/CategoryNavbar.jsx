import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { setCategory } from '../Redux/ProductSlice'
import SortByPrice from './SortByPrice'

function CategoryNavbar() {
  const dispatch = useDispatch()

  return (
    <div className="px-4 md:px-6 py-4 bg-[#111827] border-b border-[#1F2937]">

      <nav className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-3">

        <Link
          onClick={() => {
            dispatch(setCategory("all"))
          }}
          to="/products"
          className="
            w-full sm:w-auto
            text-center
            px-4 py-2
            rounded-full
            bg-[#1F2937]
            border border-[#374151]
            text-gray-300
            hover:text-[#06B6D4]
            hover:border-[#06B6D4]
            hover:bg-[#0F172A]
            transition-all duration-300
          "
        >
          All Categories
        </Link>

        <Link
          onClick={() => {
            dispatch(setCategory("men's clothing"))
          }}
          to="/products"
          className="
            w-full sm:w-auto
            text-center
            px-4 py-2
            rounded-full
            bg-[#1F2937]
            border border-[#374151]
            text-gray-300
            hover:text-[#06B6D4]
            hover:border-[#06B6D4]
            hover:bg-[#0F172A]
            transition-all duration-300
          "
        >
          Men's Collection
        </Link>

        <Link
          onClick={() => {
            dispatch(setCategory("women's clothing"))
          }}
          to="/products"
          className="
            w-full sm:w-auto
            text-center
            px-4 py-2
            rounded-full
            bg-[#1F2937]
            border border-[#374151]
            text-gray-300
            hover:text-[#06B6D4]
            hover:border-[#06B6D4]
            hover:bg-[#0F172A]
            transition-all duration-300
          "
        >
          Women's Collection
        </Link>

        <Link
          onClick={() => {
            dispatch(setCategory("jewelery"))
          }}
          to="/products"
          className="
            w-full sm:w-auto
            text-center
            px-4 py-2
            rounded-full
            bg-[#1F2937]
            border border-[#374151]
            text-gray-300
            hover:text-[#06B6D4]
            hover:border-[#06B6D4]
            hover:bg-[#0F172A]
            transition-all duration-300
          "
        >
          Jewelry
        </Link>

        <Link
          onClick={() => {
            dispatch(setCategory("electronics"))
          }}
          to="/products"
          className="
            w-full sm:w-auto
            text-center
            px-4 py-2
            rounded-full
            bg-[#1F2937]
            border border-[#374151]
            text-gray-300
            hover:text-[#06B6D4]
            hover:border-[#06B6D4]
            hover:bg-[#0F172A]
            transition-all duration-300
          "
        >
          Electronics
        </Link>

        <div className="w-full sm:w-auto sm:ml-auto">
          <SortByPrice />
        </div>

      </nav>

    </div>
  )
}

export default CategoryNavbar
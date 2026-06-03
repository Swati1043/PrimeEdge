import React, { useContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { ProductThunk } from '../Redux/ProductSlice'
import CategoryNavbar from './CategoryNavbar'
import { SearchContext, SortContext } from '../App'
import { useNavigate } from 'react-router-dom'

function Products() {

  const { products, loading, error, category } = useSelector((state) => state.product)
  const dispatch = useDispatch()
  const { search } = useContext(SearchContext)
  const { sortOrder } = useContext(SortContext)
  const navigate = useNavigate()
  const [currentPage, setCurrentPage] = useState(1)

  const recordsPerPage = 10

  useEffect(() => {
    if(products.length == 0){
      dispatch(ProductThunk())
    }
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#111827]">
        <div className="w-14 h-14 border-4 border-[#374151] border-t-[#06B6D4] rounded-full animate-spin"></div>

        <h2 className="mt-4 text-xl font-semibold text-[#06B6D4]">
          Loading Products...
        </h2>

        <p className="text-gray-400 mt-1">
          Please wait while we fetch the products.
        </p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#111827]">
        <div className="text-6xl mb-4">⚠️</div>

        <h2 className="text-2xl font-bold text-red-500">
          Something Went Wrong
        </h2>

        <p className="text-gray-400 mt-2 text-center">
          We couldn't load the products.
        </p>

        <p className="text-gray-500 text-sm mt-1">
          Please try again later.
        </p>
      </div>
    )
  }

  const filterProducts =
    category == "all"
      ? products
      : products.filter((item) => item.category == category)

  const searchProducts = filterProducts.filter((item) => {
    return (
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.category.toLowerCase().includes(search.toLowerCase())
    )
  })

  let sortedProducts = [...searchProducts]

  if (sortOrder === "lowToHigh") {
    sortedProducts.sort((a, b) => a.price - b.price)
  }

  if (sortOrder === "highToLow") {
    sortedProducts.sort((a, b) => b.price - a.price)
  }

  // Pagination logic
  const lastIndex = currentPage * recordsPerPage
  const firstIndex = lastIndex - recordsPerPage
  const currentProducts = sortedProducts.slice(
    firstIndex,
    lastIndex
  )

  const totalPages = Math.ceil(
    sortedProducts.length / recordsPerPage
  )

  const pageNumbers = []
  for(let i = 1; i <= totalPages; i++){
    pageNumbers.push(i)
  }

  return (
    <div className="bg-[#111827] min-h-screen">
      <CategoryNavbar />

      <h1 className="py-8 text-3xl md:text-4xl font-extrabold text-center text-[#06B6D4]">
        Our Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 md:gap-7 px-4 md:px-8 pb-10">

        {
          currentProducts.length === 0
            ? (
              <div className="col-span-full flex flex-col items-center justify-center py-16">
                <div className="text-5xl mb-3">🔍</div>

                <h2 className="text-2xl font-bold text-[#06B6D4]">
                  No Products Found
                </h2>

                <p className="text-gray-400 mt-2 text-center">
                  We couldn't find any products matching your search.
                </p>

                <p className="text-gray-500 text-sm mt-1">
                  Try a different keyword or category.
                </p>
              </div>
            )
            : currentProducts.map((item) => (
              <div
                key={item.id}
                className="
                  flex flex-col
                  bg-[#1F2937]
                  rounded-2xl
                  border border-[#374151]
                  shadow-lg
                  hover:border-[#06B6D4]
                  hover:shadow-[0_0_20px_rgba(6,182,212,0.25)]
                  hover:-translate-y-2
                  transition-all
                  duration-300
                  overflow-hidden
                  cursor-pointer
                "
              >

                {/* Product Image */}
                <div className="h-44 sm:h-40 p-4 flex items-center justify-center bg-[#111827]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full object-contain hover:scale-105 transition-all duration-300"
                  />
                </div>

                {/* Product Details */}
                <div className="p-4 flex flex-col min-h-[200px]">

                  <h2 className="text-sm font-semibold text-white leading-5 min-h-[60px]">
                    {item.title}
                  </h2>

                  <div className="flex items-center gap-2 mt-3">
                    <span className="bg-[#164E63] text-[#67E8F9] text-[10px] px-2 py-1 rounded-full">
                      ⭐ {item.rating.rate}
                    </span>

                    <span className="text-xs text-gray-400">
                      ({item.rating.count})
                    </span>
                  </div>

                  <p className="text-xs text-gray-400 mt-2 capitalize">
                    {item.category}
                  </p>

                  <div className="mt-auto pt-4 flex items-center justify-between gap-2">

                    <span className="text-lg md:text-xl font-bold text-[#06B6D4]">
                      ${item.price.toFixed(2)}
                    </span>

                    <button
                      onClick={() => {
                        navigate(`/productsInfo/${item.id}`)
                      }}
                      className="
                        px-3
                        md:px-4
                        py-2
                        text-xs
                        font-semibold
                        bg-[#06B6D4]
                        text-black
                        rounded-lg
                        hover:bg-[#0891B2]
                        hover:scale-105
                        transition-all
                      "
                    >
                      View
                    </button>

                  </div>

                </div>

              </div>
            ))
        }

      </div>

      {/* Pagination */}
      <div className="flex justify-center gap-3 py-8">
        {
          pageNumbers.map((page) => (
            <button
              key={page}
              onClick={() => {
                setCurrentPage(page)
              }}
              className={
                currentPage === page
                ? "px-4 py-2 rounded-lg bg-[#06B6D4] text-black font-semibold"
                : "px-4 py-2 rounded-lg bg-[#1F2937] text-white border border-[#374151]"
              }
            >
              {page}
            </button>
          ))
        }
      </div>
    </div>


  )
}

export default Products
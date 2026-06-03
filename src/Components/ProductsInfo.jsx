import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'

function ProductsInfo() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { products } = useSelector((state) => state.product)

  const productDetails = products.find(
    (item) => item.id == id
  )

  if (!productDetails) {
    return (
      <div className="min-h-screen bg-[#111827] flex items-center justify-center">
        <h2 className="text-xl sm:text-2xl font-bold text-[#06B6D4] text-center">
          Product Not Found
        </h2>
      </div>
    )
  }

  return (
    <div className="min-h-[87.5vh] bg-[#111827] flex items-center justify-center px-4 sm:px-6 py-6">

      <div
        className="
          w-full
          max-w-4xl
          bg-[#1F2937]
          border
          border-[#374151]
          rounded-3xl
          overflow-hidden
          shadow-xl
          hover:shadow-[0_0_25px_rgba(6,182,212,0.15)]
          transition-all
          duration-300
        "
      >

        <div className="flex flex-col md:flex-row">

          {/* Left Image Section */}
          <div
            className="
              w-full
              md:w-[35%]
              bg-[#111827]
              flex
              items-center
              justify-center
              p-6 sm:p-8
            "
          >
            <img
              src={productDetails.image}
              alt={productDetails.title}
              className="
                h-44
                sm:h-52
                object-contain
                hover:scale-105
                transition-all
                duration-500
              "
            />
          </div>

          {/* Right Content Section */}
          <div className="w-full md:w-[65%] p-5 sm:p-8 flex flex-col">

            <div className="flex items-center gap-3 mb-3 flex-wrap">

              <span
                className="
                  bg-[#164E63]
                  text-[#67E8F9]
                  text-xs
                  px-3
                  py-1
                  rounded-full
                  font-semibold
                "
              >
                ⭐ {productDetails.rating.rate}
              </span>

              <span className="text-gray-400 text-sm">
                ({productDetails.rating.count} Reviews)
              </span>

            </div>

            <h1 className="text-xl sm:text-2xl font-bold text-white mb-4 leading-tight">
              {productDetails.title}
            </h1>

            <span
              className="
                w-fit
                bg-[#111827]
                border
                border-[#374151]
                text-[#06B6D4]
                text-xs
                px-3
                py-1
                rounded-full
                capitalize
                mb-4
              "
            >
              {productDetails.category}
            </span>

            <p
              className="
                text-gray-300
                leading-6 sm:leading-7
                text-sm
                mb-6
              "
            >
              {productDetails.description}
            </p>

            <div className="mt-auto">

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-5">

                <h2 className="text-3xl sm:text-2xl font-bold text-[#06B6D4]">
                  ${productDetails.price.toFixed(2)}
                </h2>

              </div>

              <div className="flex justify-end sm:flex-row gap-3">

                <button
                  onClick={() => navigate('/products')}
                  className="
                    w-full sm:w-auto
                    px-6
                    py-3
                    border
                    border-[#374151]
                    text-gray-300
                    rounded-xl
                    hover:border-[#06B6D4]
                    hover:text-[#06B6D4]
                    transition-all
                  "
                >
                  Back
                </button>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default ProductsInfo
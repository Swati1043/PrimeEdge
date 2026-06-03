import React, { useContext } from 'react'
import { SortContext } from '../App'

function SortByPrice() {
  const { sortOrder, setSortOrder } = useContext(SortContext)

  return (
    <select
      onChange={(e) => {
        setSortOrder(e.target.value)
      }}
      value={sortOrder}
      className="
        w-full
        sm:w-auto
        sm:ml-auto

        bg-[#1F2937]
        text-[#06B6D4]
        font-semibold
        text-sm

        px-4
        sm:px-5

        py-2.5

        rounded-xl
        border
        border-[#374151]

        shadow-lg
        shadow-black/20

        hover:border-[#06B6D4]
        hover:shadow-[0_0_20px_rgba(6,182,212,0.20)]

        focus:border-[#06B6D4]
        focus:ring-4
        focus:ring-cyan-500/20

        outline-none
        transition-all
        duration-300
        cursor-pointer
        backdrop-blur-md
      "
    >
      <option value="default" className="bg-[#1F2937] text-white">
        Sort By Default
      </option>

      <option value="lowToHigh" className="bg-[#1F2937] text-white">
        Price: Low → High
      </option>

      <option value="highToLow" className="bg-[#1F2937] text-white">
        Price: High → Low
      </option>
    </select>
  )
}

export default SortByPrice
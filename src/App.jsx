import React, { createContext, useState } from 'react'
import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Products from './Components/Products'
import Landing from './Components/Landing'
import ProductsInfo from './Components/ProductsInfo'

export const SearchContext = createContext()
export const SortContext = createContext()

function App() {
  const [search, setSearch] = useState("")
  const [sortOrder, setSortOrder] = useState("default")
  
  return (
    <div className="min-h-screen bg-[#111827]">
      <SearchContext.Provider value={{search, setSearch}}>
        <SortContext.Provider value = {{sortOrder, setSortOrder}} >
          <Navbar />

          <Routes>
            <Route path = "/" element = {<Landing />} />
            <Route path = "/home" element = {<Landing />} />
            <Route path = "/products" element = {<Products />} />
            <Route path = "/productsInfo/:id" element = {<ProductsInfo />} />
          </Routes>
        </SortContext.Provider>
      </SearchContext.Provider>
    </div>
  )
}

export default App
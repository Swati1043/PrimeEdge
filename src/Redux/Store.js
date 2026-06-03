import { configureStore } from "@reduxjs/toolkit"
import ProductSliceReducer from "./ProductSlice"

const Store = configureStore({
    reducer : {
        product : ProductSliceReducer
    }
})
export default Store
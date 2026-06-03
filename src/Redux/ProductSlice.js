import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export const ProductThunk = createAsyncThunk("get-products-data", async()=>{
    const res = await fetch("https://fakestoreapi.com/products")
    const data = await res.json()
    // console.log(data)
    return data
})

const ProductSlice = createSlice({
    name : "products",
    initialState : {
        products : [],
        loading : false,
        error : null,
        category : "all"
    },
    reducers : {
        setCategory : (state, action)=> {
            state.category = action.payload
        }
    },
    extraReducers : (builder) => {
        builder
        .addCase(ProductThunk.pending, (state, action)=> {
            return{
                ...state,
                loading : true
            }
        })

        .addCase(ProductThunk.fulfilled , (state, action)=> {
            return {
                ...state,
                loading : false,
                products : action.payload
            }
        })

        .addCase(ProductThunk.rejected, (state, action)=> {
            return {
                ...state,
                loading : false,
                error : action.error.message
            }
        })
    }
})
export const { setCategory } = ProductSlice.actions
export default ProductSlice.reducer
import { getUsers } from './UserCreate';
import { createSlice } from '@reduxjs/toolkit';
import { IProduct } from './../../types/Iproduct';
interface IProducts {
    product: IProduct[]
}

const initialState:IProducts = {
    product :[]
}

export const productSlice = createSlice({
    name: 'PRODUCT',
    initialState,
    reducers: {
        getProduct(state, action) {
            state.product = action.payload
        }
    }
})

export const {getProduct} = productSlice.actions
export default productSlice.reducer
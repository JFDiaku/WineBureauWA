import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
     const item = state.products.find(item => item.id === action.payload.id)

     if(item){
      item.count += action.payload.count
     }else{
      state.products.push(action.payload)
     }
    },
   removeFromCart: (state,action) => {
      state.products = state.products.filter(item=> item.id !== action.payload)
    },
   resetCart: (state) => {
      state.products = []
    },
    updateCart: (state, action) => {
      const item = state.products.find(item => item.id === action.payload.id)
      
      item.count = action.payload.count   
    },
    addItem: (state, action) => {
      const item = state.products.find(item => item.id === action.payload.id)
      if(item){
        item.count ++
       }  
    },
    removeItem: (state, action) => {
      const item = state.products.find(item => item.id === action.payload.id)
      
      if(item){
        item.count === 0 ? item.count = 0 : item.count--;
       }     
    },
  },
})

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart, resetCart , updateCart, removeItem, addItem} = cartSlice.actions

export default cartSlice.reducer
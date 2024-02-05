import { createSlice,PayloadAction } from "@reduxjs/toolkit";

export type ProductType = {
    name:string,
    price:number,
    company:string,
}
export type initialStateType = {
    productsCount:number,
    products:ProductType[],
    error:boolean,
    page:number,
}
const initialState:initialStateType = {
    productsCount:0,
    products:[],
    error:false,
    page:0,
};
const productsSlice = createSlice({
    name: "firstSlice",
    initialState,
    reducers: {
        getAllProducts: (state:initialStateType,action:PayloadAction<ProductType[]>):initialStateType => {
            console.log(action.payload);
          return {...state,products:action.payload,productsCount:action.payload.length}
        },
        addProduct: (state:initialStateType,action:PayloadAction<ProductType>):initialStateType => {
            return {
                ...state,
                products: [...state.products, action.payload],
                productsCount: state.products.length + 1,
            };
        },
        deleteProduct: (state:initialStateType,action:PayloadAction<string>):initialStateType=>{ 
            const filteredProducts = state.products.filter((product)=>product.name !== action.payload)
            return {...state,products:filteredProducts,productsCount:state.productsCount - 1}
        },
        searchItem : (state:initialStateType,action:PayloadAction<string>):initialStateType => {
            const name = action.payload;
            const filteredProducts = state.products.filter((product)=>product.name.includes(name))
           return {...state,products:filteredProducts}
        }
    },
    extraReducers: (builder) => {    
    },
});
export const {
    getAllProducts,
    addProduct,
    deleteProduct,
    searchItem
} = productsSlice.actions;

export {};
export default productsSlice.reducer;
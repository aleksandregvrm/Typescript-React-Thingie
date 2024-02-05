import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./features/products/productsSlice";
import { TypedUseSelectorHook, useDispatch,useSelector } from "react-redux";
import questionsSlice from "./features/questions/questionsSlice";

export const store = configureStore({
    reducer: {
        products: productsSlice,
        quiz: questionsSlice
    },
});

export const reduxDispatch:()=>typeof store.dispatch=useDispatch;
export const useReduxSelector:TypedUseSelectorHook<ReturnType<typeof store.getState>>=useSelector;
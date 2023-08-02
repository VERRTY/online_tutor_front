import {createSlice} from "@reduxjs/toolkit";
import {CategoriesSchema} from "../types/Category";
import {fetchCategories} from "../services/fetchCategories";

const initialState: CategoriesSchema = {
    isLoading: false,
    error: undefined,
    data: undefined
}

export const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {

    },
    extraReducers: (build) => {
        build
            .addCase(fetchCategories.pending, (state, action) => {
                state.isLoading = true
            })
            .addCase(fetchCategories.fulfilled, (state, action) => {
                state.data = [...action.payload]
                state.isLoading = false

            })
            .addCase(fetchCategories.rejected, (state, action) => {
                state.error = action.payload
                state.isLoading = false
            })
    }
})


export const {reducer: categoriesReducer} = categoriesSlice
export const {actions: categoriesActions} = categoriesSlice
import {createSlice} from "@reduxjs/toolkit";
import {CategoriesSchema} from "../types/Category";
import {fetchCategories} from "../services/fetchCategories";

const initialState: CategoriesSchema = {
    isLoading: false,
    error: undefined,
    data: [
        {
            id: 1,
            name: 'Изучить английский язык с нуля до TOEFL'
        },
        {
            id: 2,
            name: 'Подготовиться к ОРТ, НЦТ и гос. экзаменам'
        },
        {
            id: 3,
            name: 'Подготовиться к ОРТ, НЦТ и гос. экзаменам'
        },
        {
            id: 4,
            name: 'Подготовиться к ОРТ, НЦТ и гос. экзаменам'
        },
        {
            id: 5,
            name: 'Подготовиться к ОРТ, НЦТ и гос. экзаменам'
        },
        {
            id: 6,
            name: 'Подготовиться к ОРТ, НЦТ и гос. экзаменам'
        },
    ]
}

export const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {},
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
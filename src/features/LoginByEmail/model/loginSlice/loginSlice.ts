import { createSlice, PayloadAction} from "@reduxjs/toolkit";
import {LoginSchema} from "../type/login";
import {fetchLogin} from "../Services/fetchLogin";


const initialState: LoginSchema = {
    name: '',
    password: '',
    isLoading: false,
    error: null
}

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setUsername: (state, action: PayloadAction<string>) => {
            state.name = action.payload
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload
        },
    },
    extraReducers: (build) => {
        build
            .addCase(fetchLogin.pending, (state, action) => {
                state.isLoading = true
                state.error = undefined
            })
            .addCase(fetchLogin.fulfilled, (state, action) => {
                state.isLoading = false
            })
            .addCase(fetchLogin.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    }
})

export const {actions: loginActions} = loginSlice
export const {reducer: loginReducer} = loginSlice
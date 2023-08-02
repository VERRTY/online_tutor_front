import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {User, UserSchema} from "../type/User";
import {fetchInitAuthData} from "../Services/fetchInitAuthData";
import {LOCALSTORAGEACCESSTOKEN, LOCALSTORAGEREFRESHTOKEN} from "../../../../shared/const/userConst";

const initialState: UserSchema = {
    authData: undefined,
    isLoading: false,
    error: undefined
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<User>) => {
            state.authData = action.payload;
        },
        // initAuthData: (state) => {
        //     const user = localStorage.getItem('user');
        //     if (user) {
        //         state.authData = JSON.parse(user);
        //     }
        // },
        logout: (state) => {
            state.authData = undefined;
            localStorage.removeItem(LOCALSTORAGEACCESSTOKEN);
            localStorage.removeItem(LOCALSTORAGEREFRESHTOKEN);
        },
    },
    extraReducers: build => {
        build
            .addCase(fetchInitAuthData.pending, (state, action) => {
                state.isLoading = true
                state.error = undefined
            })
            .addCase(fetchInitAuthData.fulfilled, (state, action) =>{
                state.authData = action.payload
                state.isLoading = false
            })
            .addCase(fetchInitAuthData.rejected, (state, action) =>{
                state.error = action.payload
                state.isLoading = false
            })
    }

})

export const { actions: userActions } = userSlice
export const { reducer: userReducer } = userSlice
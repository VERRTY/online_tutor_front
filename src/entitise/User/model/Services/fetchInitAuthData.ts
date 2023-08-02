import {createAsyncThunk} from "@reduxjs/toolkit";
import {User} from "../type/User";
import {$api} from "../../../../shared/API/api";
import {LOCALSTORAGEACCESSTOKEN, LOCALSTORAGEREFRESHTOKEN} from "../../../../shared/const/userConst";

export const fetchInitAuthData = createAsyncThunk<User, {}, {rejectValue: object}>(
    'login/InitAuthData',
    async (props, thinkAPI) => {
        try {
            const refreshToken = localStorage.getItem(LOCALSTORAGEREFRESHTOKEN)
            const response = await $api.post('auth/refresh', {refreshToken})
            if(!response.data){
                throw new Error()
            }

            await localStorage.setItem(LOCALSTORAGEACCESSTOKEN, response.data.accessToken)
            await localStorage.setItem(LOCALSTORAGEREFRESHTOKEN, response.data.refreshToken)

            return response.data.user
        }catch (e){
            return thinkAPI.rejectWithValue(e.payload)
        }
    }
)
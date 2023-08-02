import {createAsyncThunk} from "@reduxjs/toolkit";
import {$api} from "../../../../shared/API/api";
import {User, userActions} from "../../../../entitise/User";
import {LOCALSTORAGEACCESSTOKEN, LOCALSTORAGEREFRESHTOKEN} from "../../../../shared/const/userConst";

interface LoginProps {
    login: string,
    password: string
}

export const fetchLogin = createAsyncThunk<User, LoginProps, {rejectValue: string}>(
    'login/loginByEmail',
    async (authData,thinkAPI) => {
        try {
            const response = await $api.post('auth/authenticate', authData)
            if(!response.data){
                throw new Error()
            }
            await localStorage.setItem(LOCALSTORAGEACCESSTOKEN, response.data.accessToken)
            await localStorage.setItem(LOCALSTORAGEREFRESHTOKEN, response.data.refreshToken)
            await thinkAPI.dispatch(userActions.setAuthData(response.data.user))

            return response.data.user
        }catch (e){
            return thinkAPI.rejectWithValue(e)
        }
    }
)
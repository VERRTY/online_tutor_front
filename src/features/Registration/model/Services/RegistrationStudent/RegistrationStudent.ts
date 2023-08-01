import {createAsyncThunk} from "@reduxjs/toolkit";
import {$api} from "../../../../../shared/API/api";
import {Region, Sex} from "../../../../../shared/const/common";

interface registrationProps{
    name: string
    password: string
    surname: string
    gender: Sex
    phoneNumber: string
    email: string
    region: Region
    education: string
    age?: number
}

export const registrationStudent = createAsyncThunk<{}, registrationProps, { rejectValue: string }>(
    'registration/student',
    async (authData, thunkAPI) => {
        try {
            const response = await $api.post('users/students', authData)

            if(!response.data){
                throw new Error();
            }

            return response;
        }catch (e){
            return thunkAPI.rejectWithValue('error');
        }
    }
)
import {createAsyncThunk} from "@reduxjs/toolkit";
import {Category} from "../types/Category";
import {ThunkConfig} from "../../../../app/providers/StoreProvider/config/StateSchema";
import {$api} from "../../../../shared/API/api";


export const fetchCategories = createAsyncThunk<Category[], null, ThunkConfig<object>>(
    'categories/fetchCategories',
    async (props, thunkAPI) => {
        try {
             const response = await $api.get('categories')

            if(!response.data){
                throw new Error()
            }
            return response.data
        }catch (e){
            console.log(e)
            return thunkAPI.rejectWithValue(e)
        }
    }
)
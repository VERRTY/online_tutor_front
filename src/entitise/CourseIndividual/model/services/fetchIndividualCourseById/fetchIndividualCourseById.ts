import { createAsyncThunk } from '@reduxjs/toolkit';
import {$api} from "../../../../../shared/API/api";
import {ThunkConfig} from "../../../../../app/providers/StoreProvider/config/StateSchema";
import {Course} from "../../../../Course";


export const fetchIndividualsCourseById = createAsyncThunk <Course,number, ThunkConfig<object>>(
    'courseIndividual/fetchIndividualsCoursesById',
    async (courseId, thunkAPI) => {
        try {
            const response = await $api.get('classes/individuals/' + courseId)

            if(!response.data){
                throw new Error()
            }
            return response.data
        }catch (e){
            console.log(e)
            return thunkAPI.rejectWithValue(e);
        }
    }
)
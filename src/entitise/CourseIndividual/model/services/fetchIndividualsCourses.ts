import { createAsyncThunk } from '@reduxjs/toolkit';
import {IndividualsCourses} from "../types/CourseIndividual";
import {$api} from "../../../../shared/API/api";
import {getIndividualsCoursesLimit, getIndividualsCoursesPage} from "../selectors/individualsCoursesSelectors";
import {ThunkConfig} from "../../../../app/providers/StoreProvider/config/StateSchema";


export const fetchIndividualsCourses = createAsyncThunk<Array<IndividualsCourses>,object, ThunkConfig<object>>(
    'courseIndividual/fetchIndividualsCourses',
    async (props, thunkAPI) => {
        const { getState } = thunkAPI;
        const limit = getIndividualsCoursesLimit(getState())
        const page = getIndividualsCoursesPage(getState())
        try {
            const response = await $api.get('classes/individuals',
                {params: {
                        size: limit,
                        page
                    }
                }
            )
            if(!response.data){
                throw new Error()
            }
            return response.data.content
        }catch (e){
            console.log(e)
            return thunkAPI.rejectWithValue(e);
        }
    }
)
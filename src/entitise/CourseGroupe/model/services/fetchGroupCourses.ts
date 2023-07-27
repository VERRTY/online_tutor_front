import { createAsyncThunk } from '@reduxjs/toolkit';
import {$api} from "../../../../shared/API/api";
import {ThunkConfig} from "../../../../app/providers/StoreProvider/config/StateSchema";
import {getGroupCoursesLimit, getGroupCoursesPage} from "../selectors/GroupCoursesSelectors";
import {Course} from "../../../Course";


export const fetchGroupCourses = createAsyncThunk<Array<Course>,object, ThunkConfig<object>>(
    'courseGroup/fetchCourseGroup',
    async (props, thunkAPI) => {
        const { getState } = thunkAPI;
        const limit = getGroupCoursesLimit(getState())
        const page = getGroupCoursesPage(getState())
        try {
            const response = await $api.get('classes/groups',
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
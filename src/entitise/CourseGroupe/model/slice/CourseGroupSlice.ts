import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Course, CoursesSchema} from "../../../Course";
import {fetchGroupCourses} from "../services/fetchGroupCourses";
import {fetchGroupCoursesById} from "../services/fetchGroupCourseById/fetchGroupCourseById";

const CoursesData: Course[] = [
    // {
    //     id: 1,
    //     description: "dsffsdfd sdfsd fsdfsd fsd fsdf sdfsd",
    //     coverUrl: 'https://img.lovepik.com/free-png/20211215/lovepik-overtime-programmer-png-image_401636656_wh1200.png',
    //     // finishDateTime: '16:00',
    //     createdDate: '16:00',
    //     price: 500,
    //     title: 'dasass das das das das ',
    //     durationInSeconds: 10
    //     // startDateTime: '16:00',
    // },
    // {
    //     id: 2,
    //     description: "dsffsdfd sdfsd fsdfsd fsd fsdf sdfsd",
    //     coverUrl: 'https://img.lovepik.com/free-png/20211215/lovepik-overtime-programmer-png-image_401636656_wh1200.png',
    //     // finishDateTime: '16:00',
    //     createdDate: '16:00',
    //     price: 500,
    //     durationInSeconds: 20,
    //     title: 'dasass das das das das ',
    //     // startDateTime: '16:00',
    // },
    // {
    //     id: 3,
    //     description: "dsffsdfd sdfsd fsdfsd fsd fsdf sdfsd",
    //     coverUrl: 'https://img.lovepik.com/free-png/20211215/lovepik-overtime-programmer-png-image_401636656_wh1200.png',
    //     // finishDateTime: '16:00',
    //     createdDate: '16:00',
    //     price: 500,
    //     durationInSeconds: 30,
    //     title: 'dasass das das das das ',
    //     // startDateTime: '16:00',
    // }
]

const initialState: CoursesSchema = {
    isLoading: false,
    error: null,
    data: CoursesData,
    limit: 10,
    page: 0
};

export const courseGroupSlice = createSlice({
    name: 'courseGroup',
    initialState,
    reducers: {
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload
        },
        incrementPage: (state, action: PayloadAction<number>) => {
            state.page = state.page + 1
        },
        setLimit: (state, action: PayloadAction<number>) => {
            state.limit = action.payload
        },
        clear: (state, action: PayloadAction<number>) => {
            state.data = []
        }
    },
    extraReducers: (build) => {
        build
            .addCase(fetchGroupCourses.pending, (state, action) => {
                state.isLoading = true
            })
            .addCase(fetchGroupCourses.fulfilled, (state, action) => {
                state.isLoading = false
                state.data.push(...action.payload)
            })
            .addCase(fetchGroupCourses.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
            .addCase(fetchGroupCoursesById.pending, (state, action) => {
                state.isLoading = true
            })
            .addCase(fetchGroupCoursesById.fulfilled, (state, action) => {
                state.isLoading = false
                state.data = [action.payload]
            })
            .addCase(fetchGroupCoursesById.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    }
})

export const {actions: courseGroupActions} = courseGroupSlice;
export const {reducer: courseGroupReducer} = courseGroupSlice;
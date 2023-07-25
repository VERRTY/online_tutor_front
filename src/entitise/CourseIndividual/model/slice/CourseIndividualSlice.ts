import {createSlice} from "@reduxjs/toolkit";
import {Course, CourseSchema} from "../types/CourseIndividual";

const CoursesData: Course[] = [
    {
        id: 1,
        description: "dsffsdfd sdfsd fsdfsd fsd fsdf sdfsd",
        coverUrl: 'https://img.lovepik.com/free-png/20211215/lovepik-overtime-programmer-png-image_401636656_wh1200.png',
        finishDateTime: '16:00',
        createdDate: '16:00',
        price: 500,
        title: 'dasass das das das das ',
        startDateTime: '16:00',
    },
    {
        id: 2,
        description: "dsffsdfd sdfsd fsdfsd fsd fsdf sdfsd",
        coverUrl: 'https://img.lovepik.com/free-png/20211215/lovepik-overtime-programmer-png-image_401636656_wh1200.png',
        finishDateTime: '16:00',
        createdDate: '16:00',
        price: 500,
        title: 'dasass das das das das ',
        startDateTime: '16:00',
    },
    {
        id: 3,
        description: "dsffsdfd sdfsd fsdfsd fsd fsdf sdfsd",
        coverUrl: 'https://img.lovepik.com/free-png/20211215/lovepik-overtime-programmer-png-image_401636656_wh1200.png',
        finishDateTime: '16:00',
        createdDate: '16:00',
        price: 500,
        title: 'dasass das das das das ',
        startDateTime: '16:00',
    }
]

const initialState: CourseSchema = {
    isLoading: false,
    error: null,
    data: CoursesData,
};

export const courseIndividualSlice = createSlice({
    name: 'course',
    initialState,
    reducers: {

    }
})

export const { actions: courseIndividualActions } = courseIndividualSlice;
export const { reducer: courseIndividualReducer } = courseIndividualSlice;
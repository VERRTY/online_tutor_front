import {configureStore, ReducersMapObject} from '@reduxjs/toolkit'
import { courseIndividualReducer } from '../../../../entitise/CourseIndividual';
import {StateSchema} from "./StateSchema";
import {courseGroupReducer} from "../../../../entitise/CourseGroupe";
import {categoriesReducer} from "../../../../features/Categories";
import {registrationReducers} from "../../../../features/Registration";

const rootReducer: ReducersMapObject<StateSchema> = {
    CourseIndividual: courseIndividualReducer,
    CourseGroup: courseGroupReducer,
    Categories: categoriesReducer,
    Registration: registrationReducers
};

export const store = configureStore({
    reducer: rootReducer,
})


export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
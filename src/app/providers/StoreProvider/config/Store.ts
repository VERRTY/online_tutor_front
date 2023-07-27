import {configureStore, ReducersMapObject} from '@reduxjs/toolkit'
import { courseIndividualReducer } from '../../../../entitise/CourseIndividual';
import {StateSchema} from "./StateSchema";
import {courseGroupReducer} from "../../../../entitise/CourseGroupe";

const rootReducer: ReducersMapObject<StateSchema> = {
    CourseIndividual: courseIndividualReducer,
    CourseGroup: courseGroupReducer
};

export const store = configureStore({
    reducer: rootReducer,
})


export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
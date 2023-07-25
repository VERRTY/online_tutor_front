import {configureStore, ReducersMapObject} from '@reduxjs/toolkit'
import { courseIndividualReducer } from '../../../../entitise/CourseIndividual';
import {StateSchema} from "./StateSchema";

const rootReducers: ReducersMapObject<StateSchema> = {
    CourseIndividual: courseIndividualReducer,
};

export const store = configureStore({
    reducer: rootReducers,
})
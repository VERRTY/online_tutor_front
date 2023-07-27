import {CoursesSchema} from "../../../../entitise/Course";


export interface StateSchema {
    CourseIndividual: CoursesSchema
    CourseGroup: CoursesSchema
}

export interface ThunkConfig<T> {
    rejectValue: T;
    state: StateSchema;
}
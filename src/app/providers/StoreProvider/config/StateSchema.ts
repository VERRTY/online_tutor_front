import {IndividualsCoursesSchema} from "../../../../entitise/CourseIndividual";

export interface StateSchema {
    CourseIndividual: IndividualsCoursesSchema
}

export interface ThunkConfig<T> {
    rejectValue: T;
    state: StateSchema;
}
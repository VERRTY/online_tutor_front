import {CoursesSchema} from "../../../../entitise/Course";
import {CategoriesSchema} from "../../../../features/Categories";


export interface StateSchema {
    CourseIndividual: CoursesSchema
    CourseGroup: CoursesSchema
    Categories: CategoriesSchema
}

export interface ThunkConfig<T> {
    rejectValue: T;
    state: StateSchema;
}
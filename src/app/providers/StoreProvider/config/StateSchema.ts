import {CoursesSchema} from "../../../../entitise/Course";
import {CategoriesSchema} from "../../../../features/Categories";
import {RegistrationSchema} from "../../../../features/Registration";


export interface StateSchema {
    CourseIndividual: CoursesSchema
    CourseGroup: CoursesSchema
    Categories: CategoriesSchema,
    Registration: RegistrationSchema
}

export interface ThunkConfig<T> {
    rejectValue: T;
    state: StateSchema;
}
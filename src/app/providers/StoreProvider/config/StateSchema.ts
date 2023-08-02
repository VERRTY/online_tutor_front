import {CoursesSchema} from "../../../../entitise/Course";
import {CategoriesSchema} from "../../../../features/Categories";
import {RegistrationSchema} from "../../../../features/Registration";
import {LoginSchema} from "../../../../features/LoginByEmail/model/type/login";
import {UserSchema} from "../../../../entitise/User/model/type/User";


export interface StateSchema {
    CourseIndividual: CoursesSchema
    CourseGroup: CoursesSchema
    Categories: CategoriesSchema,
    Registration: RegistrationSchema
    LoginForm: LoginSchema
    User: UserSchema
}

export interface ThunkConfig<T> {
    rejectValue: T;
    state: StateSchema;
}
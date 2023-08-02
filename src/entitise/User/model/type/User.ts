import {Region, Sex} from "../../../../shared/const/common";

export interface User {
    id: number,
    name: string,
    surname: string,
    email: string,
    phoneNumber: string,
    region: Region,
    education: string,
    gender: Sex,
    role: string,
    avatarUrl: string
}

export interface UserSchema {
    authData?: User
    isLoading: boolean,
    error?: object
}
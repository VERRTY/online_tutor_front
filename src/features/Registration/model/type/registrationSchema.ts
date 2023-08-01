import {Region, Sex} from "../../../../shared/const/common";

interface Candidate {
    name: string
    password: string
    surname: string
    gender: Sex
    phoneNumber: string
    email: string
    region: Region
    education: string
    age?: number
    description?: string
    workExperienceInMonths?: number
}

export interface RegistrationSchema {
    candidate: Candidate
    isLoading: boolean;
    error?: string;
}
import {StateSchema} from "../../../../app/providers/StoreProvider";


export const getRegistrationEmail = (state: StateSchema) => state.Registration.candidate.email
export const getRegistrationUsername = (state: StateSchema) => state.Registration.candidate.name
export const getRegistrationSurname = (state: StateSchema) => state.Registration.candidate.surname
export const getRegistrationPassword = (state: StateSchema) => state.Registration.candidate.password
export const getRegistrationAge = (state: StateSchema) => state.Registration.candidate.age || 0
export const getRegistrationRegion = (state: StateSchema) => state.Registration.candidate.region
export const getRegistrationPhoneNumber = (state: StateSchema) => state.Registration.candidate.phoneNumber
export const getRegistrationPhoneGender = (state: StateSchema) => state.Registration.candidate.gender
export const getRegistrationPhoneEducation = (state: StateSchema) => state.Registration.candidate.education
export const getRegistrationPhoneError = (state: StateSchema) => state.Registration.error
export const getRegistrationLoading = (state: StateSchema) => state.Registration.isLoading

export const getRegistration = (state: StateSchema) => state.Registration.candidate

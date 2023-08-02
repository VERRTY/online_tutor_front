import {StateSchema} from "../../../../app/providers/StoreProvider";


export const getLoginUsername = (state: StateSchema) => state.LoginForm.name
export const getLoginPassword = (state: StateSchema) => state.LoginForm.password
export const getLoginLoading = (state: StateSchema) => state.LoginForm.isLoading
export const getLoginError = (state: StateSchema) => state.LoginForm.error

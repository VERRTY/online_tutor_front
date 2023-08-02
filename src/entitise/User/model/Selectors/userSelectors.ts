import {StateSchema} from "../../../../app/providers/StoreProvider";

export const getUser = (state: StateSchema) => state.User.authData || null
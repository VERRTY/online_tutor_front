import {StateSchema} from "../../../../app/providers/StoreProvider";
import {Category} from "../types/Category";

export const getCategories = (state: StateSchema) => state.Categories.data
export const getCategoriesLoading = (state: StateSchema) => state.Categories.isLoading
export const getCategoriesById = (state: StateSchema, categoriesId: number) =>
    state.Categories.data.find((c: Category) => c.id === categoriesId)


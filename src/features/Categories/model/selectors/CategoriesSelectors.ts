import {StateSchema} from "../../../../app/providers/StoreProvider";

export const getCategories = (state: StateSchema) => state.Categories.data
export const getCategoriesLoading = (state: StateSchema) => state.Categories.isLoading
export const getCategoriesName = (state: StateSchema) => state.Categories.data.map(category => category.name)

export const getCategoriesById = (state: StateSchema, categoryId: number) => state.Categories.data?.filter(category => category.id === categoryId)[0]


import {StateSchema} from "../../../../app/providers/StoreProvider";
import {Category} from "../types/Category";

export const getCategories = (state: StateSchema) => state.Categories.data
export const getCategoriesLoading = (state: StateSchema) => state.Categories.isLoading
export const getCategoriesName = (state: StateSchema) => state.Categories.data.map(category => category.name)
export const getCategoriesById = (id: number) => (state: StateSchema) => {
    state.Categories.data.find((c: Category) => c.id === id)

}


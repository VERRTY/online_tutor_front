export type {
    Category,
    CategoriesSchema
} from './model/types/Category'

export {
    categoriesReducer,
    categoriesActions
} from './model/slice/CategoriesSlice'

export {
    getCategoriesById,
    getCategories
} from './model/selectors/CategoriesSelectors'
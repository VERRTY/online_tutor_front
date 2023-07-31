import { StateSchema } from "../../../../app/providers/StoreProvider";

export const getIndividualsCoursesPage = (state: StateSchema) => state.CourseIndividual.page || 0
export const getIndividualsCoursesLimit = (state: StateSchema) => state.CourseIndividual.limit || 9
export const getIndividualsCourses = (state: StateSchema) =>state.CourseIndividual.data
export const getIndividualsCoursesLoading = (state: StateSchema) => state.CourseIndividual.isLoading
// export const getIndividualsCoursesByCategoriesId =
import { StateSchema } from "../../../../app/providers/StoreProvider";

export const getGroupCoursesPage = (state: StateSchema) => state.CourseGroup.page || 0
export const getGroupCoursesLimit = (state: StateSchema) => state.CourseGroup.limit || 9
export const getGroupCourses = (state: StateSchema) =>state.CourseGroup.data
export const getGroupCoursesLoading = (state: StateSchema) => state.CourseGroup.isLoading
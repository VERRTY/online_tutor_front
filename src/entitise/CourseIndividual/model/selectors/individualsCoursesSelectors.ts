import { StateSchema } from "../../../../app/providers/StoreProvider";

export const getIndividualsCoursesPage = (state: StateSchema) => state.CourseIndividual.page || 0
export const getIndividualsCoursesLimit = (state: StateSchema) => state.CourseIndividual.limit || 9
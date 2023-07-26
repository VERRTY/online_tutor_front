export interface IndividualsCourses {
    id: number
    title: string
    price: number
    coverUrl: string
    createdDate: string
    description: string
    durationInSeconds: number
    // finishDateTime: string
    // startDateTime: string
}

export interface IndividualsCoursesSchema {
    data?:  IndividualsCourses[],
    isLoading: boolean,
    error?: object,
    page?: number,
    limit?: number
    HasMore?: boolean
}
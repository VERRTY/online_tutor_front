export interface Course {
    id: number
    title: string
    price: number
    coverUrl: string
    createdDate: string
    description: string
    durationInSeconds?: number
    categoryIds?: number | undefined
    finishDateTime?: string | undefined
    startDateTime?: string | undefined
}

export interface IndividualsCoursesSchema {
    data?:  Course[],
    isLoading: boolean,
    error?: object,
    page?: number,
    limit?: number
    HasMore?: boolean
}
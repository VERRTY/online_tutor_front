export interface Course {
    id: number
    description: string
    coverUrl: string
    finishDateTime: string
    createdDate: string
    price: number
    title: string
    startDateTime: string
}

export interface CourseSchema{
    data?:  Course[],
    isLoading: boolean,
    error?: string,
}
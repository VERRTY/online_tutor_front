export interface Course {
	id: number
	title: string
	price: number
	coverUrl: string
	createdDate: string
	description: string
	categoryIds: number | undefined
	durationInSeconds?: number
	finishDateTime?: string
	startDateTime?: string
	classType: string
	category?: {
		id: number
		name: string
	}
}

export interface CoursesSchema {
	data?: Course[]
	isLoading: boolean
	error?: object
	page?: number
	limit?: number
	HasMore?: boolean
}

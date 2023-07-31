import { RouteProps } from 'react-router-dom'
import { CategoryPage } from '../../../pages/CategoriesPage'
import { MainPage } from '../../../pages/MainPage'
import { AboutCoursePage } from '../../../pages/AboutCoursePage'
import CoursePage from '../../../pages/CouresPage/ui/CoursePage'

export enum AppRoutes {
	MAIN = 'main',
	CATEGORY = 'category',
	ABOUT = 'about',
	COURSE = 'course',

	// last
	// NOT_FOUND = 'not_found'
}

export const RoutePath: Record<AppRoutes, string> = {
	[AppRoutes.MAIN]: '/',
	[AppRoutes.CATEGORY]: 'category/:id',
	[AppRoutes.ABOUT]: 'about/:id',
	[AppRoutes.COURSE]: 'course/:typeCourse/:id',

	// last
	// [AppRoutes.NOT_FOUND]: '*',
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
	[AppRoutes.MAIN]: {
		path: RoutePath.main,
		element: <MainPage />,
	},
	[AppRoutes.CATEGORY]: {
		path: RoutePath.category,
		element: <CategoryPage />,
	},
	[AppRoutes.ABOUT]: {
		path: RoutePath.about,
		element: <AboutCoursePage />,
	},
	[AppRoutes.COURSE]: {
		path: RoutePath.course,
		element: <CoursePage />,
	},
}

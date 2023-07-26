import { RouteProps } from 'react-router-dom'
import CategoryPage from '../../../pages/CategoriesPage/ui/CategoryPage'
import CoursePage from '../../../pages/CouresPage/ui/CoursePage'
import MainPage from '../../../pages/MainPage/ui/MainPage'

export enum AppRoutes {
	MAIN = 'main',
	CATEGORY = 'category',
	COURSE = 'course',

	// last
	// NOT_FOUND = 'not_found'
}

export const RoutePath: Record<AppRoutes, string> = {
	[AppRoutes.MAIN]: '/',
	[AppRoutes.CATEGORY]: 'category',
	[AppRoutes.COURSE]: 'course',
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
	[AppRoutes.COURSE]: {
		path: RoutePath.course,
		element: <CoursePage />,
	},
}

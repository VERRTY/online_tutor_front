import {RouteProps} from 'react-router-dom'
import {CategoryPage} from '../../../pages/CategoriesPage'
import {MainPage} from '../../../pages/MainPage'

export enum AppRoutes {
    MAIN = 'main',
    CATEGORY = 'category',

    // last
    // NOT_FOUND = 'not_found'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.CATEGORY]: 'category',
    // last
    // [AppRoutes.NOT_FOUND]: '*',
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage/>,
    },
    [AppRoutes.CATEGORY]: {
        path: RoutePath.category,
        element: <CategoryPage/>,
    },
}

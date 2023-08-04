import {RouteProps} from 'react-router-dom'
import {CategoryPage} from '../../../pages/CategoriesPage'
import {MainPage} from '../../../pages/MainPage'
import {AboutCoursePage} from '../../../pages/AboutCoursePage'
import CoursePage from '../../../pages/CouresPage/ui/CoursePage'
import {RegistrationPage} from "../../../pages/RegistrationPage";
import {AuthPage} from "../../../pages/AuthPage";
import {IndividualByCategory} from "../../../pages/IndividualByCategoryPage";
import {GroupByCategoryPage} from "../../../pages/GroupByCategoryPage";
import IndividualPage from "../../../pages/IndividualPage/ui/IndividualPage";

export enum AppRoutes {
    AUTH = 'auth',
    MAIN = 'main',
    CATEGORY = 'category',
    ABOUT = 'about',
    COURSE = 'course',
    REGISTRATION = 'registration',
    ALL = 'all',
    INDIVIDUALBYCATEGORY = 'individualByCategory',
    GROUPBYCATEGORY = 'groupByCategory'

// last
// NOT_FOUND = 'not_found'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.CATEGORY]: 'category/:id',
    [AppRoutes.ABOUT]: 'about/:id',
    [AppRoutes.COURSE]: 'course/:typeCourse/:id',
    [AppRoutes.REGISTRATION]: 'registration/:typeReg',
    [AppRoutes.AUTH]: 'auth',
    [AppRoutes.INDIVIDUALBYCATEGORY]: 'individualByCategory/:categoryId',
    [AppRoutes.GROUPBYCATEGORY]: 'groupByCategory/:categoryId',
    [AppRoutes.ALL]: 'all',

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
    [AppRoutes.ABOUT]: {
        path: RoutePath.about,
        element: <AboutCoursePage/>,
    },
    [AppRoutes.COURSE]: {
        path: RoutePath.course,
        element: <CoursePage/>,
    },
    [AppRoutes.REGISTRATION]: {
        path: RoutePath.registration,
        element: <RegistrationPage/>
    },
    [AppRoutes.AUTH]: {
        path: RoutePath.auth,
        element: <AuthPage/>
    },
    [AppRoutes.INDIVIDUALBYCATEGORY]: {
        path: RoutePath.individualByCategory,
        element: <IndividualByCategory/>
    },
    [AppRoutes.GROUPBYCATEGORY]: {
        path: RoutePath.groupByCategory,
        element: <GroupByCategoryPage/>
    },
    [AppRoutes.ALL]: {
        path: RoutePath.all,
        element: <IndividualPage/>
    },
}

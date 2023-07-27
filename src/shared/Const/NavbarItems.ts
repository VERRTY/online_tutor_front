import {AppRoutes, RoutePath} from "../config/routeConfig/routeConfig";
import {AppLinkTheme} from "../ui/AppLink/AppLink";


interface NavbarItemsProps{
    title: string,
    path: string,
    theme: AppLinkTheme
}

export const NavbarItems: NavbarItemsProps[] = [
    {
        title: 'Главная',
        path: RoutePath.main,
        theme: AppLinkTheme.UNDERLINED
    },
    {
        title: 'Групповые занятия',
        path: RoutePath.main,
        theme: AppLinkTheme.PRIMARY
    },
    {
        title: 'Индивидуальные уроки',
        path: RoutePath.main,
        theme: AppLinkTheme.PRIMARY
    }
]
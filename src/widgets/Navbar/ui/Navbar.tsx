import React, {memo} from 'react';
import cls from './Navbar.module.scss'
import AppLink, {AppLinkTheme} from "../../../shared/ui/AppLink/AppLink";
import {RoutePath} from "../../../shared/config/routeConfig/routeConfig";
import Logo from "../../../shared/ui/Logo/Logo";

export const Navbar = memo(() => {
    return (
        <div className={cls.navbar}>
            <div className={cls.logo}>
                <AppLink className={cls.authBtn} to={RoutePath.main} theme={AppLinkTheme.PRIMARY}>
                    <Logo/>
                </AppLink>
            </div>
            <div className={cls.links}>
                <AppLink className={cls.link} to={RoutePath.main} theme={AppLinkTheme.UNDERLINED}>
                    Главная
                </AppLink>
                <AppLink className={cls.link} to={RoutePath.main}>
                    Индивидуальные уроки
                </AppLink>
                <AppLink className={cls.link} to={RoutePath.main}>
                    Групповые занятия
                </AppLink>
            </div>
            <div className={cls.auth}>
                <AppLink className={cls.authBtn} to={RoutePath.main} theme={AppLinkTheme.PRIMARY}>
                    Войти
                </AppLink>
            </div>
        </div>
    );
});

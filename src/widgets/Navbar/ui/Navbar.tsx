import React, {memo, useCallback} from 'react';
import cls from './Navbar.module.scss'
import AppLink, {AppLinkTheme} from "../../../shared/ui/AppLink/AppLink";
import {AppRoutes, RoutePath} from "../../../shared/config/routeConfig/routeConfig";
import Logo from "../../../shared/ui/Logo/Logo";
import {useNavigate} from "react-router-dom";
import Button, {ButtonTheme} from "../../../shared/ui/Button/Button";
import {RegistrationPath} from "../../../pages/RegistrationPage/const/RegistrationPath";

export const Navbar = memo(() => {

    const navigate = useNavigate()
    const login = useCallback(() => {
        navigate('/' + AppRoutes.REGISTRATION + '/' + RegistrationPath.STUDENT)
    }, [navigate])

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
                <Button
                    className={cls.authBtn}
                    onClick={login}
                    theme={ButtonTheme.DEFAULT}
                >
                    Войти
                </Button>
            </div>
        </div>
    );
});

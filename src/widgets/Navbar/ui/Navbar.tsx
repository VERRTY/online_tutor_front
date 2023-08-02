import React, {memo, useCallback} from 'react';
import cls from './Navbar.module.scss'
import AppLink, {AppLinkTheme} from "../../../shared/ui/AppLink/AppLink";
import {AppRoutes, RoutePath} from "../../../shared/config/routeConfig/routeConfig";
import Logo from "../../../shared/ui/Logo/Logo";
import {useNavigate} from "react-router-dom";
import Button, {ButtonTheme} from "../../../shared/ui/Button/Button";
import {useSelector} from "react-redux";
import {getUser} from "../../../entitise/User/model/Selectors/userSelectors";
import {useAppDispatch} from "../../../shared/hooks/useAppDispatch/useAppDispatch";
import {userActions} from "../../../entitise/User";

export const Navbar = memo(() => {

    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const auth = useSelector(getUser)

    const onLoginClick = useCallback(() => {
        navigate('/' + AppRoutes.AUTH)
    }, [navigate])

    const onLogoutClick = () => {
        dispatch(userActions.logout())
    }

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
                {auth
                    ?
                    <Button
                        className={cls.authBtn}
                        onClick={onLogoutClick}
                        theme={ButtonTheme.DEFAULT}
                    >
                        Выйти
                    </Button>
                    :
                    <Button
                        className={cls.authBtn}
                        onClick={onLoginClick}
                        theme={ButtonTheme.DEFAULT}
                    >
                        Войти
                    </Button>
                }

            </div>
        </div>
    );
});

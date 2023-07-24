import React, {ReactNode} from 'react';
import {LinkProps, NavLink} from "react-router-dom";
import classNames from "classnames";
import cls from './AppLink.module.scss'

export enum AppLinkTheme {
    PRIMARY = 'primary',
    UNDERLINED = 'underlined'
}

interface NavLinkProps extends LinkProps{
    children?: ReactNode,
    theme?: AppLinkTheme
}

const AppLink = (props: NavLinkProps) => {
    const {
        children,
        to,
        theme = AppLinkTheme.PRIMARY,
        ...otherProps
    } = props
    return (
        <NavLink
            to={to}
            className={classNames(cls.appLink, {}, [cls[theme]])}
            {...otherProps}
        >
            {children}
        </NavLink>
    );
};

export default AppLink;
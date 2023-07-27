import React, {memo, ReactNode} from 'react';
import {LinkProps, NavLink} from "react-router-dom";
import classNames from "classnames";
import cls from './AppLink.module.scss'

export enum AppLinkTheme {
    PRIMARY = 'primary',
    UNDERLINED = 'underlined',

}

interface NavLinkProps extends LinkProps{
    className?: string,
    children?: ReactNode,
    theme?: AppLinkTheme
}

const AppLink = memo((props: NavLinkProps) => {
    const {
        children,
        to,
        theme = AppLinkTheme.PRIMARY,
        className,
        ...otherProps
    } = props
    return (
        <NavLink
            to={to}
            className={classNames(cls.appLink, {}, [className,cls[theme]])}
            {...otherProps}
        >
            {children}
        </NavLink>
    );
});

export default AppLink;
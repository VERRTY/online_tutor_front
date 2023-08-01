import React, {memo} from 'react';
import cls from './Logo.module.scss'
import classNames from "classnames";

export enum LogoTheme {
    DEFAULT = 'default',
    LIGHT = 'light'
}

interface LogoProps {
    theme?: LogoTheme
}

const Logo = memo((props: LogoProps) => {
    const {
        theme = LogoTheme.DEFAULT
    } = props

    return (
        <div className={classNames(cls.Logo, {}, [cls[theme]]) }>
            LOGO
        </div>
    );
});

export default Logo;
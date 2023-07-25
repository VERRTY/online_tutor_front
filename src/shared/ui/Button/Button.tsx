import React, {ButtonHTMLAttributes, ReactNode} from 'react';
import classNames from "classnames";
import cls from './Button.module.scss'

export enum ButtonTheme{
    DEFAULT= 'default',
    GREEN = 'green',
    SMALL = 'small'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    children?: ReactNode,
    theme?: ButtonTheme,
    disabled?: boolean,
}

const Button = (props: ButtonProps) => {
    const {
        children,
        disabled,
        theme = ButtonTheme.DEFAULT,
        ...otherProps
    } = props
    return (
        <button
            className={classNames(cls.button, {[cls.disabled]: disabled}, [cls[theme]])}
            disabled={disabled}
            {...otherProps}
        >
            {children}
        </button>
    );
};

export default Button;
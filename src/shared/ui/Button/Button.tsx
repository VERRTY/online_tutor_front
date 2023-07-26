import React, {ButtonHTMLAttributes, memo, ReactNode} from 'react';
import classNames from "classnames";
import cls from './Button.module.scss'

export enum ButtonTheme{
    DEFAULT= 'default',
    GREEN = 'green',
    SMALL = 'small'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string,
    children?: ReactNode,
    theme?: ButtonTheme,
    disabled?: boolean,
}

const Button = memo((props: ButtonProps) => {
    const {
        className,
        children,
        disabled,
        theme = ButtonTheme.DEFAULT,
        ...otherProps
    } = props
    return (
        <button
            className={classNames(cls.button, {[cls.disabled]: disabled}, [className,cls[theme]])}
            disabled={disabled}
            {...otherProps}
        >
            {children}
        </button>
    );
});

export default Button;
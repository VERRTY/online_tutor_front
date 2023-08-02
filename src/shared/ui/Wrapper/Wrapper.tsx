import cls from './Wrapper.module.scss'
import classNames from "classnames";
import {memo, ReactNode} from "react";

export enum WrapperTheme{
    DEFAULT = 'default',
    WITHBG = 'withBg'
}

interface WrapperProps {
    className?: string
    theme?: WrapperTheme
    children: ReactNode
}


export const Wrapper = memo((props: WrapperProps) => {
    const {
        className,
        theme = WrapperTheme.DEFAULT,
        children
    } = props
    return (
        <div className={classNames(cls.Wrapper, {}, [className, cls[theme]])}>
            {children}
        </div>
    );
});

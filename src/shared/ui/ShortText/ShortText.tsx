import React from 'react';
import cls from './ShortText.module.scss'
import classNames from "classnames";

export enum ShortTextTheme{
    WITHATTENUATION = "withAttenuation"
}

interface ShortTextProps {
    text?: string,
    theme?: ShortTextTheme,
    length?: number,
}

const ShortText = (props: ShortTextProps) => {
    const {
        text,
        theme,
        length
    } = props

    const cutText = (text: string) =>{
        return text.slice(0, length)
    }



    return (
        <span className={classNames(cls.text, {}, [cls[theme]]) }>
            {cutText(text)}
            <span className={cls.blur}></span>
        </span>
    );
};

export default ShortText;
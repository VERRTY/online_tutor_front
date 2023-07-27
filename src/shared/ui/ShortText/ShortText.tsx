import React, {memo} from 'react';
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

const ShortText = memo((props: ShortTextProps) => {
    const {
        text,
        theme,
        length
    } = props

    const cutText = (text: string) =>{
        return text.slice(0, length)
    }

    const mods = {
        [cls[theme]]: text.length > length
    }

    return (
        <span className={classNames(cls.text, mods, []) }>
            {cutText(text)}
            <span className={cls.blur}></span>
        </span>
    );
});

export default ShortText;
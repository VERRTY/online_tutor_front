import React from 'react';
import classNames from "classnames";
import cls from './CardAuthor.module.scss'
import ShortText, {ShortTextTheme} from "../../../../shared/ui/ShortText/ShortText";

interface AuthorCardProps {
    id?: number
}

export const CardAuthor = (props: AuthorCardProps) => {
    const {
        id
    } = props
    return (
        <div className={classNames(cls.authorCard, {}, [])}>
            <span className={cls.circle}></span>
            <ShortText text={'Valeria_Galchenko'} theme={ShortTextTheme.WITHATTENUATION}/>
        </div>
    );
};

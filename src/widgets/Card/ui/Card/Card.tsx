import React from 'react';
import classNames from "classnames";
import cls from './Card.module.scss'
import ShortText, {ShortTextTheme} from "../../../../shared/ui/ShortText/ShortText";
import {CardAuthor} from "../CardAuthor/CardAuthor";
import CardDetails from "../CardDetails/CardDetails";
import imgIcon from '../../../../shared/assets/23615491-1668532305.webp.png'

interface CardProps {
    className?: string,
    img?: string
}

export const Card = (props: CardProps) => {
    const {
        className,
        img
    } = props
    return (
        <div className={classNames(cls.card, {}, [className])}>
            <div className={cls.img}>
                {!img
                    ?
                    <img src={imgIcon} alt=""/>
                    :
                    <img src={img} alt=""/>
                }

            </div>
            <div className={cls.content}>
                <div className={cls.info}>
                    <ShortText text={'Репетитор по сольфеджио онлайн. Подготовка к экзамену'} theme={ShortTextTheme.WITHATTENUATION}/>
                </div>
                <div className={cls.author}>
                    <CardAuthor />
                </div>
                <div className={cls.details}>
                    <CardDetails cost={50}/>
                </div>
            </div>
        </div>
    );
};
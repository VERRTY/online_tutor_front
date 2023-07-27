import React, {memo} from 'react';
import classNames from "classnames";
import cls from './Card.module.scss'
import ShortText, {ShortTextTheme} from "../../../../shared/ui/ShortText/ShortText";
import {CardAuthor} from "../CardAuthor/CardAuthor";
import CardDetails from "../CardDetails/CardDetails";
import imgIcon from '../../../../shared/assets/23615491-1668532305.webp.png'
import {CardTime} from "../CardTime/CardTime";
import {Course} from "../../../../entitise/Course";

export enum CardType {
    INDIVIDUAL = 'individual',
    GROUPS = 'groups'
}

interface CardProps {
    course: Course
    className?: string,
    type?: CardType
}

export const Card = memo((props: CardProps) => {
    const {
        className,
        course,
        type = CardType.INDIVIDUAL
    } = props

    return (
        <div className={classNames(cls.card, {}, [className, cls[type]])}>
            <div className={cls.img}>
                {!course.coverUrl
                    ?
                    <img src={imgIcon} alt=""/>
                    :
                    <img src={course.coverUrl} alt=""/>
                }

            </div>
            <div className={cls.content}>
                <div className={cls.info}>
                    <ShortText text={course.title} theme={ShortTextTheme.WITHATTENUATION} length={50}/>
                </div>
                <div className={cls.cardTime}>
                    {type === CardType.GROUPS &&
                        <CardTime startDateTime={course.startDateTime} finishDateTime={course.finishDateTime}/>
                    }
                </div>
                <div className={cls.author}>
                    <CardAuthor/>
                </div>
                <div className={cls.details}>
                    <CardDetails cost={course.price} id={course.id}/>
                </div>
            </div>
        </div>
    );
});
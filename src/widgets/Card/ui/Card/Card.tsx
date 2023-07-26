import React, {memo} from 'react';
import classNames from "classnames";
import cls from './Card.module.scss'
import ShortText, {ShortTextTheme} from "../../../../shared/ui/ShortText/ShortText";
import {CardAuthor} from "../CardAuthor/CardAuthor";
import CardDetails from "../CardDetails/CardDetails";
import imgIcon from '../../../../shared/assets/23615491-1668532305.webp.png'
import {IndividualsCourses} from "../../../../entitise/CourseIndividual";

interface CardProps {
    course: IndividualsCourses
    className?: string,
    redirect?: (id: number) => void
}

export const Card = memo((props: CardProps) => {
    const {
        className,
        course,
        redirect
    } = props


    return (
        <div className={classNames(cls.card, {}, [className])}>
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
                    <ShortText text={course.title} theme={ShortTextTheme.WITHATTENUATION}/>
                </div>
                <div className={cls.author}>
                    <CardAuthor/>
                </div>
                <div className={cls.details} >
                    <CardDetails cost={course.price} redirect={redirect} id={course.id}/>
                </div>
            </div>
        </div>
    );
});
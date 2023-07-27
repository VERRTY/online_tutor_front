import cls from './CardTime.module.scss'
import classNames from "classnames";
import {getWeekDay} from "../../../../shared/lib/getWeekDay/getWeekDay";
import {getTime} from "../../../../shared/lib/getTime/getTime";
import {memo} from "react";
interface CardTimeProps {
    className?: string
    finishDateTime: string
    startDateTime: string
}

export const CardTime = memo((props: CardTimeProps) => {
    const {
        className,
        startDateTime,
        finishDateTime
    } = props

    const weekday = getWeekDay(startDateTime)
    const timeStart = getTime(startDateTime)
    const timeEnd = getTime(finishDateTime)

    return (
        <div className={classNames(cls.CardTime,{},[className])}>
            {
                weekday + ', ' + timeStart + '-' + timeEnd
            }
        </div>
    );
});

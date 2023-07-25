import React from 'react';
import cls from './CardDetails.module.scss'
import Button, {ButtonTheme} from "../../../../shared/ui/Button/Button";

interface CardDetailsProps{
    id?: number,
    cost?: number
}

const CardDetails = (props: CardDetailsProps) => {
    const {
        id,
        cost
    } = props
    return (
        <div className={cls.cardDetails}>
            <Button theme={ButtonTheme.SMALL}>
                Посмотреть
            </Button>
            <p className={cls.cost}>
                {cost}
            </p>
        </div>
    );
};

export default CardDetails;
import React from 'react';
import cls from './CardDetails.module.scss'
import Button, {ButtonTheme} from "../../../../shared/ui/Button/Button";

interface CardDetailsProps{
    id: number,
    cost?: number
    redirect?: (id: number) => void
}

const CardDetails = (props: CardDetailsProps) => {
    const {
        id,
        cost,
        redirect
    } = props
    return (
        <div className={cls.cardDetails}>
            <Button
                theme={ButtonTheme.SMALL}
                onClick={() => redirect(id)}
            >
                Посмотреть
            </Button>
            <p className={cls.cost}>
                {cost}
            </p>
        </div>
    );
};

export default CardDetails;
import React, {memo} from 'react';
import cls from './CardDetails.module.scss'
import Button, {ButtonTheme} from "../../../../shared/ui/Button/Button";
import {AppRoutes} from "../../../../shared/config/routeConfig/routeConfig";
import {useNavigate} from "react-router-dom";

interface CardDetailsProps{
    id: number,
    cost?: number,
    classType: string
}

const CardDetails = memo((props: CardDetailsProps) => {
    const navigate = useNavigate()
    const {
        id,
        cost,
        classType
    } = props

    const redirectToIndividualPage = () =>{
        navigate(AppRoutes.ABOUT +`/${classType}/` + id)
    }

    return (
        <div className={cls.cardDetails}>
            <Button
                theme={ButtonTheme.SMALL}
                onClick={() => redirectToIndividualPage()}
            >
                Посмотреть
            </Button>
            <p className={cls.cost}>
                {cost}
            </p>
        </div>
    );
});

export default CardDetails;
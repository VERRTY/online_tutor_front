import cls from './CategoriesItem.module.scss'
import classNames from "classnames";
import {Category} from "../../model/types/Category";
import {AppRoutes} from "../../../../shared/config/routeConfig/routeConfig";
import Button, {ButtonTheme} from "../../../../shared/ui/Button/Button";
import {useNavigate} from "react-router-dom";
import {memo} from "react";

interface CategoriesItemProps {
    className?: string,
    category: Category
}

export const CategoriesItem = memo((props: CategoriesItemProps) => {
    const {
        className,
        category
    } = props
    const navigate = useNavigate()


    const handleRedirect = () => {
        navigate(AppRoutes.CATEGORY + '/' + category.id)
    }

    return (
        <div className={classNames(cls.CategoriesItem,{},[className])}>
            <Button onClick={handleRedirect} theme={ButtonTheme.DEFAULT} className={cls.CategoriesBtn}>
                {category.name}
            </Button>
        </div>
    );
});

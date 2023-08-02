import cls from './CategoriesList.module.scss'
import classNames from "classnames";
import {useAppDispatch} from "../../../../shared/hooks/useAppDispatch/useAppDispatch";
import {useSelector} from "react-redux";
import {getCategories, getCategoriesLoading} from "../../model/selectors/CategoriesSelectors";
import {CategoriesItem} from "../CategoriesItem/CategoriesItem";
import {memo, useEffect} from "react";
import {fetchCategories} from "../../model/services/fetchCategories";
import Loader from "../../../../shared/ui/Loader/Loader";
interface CategoriesListProps {
    className?: string
}

export const CategoriesList = memo((props: CategoriesListProps) => {
    const {
        className
    } = props
    const dispatch = useAppDispatch()
    const isLoading = useSelector(getCategoriesLoading)

    useEffect(() => {
        const getCategories = async ()  => {
            await dispatch(fetchCategories())
        }
        getCategories()
    }, [])

    const categories = useSelector(getCategories)

    if(isLoading){
        return (
            <div className={cls.loader}>
                <Loader/>

            </div>
        )
    }

    return (
        <div className={classNames(cls.CategoriesList,{},[className])}>
            {categories.map((category) =>
                <CategoriesItem key={category.id} className={cls.CategoriesItem} category={category}/>
            )}
        </div>
    );
});

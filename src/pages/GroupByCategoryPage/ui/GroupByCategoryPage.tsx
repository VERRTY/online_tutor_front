import cls from './GroupByCategoryPage.module.scss'
import classNames from "classnames";
import {useAppDispatch} from "../../../shared/hooks/useAppDispatch/useAppDispatch";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {getCategories, getCategoriesById} from "../../../features/Categories";
import {useCallback, useEffect} from "react";
import {fetchCategories} from "../../../features/Categories/model/services/fetchCategories";
import {StateSchema} from "../../../app/providers/StoreProvider";
import SchoolImag from "../../../shared/assets/png/school.png";
import {courseGroupActions} from "../../../entitise/CourseGroupe";
import {GroupCourseBlock} from "../../../features/GroupCourseBlick";
interface GroupByCategoryPageProps {
    className?: string
}

const GroupByCategoryPage = ({className}:GroupByCategoryPageProps) => {

    const dispatch = useAppDispatch()
    const { categoryId } = useParams()
    const categories = useSelector(getCategories)

    const initCategories = useCallback( async () => {
        await dispatch(fetchCategories())
    },[dispatch])

    useEffect(() =>{
        if(!categories){
            initCategories()
        }
        dispatch(courseGroupActions.setLimit(25))
    }, [])

    const category = useSelector((state: StateSchema) => getCategoriesById(state, Number(categoryId)))

    return (

        <div className={classNames(cls.IndividualPage, {}, [className])}>
            <div className={cls.presentation}>
                <div className={cls.mainText}>
                    <h1>
                        Гропповые занятия:
                        {category?.name}
                    </h1>
                </div>
                <div className={cls.img}>
                    <img src={SchoolImag} alt="Presentation"/>
                </div>
                <span className={cls.line}></span>
            </div>
            <GroupCourseBlock categoryId={categoryId}/>
        </div>
    );
};

export default GroupByCategoryPage

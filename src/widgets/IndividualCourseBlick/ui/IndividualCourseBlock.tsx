import cls from './IndividualCourseBlick.module.scss'
import {CourseList} from "../../../entitise/CourseIndividual/ui/CourseList/CourseList";
import Button, {ButtonTheme} from "../../../shared/ui/Button/Button";
import {useSelector} from "react-redux";
import {
    getIndividualsCoursesLoading
} from "../../../entitise/CourseIndividual/model/selectors/getIndividualsCoursesLoading";
import {courseIndividualActions} from "../../../entitise/CourseIndividual";
import {fetchIndividualsCourses} from "../../../entitise/CourseIndividual/model/services/fetchIndividualsCourses";
import {useAppDispatch} from "../../../shared/hooks/useAppDispatch/useAppDispatch";
import classNames from "classnames";
import {memo, useEffect} from "react";
import {getIndividualsCourses} from "../../../entitise/CourseIndividual/model/selectors/getIndividualsCourses";

interface IndividualCourseProps {
    className?: string,
    title?: string
}

export const IndividualCourseBlock = memo((props: IndividualCourseProps) => {
    const {
        className,
    } = props

    const dispatch = useAppDispatch()
    const individualsCourses = useSelector(getIndividualsCourses)
    const isLoading = useSelector(getIndividualsCoursesLoading)

    const handleAddCourse = async () => {
        dispatch(courseIndividualActions.incrementPage())
        await dispatch(fetchIndividualsCourses({}))
    }

    useEffect(() => {
        const getIndividuals = async () => {
            await dispatch(fetchIndividualsCourses({}))
        }
        getIndividuals()

        return () => {
            dispatch(courseIndividualActions.clear())
        }
    }, [dispatch])

    return (
        <div className={classNames(cls.individualCourse, {}, [className])}>
            <h2 className={cls.title}>
                Лучшие индивидуальные занятия
            </h2>
            <CourseList isLoading={isLoading} courses={individualsCourses}/>
            <Button
                className={cls.btnText}
                theme={ButtonTheme.DEFAULT}
                onClick={handleAddCourse}
            >
                Посмотреть все
            </Button>
        </div>
    );
});

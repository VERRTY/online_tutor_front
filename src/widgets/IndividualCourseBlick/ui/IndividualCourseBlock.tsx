import cls from './IndividualCourseBlick.module.scss'
import {CourseList} from "../../../entitise/CourseIndividual/ui/CourseList/CourseList";
import Button, {ButtonTheme} from "../../../shared/ui/Button/Button";
import {useSelector} from "react-redux";
import {
    getIndividualsCoursesLoading
} from "../../../entitise/CourseIndividual/model/selectors/getIndividualsCoursesLoading";
import {courseIndividualActions, IndividualsCourses} from "../../../entitise/CourseIndividual";
import {fetchIndividualsCourses} from "../../../entitise/CourseIndividual/model/services/fetchIndividualsCourses";
import {useAppDispatch} from "../../../shared/hooks/useAppDispatch/useAppDispatch";
import classNames from "classnames";
import {memo} from "react";
import {useNavigate} from "react-router-dom";

interface IndividualCourseProps {
    className?: string,
    title?: string
    Course: IndividualsCourses[]
}

export const IndividualCourseBlock = memo((props: IndividualCourseProps) => {
    const {
        className,
        Course
    } = props
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const isLoading = useSelector(getIndividualsCoursesLoading)

    const handleAddCourse = async () => {
        dispatch(courseIndividualActions.incrementPage())
        await dispatch(fetchIndividualsCourses({}))
    }

    const redirectToIndividualPage = (id: number) =>{
        navigate('about/' + id)
    }

    return (
        <div className={classNames(cls.individualCourse, {}, [className])}>
            <h2 className={cls.title}>
                Лучшие индивидуальные занятия
            </h2>
            <CourseList isLoading={isLoading} courses={Course} redirect={redirectToIndividualPage}/>
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

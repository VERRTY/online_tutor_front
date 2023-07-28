import cls from './CourseList.module.scss'
import classNames from "classnames";
import {Card} from "../Card";
import {memo} from "react";
import Loader from "../../shared/ui/Loader/Loader";
import {Course} from "../../entitise/Course";
import {CardType} from "../Card/ui/Card/Card";

interface CourseListProps {
    className?: string,
    isLoading: boolean,
    courses: Course[],
    type?: CardType
}

export const CourseList = memo((props: CourseListProps) => {
    const {
        className,
        isLoading,
        courses,
        type
    } = props

    return (
        <>
            <div className={classNames(cls.CourseList, {}, [className])}>
                {courses.map((course) =>
                    <Card course={course} key={course.id} type={type} className={cls.CategoriesItem}/>
                )}
            </div>
            {isLoading && <div className={cls.loading}>
                <Loader/>
            </div>}</>
    );
});

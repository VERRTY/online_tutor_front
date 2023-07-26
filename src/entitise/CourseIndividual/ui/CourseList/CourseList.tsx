import cls from './CourseList.module.scss'
import classNames from "classnames";
import {IndividualsCourses} from "../../model/types/CourseIndividual";
import {Card} from "../../../../widgets/Card";
import {memo} from "react";

interface CourseListProps {
    className?: string,
    isLoading: boolean,
    courses: IndividualsCourses[],
    redirect?: (id: number) => void
}

export const CourseList = memo((props: CourseListProps) => {
    const {
        className,
        isLoading,
        courses,
        redirect
    } = props


    return (
        <>
            <div className={classNames(cls.CourseList, {}, [className])}>
                {courses.map((course) =>
                    <Card course={course} key={course.id} redirect={redirect}/>
                )}
            </div>

            {isLoading && <div className={cls.loading}>
                Loading...
            </div>}</>
    );
});

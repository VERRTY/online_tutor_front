import cls from './CourseList.module.scss'
import classNames from "classnames";
import {Course} from "../../model/types/CourseIndividual";
import {Card} from "../../../../widgets/Card";
import {memo} from "react";
import Loader from "../../../../shared/ui/Loader/Loader";

interface CourseListProps {
    className?: string,
    isLoading: boolean,
    courses: Course[],
}

export const CourseList = memo((props: CourseListProps) => {
    const {
        className,
        isLoading,
        courses,
    } = props


    return (
        <>
            <div className={classNames(cls.CourseList, {}, [className])}>
                {courses.map((course) =>
                    <Card course={course} key={course.id}/>
                )}
            </div>
            {isLoading && <div className={cls.loading}>
                <Loader/>
            </div>}</>
    );
});

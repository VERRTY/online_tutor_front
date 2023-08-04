import cls from './IndividualPage.module.scss'
import classNames from "classnames";
import {IndividualCourseBlock} from "../../../features/IndividualCourseBlick";
import {GroupCourseBlock} from "../../../features/GroupCourseBlick";
import {useLocation} from "react-router-dom";
import PresentationImg from "../../../shared/assets/Presentation.png";
import {courseGroupActions} from "../../../entitise/CourseGroupe";
import {courseIndividualActions} from "../../../entitise/CourseIndividual";
import {useAppDispatch} from "../../../shared/hooks/useAppDispatch/useAppDispatch";

enum GroupType {
    INDIVIDUAL = 'individual',
    GROUP = 'group',
}

interface IndividualPageProps {
    className?: string,
}

const IndividualPage = (props: IndividualPageProps) => {
    const {
        className,
    } = props
    let location = useLocation();
    const dispatch = useAppDispatch()

    location.state === GroupType.INDIVIDUAL
        ?
        dispatch(courseIndividualActions.setLimit(25))
        :
        dispatch(courseGroupActions.setLimit(25))

    return (
        <div className={classNames(cls.IndividualPage, {}, [className])}>
            <div className={cls.presentation}>
                <div className={cls.mainText}>
                    <h1>
                        {location.state === GroupType.INDIVIDUAL
                            ?
                            <div>
                                Индивидуальные занятия

                            </div>
                            :
                            <div>
                                Групповые занятия
                            </div>
                        }
                    </h1>
                </div>
                <div className={cls.img}>
                    <img src={PresentationImg} alt="Presentation"/>
                </div>
                <span className={cls.line}></span>
            </div>
            {location.state === GroupType.INDIVIDUAL
                ?
                <IndividualCourseBlock/>
                :
                <GroupCourseBlock/>
            }
        </div>
    );
};

export default IndividualPage
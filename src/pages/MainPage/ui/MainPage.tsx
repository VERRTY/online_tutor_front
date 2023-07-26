import cls from './MainPage.module.scss'
import PresentationImg from '../../../shared/assets/Presentation.png'
import {useAppDispatch} from "../../../shared/hooks/useAppDispatch/useAppDispatch";
import {fetchIndividualsCourses} from "../../../entitise/CourseIndividual/model/services/fetchIndividualsCourses";
import {useEffect} from "react";
import {useSelector} from "react-redux";
import {getIndividualsCourses} from "../../../entitise/CourseIndividual/model/selectors/getIndividualsCourses";
import {IndividualCourseBlock} from "../../../widgets/IndividualCourseBlick";
import {courseIndividualActions} from "../../../entitise/CourseIndividual";

const MainPage = () => {
    const dispatch = useAppDispatch()
    const individualsCourses = useSelector(getIndividualsCourses)

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
        <div className={cls.MainPage}>
            <div className={cls.presentation}>
                <div className={cls.mainText}>
                    <h1>
                        Онлайн репетитор
                    </h1>
                    <p>Главное удобно и качественно </p>
                </div>
                <div className={cls.img}>
                    <img src={PresentationImg} alt="Presentation"/>
                </div>
                <span className={cls.line}></span>
            </div>
            <IndividualCourseBlock Course={individualsCourses}/>
        </div>
    );
};

export default MainPage;
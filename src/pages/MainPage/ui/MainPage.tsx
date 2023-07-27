import cls from './MainPage.module.scss'
import PresentationImg from '../../../shared/assets/Presentation.png'
import {IndividualCourseBlock} from "../../../widgets/IndividualCourseBlick";

const MainPage = () => {
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

            <IndividualCourseBlock/>
        </div>
    );
};

export default MainPage;
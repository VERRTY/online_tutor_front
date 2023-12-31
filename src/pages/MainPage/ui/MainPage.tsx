import cls from './MainPage.module.scss'
import PresentationImg from '../../../shared/assets/Presentation.png'
import {IndividualCourseBlock} from "../../../features/IndividualCourseBlick";
import {GroupCourseBlock} from "../../../features/GroupCourseBlick";
import {CategoriesList} from "../../../features/Categories/ui/CategoriesList/CategoriesList";
import {courseGroupActions} from "../../../entitise/CourseGroupe";
import {useAppDispatch} from "../../../shared/hooks/useAppDispatch/useAppDispatch";
import {courseIndividualActions} from "../../../entitise/CourseIndividual";

const MainPage = () => {
    const dispatch = useAppDispatch()
    dispatch(courseGroupActions.setLimit(6))
    dispatch(courseIndividualActions.setLimit(10))

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
            <div>
                <CategoriesList/>
            </div>
            <IndividualCourseBlock/>
            <GroupCourseBlock/>
            <div className={cls.info}>
                <div className={cls.title}>
                    Занятия с репетитором онлайн: преимущества и особенности выбора
                </div>
                Занятия с репетитором онлайн: преимущества и особенности выбора
                Мы и наши родители представить себе не могли учебу в удаленном формате. Учителя работали в школе,
                а дома по некоторым предметам «подтягивал» репетитор. Сейчас, в эру интернета, на удаленку ушли все,
                кто может оказывать услуги дистанционно, в том числе и репетиторы. Уроки проводятся в скайпе и на платформе Zoom.
                Этот формат стал более удобным и для репетиторов, и для учеников, поскольку позволяет продолжать учебу вне зависимости
                от обстоятельств.
                <div className={cls.listTitle}>
                    Преимущества обучения с репетитором онлайн:
                </div>
                <ul className={cls.list}>
                    <li>
                        выгода находясь в Москве вы можете воспользоваться услугами преподавателя из региона, трудочас которого стоит
                        в разы дешевле, чем у столичного;

                    </li>
                    <li>
                        удобство не нужно тратить время и деньги на проезд;
                    </li>
                    <li>
                        широта поиска вы можете выбрать любого понравившегося репетитора, а не только того, который находится в вашем
                        городе;
                    </li>
                    <li>
                        возможность заниматься в любом удобном месте дома, на работе, в парке;
                    </li>
                    <li>
                        учеба без перерыва вы можете составить план занятий по разным предметам так, чтобы они шли один за другим
                        в удобное для вас время, ведь не нужно ездить к нескольким преподавателям в разные концы города;
                    </li>
                    <li>
                        большие технические возможности занимаясь с репетитором онлайн можно по максимуму использовать онлайн-инструменты:
                        учебники, презентации, демонстрацию экрана и массу других.
                    </li>
                </ul>

            </div>
        </div>
    );
};

export default MainPage;
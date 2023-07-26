import cls from './AboutCoursePage.modile.scss'
import classNames from "classnames";
import {useParams} from "react-router-dom";
interface IndividualPageProps {
    className?: string
}

const AboutCoursePage = ({className}:IndividualPageProps) => {
    const { id } = useParams()
    console.log('about course')

    return (
        <div className={classNames(cls.IndividualPage,{},[className])}>
            about course {id}
        </div>
    );
};

export default AboutCoursePage;
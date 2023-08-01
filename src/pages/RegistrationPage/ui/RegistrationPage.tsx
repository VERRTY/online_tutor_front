import cls from './RegistrationPage.module.scss'
import classNames from "classnames";
import {useParams} from "react-router-dom";
import {RegistrationForm} from "../../../features/Registration";
import {RegistrationPath} from "../const/RegistrationPath";
import AppLink from "../../../shared/ui/AppLink/AppLink";
import {AppRoutes} from "../../../shared/config/routeConfig/routeConfig";
interface RegistrationPageProps {
    className?: string,
}

const RegistrationPage = ({className}:RegistrationPageProps) => {
    const { typeReg } = useParams()

    return (
        <div className={classNames(cls.RegistrationPage,{},[className])}>
            <RegistrationForm/>
            {
                typeReg === RegistrationPath.STUDENT
                    ?
                    <AppLink to={'/' + AppRoutes.REGISTRATION + '/' + RegistrationPath.SPECIALISTS}>
                        Я преподаватель
                    </AppLink>
                    :
                    <AppLink to={'/' + AppRoutes.REGISTRATION + '/' + RegistrationPath.STUDENT}>
                        Я преподаватель
                    </AppLink>
            }

        </div>
    );
};

export default RegistrationPage;
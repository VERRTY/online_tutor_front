import cls from './AuthPage.module.scss'
import classNames from "classnames";
import {Wrapper, WrapperTheme} from "../../../shared/ui/Wrapper/Wrapper";
import {LoginByEmail} from "../../../features/LoginByEmail";
import AppLink from "../../../shared/ui/AppLink/AppLink";
import {AppRoutes} from "../../../shared/config/routeConfig/routeConfig";
import {RegistrationPath} from "../../RegistrationPage/const/RegistrationPath";

interface AuthPageProps {
    className?: string
}

const AuthPage = ({className}: AuthPageProps) => {

    return (
        <div className={classNames(cls.AuthPage, {}, [className])}>
            <Wrapper theme={WrapperTheme.WITHBG}>
                <div className={cls.title}>
                    Авторизация
                </div>
                <div className={cls.subtitle}>
                    Заполните данные
                </div>
                <div>
                    <LoginByEmail/>
                </div>
                <div className={cls.toReg}>
                    Если у вас нет аккаунта
                    <AppLink
                        to={'/' + AppRoutes.REGISTRATION + '/' + RegistrationPath.STUDENT}
                        className={cls.linkReg}
                    >
                        Зарегистрируйтесь
                    </AppLink>
                </div>
            </Wrapper>
        </div>
    );
};

export default AuthPage
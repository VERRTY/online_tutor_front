import cls from './RegistrationPage.module.scss'
import classNames from "classnames";
import {useParams} from "react-router-dom";
import {RegistrationForm} from "../../../features/Registration";
import {RegistrationPath} from "../const/RegistrationPath";
import AppLink from "../../../shared/ui/AppLink/AppLink";
import {AppRoutes} from "../../../shared/config/routeConfig/routeConfig";
import React from "react";
import {Wrapper, WrapperTheme} from "../../../shared/ui/Wrapper/Wrapper";

interface RegistrationPageProps {
    className?: string,
}

const RegistrationPage = ({className}:RegistrationPageProps) => {
    const { typeReg } = useParams()

    return (
        <div className={classNames(cls.RegistrationPage,{},[className])}>
            <Wrapper theme={WrapperTheme.WITHBG}>
                <div className={cls.title}>
                    {typeReg === RegistrationPath.SPECIALISTS
                        ?
                        <div>
                            Регистрация для репетитора
                        </div>
                        :
                        <div>
                            Регистрация для ученика
                        </div>
                    }
                </div>
                <div className={cls.navReg}>
                    <div className={cls.subtitle}>
                        Заполните данные
                    </div>
                    <div>
                        {
                            typeReg === RegistrationPath.STUDENT
                                ?
                                <AppLink to={'/' + AppRoutes.REGISTRATION + '/' + RegistrationPath.SPECIALISTS} className={cls.nav}>
                                    Я репетитор
                                </AppLink>
                                :
                                <AppLink to={'/' + AppRoutes.REGISTRATION + '/' + RegistrationPath.STUDENT} className={cls.nav}>
                                    Я ученик
                                </AppLink>
                        }
                    </div>
                </div>
                <RegistrationForm/>

            </Wrapper>

        </div>
    );
};

export default RegistrationPage;
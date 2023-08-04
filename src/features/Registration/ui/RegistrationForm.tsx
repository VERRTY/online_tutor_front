import cls from './RegistrationForm.module.scss'
import {Input} from "../../../shared/ui/Input/Input";
import Button from "../../../shared/ui/Button/Button";
import classNames from "classnames";
import {DropDown} from "../../../shared/ui/DropDown/DropDown";
import {Region, Sex} from "../../../shared/const/common";
import React, {useCallback, useMemo} from "react";
import {useAppDispatch} from "../../../shared/hooks/useAppDispatch/useAppDispatch";
import {useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import {RegistrationPath} from "../../../pages/RegistrationPage/const/RegistrationPath";
import {
    getRegistration,
    getRegistrationLoading,
} from "../model/Selectors/RegistrationSelectors";
import {registrationActions} from "../model/slice/RegistrationSlice";
import {registrationStudent} from "../model/Services/RegistrationStudent/RegistrationStudent";
import {
    registrationSpecialists
} from "../model/Services/RegistrationSpecialists/RegistrationSpecialists";
import {AppRoutes} from "../../../shared/config/routeConfig/routeConfig";

interface RegistrationProps {
    className?: string
    specialist?: string
}

export const RegistrationForm = ({className}: RegistrationProps) => {

    const dispatch = useAppDispatch()
    const {typeReg } = useParams()
    const candidate = useSelector(getRegistration)
    const navigate = useNavigate()
    const Loading = useSelector(getRegistrationLoading)
    // useEffect(() => {
    //     dispatch(fetchCategories)
    // }, [])

    const sex = useMemo(() => {
        return Object.values(Sex)
    }, [])

    const region = useMemo(() => {
        return Object.values(Region)
    }, [])

    const onChangeUsername = useCallback((username: string) => {
        dispatch(registrationActions.setUsername(username))
    },[dispatch])

    const onChangeSurname = useCallback((surname: string) => {
        dispatch(registrationActions.setSurname(surname))
    },[dispatch])

    const onChangePassword = useCallback((password: string) => {
        dispatch(registrationActions.setPassword(password))
    },[dispatch])

    const onChangeEmail = useCallback((email: string) => {
        dispatch(registrationActions.setEmail(email))
    },[dispatch])

    const onChangePhoneNumber = useCallback((phoneNumber: string) => {
        dispatch(registrationActions.setPhoneNumber(phoneNumber))
    },[dispatch])

    const onChangeEducation = useCallback((education: string) => {
        dispatch(registrationActions.setEducation(education))
    },[dispatch])

    const onChangeDescription = useCallback((description: string) => {
        dispatch(registrationActions.setDescription(description))
    },[dispatch])

    const onChangeAge = useCallback((age: string) => {
        dispatch(registrationActions.setAge(Number(age)))
    },[dispatch])

    const onChangeSex = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(registrationActions.setGender(e.target.value as Sex))
    },[dispatch])

    const onChangeRegion = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(registrationActions.setRegion(e.target.value as Region))
    },[dispatch])

    console.log(typeReg === RegistrationPath.SPECIALISTS)
    const onRegistrationClick = useCallback(async () => {
        let result;
        if(typeReg === RegistrationPath.SPECIALISTS){
            result = await dispatch(registrationSpecialists(candidate))

        }else {
            result = await dispatch(registrationStudent(candidate))
        }
        if (result.meta.requestStatus === 'fulfilled') {
            navigate('/' + AppRoutes.AUTH)
            dispatch(registrationActions.setDefault())
        }
    }, [dispatch,candidate, navigate, typeReg])


    // const handleSetCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    //     console.log(e.target.value)
    // }
    return (
        <div className={classNames(cls.RegistrationForm, {}, [className])}>
            <div className={cls.forms}>
                <Input className={cls.input} placeholder='Имя' value={candidate.name} onChange={onChangeUsername}/>
                <Input className={cls.input} placeholder='Фамилия' value={candidate.surname} onChange={onChangeSurname}/>
                <Input className={cls.input} placeholder='Пароль' type={"password"} value={candidate.password} onChange={onChangePassword}/>
                <Input className={cls.input} placeholder='Email' value={candidate.email} onChange={onChangeEmail}/>
                <Input className={cls.input} placeholder='Телефон' value={candidate.phoneNumber} onChange={onChangePhoneNumber}/>
                <Input className={cls.input} placeholder='Образование' value={candidate.education} onChange={onChangeEducation}/>
                {
                    typeReg === RegistrationPath.SPECIALISTS
                        ?
                        <Input className={cls.input} placeholder='О себе' value={candidate.description} onChange={onChangeDescription}/>
                        :
                        <Input className={cls.input} placeholder='Возраст' type='number' value={candidate.age} onChange={onChangeAge}/>
                }
                <DropDown
                    placeholder='Пол'
                    onClick={onChangeSex}
                    options={sex}
                    className={cls.input}
                />
                <DropDown
                    placeholder='Регион'
                    onClick={onChangeRegion}
                    options={region}
                    className={cls.input}
                />
                {/*<DropDown*/}
                {/*    placeholder='Услуги'*/}
                {/*    onClick={handleSetCategory}*/}
                {/*    options={categoriesName}*/}
                {/*    className={cls.input}*/}
                {/*/>*/}
            </div>
            <Button onClick={onRegistrationClick} disabled={Loading}>
                Зарегистрироваться
            </Button>
        </div>
    );
};

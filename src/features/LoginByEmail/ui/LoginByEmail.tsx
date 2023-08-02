import cls from './LoginByEmail.module.scss'
import classNames from "classnames";
import {Input} from "../../../shared/ui/Input/Input";
import {useAppDispatch} from "../../../shared/hooks/useAppDispatch/useAppDispatch";
import {useSelector} from "react-redux";
import {getLoginLoading, getLoginPassword, getLoginUsername} from "../model/selectors/LoginSelectors";
import {loginActions} from "../model/loginSlice/loginSlice";
import {memo, useCallback} from "react";
import Button from "../../../shared/ui/Button/Button";
import {fetchLogin} from "../model/Services/fetchLogin";
import {useNavigate} from "react-router-dom";
interface LoginByEmailProps {
    className?: string
}

export const LoginByEmail = memo(({className}:LoginByEmailProps) => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const username = useSelector(getLoginUsername)
    const password = useSelector(getLoginPassword)
    const Loading = useSelector(getLoginLoading)

    const onChangeUsername = useCallback((username: string) => {
        dispatch(loginActions.setUsername(username))
    },[dispatch])

    const onChangePassword = useCallback((password: string) => {
        dispatch(loginActions.setPassword(password))
    },[dispatch])

    const onLoginClick = useCallback(async() => {
        const result = await dispatch(fetchLogin({login:  username , password}))
        if (result.meta.requestStatus === 'fulfilled') {
            navigate('/')
        }
    },[dispatch, password, username, navigate])

    return (
        <div className={classNames(cls.LoginByEmail,{},[className])}>
            <Input
                placeholder='Email'
                value={username}
                onChange={onChangeUsername}
                className={cls.input}
            />

            <Input
                placeholder='Пароль'
                type='password'
                value={password}
                onChange={onChangePassword}
                className={cls.input}
            />
            <Button
                disabled={Loading}
                onClick={onLoginClick}
            >
                Вход
            </Button>
        </div>
    );
});

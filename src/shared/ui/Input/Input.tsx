import cls from './Input.module.scss'
import classNames from "classnames";
import React, {InputHTMLAttributes, memo} from "react";

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;


interface InputProps extends HTMLInputProps{
    className?: string
    value?: string | number
    onChange?: (value: string) => void,
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        onChange,
        placeholder,
        ...otherProps
    } = props

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value)
    }

    return (
        <div className={classNames(cls.inputBlock, {}, [className])}>
            {placeholder &&
                (
                    <div className={cls.placeholder}>
                        {placeholder}
                    </div>
                )
            }
            <input
                className={classNames(cls.Input,{},[])}
                value={value}
                onChange={onChangeHandler}
                {...otherProps}
            >

            </input>
        </div>

    );
});

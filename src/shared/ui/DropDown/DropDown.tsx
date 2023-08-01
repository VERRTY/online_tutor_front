import cls from './DropDown.module.scss'
import classNames from "classnames";
import React, {memo} from "react";

interface DropDownProps {
    className?: string
    options?: Array<string>
    onClick?: (e: React.ChangeEvent<HTMLSelectElement>) => void
    placeholder?: string
}

export const DropDown = memo((props: DropDownProps) => {
    const {
        options,
        className,
        onClick,
        placeholder
    } = props
    return (
        <div className={classNames(cls.DropDown, {}, [className])}>
            {placeholder &&
                (
                    <div className={cls.placeholder}>
                        {placeholder}
                    </div>
                )
            }
            <select onChange={onClick} className={cls.select}>
                {options &&
                    options.map(item =>
                        <option key={item}>
                            {item}
                        </option>
                    )
                }
            </select>
        </div>
    );
});

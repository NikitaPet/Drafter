'use client'

import { useState } from 'react'
import classNames from 'classnames'
import { type DetailedHTMLProps, InputHTMLAttributes } from 'react'
import { FaCheck } from 'react-icons/fa'

import styles from './styles/Checkbox.module.scss'

export default function Checkbox({ className, onChange, ...props }: Props) {
    const [defaultChecked, setDefaultChecked] = useState(props?.checked)

    return (
        <div
            className={classNames(styles.wrapper, {
                [className]: !!className,
            })}
        >
            <div
                className={classNames(styles['custom-box'], {
                    [styles.checked]: defaultChecked,
                })}
            >
                <FaCheck className={styles.checkmark} />
                <input
                    className={styles['default-box']}
                    type="checkbox"
                    onChange={(event) => {
                        setDefaultChecked(event.target.checked)
                        onChange(event)
                    }}
                    {...props}
                />
            </div>
        </div>
    )
}
export { Checkbox }

type Props = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

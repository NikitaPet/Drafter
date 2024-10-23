import { type DetailedHTMLProps, InputHTMLAttributes } from 'react'
import { type MutableRefObject } from 'react'
import cn from 'classnames'

import styles from './styles/Input.module.scss'

export default function Input({ isError = false, className, ...props }: Props) {
    return (
        <input
            className={cn(styles.input, {
                [className]: !!className,
                [styles.error]: !!isError,
            })}
            {...props}
        />
    )
}
export { Input }

type Props = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
    isError?: boolean
}

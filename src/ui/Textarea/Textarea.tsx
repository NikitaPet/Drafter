import { type DetailedHTMLProps, TextareaHTMLAttributes } from 'react'
import cn from 'classnames'

import styles from './styles/Textarea.module.scss'

export default function Textarea({ isError = false, className, ...props }: Props) {
    return (
        <textarea
            className={cn(styles.textarea, {
                [className]: !!className,
                [styles.error]: !!isError,
            })}
            {...props}
        />
    )
}
export { Textarea }

type Props = DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> & {
    isError?: boolean
}

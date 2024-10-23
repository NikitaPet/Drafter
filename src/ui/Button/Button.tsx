'use client'

import { useRef } from 'react'
import { type DetailedHTMLProps, ButtonHTMLAttributes } from 'react'
import cn from 'classnames'

import styles from './styles/Button.module.scss'

export function Button({ className = null, onClick, children, ...props }: Props) {
    const buttonRef = useRef(null)

    function handleClick() {
        buttonRef.current.blur()
    }

    return (
        <button
            ref={buttonRef}
            className={cn(styles.default, {
                [className]: !!className,
            })}
            onClick={(event) => {
                if (onClick) onClick(event)
                handleClick()
            }}
            {...props}
        >
            {children}
        </button>
    )
}
export default Button

export type Props = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

'use client'

import { useContext } from 'react'
import { createContext } from 'react'
import { useEffect } from 'react'
import { type Dispatch, type SetStateAction } from 'react'
import cn from 'classnames'
import Button from '@/ui/Button'

import styles from './Calculator.module.scss'

export function Window({ children }) {
    return <div className={styles.window}>{children}</div>
}

export function CalcButton({ keyboard, sign, act, className }: CalcButtonProps) {
    const { expression } = useContext(Context)

    const handleKeypress = (event: KeyboardEvent) => {
        if (event.key === keyboard) {
            act()
        }
    }

    useEffect(() => {
        window.addEventListener('keyup', handleKeypress)
        return () => window.removeEventListener('keyup', handleKeypress)
    }, [expression])

    return (
        <Button className={cn(styles.button, { [className]: !!className })} onClick={() => act()}>
            {sign}
        </Button>
    )
}
export { CalcButton as Button }

export const Context = createContext<ContextType>(null)
export type ExpressionSetter = Dispatch<SetStateAction<string>>
export type ContextType = { expression: string; setExpression: ExpressionSetter }

export type CalcButtonProps = {
    keyboard?: KeyboardEvent['key']
    sign: string
    act: () => void
    className?: string
}

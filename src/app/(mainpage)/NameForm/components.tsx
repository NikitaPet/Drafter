'use client'

import { createContext } from 'react'
import { useState, useContext } from 'react'
import { type Dispatch, type SetStateAction } from 'react'
import { GrClose as CloseIcon } from 'react-icons/gr'
import Input from '@/ui/Input'
import Button from '@/ui/Button'
import useStore from '@/store'
import useRedirect from '@global-hooks/useRedirect'

import styles from './NameForm.module.scss'

export function Window({ children }) {
    const [name, setName] = useState('')
    const isNameValid = !!name
    return (
        <Context.Provider value={{ name, setName, isNameValid }}>
            <div className={styles.window}>
                {children}
                <div className={styles['close-button']} onClick={() => alert('Введите имя!')}>
                    <CloseIcon className={styles['close-icon']} />
                </div>
            </div>
        </Context.Provider>
    )
}

function WindowInput({ placeholder }) {
    const { name, setName } = useContext(Context)
    return (
        <Input
            value={name}
            placeholder={placeholder}
            onChange={({ target }) => setName(target.value)}
            className={styles.input}
        />
    )
}
export { WindowInput as Input }

export function WindowButton({ href, children }) {
    const redirect = useRedirect()
    const { name, isNameValid } = useContext(Context)
    const setStoreName = useStore((state) => state.setName)

    const openPage = () => {
        setStoreName(name)
        localStorage.setItem('name', name)
        redirect(href)
    }

    return (
        <Button className={styles.button} onClick={() => openPage()} disabled={!isNameValid}>
            {children}
        </Button>
    )
}
export { WindowButton as Button }

export const Context = createContext<ContextType>(null)
export type NameSetter = Dispatch<SetStateAction<string>>
export type ContextType = { name: string; setName: NameSetter; isNameValid: boolean }

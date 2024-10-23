'use client'

import { createContext } from 'react'
import { useState, useContext } from 'react'
import { type Dispatch, type SetStateAction } from 'react'
import Image from 'next/image'
import Input from '@/ui/Input'
import Checkbox from '@/ui/Checkbox'
import Button from '@/ui/Button'
import { getNewPassword } from './funcs'

import styles from './PasswordGenerator.module.scss'

export function Window({ children }) {
    const [passwords, setPasswords] = useState([])
    const addPassword = (newPassword: string) => {
        const newPasswords = [...passwords]
        newPasswords.push(newPassword)
        setPasswords(newPasswords)
    }
    return (
        <Context.Provider value={{ passwords, setPasswords, addPassword }}>
            <div className={styles.window}>{children}</div>
        </Context.Provider>
    )
}

export function Form({ children }) {
    const [checkboxes, setCheckboxes] = useState({})
    const [inputValue, setInputValue] = useState('')

    return (
        <FormContext.Provider value={{ checkboxes, setCheckboxes, inputValue, setInputValue }}>
            <div className={styles.form}>{children}</div>
        </FormContext.Provider>
    )
}

export function List() {
    const { passwords } = useContext(Context)
    return (
        <div className={styles.passwords}>
            {passwords.map((password, i) => (
                <div className={styles['password-item']} key={i + password}>
                    <p className={styles['password']}>{password}</p>
                    <Image
                        src="/img/copy.svg"
                        alt="copy"
                        className={styles['copy-icon']}
                        width={3000}
                        height={3000}
                        onClick={() => navigator.clipboard.writeText(password)}
                    />
                </div>
            ))}
        </div>
    )
}

function FormInput() {
    const { inputValue, setInputValue } = useContext(FormContext)
    return (
        <Input
            type="number"
            className={styles.input}
            value={inputValue}
            onChange={({ target }) => setInputValue(target?.value)}
        />
    )
}
export { FormInput as Input }

function FormCheckbox({ name, title = '' }: { name: keyof Checkboxes; title: string }) {
    const { checkboxes, setCheckboxes } = useContext(FormContext)
    const updateCheckboxes = (checked: boolean) => {
        checkboxes[name] = checked
        setCheckboxes({ ...checkboxes })
    }
    return (
        <div className={styles['checkbox-line']}>
            <Checkbox
                className={styles.checkbox}
                checked={!!checkboxes?.[name]}
                onChange={({ target }) => updateCheckboxes(target.checked)}
            />
            <h3>{title}</h3>
        </div>
    )
}
export { FormCheckbox as Checkbox }

export function FormButton({ children }) {
    const { addPassword } = useContext(Context)
    const { checkboxes, inputValue } = useContext(FormContext)
    const settings: FormSettings = { length: Number(inputValue), ...checkboxes }
    return (
        <Button
            className={styles.button}
            onClick={() => {
                const newPassword = getNewPassword(settings)
                if (newPassword) addPassword(newPassword)
            }}
        >
            {children}
        </Button>
    )
}
export { FormButton as Button }

export const Context = createContext<ContextType>(null)
export type PasswordsSetter = Dispatch<SetStateAction<string[]>>
export type ContextType = {
    passwords: string[]
    setPasswords: PasswordsSetter
    addPassword: (newPassword: string) => void
}

export const FormContext = createContext<FormContextType>(null)
export type Checkboxes = Partial<{
    uppercase: boolean
    lowercase: boolean
    numbers: boolean
    symbols: boolean
    unrepeatable: boolean
}>
export type CheckboxesSetter = Dispatch<SetStateAction<Checkboxes>>
export type FormContextType = {
    checkboxes: Checkboxes
    setCheckboxes: CheckboxesSetter
    inputValue: string
    setInputValue: Dispatch<SetStateAction<string>>
}

export type FormSettings = Checkboxes & { length: number }

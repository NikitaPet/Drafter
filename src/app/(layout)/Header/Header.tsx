'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import cn from 'classnames'
import useStore from 'store'

import styles from './styles/Header.module.scss'

export default function Header() {
    const pathname = usePathname()
    const storeName = useStore((state) => state.name)
    const [name, setName] = useState('Ваше имя')

    useEffect(() => {
        setName(storeName || localStorage.getItem('name'))
    }, [])

    return (
        <header
            className={cn(styles.wrapper, {
                [styles.hidden]: !name || pathname === '/',
            })}
        >
            <div className={styles.box}>
                <div className={styles.nav}>
                    <Link href={`/`}>Главная</Link>
                    <Link href={`/password-generator`}>Генератор паролей</Link>
                    <Link href={`/calculator`}>Калькулятор</Link>
                </div>
                <div className={styles.account}>
                    <h2>{name || 'Ваше имя'}</h2>
                    <div className={styles.circle}>
                        <h1>{name.toUpperCase()?.[0] || 'В'}</h1>
                    </div>
                </div>
            </div>
        </header>
    )
}
export { Header }

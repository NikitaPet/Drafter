'use client'

import Link from 'next/link'
import cn from 'classnames'

import styles from './styles/Header.module.scss'

export default function Header() {
    return (
        <header className={cn(styles.wrapper)}>
            <div className={styles.box}>
                <div className={styles.nav}>
                    <Link href={`/`}>Главная</Link>
                    <Link href={`/note-form/new-note`}>Добавить заметку</Link>
                </div>
            </div>
        </header>
    )
}
export { Header }

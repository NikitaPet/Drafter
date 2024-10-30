import styles from './styles/NoteDetails.module.scss'

export function Label({ children }) {
    return (
        <div className={styles['modal-label']}>
            <p>{children}</p>
        </div>
    )
}

export function Text({ children }) {
    return (
        <div className={styles['modal-text']}>
            <p>{children}</p>
        </div>
    )
}


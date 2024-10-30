'use client'

import classNames from 'classnames'
import Filter from 'shared/icons/Filter'
import { statuses } from './assets/statuses'

import styles from './styles/Table.module.scss'

export function TableTitle({ children, name, setSort, sort }) {
    const isActiveSort = name === sort
    return (
        <div
            className={styles['cell']}
            onClick={() => setSort(!isActiveSort ? name : '')}
        >
            <p>{children}</p>
            <div className={styles['filter-icon']}>
                <Filter styleClass={isActiveSort ? 'green' : 'white'} />
            </div>
        </div>
    )
}

export function TableCell({
    children,
    className,
}: {
    children: React.ReactNode
    className?: string
}) {
    return (
        <div
            className={classNames(styles['cell'], {
                [className]: className,
            })}
        >
            <p>{children}</p>
        </div>
    )
}

export function StatusTableCell({ status }) {
    const ruStatus = statuses[status]
    return (
        <TableCell
            className={classNames(styles['status-cell'], {
                [styles[status]]: ruStatus,
            })}
        >
            {ruStatus || 'Не известен'}
        </TableCell>
    )
}

export function QueryMessage({ children }) {
    return (
        <div className={classNames(styles['query-message'])}>
            <p>{children}</p>
        </div>
    )
}

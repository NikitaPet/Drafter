'use client'

import { useState, useEffect } from 'react'
import classNames from 'classnames'
import getDate from 'date-and-time'
import { useGetAllNotesQuery } from 'store/api'
import Module from 'containers/PageModule'
import useRedirect from '@global-hooks/useRedirect'
import { TableTitle, TableCell } from './components'
import { QueryMessage, StatusTableCell } from './components'
import { columns, columnsKeys } from './assets/columns'
import { filterList, getFullFilter, type Filter } from './assets/funcs'
import { sortList, getDateInfo } from './assets/funcs'
import { statuses } from './assets/statuses'

import styles from './styles/Table.module.scss'

export default function Table() {
    const [sort, setSort] = useState('')
    const [filter, setFilter] = useState<Filter>(null)
    const [filterOpenList, setFilterOpenList] = useState('')

    const { data, isLoading, isSuccess, isError } = useGetAllNotesQuery()
    const isListReady = isSuccess && !isLoading && Array.isArray(data)
    const filtredList = isListReady && !!filter ? filterList(data, filter) : []
    const sortedList = isListReady ? sortList(filtredList, sort) : []

    const updateFilter = (typeKey: string, itemValue: string) => {
        const filterItem = filter
            .find((type) => type?.key === typeKey)
            .list.find((item) => item?.value === itemValue)
        filterItem.isActive = !filterItem.isActive
        setFilter([...filter])
    }

    useEffect(() => {
        if (!isListReady) return
        setFilter(getFullFilter(data))
    }, [data])

    return (
        <Module className={styles['wrapper']}>
            <div className={styles.box}>
                <div className={styles['filters']}>
                    {!!filter &&
                        filter.map((type, i) => (
                            <div className={styles['filter']} key={i + type?.key}>
                                <button
                                    className={styles['filter-button']}
                                    onClick={() =>
                                        setFilterOpenList(
                                            filterOpenList !== type?.key ? type?.key : '',
                                        )
                                    }
                                >
                                    {columns[type?.key]}
                                </button>
                                <div
                                    className={classNames(styles['list'], {
                                        [styles['hidden']]: filterOpenList !== type?.key,
                                    })}
                                >
                                    {type?.list?.map((item, i) => (
                                        <div
                                            className={classNames(styles['item'], {
                                                [styles['inative']]: !item.isActive,
                                            })}
                                            key={i + item?.value}
                                            onClick={() => updateFilter(type?.key, item?.value)}
                                        >
                                            <p className={styles['item-name']}>
                                                {type?.key !== 'status'
                                                    ? item?.value
                                                    : statuses[item?.value]}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                </div>

                <div className={styles['table']}>
                    <div className={styles['titles']}>
                        <div className={styles['row']}>
                            {columnsKeys.map((key, i) => (
                                <TableTitle {...{ sort, setSort }} name={key} key={i + key}>
                                    {columns[key]}
                                </TableTitle>
                            ))}
                        </div>
                    </div>

                    <div className={styles['content']}>
                        {isListReady &&
                            sortedList.map((data, i) => (
                                <TableContentRow {...{ data }} key={i + JSON.stringify(data)} />
                            ))}

                        {isLoading && <QueryMessage>{'Загрузка...'}</QueryMessage>}
                        {isError && <QueryMessage>{'Ошибка загрузки'}</QueryMessage>}
                    </div>
                </div>
            </div>
        </Module>
    )
}
export { Table }

function TableContentRow({ data }) {
    const redirect = useRedirect()
    const id = data.id
    const [date, isDateValid] = getDateInfo(data?.date)
    const formatDate = isDateValid ? getDate.format(date, 'DD/MM/YYYY') : 'Неизвестная дата'
    return (
        <div className={styles['row']} onClick={() => redirect(`/note-details/${id}`)}>
            <TableCell>{formatDate}</TableCell>
            <TableCell className={styles.description}>{data?.description}</TableCell>
            <StatusTableCell status={data?.status} />
        </div>
    )
}

'use client'

import classNames from 'classnames'
import Module from 'containers/PageModule'
import useRedirect from '@global-hooks/useRedirect'
import { useGetAllNotesQuery } from 'store/api'
import { statuses } from '@mainpage/Table/assets/statuses'
import Button from '@/ui/Button'
import Textarea from '@/ui/Textarea'
import { Label, Text } from './components'

import styles from './styles/NoteDetails.module.scss'

export default function NoteDetails({ id }) {
    const redirect = useRedirect()
    const { data } = useGetAllNotesQuery()
    const note = data?.find((note) => note.id === id) || {}

    return (
        <Module className={styles['wrapper']}>
            <div className={classNames(styles.form)}>
                <div className={styles['string']}>
                    <Label>{'Дата'}</Label>
                    <Text>{note.date}</Text>
                </div>

                <div className={styles['string']}>
                    <Label>{'Статус'}</Label>
                    <Text>{statuses[note.status] || 'Неизвестный'}</Text>
                </div>

                <div className={styles['string']}>
                    <Label>{'Описание'}</Label>
                </div>

                <Textarea
                    value={note.description}
                    className={styles['textarea']}
                    onChange={() => {}}
                />

                <Button className={styles['button']} onClick={() => redirect(`/note-form/${id}`)}>
                    {'Редактировать'}
                </Button>

                <Button className={styles['button']} onClick={() => redirect(`/`)}>
                    {'Вернуться'}
                </Button>
            </div>
        </Module>
    )
}
export { NoteDetails }

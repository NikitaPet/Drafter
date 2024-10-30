'use client'

import { useState } from 'react'
import classNames from 'classnames'
import uniqid from 'uniqid'
import getDate from 'date-and-time'
import Module from 'containers/PageModule'
import useRedirect from '@global-hooks/useRedirect'
import { statuses, statusesKeys } from '@mainpage/Table/assets/statuses'
import { useGetAllNotesQuery } from 'store/api'
import { usePostNewNoteMutation, useUpdateNoteMutation } from 'store/api'
import Button from '@/ui/Button'
import Textarea from '@/ui/Textarea'
import { Label, Text } from './components'

import styles from './styles/NoteForm.module.scss'

export default function NoteForm({ id }) {
    const redirect = useRedirect()

    const isNewNote = id === 'new-note'
    const { data } = useGetAllNotesQuery()
    const editedNote = data?.find((note) => note.id === id) || {}

    const [postNewNoteMutation] = usePostNewNoteMutation()
    const [updateNoteMutation] = useUpdateNoteMutation()

    const [status, setStatus] = useState(isNewNote ? statusesKeys[0] : editedNote.status)
    const [description, setDescription] = useState(isNewNote ? '' : editedNote.description)
    const [isDescriptionError, setDescriptionError] = useState(false)
    const date = isNewNote ? getDate.format(new Date(), 'DD/MM/YYYY') : editedNote.date

    const newNoteData = {
        id: isNewNote ? uniqid() : id,
        date,
        status,
        description,
    }

    const postNewNote = async () => {
        if (description === '') setDescriptionError(true)
        else {
            const postResult = await postNewNoteMutation(newNoteData)
            if (postResult?.error) alert('Ошибка запроса')
            else redirect('/')
        }
    }

    const updateNote = async () => {
        if (description === '') setDescriptionError(true)
        else {
            const postResult = await updateNoteMutation(newNoteData)
            if (postResult?.error) alert('Ошибка запроса')
            else redirect(`/note-details/${id}`)
        }
    }

    return (
        <Module className={styles['wrapper']}>
            <div className={classNames(styles.form)}>
                <div className={styles['string']}>
                    <Label>{'Дата'}</Label>
                    <Text>{date}</Text>
                </div>

                <div className={styles['string']}>
                    <Label>{'Статус'}</Label>
                    <select
                        className={classNames(styles['field'], styles['select'], {
                            [styles.filled]: status,
                        })}
                        value={status}
                        onChange={({ target }) => setStatus(target.value)}
                    >
                        {statusesKeys.map((key) => (
                            <option value={key} key={key}>
                                {statuses[key]}
                            </option>
                        ))}
                    </select>
                </div>

                <div className={styles['string']}>
                    <Label>{'Описание'}</Label>
                </div>

                <Textarea
                    placeholder={'Опишите заметку'}
                    value={description}
                    onChange={({ target }) => {
                        setDescriptionError(false)
                        setDescription(target.value)
                    }}
                    className={classNames(styles['field'], styles['textarea'])}
                    isError={isDescriptionError}
                />

                <Button
                    className={styles['button']}
                    onClick={() => (isNewNote ? postNewNote() : updateNote())}
                >
                    {isNewNote ? 'Создать заметку' : 'Обновить заметку'}
                </Button>

                <Button
                    className={styles['button']}
                    onClick={() => redirect(isNewNote ? `/` : `/note-details/${id}`)}
                >
                    {'Отмена'}
                </Button>
            </div>
        </Module>
    )
}
export { NoteForm }

import { statusesKeys } from './statuses'
import { columnsKeys } from './columns'

export const sortList = (list: object[], sort: string) => {
    const newList = [...list]
    const timeByDate = (date: string) => getDateInfo(date)?.[0]?.getTime()
    if (columnsKeys.includes(sort)) {
        newList.sort((obj1, obj2) => {
            const prop1 = obj1[sort]
            const prop2 = obj2[sort]
            if (sort === 'date') return timeByDate(prop1) - timeByDate(prop2)
            if (sort === 'description') return prop1 > prop2 ? 1 : -1
            if (sort === 'status') return statusesKeys.indexOf(prop1) - statusesKeys.indexOf(prop2)
        })
    }
    return [...newList]
}

export const filterList = (list: object[], filter: Filter) => {
    const activeFilter = filter.map((type) => {
        const newType = { key: type.key, list: null }
        newType.list = type.list.filter((item) => item.isActive).map((item) => item.value)
        return newType
    })

    const newList = [...list].filter((note) =>
        activeFilter.every((type) => type.list.includes(note[type?.key])),
    )

    return [...newList]
}

export const getDateInfo = (dateString: string): [Date, boolean] => {
    const [day, month, year] = dateString?.split('/')
    const date = new Date(Number(year), Number(month), Number(day))
    const isDateValid = !isNaN(Date.parse(date.toString()))
    return [date, isDateValid]
}

export const getFullFilter = (data) => {
    const fullFilter = columnsKeys.map((key) => {
        const values = data.map((note) => String(note?.[key]))
        const uniqueValues = values.filter((item, index) => values.indexOf(item) === index)
        const uniqueValueStatuses = uniqueValues.map((value) => ({ value: value, isActive: true }))
        return { key, list: uniqueValueStatuses }
    })
    return fullFilter
}

export type FilterItemListStatus = { value: string; isActive: boolean }
export type FilterItemList = FilterItemListStatus[] | null
export type FilterItem = { key: string; list: FilterItemList }
export type Filter = FilterItem[]

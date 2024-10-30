export const columns = { date: 'Дата', description: 'Заметка', status: 'Статус' }
export const columnsKeys = Object.keys(columns)
export const columnsValues = Object.values(columns)
export type ColumnKeys = keyof typeof columns

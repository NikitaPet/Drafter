import slices from '@/store/slices'

import { type Store } from './types'

export const getStore = (store: Store) => store
export default getStore

export const getData = (store: Store) => store?.[slices.name]

export { Provider } from 'react-redux'
import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'

import api from '@/store/api'
import slices from '@/store/slices'
import { type Store, type Middleware, type PreloadedState } from './types'



export const reducer = combineReducers({
    [api.reducerPath]: api.reducer,
    [slices.name]: slices.reducer,
})

export const middleware: Middleware = (getMiddleware) =>
    getMiddleware({ serializableCheck: false }).concat([api.middleware])


export const createStore = (preloadedState: PreloadedState) =>
    configureStore({ reducer, middleware, preloadedState })

export const store = createStore({})
export default store

export const wrapper = createWrapper<Store>(createStore, { debug: true })



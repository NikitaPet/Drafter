import { type ConfigureStoreOptions } from '@reduxjs/toolkit'
import { createStore } from './store'

export type Store = ReturnType<typeof createStore>
export type State = ReturnType<Store['getState']>
export type Dispatch = Store['dispatch']

export type Middleware = ConfigureStoreOptions['middleware']
export type PreloadedState = ConfigureStoreOptions['preloadedState']



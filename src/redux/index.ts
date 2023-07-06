import {configureStore} from '@reduxjs/toolkit'

import {useDispatch, useSelector} from 'react-redux'
import type {TypedUseSelectorHook} from 'react-redux'

import {baseApi} from "../services/api/baseApi";

const store = configureStore({
    reducer: {
        [baseApi.reducerPath]: baseApi.reducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(baseApi.middleware),
})


type AppDispatch = typeof store.dispatch
type RootState = ReturnType<typeof store.getState>

const useAppDispatch = () => useDispatch<AppDispatch>()
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export type {RootState}
export {store, useAppSelector, useAppDispatch}

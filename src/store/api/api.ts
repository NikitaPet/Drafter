import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import environment from 'global/config/environment'

const { API_URL } = environment
const headers = { 'Content-type': 'application/json' }

const type = 'NOTES'

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
    tagTypes: [type],
    endpoints: (builder) => ({
        getAllNotes: builder.query<any[], void>({
            query: () => ({ url: '/notes', headers }),
            providesTags: (result: any) =>
                result ? [...result.map(({ id }) => ({ type, id })), type] : [type],
        }),
        postNewNote: builder.mutation({
            query: (body) => {
                return { url: '/notes', method: 'POST', body, headers }
            },
            invalidatesTags: [type],
        }),
        updateNote: builder.mutation({
            query: (body) => {
                return { url: `/notes/${body.id}`, method: 'PUT', body, headers }
            },
            invalidatesTags: [type],
        }),
    }),
})
export default api

export const { reducerPath, reducer, middleware, endpoints } = api
export const { useGetAllNotesQuery, usePostNewNoteMutation, useUpdateNoteMutation } = api
export const { getAllNotes, postNewNote } = endpoints

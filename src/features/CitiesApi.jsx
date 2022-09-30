import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const citiesAPI = createApi({
    reducerPath : "citiesAPI",
    baseQuery : fetchBaseQuery({
        baseUrl : 'https://my-tinerary-jeremiri.herokuapp.com'
    }),

    endpoints: (builder) => ({

        getAllCities: builder.query({
            query : (search) => `/cities/?city=${search}`,
            transformResponse: res => res.response
        }),

        getCity: builder.query({
            query: (id) => `cities/${id}`,
            transformResponse: res => res.response
        }),

        getOneCity: builder.mutation({
            query: (id) => `cities/${id}`,
            transformResponse: res => res.response
        })
    })
})



export default citiesAPI
export const {
    useGetAllCitiesQuery,
    useGetCityQuery,
    useGetOneCityMutation
} = citiesAPI


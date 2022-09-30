import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const itinerariesAPI = createApi({
    reducerPath: "itinerariesAPI",
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://my-tinerary-jeremiri.herokuapp.com'
    }),
    endpoints: (builder) => ({

        getAllItineraries: builder.query({
            query : () => `/itineraries`
        }),


        getCityItineraries: builder.query({
            query: (id) =>(`/itineraries/?city=${id}`),
            transformResponse: res => res.response
        }),
    })
})
export default itinerariesAPI;

export const {useGetAllItinerariesQuery,
    useGetCityItinerariesQuery} = itinerariesAPI;
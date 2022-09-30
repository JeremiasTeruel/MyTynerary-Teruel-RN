import { configureStore} from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import citiesAPI from './CitiesApi'
import itinerariesAPI from './ItinerariesApi'

const store = configureStore({

    reducer:{
        cities : citiesAPI,
        [citiesAPI.reducerPath] : citiesAPI.reducer,
        [itinerariesAPI.reducerPath] : itinerariesAPI.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(citiesAPI.middleware, itinerariesAPI.middleware),
})
setupListeners(store.dispatch)
export default store
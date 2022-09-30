import { configureStore} from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import citiesAPI from './CitiesApi'

const store = configureStore({

    reducer:{
        cities : citiesAPI,
        [citiesAPI.reducerPath] : citiesAPI.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(citiesAPI.middleware),
})
setupListeners(store.dispatch)
export default store
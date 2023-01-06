import { configureStore, combineReducers } from "@reduxjs/toolkit"
import userReducer from '../features/user/userSlice'
import registerReducer from '../features/register/registerSlice'
import visualNovelReducer from '../features/visualNovel/visualNovelSlice'

import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from 'redux-persist'
import thunk from 'redux-thunk'

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, userReducer)

export const store = configureStore({
  reducer: {
    user: persistedReducer,
    register: registerReducer,
    visualNovel: visualNovelReducer
  },
  middleware: [thunk]
})

export const persistor = persistStore(store)
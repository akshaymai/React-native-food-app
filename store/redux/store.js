import { configureStore } from '@reduxjs/toolkit'
import FaboritesReducer from './fabourites'

export const store = configureStore({
  reducer: {
    favoritesMeals:FaboritesReducer
  },
})
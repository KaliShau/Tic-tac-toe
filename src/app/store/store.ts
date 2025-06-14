import { boardSlice } from '@/widgets/board/lib/board.slice'
import { combineSlices, configureStore } from '@reduxjs/toolkit'

const rootReducer = combineSlices(boardSlice)

export const store = configureStore({
  reducer: rootReducer,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

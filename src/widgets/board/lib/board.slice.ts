import { checkWinner } from '@/shared/utils/checkWinner'
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

export interface BoardState {
  squares: (boolean | null)[][]
  isXNext: boolean
  winner: boolean | null
}

// X - true
// O - false

const initialState: BoardState = {
  squares: [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ],
  isXNext: true,
  winner: null,
}

export const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    makeMove: (state, action: PayloadAction<{ row: number; col: number }>) => {
      const { row, col } = action.payload

      if (state.squares[row][col] !== null || state.winner !== null) {
        return
      }

      state.squares[row][col] = state.isXNext

      const winner = checkWinner(state.squares)
      if (winner !== null) {
        state.winner = winner
        console.log('Winner:', winner ? 'X' : 'O')
      }

      state.isXNext = !state.isXNext
    },
    changeSquares: (
      state,
      action: PayloadAction<{ squares: (boolean | null)[][] }>
    ) => {
      state.squares = action.payload.squares
      state.isXNext = true
      state.winner = null
    },
  },
})

export const { makeMove, changeSquares } = boardSlice.actions

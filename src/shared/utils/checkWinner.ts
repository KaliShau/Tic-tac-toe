export const checkWinner = (squares: (boolean | null)[][]): boolean | null => {
  const size = squares.length
  const winLength = 3

  for (let row = 0; row < size; row++) {
    for (let col = 0; col <= size - winLength; col++) {
      const firstCell = squares[row][col]
      if (firstCell === null) continue

      let win = true
      for (let k = 1; k < winLength; k++) {
        if (squares[row][col + k] !== firstCell) {
          win = false
          break
        }
      }
      if (win) return firstCell
    }
  }

  for (let col = 0; col < size; col++) {
    for (let row = 0; row <= size - winLength; row++) {
      const firstCell = squares[row][col]
      if (firstCell === null) continue

      let win = true
      for (let k = 1; k < winLength; k++) {
        if (squares[row + k][col] !== firstCell) {
          win = false
          break
        }
      }
      if (win) return firstCell
    }
  }

  for (let row = 0; row <= size - winLength; row++) {
    for (let col = 0; col <= size - winLength; col++) {
      const firstCell = squares[row][col]
      if (firstCell === null) continue

      let win = true
      for (let k = 1; k < winLength; k++) {
        if (squares[row + k][col + k] !== firstCell) {
          win = false
          break
        }
      }
      if (win) return firstCell
    }
  }

  for (let row = 0; row <= size - winLength; row++) {
    for (let col = winLength - 1; col < size; col++) {
      const firstCell = squares[row][col]
      if (firstCell === null) continue

      let win = true
      for (let k = 1; k < winLength; k++) {
        if (squares[row + k][col - k] !== firstCell) {
          win = false
          break
        }
      }
      if (win) return firstCell
    }
  }

  return null
}

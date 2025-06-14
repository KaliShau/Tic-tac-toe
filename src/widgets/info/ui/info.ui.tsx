import { useDispatch, useSelector } from 'react-redux'
import styles from './info.module.scss'
import type { RootState } from '@/app/store/store'
import type { ChangeEvent } from 'react'
import { changeSquares } from '@/widgets/board/lib/board.slice'

export const Info = () => {
  const info = useSelector((state: RootState) => state.board)
  const dispatch = useDispatch()

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    switch (event.target.value) {
      case '3':
        dispatch(
          changeSquares({
            squares: [
              [null, null, null],
              [null, null, null],
              [null, null, null],
            ],
          })
        )
        break
      case '4':
        dispatch(
          changeSquares({
            squares: [
              [null, null, null, null],
              [null, null, null, null],
              [null, null, null, null],
              [null, null, null, null],
            ],
          })
        )
        break

      case '5':
        dispatch(
          changeSquares({
            squares: [
              [null, null, null, null, null],
              [null, null, null, null, null],
              [null, null, null, null, null],
              [null, null, null, null, null],
              [null, null, null, null, null],
            ],
          })
        )
        break
    }
  }

  const handleClick = () => {
    dispatch(
      changeSquares({
        squares: [
          [null, null, null],
          [null, null, null],
          [null, null, null],
        ],
      })
    )
  }

  return (
    <div className={styles.root}>
      <div>Ход: {info.isXNext ? 'X' : 'O'}</div>
      <h1>TIC TAC TOE</h1>
      <div>
        <select value={info.squares.length} onChange={handleChange}>
          <option value='3'>3 на 3</option>
          <option value='4'>4 на 4</option>
          <option value='5'>5 на 5</option>
        </select>
        <button onClick={handleClick}>Начать сначала</button>
      </div>
    </div>
  )
}

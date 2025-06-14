import { useDispatch } from 'react-redux'
import styles from './square.module.scss'
import { makeMove } from '@/widgets/board/lib/board.slice'
import { type FC } from 'react'

interface SquareProps {
  type: boolean | null
  row: number
  col: number
}

export const Square: FC<SquareProps> = ({ type, row, col }) => {
  let square

  switch (type) {
    case true:
      square = 'X'
      break
    case false:
      square = 'O'
      break
    case null:
      square = ' '
      break
  }

  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(makeMove({ row, col }))
  }

  return (
    <div onClick={handleClick} className={styles.root}>
      {square}
    </div>
  )
}

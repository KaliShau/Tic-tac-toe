import type { RootState } from '@/app/store/store'
import { Square } from '@/entities/square'
import { useSelector } from 'react-redux'
import styles from './board.module.scss'

export const Board = () => {
  const squares = useSelector((state: RootState) => state.board.squares)

  return (
    <div className={styles.root}>
      <div className={styles.glass}>
        {squares.map((row, rowIndex) => (
          <div key={rowIndex}>
            {row.map((square, colIndex) => (
              <Square
                type={square}
                key={colIndex}
                row={rowIndex}
                col={colIndex}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

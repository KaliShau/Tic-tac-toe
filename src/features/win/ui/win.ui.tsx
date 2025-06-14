import { useDispatch, useSelector } from 'react-redux'
import styles from './win.module.scss'
import type { RootState } from '@/app/store/store'
import { changeSquares } from '@/widgets/board/lib/board.slice'

export const Win = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean
  onClose: () => void
}) => {
  if (!isOpen) return null
  const info = useSelector((state: RootState) => state.board)
  const dispatch = useDispatch()

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
    onClose()
  }

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={e => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          ×
        </button>
        <h2>Победил игрок - {info.winner ? 'X' : 'O  '}!</h2>
        <button onClick={handleClick}>Начать сначала!</button>
      </div>
    </div>
  )
}

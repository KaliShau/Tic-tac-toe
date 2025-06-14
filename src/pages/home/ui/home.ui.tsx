import type { RootState } from '@/app/store/store'
import { Win } from '@/features/win'
import { Board } from '@/widgets/board'
import { Info } from '@/widgets/info'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

export const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const info = useSelector((state: RootState) => state.board)

  useEffect(() => {
    if (info.winner !== null) {
      setIsModalOpen(true)
    }
  }, [info.winner != null])
  return (
    <>
      <Info />
      <Board />
      <Win isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}

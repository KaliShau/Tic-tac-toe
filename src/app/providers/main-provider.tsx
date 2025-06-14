import { Provider } from 'react-redux'
import { store } from '../store/store'
import type { PropsWithChildren } from 'react'

export const MainProvider = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Provider store={store}>{children}</Provider>
    </>
  )
}

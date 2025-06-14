import { createRoot } from 'react-dom/client'
import '@/app/main.scss'
import { MainProvider } from './providers/main-provider'
import { Home } from '@/pages/home'

createRoot(document.getElementById('root')!).render(
  <MainProvider>
    <Home />
  </MainProvider>
)

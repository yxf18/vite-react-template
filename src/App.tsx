import { Outlet } from 'react-router'
import { AppHeader, AppMain } from '@/Layout'
import { StoreProvider, RootStore } from './store'

const rootStore = new RootStore()

function App() {
  return (
    <StoreProvider value={rootStore}>
      <AppHeader />
      <AppMain>
        <Outlet />
      </AppMain>
    </StoreProvider>
  )
}

export default App

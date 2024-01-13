import { Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '@/pages/Home.tsx'
import Layouts from '@/components/layouts'
import LoadingScreen from '@/components/common/LoadingScreen.tsx'
import routes from '@/routes'
import { store } from '@/store'
import { Provider } from 'react-redux'

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <Layouts>
          <Suspense fallback={<LoadingScreen />}>
            <Routes>
              {routes.map((route) => (
                <Route key={route.key} path={route.path} element={route.element} />
              ))}
              <Route path='*' element={<Home />} />
            </Routes>
          </Suspense>
        </Layouts>
      </Router>
    </Provider>
  )
}

export default App

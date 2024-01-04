import React, { Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '@/pages/Home.tsx'
import Layouts from '@/components/layouts'
import LoadingScreen from '@/components/common/LoadingScreen.tsx'
import routes from '@/routes'

const App: React.FC = () => {
  return (
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
  )
}

export default App

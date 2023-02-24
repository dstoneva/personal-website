import { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Main as MainLayout } from 'layouts'

const HomeView = lazy(() => import('views/Home'))
const NotFoundView = lazy(() => import('views/NotFound'))

export const PageURLs = {
  NotFound: '/404',
}

const RoutesComponent = () => {
  return (
    <Suspense fallback={<MainLayout isSuspense={false} />}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomeView />} />
        </Route>
        <Route path="*" element={<NotFoundView />} />
      </Routes>
    </Suspense>
  )
}

export default RoutesComponent

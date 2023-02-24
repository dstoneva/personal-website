import { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Main as MainLayout } from 'layouts'

const HomeView = lazy(() => import('views/Home'))
const NotFoundView = lazy(() => import('views/NotFound'))
const AboutView = lazy(() => import('views/About'))

export const PageURLs = {
  NotFound: '/404',
  About: '/about',
}

const RoutesComponent = () => {
  return (
    <Suspense fallback={<MainLayout isSuspense={false} />}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomeView />} />
          <Route path={PageURLs.About} element={<AboutView />} />
        </Route>
        <Route path="*" element={<NotFoundView />} />
      </Routes>
    </Suspense>
  )
}

export default RoutesComponent

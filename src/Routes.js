import { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Main as MainLayout } from 'layouts'

const HomeView = lazy(() => import('views/Home'))
const NotFoundView = lazy(() => import('views/NotFound'))
const AboutView = lazy(() => import('views/About'))
const SkillsView = lazy(() => import('views/Skills'))
const ProjectsView = lazy(() => import('views/Projects'))

export const PageURLs = {
  NotFound: '/404',
  About: '/about',
  Skills: '/skills',
  Projects: '/projects',
}

const RoutesComponent = () => {
  return (
    <Suspense fallback={<MainLayout isSuspense={false} />}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomeView />} />
          <Route path={PageURLs.About} element={<AboutView />} />
          <Route path={PageURLs.Skills} element={<SkillsView />} />
          <Route path={PageURLs.Projects} element={<ProjectsView />} />
        </Route>
        <Route path="*" element={<NotFoundView />} />
      </Routes>
    </Suspense>
  )
}

export default RoutesComponent

import { useEffect } from 'react'
import { matchRoutes } from 'react-router-dom'
import routes from '@/routes'

const usePageTitle = (pathname: { pathname: string }) => {
  const listKeys: { path: string | undefined; title: string }[] = routes.map((route) => ({
    path: route?.path,
    title: route?.title_page ?? ''
  }))

  const route: any = matchRoutes(listKeys as never, pathname)
  const pageTitle = route?.[0]?.route?.title ?? 'Massive Connection'

  useEffect(() => {
    document.title = pageTitle
  }, [pageTitle])
}

export default usePageTitle

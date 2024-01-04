import Home from '@/pages/Home.tsx'
import About from '@/pages/Postpaid.tsx'
import Login from '@/pages/Login'
import Postpaid from '@/pages/Postpaid.tsx'

const routes = [
  {
    path: '/login',
    key: 'login',
    title: 'Login Page',
    title_page: 'Login Page',
    exact: true,
    show_in_menu: false,
    element: <Login />
  },
  {
    path: '/prepaid',
    key: 'prepaid',
    title: 'Prepaid Management',
    title_page: 'Prepaid Management',
    exact: true,
    show_in_menu: true,
    element: <Home />
  },
  {
    path: '/postpaid',
    key: 'postpaid',
    title: 'Postpaid Management',
    title_page: 'Request new postpaid connection',
    exact: true,
    show_in_menu: true,
    element: <Postpaid />
  },
  {
    path: '/contract',
    key: 'contract',
    title: 'Contract Management',
    title_page: 'Contract Management',
    exact: true,
    show_in_menu: true,
    element: <About />
  },
  {
    path: '/applications',
    key: 'applications',
    title: 'Applications ',
    title_page: 'Applications ',
    exact: true,
    show_in_menu: true,
    element: <About />
  },
  {
    path: '/portability',
    key: 'portability',
    title: 'Portability',
    title_page: 'Portability',
    exact: true,
    show_in_menu: true,
    element: <About />
  },
  {
    path: '/postSales',
    key: 'postSales',
    title: 'PostSales',
    title_page: 'PostSales',
    exact: true,
    show_in_menu: true,
    element: <About />
  }
]

export default routes

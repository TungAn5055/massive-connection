import Home from "@/pages/Home.tsx";
import About from "@/pages/About.tsx";

const routes = [
  {
    path: '/prepaid',
    key: 'prepaid',
    title: 'Prepaid Management',
    exact: true,
    element: <Home /> 
  },
  {
    path: '/postpaid',
    key: 'postpaid',
    title: 'Postpaid Management',
    exact: true,
    element: <About />
  },
  {
    path: '/contract',
    key: 'contract',
    title: 'Contract Management',
    exact: true,
    element: <About />
  },
  {
    path: '/applications',
    key: 'applications',
    title: 'Applications ',
    exact: true,
    element: <About />
  },
  {
    path: '/portability',
    key: 'portability',
    title: 'Portability',
    exact: true,
    element: <About />
  },
  {
    path: '/postSales',
    key: 'postSales',
    title: 'PostSales',
    exact: true,
    element: <About />
  },
]

export default routes
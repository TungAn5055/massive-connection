import Home from '@/pages/Home.tsx'
import Index from '@/pages/login'
import NewPostpaidConnection from '@/pages/new-postpaid-connection'
import CustomerInformation from '@/pages/customer-infomation'
import NewPostpaidConnection2 from '@/pages/new-postpaid-connection-2'
import NewLineConnection from '@/pages/new-line-connection'
import RequestLineConnection from "@/pages/request-line-connection";

const routes = [
  {
    path: '/login',
    key: 'login',
    title: 'Login Page',
    title_page: 'Login Page',
    exact: true,
    show_in_menu: false,
    element: <Index />
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
    // path: '/postpaid-management',
    key: 'postpaid-management',
    title: 'Postpaid Management',
    title_page: 'Postpaid Management',
    exact: true,
    show_in_menu: true,
    // element: <Postpaid />,
    children: [
      {
        // path: 'postpaid-customers-management',
        key: 'postpaid-customers-management',
        title: 'Postpaid customers Management',
        title_page: 'Postpaid customers Management',
        exact: true,
        show_in_menu: true,
        show_icon: true,
        // element: <Postpaid />,
        children: [
          {
            path: '/connect-new-postpaid',
            key: 'connect-new-postpaid',
            title: 'Connect new postpaid',
            title_page: 'Connect new postpaid',
            exact: true,
            show_in_menu: true,
            show_icon: true
            // element: <Home />
          },
          {
            path: '/mobile-postpaid-customer',
            key: 'mobile-postpaid-customer',
            title: 'Mobile Postpaid Customer',
            title_page: 'Mobile Postpaid Customer',
            exact: true,
            show_icon: true,
            show_in_menu: true
            // element: <Home />
          },
          {
            path: '/adsl-ftth-customer',
            key: 'adsl-ftth-customer',
            title: 'ADSL/FTTH Customer',
            title_page: 'ADSL/FTTH Customer',
            exact: true,
            show_icon: true,
            show_in_menu: true
            // element: <Home />
          },
          {
            path: '/dedicated-link-customer',
            key: 'dedicated-link-customer',
            title: 'Dedicated link Customer',
            title_page: 'Dedicated link Customer',
            exact: true,
            show_icon: true,
            show_in_menu: true
            // element: <Home />
          },
          {
            path: '/officeWan-customer',
            key: 'officeWan-customer',
            title: 'OfficeWan Customer',
            title_page: 'OfficeWan Customer',
            exact: true,
            show_icon: true,
            show_in_menu: true
            // element: <Home />
          },
          {
            path: '/white-channel-customer',
            key: 'white-channel-customer',
            title: 'White Channel Customer',
            title_page: 'White Channel Customer',
            exact: true,
            show_icon: true,
            show_in_menu: true
            // element: <Home />
          },
          {
            path: '/connect-new-postpaid-2',
            key: 'connect-new-postpaid-2',
            title: 'Connect new postpaid II',
            title_page: 'Connect new postpaid II',
            exact: true,
            show_icon: true,
            show_in_menu: true,
            element: <NewPostpaidConnection2 />
          },
          {
            path: '/request-new-postpaid',
            key: 'request-new-postpaid',
            title: 'Request new postpaid connection',
            title_page: 'Request new postpaid connection',
            exact: true,
            show_icon: true,
            show_in_menu: true,
            element: <NewPostpaidConnection />
          },
          {
            path: '/customer-information',
            key: 'customer-information',
            title: 'Connect postpaid subscriptor',
            title_page: 'Connect postpaid subscriptor',
            exact: true,
            show_in_menu: false,
            element: <CustomerInformation />
          }
        ]
      }
    ]
  },
  {
    path: '/contract',
    key: 'contract',
    title: 'Contract Management',
    title_page: 'Contract Management',
    exact: true,
    show_in_menu: true,
    element: <Home />
  },
  {
    path: '/applications',
    key: 'applications',
    title: 'Applications ',
    title_page: 'Applications ',
    exact: true,
    show_in_menu: true,
    element: <Home />
  },
  {
    path: '/portability',
    key: 'portability',
    title: 'Portability',
    title_page: 'Portability',
    exact: true,
    show_in_menu: true,
    element: <Home />
  },
  {
    path: '/postSales',
    key: 'postSales',
    title: 'PostSales',
    title_page: 'PostSales',
    exact: true,
    show_in_menu: true,
    element: <Home />
  },
  {
    path: '/request-new-postpaid',
    key: 'request-new-postpaid',
    title: 'Request new postpaid connection',
    title_page: 'Request new postpaid connection',
    exact: true,
    show_in_menu: false,
    element: <NewPostpaidConnection />
  },
  {
    path: '/customer-information',
    key: 'customer-information',
    title: 'Connect postpaid subscriptor',
    title_page: 'Connect postpaid subscriptor',
    exact: true,
    show_in_menu: false,
    element: <CustomerInformation />
  },
  {
    path: '/connect-new-postpaid-2',
    key: 'connect-new-postpaid-2',
    title: 'Connect new postpaid II',
    title_page: 'Connect new postpaid II',
    exact: true,
    show_in_menu: false,
    element: <NewPostpaidConnection2 />
  },
  {
    path: '/request-new-line-connection',
    key: 'request-new-line-connection',
    title: 'Request new line connection',
    title_page: 'Request new line connection',
    exact: false,
    show_icon: false,
    show_in_menu: false,
    element: <NewLineConnection />
  },
  {
    path: '/request-of-line-connection',
    key: 'request-of-line-connection',
    title: 'Request of line connection',
    title_page: 'Request of line connection',
    exact: false,
    show_icon: false,
    show_in_menu: false,
    element: <RequestLineConnection />
  }
]

export default routes

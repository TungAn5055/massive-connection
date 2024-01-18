import React from 'react'
import CustomerInformations from '@/components/customer-infomation'
import {useLocation, useNavigate} from 'react-router-dom'

const CustomerInformation: React.FC = () => {
  const { state = {
    dataCustomers: {}
  } } = useLocation()
  const navigate = useNavigate();
  let dataCustomers = state?.dataCustomers

  if(!dataCustomers || Object.values(dataCustomers)?.length === 0) {
    navigate('/request-new-prepaid')
  }


  return <CustomerInformations dataCustomers={dataCustomers} />
}

export default CustomerInformation

import React from 'react'
import CustomerInformations from '@/components/customer-infomation'
import { useLocation } from 'react-router-dom'

const CustomerInformation: React.FC = () => {
  const { state = {} } = useLocation()
  const { dataCustomers } = state
  return <CustomerInformations dataCustomers={dataCustomers} />
}

export default CustomerInformation

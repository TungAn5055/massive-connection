import React, { useEffect } from 'react'
import CustomerInformations from '@/components/customer-infomation'
import { useLocation, useNavigate } from 'react-router-dom'

const CustomerInformation: React.FC = () => {
  const {
    state = {
      dataCustomers: {}
    }
  } = useLocation()
  const navigate = useNavigate()
  const dataCustomers = state?.dataCustomers

  useEffect(() => {
    if (!dataCustomers || Object.values(dataCustomers)?.length === 0) {
      navigate('/request-new-postpaid')
    }
  }, [dataCustomers])

  return <CustomerInformations dataCustomers={dataCustomers} />
}

export default CustomerInformation

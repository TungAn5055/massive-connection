import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import RequestLineConnectionContent from '@/components/request-line-connection'

const RequestLineConnection: React.FC = () => {
  const {
    state = {
      ContractNo: null
    }
  } = useLocation()
  const navigate = useNavigate()
  const contractNo = state?.ContractNo

  useEffect(() => {
    if (!contractNo || Object.values(contractNo)?.length === 0) {
      navigate('/connect-new-postpaid-2')
    }
  }, [contractNo])

  return <RequestLineConnectionContent contractNo={contractNo} />
}

export default RequestLineConnection

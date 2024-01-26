import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import useCustomGetData from "@/hooks/useGetStaffCode.ts";
import {STATE} from "@/ultils/constants.ts";
import RequestLineConnectionContent from "@/components/request-line-connection";

const RequestLineConnection: React.FC = () => {
  const {
    state = {
      ContractNo: null
    }
  } = useLocation()
  const navigate = useNavigate()
  const contractNo = state?.ContractNo
  const [responseStaffCode, requestGetStaffCode] = useCustomGetData()

  useEffect(() => {
    if (!contractNo || Object.values(contractNo)?.length === 0) {
      navigate('/connect-new-postpaid-2')
    }
    if(contractNo) {
      requestGetStaffCode()
    }
  }, [contractNo])

  useEffect(() => {
    if (responseStaffCode?.data && responseStaffCode?.state === STATE?.SUCCESS) {

    }
  }, [responseStaffCode])

  return <RequestLineConnectionContent dataLine={responseStaffCode} />
}

export default RequestLineConnection

import React, { useMemo, useState } from 'react'
import { Button, Col, Form, Input, Row, Select, Table } from 'antd'
import { FormSelect } from '@/components/customer-infomation/form/select'
import Column from 'antd/es/table/Column'
import { EmptyUI } from '@/components/ui-source/empty'
import { NO_DATA } from '@/ultils/constants'
import { LoadingRegion } from '@/components/ui-source/loading'
import {FileDoneOutlined} from "@ant-design/icons";

const SuccessfulTab: React.FC = ({ dataInfo, setDataInfo }) => {
  const tableLoading = {
    spinning: true,
    indicator: <LoadingRegion />
  }


  return (
      <div className={"display-grid"}>
        <FileDoneOutlined />

        <div style={{ width: "300px"}}>
          <div className={"display-flex-space-between"}><span>11231223</span><span>21231231232</span></div>
          <div className={"display-flex-space-between"}><span>11231223</span><span>21231231232</span></div>
          <div className={"display-flex-space-between"}><span>11231223</span><span>21231231232</span></div>
        </div>
      </div>
  )
}

export default SuccessfulTab

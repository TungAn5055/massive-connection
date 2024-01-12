import React, { useMemo, useState } from 'react'
import { LoadingRegion } from '@/components/ui-source/loading'
import successImg  from "@/assets/images/success.png";
import {Table} from "antd";

const SuccessfulTab: React.FC = ({ dataInfo, setDataInfo }) => {
  const tableLoading = {
    spinning: true,
    indicator: <LoadingRegion />
  }

    const columns = [
        {
            title: 'Group',
            dataIndex: 'group',
            key: 'group',
        },
        {
            title: 'Plans',
            dataIndex: 'plans',
            key: 'plans',
        },
        {
            title: 'Quantity',
            dataIndex: 'quantity',
            key: 'quantity',
        },
        {
            title: 'Fingerprint validation',
            dataIndex: 'fingerprint_validation',
            key: 'fingerprint_validation',
        }, {
            title: 'Branch Assigned',
            dataIndex: 'branch_assigned',
            key: 'branch_assigned',
        },
    ];
    const data = [
        {
            key: 1,
            name: 'John Brown sr.',
            age: 60,
            address: 'New York No. 1 Lake Park',

        },

    ];

  return (
      <div className={"display-grid"}>
          <div className={"display-grid"} style={{width: "520px"}}>
              <div className={"display-flex-center"}><img src={successImg} alt="Italian Trulli" style={{height: "80px"}}/></div>
              <div className={"display-flex-center"} style={{ fontSize: "22px", fontWeight: "700" ,color: "#1562d7", marginTop: "10px"}}><span>¡Felicidades!</span></div>
              <div className={"display-flex-center"}  style={{ fontSize: "15px",fontWeight: "600", color: "#0f4da2", margin: "10px 0"}}>
                  <span>Solicitud de creación de Work Order registrada con éxito</span></div>
              </div>
              <div className={"display-flex-center"} >
                  <div style={{width: "300px"}}>
                      <div className={"display-flex-space-between"}><span className={"title-bold"}>RUC</span><span>21231231232</span></div>
                      <div className={"display-flex-space-between"}><span className={"title-bold"}>Razon Social</span><span>21231231232</span></div>
                      <div className={"display-flex-space-between"}><span className={"title-bold"}>Representante Legal</span><span>21231231232</span></div>
                      <div className={"display-flex-space-between"}><span className={"title-bold"}>Representante Legal</span><span>21231231232</span></div>
                      <div className={"display-flex-space-between"}><span className={"title-bold"}>Contacto Autorizado</span><span>21231231232</span></div>
                      <div className={"display-flex-space-between"}><span className={"title-bold"}>Circle de facturacion</span><span>21231231232</span></div>
                      <div className={"display-flex-space-between"}><span className={"title-bold"}>Icon plus/ minus</span><span>21231231232</span></div>
                      <div className={"display-flex-space-between"}><span className={"title-bold"}>Tipo de connexion</span><span>21231231232</span></div>
                      <div className={"display-flex-space-between"}><span className={"title-bold"}>Start of service</span><span>21231231232</span></div>
                  </div>
              </div>
          <div style={{width: "520px"}}>
              <Table
                  columns={columns}
                  dataSource={data}
                  pagination={false}
                  bordered={true}
              />
          </div>
      </div>
  )
}

export default SuccessfulTab

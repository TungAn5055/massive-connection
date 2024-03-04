export const COLUMN_TABLE_SUCCESS_TAB: any = [
  {
    title: 'Group',
    dataIndex: 'groupName',
    key: 'groupName',
    align :'center',
  },
  {
    title: 'Plans',
    dataIndex: 'productCode',
    align :'center',
    key: 'productCode'
  },
  {
    title: 'Quantity',
    dataIndex: 'quantityOfLines',
    align :'center',
    key: 'quantityOfLines'
  },
  {
    title: 'Fingerprint validation',
    dataIndex: 'lineActivation',
    align :'center',
    key: 'lineActivation',
    render: (value) => {
      if (value) {
        return "Yes"
      } else {
        return  "No"
      }
    }
  },
  {
    title: 'Branch Assigned',
    dataIndex: 'shopCode',
    align:'center',
    key: 'shopCode'
  }
]

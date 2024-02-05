export const COLUMN_TABLE_SUCCESS_TAB = [
  {
    title: 'Group',
    dataIndex: 'groupName',
    key: 'groupName'
  },
  {
    title: 'Plans',
    dataIndex: 'productCode',
    key: 'productCode'
  },
  {
    title: 'Quantity',
    dataIndex: 'quantityOfLines',
    key: 'quantityOfLines'
  },
  {
    title: 'Fingerprint validation',
    dataIndex: 'lineActivation',
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
    key: 'shopCode'
  }
]

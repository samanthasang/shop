export const columns = [
  {
    title: 'کد هزینه',
    dataIndex: 'feeCode',
    key: 'feeCode',
    render: text => <a>{text}</a>,
  },
  {
    title: 'نام هزینه',
    dataIndex: 'feeName',
    key: 'feeName',
  },
  {
    title: 'توضیحات',
    dataIndex: 'comment',
    key: 'comment',
  },
  {
    title: 'واحد',
    dataIndex: 'units',
    key: 'units',
  },
  {
    title: 'قیمت واحد',
    dataIndex: 'unitPrice',
    key: 'unitPrice',
  },
  {
    title: 'میزان',
    dataIndex: 'amount',
    key: 'amount',
  },
];

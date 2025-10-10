import { Table, Button } from 'antd';

export default function TableComponent({ data, onEdit }) {
  const columns = [
    { title: 'Process Name', dataIndex: 'name' },
    { title: 'Code', dataIndex: 'code' },
    { title: 'Sequence', dataIndex: 'sequence' },
    {
      title: 'Action',
      render: (_, record) => (
        <Button onClick={() => onEdit(record)}>Edit</Button>
      )
    }
  ];

  return (
    <Table rowKey="id" columns={columns} dataSource={data} pagination={false} />
  );
}

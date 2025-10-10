import { Table, Button } from 'antd';

export default function TableComponent({ data, onEdit }) {
  const columns = [
    { title: 'Part No.', dataIndex: 'partNo' },
    { title: 'Product Name', dataIndex: 'name' },
    { title: 'Customer', dataIndex: 'customer' },
    { title: 'Layers', dataIndex: 'layerCount' },
    { title: 'Size', dataIndex: 'size' },
    {
      title: 'Action',
      render: (_, record) => (
        <Button onClick={() => onEdit(record)}>Edit</Button>
      )
    }
  ];

  return <Table rowKey="id" columns={columns} dataSource={data} pagination={false} />;
}

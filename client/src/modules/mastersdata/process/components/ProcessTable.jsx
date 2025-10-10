import {
  Card,
  Table,
  Space,
  Button,
  Tooltip,
  Popconfirm,
  Tag,
  Typography,
} from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

const { Text } = Typography;

export default function ProcessTable({ data, loading, onEdit, onDelete }) {
  const getStatusColor = (isActive) => {
    return isActive ? "success" : "default";
  };

  const columns = [
    {
      title: "Process Code",
      dataIndex: "code",
      key: "code",
      width: 120,
      render: (text) => <Text strong>{text}</Text>,
    },
    {
      title: "Process Name",
      dataIndex: "name",
      key: "name",
      ellipsis: true,
      render: (text) => (
        <div>
          <Text strong>{text}</Text>
        </div>
      ),
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      ellipsis: true,
    },
    {
      title: "Status",
      dataIndex: "isActive",
      key: "isActive",
      width: 100,
      filters: [
        { text: "Active", value: true },
        { text: "Inactive", value: false },
      ],
      onFilter: (value, record) => record.isActive === value,
      render: (isActive) => (
        <Tag color={getStatusColor(isActive)}>
          {isActive ? "ACTIVE" : "INACTIVE"}    
        </Tag>
      ),
    },
    {
      title: "Created Date",
      dataIndex: "createdAt",
      key: "createdAt",
      width: 120,
      render: (date) => (date ? new Date(date).toLocaleDateString() : "-"),
    },
    {
      title: "Actions",
      key: "actions",
      width: 120,
      fixed: "right",
      render: (_, record) => (
        <Space size="small">
          <Tooltip title="Edit Process">
            <Button
              type="primary"
              ghost
              icon={<EditOutlined />}
              size="small"
              onClick={() => onEdit(record)}
            />
          </Tooltip>
          <Popconfirm
            title="Delete Process"
            description="Are you sure you want to delete this process?"
            onConfirm={() => onDelete(record.id)}
            okText="Yes"
            cancelText="No"
          >
            <Tooltip title="Delete Process">
              <Button danger icon={<DeleteOutlined />} size="small" />
            </Tooltip>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <Card className="shadow-sm">
      <Table
        columns={columns}
        dataSource={data}
        rowKey="id"
        loading={loading}
        pagination={{
          total: data.length,
          pageSize: 10,
          showSizeChanger: true,
          showQuickJumper: true,
          showTotal: (total, range) =>
            `${range[0]}-${range[1]} of ${total} items`,
        }}
        scroll={{ x: 800 }}
        size="middle"
      />
    </Card>
  );
}

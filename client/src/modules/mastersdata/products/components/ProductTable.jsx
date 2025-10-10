import { Table, Button, Tag, Space, Tooltip, Avatar } from "antd";
import { EditOutlined, DeleteOutlined, EyeOutlined } from "@ant-design/icons";

export default function ProductTable({
  products,
  loading,
  pagination,
  onPageChange,
  onEdit,
  onDelete,
  onView
}) {
  const columns = [
    {
      title: "Product Code",
      dataIndex: "partNo",
      key: "partNo",
      width: 120,
      render: (text) => <span className="font-mono">{text}</span>,
    },
    {
      title: "Product",
      dataIndex: "name",
      key: "name",
      render: (text, record) => (
        <div className="flex items-center">
          <Avatar
            shape="square"
            size={40}
            className="mr-3"
          >
            {text.charAt(0)}
          </Avatar>
          <div>
            <div className="font-medium">{text}</div>
            <div className="text-gray-500 text-sm">{record.customer}</div>
          </div>
        </div>
      ),
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      ellipsis: true,
      render: (text) => (
        <Tooltip title={text}>
          <span>{text || "No description"}</span>
        </Tooltip>
      ),
    },
    {
      title: "Layer Count",
      dataIndex: "layerCount",
      key: "layerCount",
      width: 120,
      render: (layerCount) => (
        <span className="font-mono">
          {layerCount ? `${layerCount} layers` : "N/A"}
        </span>
      ),
    },
    {
      title: "Size",
      dataIndex: "size",
      key: "size",
      width: 120,
      render: (size) => (
        <span className="font-mono">
          {size || "N/A"}
        </span>
      ),
    },
    {
      title: "Is Active",
      dataIndex: "isActive",
      key: "isActive",
      width: 100,
      render: (isActive) => (
        <Tag color={isActive ? "green" : "red"}>
          {isActive ? "Active" : "Inactive"}
        </Tag>
      ),
    },
    {
      title: "Actions",
      key: "actions",
      width: 150,
      render: (_, record) => (
        <Space size="small">
          <Tooltip title="View Details">
            <Button
              type="text"
              icon={<EyeOutlined />}
              onClick={() => onView(record)}
              className="text-blue-500 hover:text-blue-700"
            />
          </Tooltip>
          <Tooltip title="Edit Product">
            <Button
              type="text"
              icon={<EditOutlined />}
              onClick={() => onEdit(record)}
              className="text-green-500 hover:text-green-700"
            />
          </Tooltip>
          <Tooltip title="Delete Product">
            <Button
              type="text"
              icon={<DeleteOutlined />}
              onClick={() => onDelete(record)}
              className="text-red-500 hover:text-red-700"
            />
          </Tooltip>
        </Space>
      ),
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={products}
      loading={loading}
      pagination={{
        ...pagination,
        showSizeChanger: true,
        showQuickJumper: true,
        showTotal: (total, range) =>
          `${range[0]}-${range[1]} of ${total} products`,
        onChange: onPageChange,
      }}
      scroll={{ x: 800 }}
      className="shadow-sm"
    />
  );
}

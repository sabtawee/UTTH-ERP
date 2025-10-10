import { Table, Empty, Button, Avatar, Tag, Badge, Space, Tooltip, Dropdown, Modal, Typography, message } from 'antd';
import {
  UserOutlined,
  MailOutlined,
  IdcardOutlined,
  TeamOutlined,
  SafetyCertificateOutlined,
  LockOutlined,
  EyeOutlined,
  EditOutlined,
  DeleteOutlined,
  UserAddOutlined,
  SettingOutlined,
  UnlockOutlined,
} from '@ant-design/icons';

const { Text } = Typography;

export default function UserTable({
  users,
  loading,
  onViewUser,
  onEditUser,
  onAssignRoles,
  onDeleteUser,
  onCreateUser
}) {
  // Utility functions
  const getRoleColor = (roleName) => {
    const colors = {
      SuperAdmin: "red",
      Admin: "orange",
      Manager: "blue",
      User: "green",
      Viewer: "default",
    };
    return colors[roleName] || "purple";
  };

  const getUserStatus = (user) => {
    return user.status || "active";
  };

  const getAvatarColor = (userId) => {
    const colors = [
      "#1890ff",
      "#52c41a",
      "#faad14",
      "#f5222d",
      "#722ed1",
      "#13c2c2",
    ];
    return colors[userId % colors.length];
  };

  const columns = [
    {
      title: "User",
      dataIndex: "fullName",
      key: "fullName",
      render: (text, record) => (
        <div className="flex items-center space-x-3">
          <Badge
            status={getUserStatus(record) === "active" ? "success" : "error"}
            offset={[-2, 32]}
          >
            <Avatar
              size={44}
              style={{ backgroundColor: getAvatarColor(record.id) }}
              icon={<UserOutlined />}
            >
              {text?.charAt(0)?.toUpperCase()}
            </Avatar>
          </Badge>
          <div>
            <div className="font-semibold text-gray-900 text-base">{text}</div>
            <div className="flex items-center text-sm text-gray-500 mt-1">
              <MailOutlined className="mr-1" />
              {record.email}
            </div>
            <div className="flex items-center text-xs text-gray-400 mt-1">
              <IdcardOutlined className="mr-1" />
              {record.employeeId}
            </div>
          </div>
        </div>
      ),
      width: 300,
      fixed: "left",
    },
    {
      title: "Department / Position",
      key: "department",
      render: (_, record) => (
        <div>
          <Tag icon={<TeamOutlined />} color="blue" className="mb-1">
            {record.department}
          </Tag>
          {record.position && (
            <div className="text-sm text-gray-600 mt-1">{record.position}</div>
          )}
        </div>
      ),
      width: 160,
    },
    {
      title: "Roles",
      dataIndex: "roles",
      key: "roles",
      render: (roles) => (
        <Space direction="vertical" size="small">
          {roles?.map((r) => (
            <Tag
              key={r.role.id}
              color={getRoleColor(r.role.name)}
              icon={<SafetyCertificateOutlined />}
              style={{ margin: "1px", fontSize: "12px" }}
            >
              {r.role.name}
            </Tag>
          ))}
          {(!roles || roles.length === 0) && (
            <Tag color="default" icon={<LockOutlined />}>
              No Roles
            </Tag>
          )}
        </Space>
      ),
      width: 150,
    },
    {
      title: "Status",
      key: "status",
      render: (_, record) => {
        const status = getUserStatus(record);
        return (
          <Space direction="vertical" size="small">
            <Badge
              status={status === "active" ? "success" : "error"}
              text={status === "active" ? "Active" : "Inactive"}
            />
            <Text type="secondary" style={{ fontSize: "11px" }}>
              Created on:{" "}
              {new Date(record.createdAt || Date.now()).toLocaleDateString(
                "th-TH"
              )}
            </Text>
          </Space>
        );
      },
      width: 120,
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => {
        const actionItems = [
          {
            key: "view",
            label: "View Details",
            icon: <EyeOutlined />,
            onClick: () => onViewUser(record),
          },
          {
            key: "edit",
            label: "Edit User",
            icon: <EditOutlined />,
            onClick: () => onEditUser(record),
          },
          {
            key: "assign",
            label: "Assign Roles",
            icon: <SafetyCertificateOutlined />,
            onClick: () => onAssignRoles(record),
          },
          {
            type: "divider",
          },
          {
            key: "toggle",
            label:
              getUserStatus(record) === "active"
                ? "Deactivate"
                : "Activate",
            icon:
              getUserStatus(record) === "active" ? (
                <LockOutlined />
              ) : (
                <UnlockOutlined />
              ),
            onClick: () => message.info("This feature will be developed in the future"),
          },
          {
            key: "delete",
            label: "Delete User",
            icon: <DeleteOutlined />,
            danger: true,
          },
        ];

        return (
          <Space size="small">
            <Tooltip title="View Details">
              <Button
                type="text"
                size="small"
                icon={<EyeOutlined />}
                onClick={() => onViewUser(record)}
              />
            </Tooltip>
            <Tooltip title="Edit User">
              <Button
                type="text"
                size="small"
                icon={<EditOutlined />}
                onClick={() => onEditUser(record)}
              />
            </Tooltip>
            <Tooltip title="Assign Roles">
              <Button
                type="primary"
                size="small"
                icon={<SafetyCertificateOutlined />}
                onClick={() => onAssignRoles(record)}
              />
            </Tooltip>
            <Dropdown
              menu={{
                items: actionItems,
                onClick: ({ key }) => {
                  if (key === "delete") {
                    Modal.confirm({
                      title: "Confirm Delete",
                      content: `Are you sure you want to delete user "${record.fullName}"?`,
                      okText: "Delete",
                      cancelText: "Cancel",
                      okType: "danger",
                      onOk: () => onDeleteUser(record.id),
                    });
                  }
                },
              }}
              trigger={["click"]}
              placement="bottomRight"
            >
              <Button type="text" size="small" icon={<SettingOutlined />} />
            </Dropdown>
          </Space>
        );
      },
      width: 200,
      fixed: "right",
    },
  ];

  return (
    <Table
      rowKey="id"
      dataSource={users}
      columns={columns}
      loading={loading}
      scroll={{ x: 1200 }}
      pagination={{
        total: users.length,
        pageSize: 15,
        showSizeChanger: true,
        showQuickJumper: true,
        showTotal: (total, range) =>
          `${range[0]}-${range[1]} of ${total} items`,
        pageSizeOptions: ["10", "15", "25", "50"],
      }}
      locale={{
        emptyText: (
          <Empty
            image={Empty.PRESENTED_IMAGE_SIMPLE}
            description={
              <span>
                No users found
                <br />
                <Button
                  type="primary"
                  icon={<UserAddOutlined />}
                  onClick={onCreateUser}
                  style={{ marginTop: "8px" }}
                >
                  Add First User
                </Button>
              </span>
            }
          />
        ),
      }}
      className="custom-table"
      style={{ borderRadius: "8px" }}
    />
  );
}

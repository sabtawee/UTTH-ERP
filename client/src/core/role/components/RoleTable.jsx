import { Table, Empty, Button, Avatar, Tag, Badge, Space, Tooltip, Dropdown, Modal, Typography } from 'antd';
import {
  SafetyCertificateOutlined,
  KeyOutlined,
  EditOutlined,
  DeleteOutlined,
  PlusOutlined,
  EyeOutlined,
  SettingOutlined,
  SecurityScanOutlined,
} from '@ant-design/icons';

const { Text } = Typography;

export default function RoleTable({ 
  roles, 
  loading, 
  onViewRole, 
  onEditRole, 
  onAssignPermissions, 
  onDeleteRole,
  onCreateRole 
}) {
  // Utility functions
  const getRoleColor = (roleName) => {
    const colors = {
      'SuperAdmin': 'red',
      'Admin': 'orange',
      'Manager': 'blue',
      'User': 'green',
      'Viewer': 'default',
    };
    return colors[roleName] || 'purple';
  };

  const getRoleLevel = (roleName) => {
    const levels = {
      'SuperAdmin': 'Highest',
      'Admin': 'High',
      'Manager': 'Medium',
      'User': 'Normal',
      'Viewer': 'Read Only',
    };
    return levels[roleName] || 'Custom';
  };

  const columns = [
    {
      title: "Role",
      dataIndex: "name",
      key: "name",
      render: (text, record) => (
        <div className="flex items-center space-x-3">
          <Avatar
            size={44}
            style={{ 
              backgroundColor: getRoleColor(text),
              border: `2px solid ${getRoleColor(text)}20`
            }}
            icon={<SafetyCertificateOutlined />}
          >
            {text?.charAt(0)?.toUpperCase()}
          </Avatar>
          <div>
            <div className="font-semibold text-gray-900 text-base">{text}</div>
            <div className="flex items-center text-sm text-gray-500 mt-1">
              <SecurityScanOutlined className="mr-1" />
              Level: {getRoleLevel(text)}
            </div>
            {record.description && (
              <div className="text-xs text-gray-400 mt-1 max-w-xs truncate">
                {record.description}
              </div>
            )}
          </div>
        </div>
      ),
      width: 300,
      fixed: 'left',
    },
    {
      title: "Access Permissions",
      dataIndex: "permissions",
      key: "permissions",
      render: (perms) => (
        <div>
          <div className="mb-2">
            <Badge 
              count={perms?.length || 0} 
              style={{ backgroundColor: perms?.length > 0 ? '#52c41a' : '#f5222d' }}
            >
              <Tag 
                icon={<KeyOutlined />} 
                color={perms?.length > 0 ? 'green' : 'red'}
              >
                {perms?.length > 0 ? 'Has Permissions' : 'No Permissions'}
              </Tag>
            </Badge>
          </div>
          <Space direction="vertical" size="small" style={{ width: '100%' }}>
            {perms?.slice(0, 3).map((p) => (
              <Tag 
                key={p.permission.id}
                color="blue"
                style={{ 
                  margin: '1px', 
                  fontSize: '11px',
                  maxWidth: '200px',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis'
                }}
              >
                {p.permission.module}.{p.permission.name}
              </Tag>
            ))}
            {perms?.length > 3 && (
              <Text type="secondary" style={{ fontSize: '11px' }}>
                and {perms.length - 3} more permissions...
              </Text>
            )}
          </Space>
        </div>
      ),
      width: 250,
    },
    {
      title: "Status",
      key: "status",
      render: (_, record) => (
        <Space direction="vertical" size="small">
          <Badge
            status={record.permissions?.length > 0 ? 'success' : 'warning'}
            text={record.permissions?.length > 0 ? 'Active' : 'No Permissions'}
          />
          <Text type="secondary" style={{ fontSize: '11px' }}>
            Created: {new Date(record.createdAt || Date.now()).toLocaleDateString('en-US')}
          </Text>
        </Space>
      ),
      width: 120,
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => {
        const actionItems = [
          {
            key: 'view',
            label: 'View Details',
            icon: <EyeOutlined />,
            onClick: () => onViewRole(record),
          },
          {
            key: 'edit',
            label: 'Edit Role',
            icon: <EditOutlined />,
            onClick: () => onEditRole(record),
          },
          {
            key: 'assign',
            label: 'Assign Permissions',
            icon: <KeyOutlined />,
            onClick: () => onAssignPermissions(record),
          },
          {
            type: 'divider',
          },
          {
            key: 'delete',
            label: 'Delete Role',
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
                onClick={() => onViewRole(record)}
              />
            </Tooltip>
            <Tooltip title="Edit Role">
              <Button
                type="text"
                size="small"
                icon={<EditOutlined />}
                onClick={() => onEditRole(record)}
              />
            </Tooltip>
            <Tooltip title="Assign Permissions">
              <Button
                type="primary"
                size="small"
                icon={<KeyOutlined />}
                onClick={() => onAssignPermissions(record)}
              />
            </Tooltip>
            <Dropdown
              menu={{
                items: actionItems,
                onClick: ({ key }) => {
                  if (key === 'delete') {
                    Modal.confirm({
                      title: 'Confirm Delete',
                      content: `Are you sure you want to delete role "${record.name}"?`,
                      okText: 'Delete',
                      cancelText: 'Cancel',
                      okType: 'danger',
                      onOk: () => onDeleteRole(record.id),
                    });
                  }
                }
              }}
              trigger={['click']}
              placement="bottomRight"
            >
              <Button
                type="text"
                size="small"
                icon={<SettingOutlined />}
              />
            </Dropdown>
          </Space>
        );
      },
      width: 200,
      fixed: 'right',
    },
  ];

  return (
    <Table
      rowKey="id"
      dataSource={roles}
      columns={columns}
      loading={loading}
      scroll={{ x: 1000 }}
      pagination={{
        total: roles.length,
        pageSize: 10,
        showSizeChanger: true,
        showQuickJumper: true,
        showTotal: (total, range) =>
          `${range[0]}-${range[1]} of ${total} items`,
        pageSizeOptions: ['10', '15', '25', '50'],
      }}
      locale={{
        emptyText: (
          <Empty
            image={Empty.PRESENTED_IMAGE_SIMPLE}
            description={
              <span>
                No roles found
                <br />
                <Button 
                  type="primary" 
                  icon={<PlusOutlined />}
                  onClick={onCreateRole}
                  style={{ marginTop: '8px' }}
                >
                  Create First Role
                </Button>
              </span>
            }
          />
        ),
      }}
      className="custom-table"
      style={{ borderRadius: '8px' }}
    />
  );
}

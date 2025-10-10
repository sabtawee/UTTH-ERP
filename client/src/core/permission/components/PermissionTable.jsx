import { 
  Table, 
  Space, 
  Button, 
  Tooltip, 
  Dropdown, 
  Modal, 
  Avatar, 
  Tag, 
  Badge, 
  Typography, 
  Empty 
} from 'antd';
import {
  KeyOutlined,
  AppstoreOutlined,
  EyeOutlined,
  EditOutlined,
  SettingOutlined,
  DeleteOutlined,
  PlusOutlined
} from '@ant-design/icons';

const { Text, Paragraph } = Typography;

export default function PermissionTable({
  filteredPermissions,
  tableLoading,
  getModuleConfig,
  getPermissionType,
  onViewDetails,
  onEdit,
  onDelete,
  onCreateNew
}) {
  const columns = [
    {
      title: "Module & Permission",
      key: "module_permission",
      render: (_, record) => {
        const moduleConfig = getModuleConfig(record.module);
        return (
          <div className="flex items-center space-x-3">
            <Avatar
              size={44}
              style={{ backgroundColor: moduleConfig.color }}
              icon={<KeyOutlined />}
            >
              {record.module?.charAt(0)?.toUpperCase()}
            </Avatar>
            <div>
              <div className="font-semibold text-gray-900 text-base">
                {getPermissionType(record.name)}
              </div>
              <div className="flex items-center text-sm text-gray-500 mt-1">
                <AppstoreOutlined className="mr-1" />
                {record.module}
              </div>
              <div className="text-xs text-gray-400 mt-1">
                {record.name}
              </div>
            </div>
          </div>
        );
      },
      width: 300,
      fixed: 'left',
    },
    {
      title: "Module",
      dataIndex: "module",
      key: "module",
      render: (module) => {
        const config = getModuleConfig(module);
        return (
          <Tag 
            color={config.color} 
            icon={<AppstoreOutlined />}
            style={{ fontSize: '12px', padding: '4px 8px' }}
          >
            {module}
          </Tag>
        );
      },
      width: 120,
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      render: (text, record) => (
        <div>
          {text ? (
            <Paragraph 
              ellipsis={{ rows: 2, expandable: true, symbol: 'More' }}
              style={{ margin: 0, fontSize: '13px' }}
            >
              {text}
            </Paragraph>
          ) : (
            <Text type="secondary" style={{ fontSize: '12px' }}>
              No description
            </Text>
          )}
          <div className="mt-2">
            <Tag size="small" color="blue">
              {getPermissionType(record.name)}
            </Tag>
          </div>
        </div>
      ),
      width: 250,
    },
    {
      title: "Status",
      key: "status",
      render: (_, record) => {
        const systemModules = ['User', 'Role', 'Permission', 'Auth'];
        const isSystem = systemModules.includes(record.module);
        
        return (
          <Space direction="vertical" size="small">
            <Badge
              status={isSystem ? 'error' : 'success'}
              text={isSystem ? 'System' : 'Custom'}
            />
            <Text type="secondary" style={{ fontSize: '11px' }}>
              Created: {new Date(record.createdAt || Date.now()).toLocaleDateString('en-US')}
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
        const systemModules = ['User', 'Role', 'Permission', 'Auth'];
        const isSystem = systemModules.includes(record.module);
        
        const actionItems = [
          {
            key: 'view',
            label: 'View Details',
            icon: <EyeOutlined />,
            onClick: () => onViewDetails(record),
          },
          {
            key: 'edit',
            label: 'Edit Permission',
            icon: <EditOutlined />,
            onClick: () => onEdit(record),
            disabled: isSystem,
          },
          {
            type: 'divider',
          },
          {
            key: 'delete',
            label: 'Delete Permission',
            icon: <DeleteOutlined />,
            danger: true,
            disabled: isSystem,
          },
        ];

        return (
          <Space size="small">
            <Tooltip title="View Details">
              <Button
                type="text"
                size="small"
                icon={<EyeOutlined />}
                onClick={() => onViewDetails(record)}
              />
            </Tooltip>
            <Tooltip title={isSystem ? "Cannot edit system permissions" : "Edit Permission"}>
              <Button
                type="text"
                size="small"
                icon={<EditOutlined />}
                onClick={() => onEdit(record)}
                disabled={isSystem}
              />
            </Tooltip>
            <Dropdown
              menu={{
                items: actionItems,
                onClick: ({ key }) => {
                  if (key === 'delete') {
                    Modal.confirm({
                      title: 'Confirm Delete',
                      content: `Are you sure you want to delete permission "${record.module}.${record.name}"?`,
                      okText: 'Delete',
                      cancelText: 'Cancel',
                      okType: 'danger',
                      onOk: () => onDelete(record.id),
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
      width: 150,
      fixed: 'right',
    },
  ];

  return (
    <Table
      rowKey="id"
      dataSource={filteredPermissions}
      columns={columns}
      loading={tableLoading}
      scroll={{ x: 1000 }}
      pagination={{
        total: filteredPermissions.length,
        pageSize: 15,
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
                No permissions found
                <br />
                <Button 
                  type="primary" 
                  icon={<PlusOutlined />}
                  onClick={onCreateNew}
                  style={{ marginTop: '8px' }}
                >
                  Create First Permission
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

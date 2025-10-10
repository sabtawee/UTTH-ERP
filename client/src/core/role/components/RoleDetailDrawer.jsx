import { Drawer, Card, Avatar, Typography, Tag, Statistic, Collapse, Space, Empty, Button, Badge } from 'antd';
import {
  EyeOutlined,
  SafetyCertificateOutlined,
  KeyOutlined,
  CheckCircleOutlined,
  SecurityScanOutlined,
} from '@ant-design/icons';

const { Title, Text } = Typography;
const { Panel } = Collapse;

export default function RoleDetailDrawer({
  open,
  onClose,
  selectedRole,
  onAssignPermissions
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

  if (!selectedRole) return null;

  return (
    <Drawer
      title={
        <div style={{ textAlign: 'center' }}>
          <EyeOutlined style={{ color: '#1890ff', marginRight: '8px' }} />
          Role Details
        </div>
      }
      open={open}
      onClose={onClose}
      width={700}
    >
      <div>
        <Card className="mb-4" style={{ textAlign: 'center' }}>
          <Avatar
            size={80}
            style={{ backgroundColor: getRoleColor(selectedRole.name) }}
            icon={<SafetyCertificateOutlined />}
          >
            {selectedRole.name?.charAt(0)?.toUpperCase()}
          </Avatar>
          <Title level={3} className="mt-3 mb-1">
            {selectedRole.name}
          </Title>
          <Text type="secondary">{selectedRole.description || 'No description'}</Text>
          <div className="mt-3">
            <Tag color={getRoleColor(selectedRole.name)} style={{ fontSize: '14px', padding: '4px 12px' }}>
              Level: {getRoleLevel(selectedRole.name)}
            </Tag>
          </div>
        </Card>

        <Card title="Access Permissions" className="mb-4">
          <div className="mb-4">
            <Statistic
              title="Total Permissions"
              value={selectedRole.permissions?.length || 0}
              prefix={<KeyOutlined />}
              valueStyle={{ color: '#1890ff' }}
            />
          </div>
          
          {selectedRole.permissions && selectedRole.permissions.length > 0 ? (
            <Collapse ghost>
              {Object.entries(
                selectedRole.permissions.reduce((acc, p) => {
                  const module = p.permission.module;
                  if (!acc[module]) acc[module] = [];
                  acc[module].push(p.permission);
                  return acc;
                }, {})
              ).map(([module, perms]) => (
                <Panel 
                  header={
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <SecurityScanOutlined className="mr-2" />
                        <Text strong>{module}</Text>
                      </div>
                      <Badge count={perms.length} style={{ backgroundColor: '#52c41a' }} />
                    </div>
                  } 
                  key={module}
                >
                  <Space wrap>
                    {perms.map((perm) => (
                      <Tag 
                        key={perm.id} 
                        color="blue"
                        icon={<CheckCircleOutlined />}
                        style={{ margin: '2px', padding: '4px 8px' }}
                      >
                        {perm.name}
                      </Tag>
                    ))}
                  </Space>
                </Panel>
              ))}
            </Collapse>
          ) : (
            <Empty
              image={Empty.PRESENTED_IMAGE_SIMPLE}
              description="This role has no permissions yet"
            >
              <Button 
                type="primary" 
                icon={<KeyOutlined />}
                onClick={() => {
                  onClose();
                  onAssignPermissions(selectedRole);
                }}
              >
                Assign Permissions
              </Button>
            </Empty>
          )}
        </Card>
      </div>
    </Drawer>
  );
}

import { 
  Drawer, 
  Card, 
  Avatar, 
  Typography, 
  Space, 
  Tag, 
  Row, 
  Col, 
  Badge, 
  Empty 
} from 'antd';
import { 
  EyeOutlined, 
  KeyOutlined, 
  AppstoreOutlined 
} from '@ant-design/icons';

const { Title, Text, Paragraph } = Typography;

export default function PermissionDetailDrawer({
  open,
  selectedPermission,
  getModuleConfig,
  getPermissionType,
  onClose
}) {
  return (
    <Drawer
      title={
        <div style={{ textAlign: 'center' }}>
          <EyeOutlined style={{ color: '#1890ff', marginRight: '8px' }} />
          Permission Details
        </div>
      }
      open={open}
      onClose={onClose}
      width={600}
    >
      {selectedPermission && (
        <div>
          <Card className="mb-4" style={{ textAlign: 'center' }}>
            <Avatar
              size={80}
              style={{ backgroundColor: getModuleConfig(selectedPermission.module).color }}
              icon={<KeyOutlined />}
            >
              {selectedPermission.module?.charAt(0)?.toUpperCase()}
            </Avatar>
            <Title level={3} className="mt-3 mb-1">
              {getPermissionType(selectedPermission.name)}
            </Title>
            <Text type="secondary">{selectedPermission.module}.{selectedPermission.name}</Text>
            <div className="mt-3">
              <Space>
                <Tag 
                  color={getModuleConfig(selectedPermission.module).color}
                  style={{ fontSize: '14px', padding: '4px 12px' }}
                >
                  {selectedPermission.module}
                </Tag>
                <Tag 
                  color="blue"
                  style={{ fontSize: '14px', padding: '4px 12px' }}
                >
                  {getPermissionType(selectedPermission.name)}
                </Tag>
              </Space>
            </div>
          </Card>

          <Card title="Details" className="mb-4">
            <Row gutter={[16, 16]}>
              <Col span={12}>
                <div>
                  <Text strong>Module:</Text>
                  <br />
                  <Tag 
                    color={getModuleConfig(selectedPermission.module).color}
                    icon={<AppstoreOutlined />}
                    style={{ marginTop: '4px' }}
                  >
                    {selectedPermission.module}
                  </Tag>
                </div>
              </Col>
              <Col span={12}>
                <div>
                  <Text strong>Permission Name:</Text>
                  <br />
                  <Text code style={{ marginTop: '4px', display: 'block' }}>
                    {selectedPermission.name}
                  </Text>
                </div>
              </Col>
              <Col span={24}>
                <div>
                  <Text strong>Type:</Text>
                  <br />
                  <Tag color="blue" style={{ marginTop: '4px' }}>
                    {getPermissionType(selectedPermission.name)}
                  </Tag>
                </div>
              </Col>
              <Col span={24}>
                <div>
                  <Text strong>Status:</Text>
                  <br />
                  {['User', 'Role', 'Permission', 'Auth'].includes(selectedPermission.module) ? (
                    <Badge status="error" text="System Permission (Cannot be edited)" />
                  ) : (
                    <Badge status="success" text="Custom Permission (Editable)" />
                  )}
                </div>
              </Col>
            </Row>
          </Card>

          {selectedPermission.description && (
            <Card title="Description">
              <Paragraph>{selectedPermission.description}</Paragraph>
            </Card>
          )}

          {!selectedPermission.description && (
            <Card title="Description">
              <Empty
                image={Empty.PRESENTED_IMAGE_SIMPLE}
                description="No description available for this permission"
              />
            </Card>
          )}
        </div>
      )}
    </Drawer>
  );
}

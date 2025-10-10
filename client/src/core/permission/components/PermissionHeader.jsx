import { Row, Col, Typography, Space, Button, Tooltip, Badge, message } from 'antd';
import {
  KeyOutlined,
  ExportOutlined,
  ReloadOutlined,
  PlusOutlined,
} from '@ant-design/icons';

const { Title, Text } = Typography;

export default function PermissionHeader({ 
  filteredPermissions, 
  onRefresh, 
  onCreateNew 
}) {
  return (
    <div className="mb-6">
      <Row justify="space-between" align="middle">
        <Col>
          <Title level={2} className="mb-2" style={{ color: '#1890ff' }}>
            <KeyOutlined className="mr-3" />
            Access Permissions Management
          </Title>
          <Text type="secondary" style={{ fontSize: '16px' }}>
            Manage system access permissions and modules in the Manufacturing Execution System
          </Text>
        </Col>
        <Col>
          <Space size="middle">
            <Tooltip title="Export Data">
              <Badge count={filteredPermissions.length} showZero>
                <Button 
                  icon={<ExportOutlined />}
                  onClick={() => message.info('This feature will be developed in the future')}
                >
                  Export
                </Button>
              </Badge>
            </Tooltip>
            <Tooltip title="Refresh Data">
              <Button 
                icon={<ReloadOutlined />}
                onClick={onRefresh}
              />
            </Tooltip>
            <Button
              type="primary"
              size="large"
              icon={<PlusOutlined />}
              onClick={onCreateNew}
              style={{
                background: 'linear-gradient(45deg, #1890ff, #722ed1)',
                border: 'none',
                borderRadius: '8px',
                boxShadow: '0 4px 12px rgba(24, 144, 255, 0.3)'
              }}
            >
              Create New Permission
            </Button>
          </Space>
        </Col>
      </Row>
    </div>
  );
}

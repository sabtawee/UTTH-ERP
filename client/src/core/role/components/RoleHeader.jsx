import { Row, Col, Typography, Space, Tooltip, Badge, Button, message } from 'antd';
import {
  SafetyCertificateOutlined,
  ExportOutlined,
  ReloadOutlined,
  PlusOutlined,
} from '@ant-design/icons';

const { Title: AntTitle, Text } = Typography;

export default function RoleHeader({ filteredRoles, onRefresh, onCreateRole }) {
  return (
    <div className="mb-6">
      <Row justify="space-between" align="middle">
        <Col>
          <AntTitle level={2} className="mb-2" style={{ color: '#1890ff' }}>
            <SafetyCertificateOutlined className="mr-3" />
            Role & Permission Management
          </AntTitle>
          <Text type="secondary" style={{ fontSize: '16px' }}>
            Manage user roles and assign access permissions in the Manufacturing Execution System
          </Text>
        </Col>
        <Col>
          <Space size="middle">
            <Tooltip title="Export Data">
              <Badge count={filteredRoles.length} showZero>
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
                onClick={() => {
                  onRefresh();
                  message.success('Data refreshed');
                }}
              />
            </Tooltip>
            <Button
              type="primary"
              size="large"
              icon={<PlusOutlined />}
              onClick={onCreateRole}
              style={{
                background: 'linear-gradient(45deg, #1890ff, #722ed1)',
                border: 'none',
                borderRadius: '8px',
                boxShadow: '0 4px 12px rgba(24, 144, 255, 0.3)'
              }}
            >
              Create New Role
            </Button>
          </Space>
        </Col>
      </Row>
    </div>
  );
}

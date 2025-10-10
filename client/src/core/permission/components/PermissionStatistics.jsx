import { Row, Col, Card, Statistic } from 'antd';
import {
  KeyOutlined,
  AppstoreOutlined,
  SecurityScanOutlined,
  SettingOutlined,
} from '@ant-design/icons';

export default function PermissionStatistics({ statsData }) {
  return (
    <Row gutter={[16, 16]} className="mb-6">
      <Col xs={24} sm={12} md={6}>
        <Card className="text-center shadow-lg border-0" style={{ borderRadius: '12px' }}>
          <Statistic
            title="Total Permissions"
            value={statsData.total}
            prefix={<KeyOutlined style={{ color: '#1890ff' }} />}
            valueStyle={{ color: '#1890ff', fontSize: '24px' }}
          />
        </Card>
      </Col>
      <Col xs={24} sm={12} md={6}>
        <Card className="text-center shadow-lg border-0" style={{ borderRadius: '12px' }}>
          <Statistic
            title="Total Modules"
            value={statsData.modules}
            prefix={<AppstoreOutlined style={{ color: '#52c41a' }} />}
            valueStyle={{ color: '#52c41a', fontSize: '24px' }}
          />
        </Card>
      </Col>
      <Col xs={24} sm={12} md={6}>
        <Card className="text-center shadow-lg border-0" style={{ borderRadius: '12px' }}>
          <Statistic
            title="System Permissions"
            value={statsData.systemPerms}
            prefix={<SecurityScanOutlined style={{ color: '#f5222d' }} />}
            valueStyle={{ color: '#f5222d', fontSize: '24px' }}
          />
        </Card>
      </Col>
      <Col xs={24} sm={12} md={6}>
        <Card className="text-center shadow-lg border-0" style={{ borderRadius: '12px' }}>
          <Statistic
            title="Custom Permissions"
            value={statsData.customPerms}
            prefix={<SettingOutlined style={{ color: '#722ed1' }} />}
            valueStyle={{ color: '#722ed1', fontSize: '24px' }}
          />
        </Card>
      </Col>
    </Row>
  );
}

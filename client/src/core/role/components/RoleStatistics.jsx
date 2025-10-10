import { Card, Statistic, Row, Col } from 'antd';
import {
  SafetyCertificateOutlined,
  CheckCircleOutlined,
  CloseCircleOutlined,
  KeyOutlined,
} from '@ant-design/icons';

export default function RoleStatistics({ statsData }) {
  return (
    <Row gutter={[16, 16]} className="mb-6">
      <Col xs={24} sm={12} md={6}>
        <Card className="text-center shadow-lg border-0" style={{ borderRadius: '12px' }}>
          <Statistic
            title="Total Roles"
            value={statsData.total}
            prefix={<SafetyCertificateOutlined style={{ color: '#1890ff' }} />}
            valueStyle={{ color: '#1890ff', fontSize: '24px' }}
          />
        </Card>
      </Col>
      <Col xs={24} sm={12} md={6}>
        <Card className="text-center shadow-lg border-0" style={{ borderRadius: '12px' }}>
          <Statistic
            title="With Permissions"
            value={statsData.withPermissions}
            prefix={<CheckCircleOutlined style={{ color: '#52c41a' }} />}
            valueStyle={{ color: '#52c41a', fontSize: '24px' }}
          />
        </Card>
      </Col>
      <Col xs={24} sm={12} md={6}>
        <Card className="text-center shadow-lg border-0" style={{ borderRadius: '12px' }}>
          <Statistic
            title="Without Permissions"
            value={statsData.withoutPermissions}
            prefix={<CloseCircleOutlined style={{ color: '#f5222d' }} />}
            valueStyle={{ color: '#f5222d', fontSize: '24px' }}
          />
        </Card>
      </Col>
      <Col xs={24} sm={12} md={6}>
        <Card className="text-center shadow-lg border-0" style={{ borderRadius: '12px' }}>
          <Statistic
            title="Total Permissions"
            value={statsData.totalPermissions}
            prefix={<KeyOutlined style={{ color: '#722ed1' }} />}
            valueStyle={{ color: '#722ed1', fontSize: '24px' }}
          />
        </Card>
      </Col>
    </Row>
  );
}

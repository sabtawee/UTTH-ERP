import { Card, Statistic, Row, Col } from 'antd';
import {
  UserOutlined,
  LockOutlined,
  TeamOutlined,
} from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

export default function UserStatistics({ statsData }) {
  const { t } = useTranslation();

  return (
    <Row gutter={[16, 16]} className="mb-6">
      <Col xs={24} sm={12} md={6}>
        <Card
          className="text-center shadow-lg border-0"
          style={{ borderRadius: "12px" }}
        >
          <Statistic
            title={t('usermanagement.total_users')}
            value={statsData.total}
            prefix={<UserOutlined style={{ color: "#1890ff" }} />}
            valueStyle={{ color: "#1890ff", fontSize: "24px" }}
          />
        </Card>
      </Col>
      <Col xs={24} sm={12} md={6}>
        <Card
          className="text-center shadow-lg border-0"
          style={{ borderRadius: "12px" }}
        >
          <Statistic
            title={t('usermanagement.active')}
            value={statsData.active}
            prefix={<UserOutlined style={{ color: "#52c41a" }} />}
            valueStyle={{ color: "#52c41a", fontSize: "24px" }}
          />
        </Card>
      </Col>
      <Col xs={24} sm={12} md={6}>
        <Card
          className="text-center shadow-lg border-0"
          style={{ borderRadius: "12px" }}
        >
          <Statistic
            title={t('usermanagement.inactive')}
            value={statsData.inactive}
            prefix={<LockOutlined style={{ color: "#f5222d" }} />}
            valueStyle={{ color: "#f5222d", fontSize: "24px" }}
          />
        </Card>
      </Col>
      <Col xs={24} sm={12} md={6}>
        <Card
          className="text-center shadow-lg border-0"
          style={{ borderRadius: "12px" }}
        >
          <Statistic
            title={t('usermanagement.total_departments')}
            value={statsData.departments}
            prefix={<TeamOutlined style={{ color: "#722ed1" }} />}
            valueStyle={{ color: "#722ed1", fontSize: "24px" }}
          />
        </Card>
      </Col>
    </Row>
  );
}

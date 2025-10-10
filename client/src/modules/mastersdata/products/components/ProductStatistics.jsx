import { Card, Row, Col, Statistic, Badge } from "antd";
import {
  ShopOutlined,
  CheckCircleOutlined,
  ExclamationCircleOutlined,
  InboxOutlined,
} from "@ant-design/icons";

export default function ProductStatistics({ statistics }) {
  // Provide default values if statistics is undefined
  const stats = statistics || {
    total: 0,
    active: 0,
    inactive: 0,
    lowStock: 0
  };

  return (
    <Row gutter={[16, 16]} className="mb-6">
      <Col xs={24} sm={12} lg={6}>
        <Card className="text-center shadow-sm">
          <Statistic
            title="Total Products"
            value={stats.total}
            prefix={<ShopOutlined className="text-blue-500" />}
            valueStyle={{ color: '#1890ff' }}
          />
        </Card>
      </Col>
      <Col xs={24} sm={12} lg={6}>
        <Card className="text-center shadow-sm">
          <Statistic
            title="Active Products"
            value={stats.active}
            prefix={<CheckCircleOutlined className="text-green-500" />}
            valueStyle={{ color: '#52c41a' }}
          />
        </Card>
      </Col>
      <Col xs={24} sm={12} lg={6}>
        <Card className="text-center shadow-sm">
          <Statistic
            title="Inactive Products"
            value={stats.inactive}
            prefix={<ExclamationCircleOutlined className="text-gray-500" />}
            valueStyle={{ color: '#8c8c8c' }}
          />
        </Card>
      </Col>
      <Col xs={24} sm={12} lg={6}>
        <Card className="text-center shadow-sm">
          <Statistic
            title="Low Stock"
            value={stats.lowStock}
            prefix={<InboxOutlined className="text-red-500" />}
            valueStyle={{ color: '#ff4d4f' }}
          />
        </Card>
      </Col>
    </Row>
  );
}

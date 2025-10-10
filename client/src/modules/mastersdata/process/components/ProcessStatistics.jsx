import { Card, Row, Col, Statistic, Badge } from "antd";
import {
  SettingOutlined,
  PlayCircleOutlined,
  PauseCircleOutlined,
} from "@ant-design/icons";

export default function ProcessStatistics({ data }) {
  const statistics = {
    total: data.length,
    active: data.filter(item => item.isActive === true).length,
    inactive: data.filter(item => item.isActive === false).length,
  };

  return (
    <Row gutter={[16, 16]} className="mb-6">
      <Col xs={24} sm={12} lg={8}>
        <Card className="text-center shadow-sm">
          <Statistic
            title="Total Processes"
            value={statistics.total}
            prefix={<SettingOutlined className="text-blue-500" />}
            valueStyle={{ color: '#1890ff' }}
          />
        </Card>
      </Col>
      <Col xs={24} sm={12} lg={8}>
        <Card className="text-center shadow-sm">
          <Statistic
            title="Active Processes"
            value={statistics.active}
            prefix={<PlayCircleOutlined className="text-green-500" />}
            valueStyle={{ color: '#52c41a' }}
          />
        </Card>
      </Col>
      <Col xs={24} sm={12} lg={8}>
        <Card className="text-center shadow-sm">
          <Statistic
            title="Inactive Processes"
            value={statistics.inactive}
            prefix={<PauseCircleOutlined className="text-gray-500" />}
            valueStyle={{ color: '#8c8c8c' }}
          />
        </Card>
      </Col>
    </Row>
  );
}

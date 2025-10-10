import { Card, Row, Col, Input, Select, Space, Button, Typography } from "antd";
import { SearchOutlined, ReloadOutlined } from "@ant-design/icons";

const { Text } = Typography;
const { Option } = Select;

export default function ProcessFilters({
  searchText,
  onSearchChange,
  statusFilter,
  onStatusChange,
  filteredCount,
  totalCount,
  onRefresh,
  loading
}) {
  return (
    <Card className="mb-6 shadow-sm">
      <Row gutter={[16, 16]} align="middle">
        <Col xs={24} md={8}>
          <Input
            placeholder="Search processes..."
            prefix={<SearchOutlined />}
            value={searchText}
            onChange={(e) => onSearchChange(e.target.value)}
            allowClear
          />
        </Col>
        <Col xs={24} md={6}>
          <Select
            placeholder="Filter by status"
            value={statusFilter}
            onChange={onStatusChange}
            className="w-full"
          >
            <Option value="all">All Status</Option>
            <Option value="active">Active</Option>
            <Option value="inactive">Inactive</Option>
          </Select>
        </Col>
        <Col xs={24} md={10} className="text-right">
          <Space>
            <Text type="secondary">
              Showing {filteredCount} of {totalCount} processes
            </Text>
            <Button
              icon={<ReloadOutlined />}
              onClick={onRefresh}
              loading={loading}
            >
              Refresh
            </Button>
          </Space>
        </Col>
      </Row>
    </Card>
  );
}

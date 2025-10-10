import { Card, Row, Col, Input, Select, Space, Button, Divider, Typography } from 'antd';
import { SearchOutlined, FilterOutlined } from '@ant-design/icons';

const { Text } = Typography;

export default function PermissionFilters({
  searchText,
  onSearchChange,
  filterModule,
  onModuleChange,
  uniqueModules,
  getModuleConfig,
  filteredCount,
  totalCount,
  onClearFilters
}) {
  return (
    <Card
      size="small"
      className="mb-4"
      style={{ 
        backgroundColor: '#fafafa', 
        border: '1px solid #f0f0f0',
        borderRadius: '8px'
      }}
    >
      <Row gutter={[16, 16]} align="middle">
        <Col xs={24} sm={12} md={8}>
          <Input
            placeholder="Search permission name, module, or description..."
            prefix={<SearchOutlined style={{ color: '#1890ff' }} />}
            value={searchText}
            onChange={(e) => onSearchChange(e.target.value)}
            allowClear
            size="large"
            style={{ borderRadius: '6px' }}
          />
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Select
            placeholder="Select Module"
            value={filterModule}
            onChange={onModuleChange}
            allowClear
            style={{ width: '100%' }}
            size="large"
            suffixIcon={<FilterOutlined />}
          >
            {uniqueModules.map(module => (
              <Select.Option key={module} value={module}>
                <span style={{ color: getModuleConfig(module).color }}>
                  {module}
                </span>
              </Select.Option>
            ))}
          </Select>
        </Col>
        <Col xs={24} sm={24} md={10}>
          <Space>
            <Text type="secondary" style={{ fontSize: '14px' }}>
              Showing {filteredCount} of {totalCount} permissions
            </Text>
            <Divider type="vertical" />
            <Button
              size="small"
              onClick={onClearFilters}
              style={{ borderRadius: '4px' }}
            >
              Clear Filters
            </Button>
          </Space>
        </Col>
      </Row>
    </Card>
  );
}

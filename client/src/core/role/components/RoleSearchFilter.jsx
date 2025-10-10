import { Card, Row, Col, Input, Space, Divider, Button, Typography } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const { Text } = Typography;

export default function RoleSearchFilter({ 
  searchText, 
  onSearchChange, 
  filteredRoles, 
  totalRoles 
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
        <Col xs={24} sm={12} md={10}>
          <Input
            placeholder="Search role name or description..."
            prefix={<SearchOutlined style={{ color: '#1890ff' }} />}
            value={searchText}
            onChange={(e) => onSearchChange(e.target.value)}
            allowClear
            size="large"
            style={{ borderRadius: '6px' }}
          />
        </Col>
        <Col xs={24} sm={12} md={14}>
          <Space>
            <Text type="secondary" style={{ fontSize: '14px' }}>
              Showing {filteredRoles.length} of {totalRoles} roles
            </Text>
            <Divider type="vertical" />
            <Button
              size="small"
              onClick={() => onSearchChange("")}
              style={{ borderRadius: '4px' }}
            >
              Clear Search
            </Button>
          </Space>
        </Col>
      </Row>
    </Card>
  );
}

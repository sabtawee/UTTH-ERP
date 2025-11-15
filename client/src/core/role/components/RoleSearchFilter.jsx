import { Card, Row, Col, Input, Space, Divider, Button, Typography } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

const { Text } = Typography;

export default function RoleSearchFilter({ 
  searchText, 
  onSearchChange, 
  filteredRoles, 
  totalRoles 
}) {
  const { t } = useTranslation();
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
            placeholder={t('rolemanagement.search_placeholder')}
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
              {t('rolemanagement.showing_roles')} {filteredRoles.length} {t('rolemanagement.of_roles')} {totalRoles} {t('rolemanagement.roles')}
            </Text>
            <Divider type="vertical" />
            <Button
              size="small"
              onClick={() => onSearchChange("")}
              style={{ borderRadius: '4px' }}
            >
              {t('rolemanagement.clear_filters')}
            </Button>
          </Space>
        </Col>
      </Row>
    </Card>
  );
}

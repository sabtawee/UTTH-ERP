import { Card, Row, Col, Input, Select, Space, Typography, Divider, Button } from 'antd';
import {
  SearchOutlined,
  FilterOutlined,
  SafetyCertificateOutlined,
} from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

const { Text } = Typography;
const { Option } = Select;

export default function UserSearchFilter({
  searchText,
  onSearchChange,
  filterDepartment,
  onFilterDepartmentChange,
  filterRole,
  onFilterRoleChange,
  uniqueDepartments,
  roles,
  filteredUsers,
  totalUsers,
  onClearFilters
}) {
  const { t } = useTranslation();
  return (
    <Card
      size="small"
      className="mb-4"
      style={{
        backgroundColor: "#fafafa",
        border: "1px solid #f0f0f0",
        borderRadius: "8px",
      }}
    >
      <Row gutter={[16, 16]} align="middle">
        <Col xs={24} sm={12} md={8}>
          <Input
            placeholder={t('usermanagement.search_placeholder')}
            prefix={<SearchOutlined style={{ color: "#1890ff" }} />}
            value={searchText}
            onChange={(e) => onSearchChange(e.target.value)}
            allowClear
            size="large"
            style={{ borderRadius: "6px" }}
          />
        </Col>
        <Col xs={24} sm={12} md={5}>
          <Select
            placeholder={t('usermanagement.select_department')}
            value={filterDepartment}
            onChange={onFilterDepartmentChange}
            allowClear
            style={{ width: "100%" }}
            size="large"
            suffixIcon={<FilterOutlined />}
          >
            {uniqueDepartments.map((dept) => (
              <Option key={dept} value={dept}>
                {dept}
              </Option>
            ))}
          </Select>
        </Col>
        <Col xs={24} sm={12} md={5}>
          <Select
            placeholder={t('usermanagement.select_role')}
            value={filterRole}
            onChange={onFilterRoleChange}
            allowClear
            style={{ width: "100%" }}
            size="large"
            suffixIcon={<SafetyCertificateOutlined />}
          >
            {roles.map((role) => (
              <Option key={role.id} value={role.id}>
                {role.name}
              </Option>
            ))}
          </Select>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Space>
            <Text type="secondary" style={{ fontSize: "14px" }}>
              {t('usermanagement.showing_users')} {filteredUsers.length} {t('usermanagement.of_users')} {totalUsers} {t('usermanagement.users')}
            </Text>
            <Divider type="vertical" />
            <Button
              size="small"
              onClick={onClearFilters}
              style={{ borderRadius: "4px" }}
            >
              {t('usermanagement.clear_filters')}
            </Button>
          </Space>
        </Col>
      </Row>
    </Card>
  );
}

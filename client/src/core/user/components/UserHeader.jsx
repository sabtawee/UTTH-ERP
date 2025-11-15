import { Row, Col, Typography, Space, Tooltip, Badge, Button, message } from 'antd';
import {
  UserOutlined,
  ExportOutlined,
  ReloadOutlined,
  UserAddOutlined,
} from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

const { Title, Text } = Typography;

export default function UserHeader({ filteredUsers, onRefresh, onCreateUser }) {
  const { t } = useTranslation();

  return (
    <div className="mb-6">
      <Row justify="space-between" align="middle">
        <Col>
          <Title level={2} className="mb-2" style={{ color: "#1890ff" }}>
            <UserOutlined className="mr-3" />
            {t('usermanagement.user_management')}
          </Title>
          <Text type="secondary" style={{ fontSize: "16px" }}>
            {t('usermanagement.user_management_description')}
          </Text>
        </Col>
        <Col>
          <Space size="middle">
            <Tooltip title={t('usermanagement.export_data')}>
              <Badge count={filteredUsers.length} showZero>
                <Button
                  icon={<ExportOutlined />}
                  onClick={() => message.info(t('usermanagement.export_feature_message'))}
                >
                  {t('usermanagement.export')}
                </Button>
              </Badge>
            </Tooltip>
            <Tooltip title={t('usermanagement.refresh_data')}>
              <Button
                icon={<ReloadOutlined />}
                onClick={() => {
                  onRefresh();
                  message.success(t('usermanagement.data_refreshed'));
                }}
              />
            </Tooltip>
            <Button
              type="primary"
              size="large"
              icon={<UserAddOutlined />}
              onClick={onCreateUser}
              style={{
                background: "linear-gradient(45deg, #1890ff, #722ed1)",
                border: "none",
                borderRadius: "8px",
                boxShadow: "0 4px 12px rgba(24, 144, 255, 0.3)",
              }}
            >
              {t('usermanagement.add_new_user')}
            </Button>
          </Space>
        </Col>
      </Row>
    </div>
  );
}

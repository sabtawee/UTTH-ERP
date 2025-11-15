import { Row, Col, Typography, Space, Tooltip, Badge, Button, message } from 'antd';
import {
  SafetyCertificateOutlined,
  ExportOutlined,
  ReloadOutlined,
  PlusOutlined,
} from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

const { Title: AntTitle, Text } = Typography;

export default function RoleHeader({ filteredRoles, onRefresh, onCreateRole }) {
  const { t } = useTranslation();
  return (
    <div className="mb-6">
      <Row justify="space-between" align="middle">
        <Col>
          <AntTitle level={2} className="mb-2" style={{ color: '#1890ff' }}>
            <SafetyCertificateOutlined className="mr-3" />
            {t('rolemanagement.role_management')}
          </AntTitle>
          <Text type="secondary" style={{ fontSize: '16px' }}>
            {t('rolemanagement.role_management_description')}
          </Text>
        </Col>
        <Col>
          <Space size="middle">
            <Tooltip title={t('usermanagement.export_data')}>
              <Badge count={filteredRoles.length} showZero>
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
              icon={<PlusOutlined />}
              onClick={onCreateRole}
              style={{
                background: 'linear-gradient(45deg, #1890ff, #722ed1)',
                border: 'none',
                borderRadius: '8px',
                boxShadow: '0 4px 12px rgba(24, 144, 255, 0.3)'
              }}
            >
              {t('rolemanagement.create_new_role')}
            </Button>
          </Space>
        </Col>
      </Row>
    </div>
  );
}

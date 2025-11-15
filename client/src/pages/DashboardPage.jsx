import React from 'react';
import { Card, Row, Col, Statistic, Typography } from 'antd';
import {
  UserOutlined,
  SafetyCertificateOutlined,
  DashboardOutlined,
  GlobalOutlined,
} from '@ant-design/icons';

import { useTranslation } from 'react-i18next';

const { Title, Paragraph } = Typography;

export default function DashboardPage() {
  const { t } = useTranslation();

  return (
    <div className="p-6 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 min-h-screen">
      {/* Header Section */}
      <div className="mb-6">
        <Title level={2} className="mb-2" style={{ color: '#1890ff' }}>
          <DashboardOutlined className="mr-3" />
          {t('dashboard_page.title')}
        </Title>
        <Paragraph className="text-gray-600 text-lg">
          {t('dashboard_page.welcome_message')}
        </Paragraph>
      </div>

      {/* Statistics Cards */}
      <Row gutter={[24, 24]} className="mb-6">
        <Col xs={24} sm={12} md={6}>
          <Card className="text-center shadow-lg border-0" style={{ borderRadius: '12px' }}>
            <Statistic
              title={t('dashboard_page.system_status')}
              value={t('dashboard_page.online')}
              prefix={<DashboardOutlined style={{ color: '#52c41a' }} />}
              valueStyle={{ color: '#52c41a', fontSize: '20px' }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card className="text-center shadow-lg border-0" style={{ borderRadius: '12px' }}>
            <Statistic
              title={t('dashboard_page.active_users')}
              value={42}
              prefix={<UserOutlined style={{ color: '#1890ff' }} />}
              valueStyle={{ color: '#1890ff', fontSize: '20px' }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card className="text-center shadow-lg border-0" style={{ borderRadius: '12px' }}>
            <Statistic
              title={t('dashboard_page.total_roles')}
              value={8}
              prefix={<SafetyCertificateOutlined style={{ color: '#722ed1' }} />}
              valueStyle={{ color: '#722ed1', fontSize: '20px' }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card className="text-center shadow-lg border-0" style={{ borderRadius: '12px' }}>
            <Statistic
              title={t('dashboard_page.processes')}
              value={15}
              prefix={<GlobalOutlined style={{ color: '#fa8c16' }} />}
              valueStyle={{ color: '#fa8c16', fontSize: '20px' }}
            />
          </Card>
        </Col>
      </Row>

      {/* Main Content */}
      <Row gutter={[24, 24]}>
        <Col xs={24} lg={16}>
          <Card
            title={t('dashboard_page.system_overview')}
            className="shadow-lg border-0"
            style={{ borderRadius: '12px', minHeight: '400px' }}
          >
            <div className="text-center py-20">
              <DashboardOutlined 
                style={{ fontSize: '80px', color: '#d9d9d9', marginBottom: '16px' }} 
              />
              <Title level={4} style={{ color: '#8c8c8c' }}>
                {t('dashboard_page.dashboard_content')}
              </Title>
              <Paragraph style={{ color: '#8c8c8c' }}>
                {t('dashboard_page.dashboard_description')}
              </Paragraph>
            </div>
          </Card>
        </Col>
        <Col xs={24} lg={8}>
          <Card
            title={t('dashboard_page.quick_actions')}
            className="shadow-lg border-0 mb-6"
            style={{ borderRadius: '12px' }}
          >
            <div className="space-y-3">
              <div className="p-3 bg-blue-50 rounded-lg cursor-pointer hover:bg-blue-100 transition-colors">
                <div className="flex items-center">
                  <UserOutlined className="text-blue-600 mr-3" />
                  <span className="font-medium">{t('dashboard_page.manage_users')}</span>
                </div>
              </div>
              <div className="p-3 bg-purple-50 rounded-lg cursor-pointer hover:bg-purple-100 transition-colors">
                <div className="flex items-center">
                  <SafetyCertificateOutlined className="text-purple-600 mr-3" />
                  <span className="font-medium">{t('dashboard_page.manage_roles')}</span>
                </div>
              </div>
              <div className="p-3 bg-orange-50 rounded-lg cursor-pointer hover:bg-orange-100 transition-colors">
                <div className="flex items-center">
                  <GlobalOutlined className="text-orange-600 mr-3" />
                  <span className="font-medium">{t('dashboard_page.manage_processes')}</span>
                </div>
              </div>
            </div>
          </Card>

          <Card
            title={t('dashboard_page.system_information')}
            className="shadow-lg border-0"
            style={{ borderRadius: '12px' }}
          >
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">{t('dashboard_page.version')}:</span>
                <span className="font-medium">1.0.0</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">{t('dashboard_page.environment')}:</span>
                <span className="font-medium">{t('dashboard_page.production')}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">{t('dashboard_page.last_updated')}:</span>
                <span className="font-medium">2025-08-01</span>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

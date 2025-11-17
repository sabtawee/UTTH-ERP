import React from 'react';
import { Card, Row, Col, Statistic, Typography } from 'antd';
import {
  UserOutlined,
  SafetyCertificateOutlined,
  DashboardOutlined,
  GlobalOutlined,
  BarChartOutlined,
  DollarOutlined,
  ToolOutlined,
  TeamOutlined,
  FileTextOutlined,
  CreditCardOutlined,
  SettingOutlined,
  ExperimentOutlined,
  SettingFilled,
  InboxOutlined,
  CheckCircleOutlined,
  EyeOutlined,
  ShoppingCartOutlined
} from '@ant-design/icons';

import { useTranslation } from 'react-i18next';

const { Title, Paragraph } = Typography;

export default function DashboardPage() {
  const { t } = useTranslation();

  // System modules data
  const systemModules = [
    {
      name: 'dashboard_page.modules.analysis',
      description: 'dashboard_page.modules.analysis_desc',
      icon: <BarChartOutlined className="text-blue-600" />,
      status: 'Coming Soon'
    },
    {
      name: 'dashboard_page.modules.budget',
      description: 'dashboard_page.modules.budget_desc',
      icon: <DollarOutlined className="text-green-600" />,
      status: 'Coming Soon'
    },
    {
      name: 'dashboard_page.modules.drilling_yellow_sheet',
      description: 'dashboard_page.modules.drilling_yellow_sheet_desc',
      icon: <ToolOutlined className="text-yellow-600" />,
      status: 'Developing'
    },
    {
      name: 'dashboard_page.modules.engineer_management',
      description: 'dashboard_page.modules.engineer_management_desc',
      icon: <TeamOutlined className="text-purple-600" />,
      status: 'Coming Soon'
    },
    {
      name: 'dashboard_page.modules.engineer_report_management',
      description: 'dashboard_page.modules.engineer_report_management_desc',
      icon: <FileTextOutlined className="text-indigo-600" />,
      status: 'Coming Soon'
    },
    {
      name: 'dashboard_page.modules.expense_reimbursement',
      description: 'dashboard_page.modules.expense_reimbursement_desc',
      icon: <CreditCardOutlined className="text-red-600" />,
      status: 'Coming Soon'
    },
    {
      name: 'dashboard_page.modules.general_affairs_management',
      description: 'dashboard_page.modules.general_affairs_management_desc',
      icon: <SettingOutlined className="text-gray-600" />,
      status: 'Coming Soon'
    },
    {
      name: 'dashboard_page.modules.instrument_calibration_management',
      description: 'dashboard_page.modules.instrument_calibration_management_desc',
      icon: <ExperimentOutlined className="text-teal-600" />,
      status: 'Coming Soon'
    },
    {
      name: 'dashboard_page.modules.machine_equipment_management',
      description: 'dashboard_page.modules.machine_equipment_management_desc',
      icon: <SettingFilled className="text-orange-600" />,
      status: 'Coming Soon'
    },
    {
      name: 'dashboard_page.modules.material_management',
      description: 'dashboard_page.modules.material_management_desc',
      icon: <InboxOutlined className="text-brown-600" />,
      status: 'Coming Soon'
    },
    {
      name: 'dashboard_page.modules.quality_control',
      description: 'dashboard_page.modules.quality_control_desc',
      icon: <CheckCircleOutlined className="text-green-600" />,
      status: 'Coming Soon'
    },
    {
      name: 'dashboard_page.modules.quality_inspection',
      description: 'dashboard_page.modules.quality_inspection_desc',
      icon: <EyeOutlined className="text-blue-600" />,
      status: 'Coming Soon'
    },
    {
      name: 'dashboard_page.modules.saling',
      description: 'dashboard_page.modules.saling_desc',
      icon: <ShoppingCartOutlined className="text-pink-600" />,
      status: 'Coming Soon'
    }
  ];

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

      {/* Available Systems Section */}
      <Row gutter={[24, 24]}>
        <Col xs={24}>
          <Card
            title={
              <div className="flex items-center">
                <GlobalOutlined className="mr-3 text-blue-600" />
                <span>{t('dashboard_page.available_systems')}</span>
              </div>
            }
            className="shadow-lg border-0"
            style={{ borderRadius: '12px' }}
          >
            <Row gutter={[16, 16]}>
              {systemModules.map((module, index) => (
                <Col xs={24} sm={12} md={8} lg={6} key={index}>
                  <div className="p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors cursor-pointer border border-gray-200 hover:border-blue-300">
                    <div className="flex items-center mb-2">
                      {module.icon}
                      <span className="ml-2 font-medium text-gray-800">{t(module.name)}</span>
                    </div>
                    <div className="text-xs text-gray-500">
                      {t(module.description)}
                    </div>
                    {/* minimal */}
                    <div className="mt-3">
                      {/* จุดสี */}
                      <Statistic
                        value={module.status}
                        valueStyle={{ color: module.status === 'Developing' ? '#faad14' : '#1890ff', fontSize: '12px' }}
                      />

                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </Card>
        </Col>
      </Row>


    </div>
  );
}

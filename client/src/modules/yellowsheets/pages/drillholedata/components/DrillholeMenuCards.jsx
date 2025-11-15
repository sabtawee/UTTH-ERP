import React from 'react';
import { Card, Row, Col, Button, Typography } from 'antd';
import { 
  PlusOutlined, 
  EditOutlined, 
  CheckCircleOutlined,
  DeleteOutlined
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const { Title, Paragraph } = Typography;

export default function DrillholeMenuCards() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const menuItems = [
    {
      key: 'add',
      title: t('yellowsheet.add_drillhole'),
      description: t('yellowsheet.add_drillhole_desc'),
      icon: <PlusOutlined style={{ fontSize: '48px', color: '#52c41a' }} />,
      color: '#52c41a',
      path: '/yellowsheets/yellowsheet/adddrillhole',
      gradient: 'linear-gradient(135deg, #52c41a, #73d13d)'
    },
    {
      key: 'edit',
      title: t('yellowsheet.edit_drillhole'),
      description: t('yellowsheet.edit_drillhole_desc'),
      icon: <EditOutlined style={{ fontSize: '48px', color: '#1890ff' }} />,
      color: '#1890ff',
      path: '/yellowsheets/yellowsheet/editdrillhole',
      gradient: 'linear-gradient(135deg, #1890ff, #40a9ff)'
    },
    {
      key: 'check',
      title: t('yellowsheet.check_drillhole'),
      description: t('yellowsheet.check_drillhole_desc'),
      icon: <CheckCircleOutlined style={{ fontSize: '48px', color: '#722ed1' }} />,
      color: '#722ed1',
      path: '/yellowsheets/yellowsheet/checkdrillhole',
      gradient: 'linear-gradient(135deg, #722ed1, #9254de)'
    },
    {
      key: 'delete',
      title: t('yellowsheet.delete_drillhole'),
      description: t('yellowsheet.delete_drillhole_desc'),
      icon: <DeleteOutlined style={{ fontSize: '48px', color: '#ff4d4f' }} />,
      color: '#ff4d4f',
      path: '/yellowsheets/yellowsheet/deletedrillhole',
      gradient: 'linear-gradient(135deg, #ff4d4f, #ff7875)'
    }
  ];

  const handleMenuClick = (path) => {
    navigate(path);
  };

  return (
    <Row gutter={[24, 24]} justify="center">
      {menuItems.map((item) => (
        <Col xs={24} sm={12} lg={6} key={item.key}>
          <Card
            hoverable
            className="h-full shadow-lg border-0 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
            style={{
              borderRadius: '16px',
              background: 'rgba(255,255,255,0.95)',
              backdropFilter: 'blur(10px)',
              cursor: 'pointer'
            }}
            onClick={() => handleMenuClick(item.path)}
          >
            <div className="text-center py-8">
              {/* Icon Section */}
              <div 
                className="mb-6 p-6 rounded-full inline-flex items-center justify-center"
                style={{
                  background: item.gradient,
                  boxShadow: `0 8px 32px ${item.color}30`
                }}
              >
                {React.cloneElement(item.icon, { 
                  style: { fontSize: '48px', color: 'white' } 
                })}
              </div>

              {/* Title */}
              <Title level={3} style={{ color: '#2c3e50', marginBottom: '12px' }}>
                {item.title}
              </Title>

              {/* Description */}
              <Paragraph 
                style={{ 
                  color: '#7f8c8d', 
                  fontSize: '16px',
                  lineHeight: '1.6',
                  marginBottom: '24px'
                }}
              >
                {item.description}
              </Paragraph>

              {/* Action Button */}
              <Button
                type="primary"
                size="large"
                style={{
                  background: item.gradient,
                  border: 'none',
                  borderRadius: '25px',
                  padding: '8px 32px',
                  height: 'auto',
                  fontWeight: '600',
                  boxShadow: `0 4px 16px ${item.color}40`
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  handleMenuClick(item.path);
                }}
              >
                {t('yellowsheet.get_started')}
              </Button>
            </div>
          </Card>
        </Col>
      ))}
    </Row>
  );
}
import React from 'react';
import { Card, Row, Col, Typography } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

const { Title, Text } = Typography;

export default function DrillholeNotice() {
  const { t } = useTranslation();

  return (
    <div className="mt-12">
      <Card 
        className="shadow-lg border-0"
        style={{
          borderRadius: '16px',
          background: 'rgba(255,255,255,0.9)',
          backdropFilter: 'blur(10px)'
        }}
      >
        <Row align="middle" gutter={[24, 24]}>
          <Col xs={24} md={4} className="text-center">
            <ExclamationCircleOutlined 
              style={{ 
                fontSize: '48px', 
                color: '#faad14',
                padding: '16px',
                background: 'rgba(250, 173, 20, 0.1)',
                borderRadius: '50%'
              }} 
            />
          </Col>
          <Col xs={24} md={20}>
            <Title level={4} style={{ color: '#2c3e50', marginBottom: '8px' }}>
              {t('yellowsheet.important_notice')}
            </Title>
            <Text style={{ color: '#7f8c8d', fontSize: '16px' }}>
              {t('yellowsheet.system_notice_desc')}
            </Text>
          </Col>
        </Row>
      </Card>
    </div>
  );
}
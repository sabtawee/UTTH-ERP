import React from 'react';
import { Card, Typography } from 'antd';
import { DatabaseOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

const { Title, Paragraph } = Typography;

export default function DrillholeHeader() {
  const { t } = useTranslation();

  return (
    <div className="mb-8">
      <Card 
        className="shadow-xl border-0"
        style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          borderRadius: '20px'
        }}
      >
        <div className="text-center text-white py-6">
          <DatabaseOutlined style={{ fontSize: '64px', marginBottom: '16px' }} />
          <Title level={1} style={{ color: 'white', marginBottom: '8px' }}>
            {t('yellowsheet.drillhole_data_management')}
          </Title>
          <Paragraph style={{ color: 'rgba(255,255,255,0.9)', fontSize: '18px', marginBottom: 0 }}>
            {t('yellowsheet.drillhole_management_desc')}
          </Paragraph>
        </div>
      </Card>
    </div>
  );
}
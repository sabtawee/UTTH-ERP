import React from 'react';
import { Card, Typography, Button } from 'antd';
import { SearchOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const { Title, Text } = Typography;

export default function SearchHeader() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <Card className="mb-6 shadow-lg border-0" style={{ borderRadius: '16px' }}>
      <div className="flex justify-between items-center">
        <div>
          <Title level={2} className="mb-2" style={{ color: '#13c2c2' }}>
            <SearchOutlined className="mr-3" />
            {t('yellowsheet.search_drillhole')}
          </Title>
          <Text type="secondary" style={{ fontSize: '16px' }}>
            {t('yellowsheet.search_drillhole_desc')}
          </Text>
        </div>
        <Button
          icon={<ArrowLeftOutlined />}
          onClick={() => navigate('/yellowsheets/yellowsheet')}
          size="large"
        >
          {t('yellowsheet.form.back')}
        </Button>
      </div>
    </Card>
  );
}
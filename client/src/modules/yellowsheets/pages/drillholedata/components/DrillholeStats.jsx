import React from 'react';
import { Card, Row, Col, Typography } from 'antd';
import { useTranslation } from 'react-i18next';

const { Text } = Typography;

export default function DrillholeStats({ statsData = {} }) {
  const { t } = useTranslation();

  const stats = [
    {
      key: 'total',
      label: t('yellowsheet.total_records'),
      value: statsData.total || 0,
      color: '#1890ff'
    },
    {
      key: 'pending',
      label: t('yellowsheet.pending_check'),
      value: statsData.pending || 0,
      color: '#faad14'
    },
    {
      key: 'completed',
      label: t('yellowsheet.completed'),
      value: statsData.completed || 0,
      color: '#52c41a'
    },
    {
      key: 'lastUpdated',
      label: t('yellowsheet.last_updated'),
      value: statsData.lastUpdated || '-',
      color: '#722ed1'
    }
  ];

  return (
    <div className="mt-8">
      <Row gutter={[16, 16]} justify="center">
        {stats.map((stat) => (
          <Col xs={12} sm={6} key={stat.key}>
            <Card className="text-center border-0 shadow-md" style={{ borderRadius: '12px' }}>
              <Text type="secondary">{stat.label}</Text>
              <div style={{ fontSize: '24px', fontWeight: 'bold', color: stat.color }}>
                {stat.value}
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
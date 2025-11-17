import React from 'react';
import { Card, Typography } from 'antd';
import { useTranslation } from 'react-i18next';

const { Title, Text } = Typography;

export default function ResultsHeader({ totalResults, selectedCount }) {
  const { t } = useTranslation();

  return (

        <div className="mb-4">
          <Title level={4} className="mb-0">
            {t('yellowsheet.form.search_results')}
          </Title>
          <Text type="secondary">
            {t('yellowsheet.form.found_records', {
              count: totalResults,
              selected: selectedCount
            })}
          </Text>
        </div>
  );
}
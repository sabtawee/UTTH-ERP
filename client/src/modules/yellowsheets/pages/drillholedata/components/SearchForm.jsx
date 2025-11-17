import React from 'react';
import { Card, Form, Row, Col, Input, Button, Space, Divider } from 'antd';
import { SearchOutlined, ClearOutlined, ReloadOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

export default function SearchForm({ form, onFinish, onReset, onReload, loading }) {
  const { t } = useTranslation();

  return (
    <Card className="mb-6 shadow-lg border-0" style={{ borderRadius: '16px' }}>
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        initialValues={{
          status: 'all',
          pageSize: 10
        }}
      >
        {/* Basic Search */}
        <Row gutter={[24, 16]}>
          <Col xs={24} sm={12} md={8}>
            <Form.Item
              name="partnum"
              label={t('yellowsheet.form.partnum')}
            >
              <Input
                placeholder={t('yellowsheet.placeholders.enter_partnum')}
                prefix={<SearchOutlined />}
              />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Form.Item
              name="revision"
              label={t('yellowsheet.form.revision')}
            >
              <Input
                placeholder={t('yellowsheet.placeholders.enter_revision')}
              />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Form.Item
              name="layer"
              label={t('yellowsheet.form.layer')}
            >
              <Input
                placeholder={t('yellowsheet.placeholders.enter_layer')}
              />
            </Form.Item>
          </Col>
        </Row>

        {/* Action Buttons */}
        <Divider />
        <Row gutter={[16, 16]} justify="space-between">
          <Col>
            <Space>
              <Button
                type="primary"
                htmlType="submit"
                icon={<SearchOutlined />}
                loading={loading}
                size="large"
              >
                {t('yellowsheet.form.search')}
              </Button>
              <Button
                icon={<ClearOutlined />}
                onClick={onReset}
                size="large"
              >
                {t('yellowsheet.form.reset')}
              </Button>
              <Button
                icon={<ReloadOutlined />}
                onClick={onReload}
                size="large"
              >
                {t('yellowsheet.actions.refresh')}
              </Button>
            </Space>
          </Col>
        </Row>
      </Form>
    </Card>
  );
}
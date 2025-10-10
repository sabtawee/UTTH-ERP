import React from 'react';
import { Card, Typography, Divider, Form, Switch, Button, Select, Input } from 'antd';
import { SettingOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;
const { Option } = Select;

export default function SettingsPage() {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 min-h-screen">
      {/* Header Section */}
      <div className="mb-6">
        <Title level={2} className="mb-2" style={{ color: '#1890ff' }}>
          <SettingOutlined className="mr-3" />
          System Settings
        </Title>
        <Text className="text-gray-600 text-lg">
          Configure system preferences and settings
        </Text>
      </div>

      {/* Settings Cards */}
      <div className="grid gap-6">
        {/* General Settings */}
        <Card
          title="General Settings"
          className="shadow-lg border-0"
          style={{ borderRadius: '12px' }}
        >
          <Form layout="vertical">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Form.Item label="System Name" name="systemName">
                <Input placeholder="UTTH MES" />
              </Form.Item>
              <Form.Item label="Language" name="language">
                <Select defaultValue="en">
                  <Option value="en">English</Option>
                  <Option value="th">ไทย (Thai)</Option>
                </Select>
              </Form.Item>
            </div>
          </Form>
        </Card>

        {/* Security Settings */}
        <Card
          title="Security Settings"
          className="shadow-lg border-0"
          style={{ borderRadius: '12px' }}
        >
          <Form layout="vertical">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <Text strong>Two-Factor Authentication</Text>
                  <br />
                  <Text type="secondary" className="text-sm">
                    Enable additional security for user accounts
                  </Text>
                </div>
                <Switch />
              </div>
              <Divider />
              <div className="flex justify-between items-center">
                <div>
                  <Text strong>Session Timeout</Text>
                  <br />
                  <Text type="secondary" className="text-sm">
                    Automatically log out inactive users
                  </Text>
                </div>
                <Switch defaultChecked />
              </div>
            </div>
          </Form>
        </Card>

        {/* Notification Settings */}
        <Card
          title="Notification Settings"
          className="shadow-lg border-0"
          style={{ borderRadius: '12px' }}
        >
          <Form layout="vertical">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <Text strong>Email Notifications</Text>
                  <br />
                  <Text type="secondary" className="text-sm">
                    Send notifications via email
                  </Text>
                </div>
                <Switch defaultChecked />
              </div>
              <Divider />
              <div className="flex justify-between items-center">
                <div>
                  <Text strong>Browser Notifications</Text>
                  <br />
                  <Text type="secondary" className="text-sm">
                    Show desktop notifications
                  </Text>
                </div>
                <Switch />
              </div>
            </div>
          </Form>
        </Card>

        {/* System Information */}
        <Card
          title="System Information"
          className="shadow-lg border-0"
          style={{ borderRadius: '12px' }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Text type="secondary">Version:</Text>
              <br />
              <Text strong>1.0.0</Text>
            </div>
            <div>
              <Text type="secondary">Environment:</Text>
              <br />
              <Text strong>Production</Text>
            </div>
            <div>
              <Text type="secondary">Last Updated:</Text>
              <br />
              <Text strong>2025-08-01</Text>
            </div>
            <div>
              <Text type="secondary">Database:</Text>
              <br />
              <Text strong>Connected</Text>
            </div>
          </div>
        </Card>

        {/* Save Button */}
        <div className="text-center">
          <Button
            type="primary"
            size="large"
            style={{
              background: 'linear-gradient(45deg, #1890ff, #722ed1)',
              border: 'none',
              borderRadius: '8px',
              minWidth: '150px'
            }}
          >
            Save Settings
          </Button>
        </div>
      </div>
    </div>
  );
}

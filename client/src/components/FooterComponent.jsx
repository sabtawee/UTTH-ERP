import React from 'react';
import { Layout, Typography, Divider } from 'antd';
import {
  CopyrightOutlined,
  HeartFilled,
  GlobalOutlined,
} from '@ant-design/icons';

const { Footer } = Layout;
const { Text } = Typography;

export default function FooterComponent() {
  return (
    <Footer
      style={{
        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 250, 252, 0.95) 100%)',
        backdropFilter: 'blur(10px)',
        borderTop: '1px solid rgba(0, 0, 0, 0.06)',
        boxShadow: '0 -4px 20px rgba(0, 0, 0, 0.05)',
        padding: '24px 50px',
      }}
    >
      <div className="max-w-full mx-auto">
       
        {/* Copyright Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
          <div className="flex items-center space-x-1 text-sm text-gray-600">
            <CopyrightOutlined />
            <Text type="secondary">
              2025 UTTH-ERP. All rights reserved.
            </Text>
          </div>
          
          <div className="flex items-center space-x-1 text-sm text-gray-600">
            <Text type="secondary">Made with</Text>
            <HeartFilled className="text-red-500 text-xs" />
            <Text type="secondary">by Development Team</Text>
          </div>
        </div>
      </div>
    </Footer>
  );
}

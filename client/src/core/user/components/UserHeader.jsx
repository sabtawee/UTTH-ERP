import { Row, Col, Typography, Space, Tooltip, Badge, Button, message } from 'antd';
import {
  UserOutlined,
  ExportOutlined,
  ReloadOutlined,
  UserAddOutlined,
} from '@ant-design/icons';

const { Title, Text } = Typography;

export default function UserHeader({ filteredUsers, onRefresh, onCreateUser }) {
  return (
    <div className="mb-6">
      <Row justify="space-between" align="middle">
        <Col>
          <Title level={2} className="mb-2" style={{ color: "#1890ff" }}>
            <UserOutlined className="mr-3" />
            User Management
          </Title>
          <Text type="secondary" style={{ fontSize: "16px" }}>
            Manage user data and assign roles in the Manufacturing Execution
            System
          </Text>
        </Col>
        <Col>
          <Space size="middle">
            <Tooltip title="Export Data">
              <Badge count={filteredUsers.length} showZero>
                <Button
                  icon={<ExportOutlined />}
                  onClick={() => message.info("This feature will be developed in the future")}
                >
                  Export
                </Button>
              </Badge>
            </Tooltip>
            <Tooltip title="Refresh Data">
              <Button
                icon={<ReloadOutlined />}
                onClick={() => {
                  onRefresh();
                  message.success("Data refreshed");
                }}
              />
            </Tooltip>
            <Button
              type="primary"
              size="large"
              icon={<UserAddOutlined />}
              onClick={onCreateUser}
              style={{
                background: "linear-gradient(45deg, #1890ff, #722ed1)",
                border: "none",
                borderRadius: "8px",
                boxShadow: "0 4px 12px rgba(24, 144, 255, 0.3)",
              }}
            >
              Add New User
            </Button>
          </Space>
        </Col>
      </Row>
    </div>
  );
}

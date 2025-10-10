import { Drawer, Card, Avatar, Typography, Tag, Badge, Row, Col, Space } from 'antd';
import {
  EyeOutlined,
  UserOutlined,
  TeamOutlined,
  IdcardOutlined,
  SafetyCertificateOutlined,
  LockOutlined,
} from '@ant-design/icons';

const { Title, Text, Paragraph } = Typography;

export default function UserDetailDrawer({
  open,
  onClose,
  selectedUser
}) {
  if (!selectedUser) return null;

  const getUserStatus = (user) => {
    return user.status || "active";
  };

  const getAvatarColor = (userId) => {
    const colors = [
      "#1890ff",
      "#52c41a",
      "#faad14",
      "#f5222d",
      "#722ed1",
      "#13c2c2",
    ];
    return colors[userId % colors.length];
  };

  const getRoleColor = (roleName) => {
    const colors = {
      SuperAdmin: "red",
      Admin: "orange",
      Manager: "blue",
      User: "green",
      Viewer: "default",
    };
    return colors[roleName] || "purple";
  };

  return (
    <Drawer
      title={
        <div style={{ textAlign: "center" }}>
          <EyeOutlined style={{ color: "#1890ff", marginRight: "8px" }} />
          User Details
        </div>
      }
      open={open}
      onClose={onClose}
      width={600}
    >
      <div>
        <Card className="mb-4" style={{ textAlign: "center" }}>
          <Avatar
            size={80}
            style={{ backgroundColor: getAvatarColor(selectedUser.id) }}
            icon={<UserOutlined />}
          >
            {selectedUser.fullName?.charAt(0)?.toUpperCase()}
          </Avatar>
          <Title level={3} className="mt-3 mb-1">
            {selectedUser.fullName}
          </Title>
          <Text type="secondary">{selectedUser.email}</Text>
          <div className="mt-3">
            <Badge
              status={
                getUserStatus(selectedUser) === "active"
                  ? "success"
                  : "error"
              }
              text={
                getUserStatus(selectedUser) === "active"
                  ? "Active"
                  : "Inactive"
              }
            />
          </div>
        </Card>

        <Card title="General Information" className="mb-4">
          <Row gutter={[16, 16]}>
            <Col span={12}>
              <div>
                <Text strong>Employee ID:</Text>
                <br />
                <Text code>{selectedUser.employeeId}</Text>
              </div>
            </Col>
            <Col span={12}>
              <div>
                <Text strong>Department:</Text>
                <br />
                <Tag icon={<TeamOutlined />} color="blue">
                  {selectedUser.department}
                </Tag>
              </div>
            </Col>
            <Col span={12}>
              <div>
                <Text strong>Position:</Text>
                <br />
                <Text>{selectedUser.position || "Not specified"}</Text>
              </div>
            </Col>
            <Col span={12}>
              <div>
                <Text strong>Phone:</Text>
                <br />
                <Text>{selectedUser.phone || "Not specified"}</Text>
              </div>
            </Col>
          </Row>
        </Card>

        <Card title="System Roles">
          <Space wrap>
            {selectedUser.roles?.map((r) => (
              <Tag
                key={r.role.id}
                color={getRoleColor(r.role.name)}
                icon={<SafetyCertificateOutlined />}
                style={{ padding: "4px 8px", fontSize: "14px" }}
              >
                {r.role.name}
              </Tag>
            ))}
            {(!selectedUser.roles || selectedUser.roles.length === 0) && (
              <Tag color="default" icon={<LockOutlined />}>
                No Roles
              </Tag>
            )}
          </Space>

          {selectedUser.notes && (
            <div className="mt-4">
              <Text strong>Notes:</Text>
              <Paragraph>{selectedUser.notes}</Paragraph>
            </div>
          )}
        </Card>
      </div>
    </Drawer>
  );
}

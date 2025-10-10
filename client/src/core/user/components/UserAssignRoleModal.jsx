import { Modal, Divider, Typography, Checkbox, Card, Tag, Space } from 'antd';
import { SafetyCertificateOutlined } from '@ant-design/icons';

const { Text } = Typography;

export default function UserAssignRoleModal({
  open,
  onOk,
  onCancel,
  loading,
  roles,
  selectedRoleIds,
  setSelectedRoleIds
}) {
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
    <Modal
      title={
        <div style={{ textAlign: "center" }}>
          <SafetyCertificateOutlined
            style={{ color: "#1890ff", marginRight: "8px" }}
          />
          Assign User Roles
        </div>
      }
      open={open}
      onOk={onOk}
      onCancel={onCancel}
      confirmLoading={loading}
      okText="Save"
      cancelText="Cancel"
      width={500}
    >
      <Divider />
      <div className="mb-4">
        <Text strong>Select roles for this user:</Text>
      </div>
      <Space direction="vertical" size="middle" style={{ width: '100%' }}>
        {roles.map((r) => (
          <Card key={r.id} size="small" hoverable>
            <Checkbox 
              checked={selectedRoleIds.includes(r.id)}
              onChange={(e) => {
                if (e.target.checked) {
                  setSelectedRoleIds([...selectedRoleIds, r.id]);
                } else {
                  setSelectedRoleIds(selectedRoleIds.filter(id => id !== r.id));
                }
              }}
              style={{ width: "100%" }}
            >
              <div className="flex justify-between items-center">
                <div>
                  <Tag
                    color={getRoleColor(r.name)}
                    style={{ marginRight: "8px" }}
                  >
                    {r.name}
                  </Tag>
                  <Text type="secondary" style={{ fontSize: "12px" }}>
                    {r.description || "No description"}
                  </Text>
                </div>
                <SafetyCertificateOutlined style={{ color: "#1890ff" }} />
              </div>
            </Checkbox>
          </Card>
        ))}
      </Space>
    </Modal>
  );
}

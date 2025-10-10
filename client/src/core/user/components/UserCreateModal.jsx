import { Modal, Divider, Form, Row, Col, Input, Select } from 'antd';
import {
  UserAddOutlined,
  UserOutlined,
  MailOutlined,
  LockOutlined,
  IdcardOutlined,
  TeamOutlined,
} from '@ant-design/icons';

const { Option } = Select;

export default function UserCreateModal({
  open,
  onOk,
  onCancel,
  loading,
  form,
  uniqueDepartments
}) {
  return (
    <Modal
      title={
        <div style={{ textAlign: "center" }}>
          <UserAddOutlined style={{ color: "#52c41a", marginRight: "8px" }} />
          Add New User
        </div>
      }
      open={open}
      onCancel={() => {
        onCancel();
        form.resetFields();
      }}
      onOk={onOk}
      confirmLoading={loading}
      okText="Create User"
      cancelText="Cancel"
      width={700}
    >
      <Divider />
      <Form layout="vertical" form={form}>
        <Row gutter={[16, 0]}>
          <Col xs={24} md={12}>
            <Form.Item
              label="Full Name"
              name="fullName"
              rules={[{ required: true, message: "Please enter full name" }]}
            >
              <Input
                prefix={<UserOutlined />}
                placeholder="e.g. Mr. John Doe"
              />
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  type: "email",
                  message: "Please enter a valid email",
                },
              ]}
            >
              <Input
                prefix={<MailOutlined />}
                placeholder="example@company.com"
              />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={[16, 0]}>
          <Col xs={24} md={12}>
            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please enter password" },
                { min: 6, message: "Password must be at least 6 characters" },
              ]}
            >
              <Input.Password
                prefix={<LockOutlined />}
                placeholder="Password at least 6 characters"
              />
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item
              label="Employee ID"
              name="employeeId"
              rules={[{ required: true, message: "Please specify employee ID" }]}
            >
              <Input prefix={<IdcardOutlined />} placeholder="EMP001" />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={[16, 0]}>
          <Col xs={24} md={12}>
            <Form.Item
              label="Department"
              name="department"
              rules={[{ required: true, message: "Please specify department" }]}
            >
              <Select placeholder="Select Department" suffixIcon={<TeamOutlined />}>
                {uniqueDepartments.map((dept) => (
                  <Option key={dept} value={dept}>
                    {dept}
                  </Option>
                ))}
                <Option value="IT">IT</Option>
                <Option value="Production">Production</Option>
                <Option value="Quality">Quality</Option>
                <Option value="Maintenance">Maintenance</Option>
                <Option value="Planning">Planning</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Modal>
  );
}

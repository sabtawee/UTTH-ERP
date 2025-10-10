import { Modal, Divider, Form, Row, Col, Input } from 'antd';
import {
  EditOutlined,
  UserOutlined,
  MailOutlined,
  IdcardOutlined,
  TeamOutlined,
  PhoneOutlined,
} from '@ant-design/icons';

const { TextArea } = Input;

export default function UserEditModal({
  open,
  onOk,
  onCancel,
  loading,
  form
}) {
  return (
    <Modal
      title={
        <div style={{ textAlign: "center" }}>
          <EditOutlined style={{ color: "#1890ff", marginRight: "8px" }} />
          Edit User Information
        </div>
      }
      open={open}
      onCancel={() => {
        onCancel();
        form.resetFields();
      }}
      onOk={onOk}
      confirmLoading={loading}
      okText="Save Changes"
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
              <Input prefix={<UserOutlined />} />
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
              <Input prefix={<MailOutlined />} />
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
              <Input prefix={<TeamOutlined />} />
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item
              label="Employee ID"
              name="employeeId"
              rules={[{ required: true, message: "Please specify employee ID" }]}
            >
              <Input prefix={<IdcardOutlined />} />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={[16, 0]}>
          <Col xs={24} md={12}>
            <Form.Item label="Phone Number" name="phone">
              <Input prefix={<PhoneOutlined />} />
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item label="Position" name="position">
              <Input />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item label="Notes" name="notes">
          <TextArea rows={3} />
        </Form.Item>
      </Form>
    </Modal>
  );
}

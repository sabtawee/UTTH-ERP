import { Modal, Divider, Form, Row, Col, Input, Select, Alert } from 'antd';
import { PlusOutlined, SafetyCertificateOutlined } from '@ant-design/icons';

const { TextArea } = Input;

export default function RoleCreateModal({
  open,
  onOk,
  onCancel,
  loading,
  form
}) {
  return (
    <Modal
      title={
        <div style={{ textAlign: 'center' }}>
          <PlusOutlined style={{ color: '#52c41a', marginRight: '8px' }} />
          Create New Role
        </div>
      }
      open={open}
      onCancel={() => {
        onCancel();
        form.resetFields();
      }}
      onOk={onOk}
      confirmLoading={loading}
      okText="Create Role"
      cancelText="Cancel"
      width={600}
    >
      <Divider />
      <Form layout="vertical" form={form}>
        <Row gutter={[16, 0]}>
          <Col xs={24} md={12}>
            <Form.Item
              label="Role Name"
              name="name"
              rules={[
                { required: true, message: 'Please enter role name' },
                { min: 2, message: 'Role name must be at least 2 characters' }
              ]}
            >
              <Input 
                prefix={<SafetyCertificateOutlined />}
                placeholder="e.g. Manager, User, Admin"
              />
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item
              label="Role Level"
              name="level"
              initialValue="Normal"
            >
              <Select placeholder="Select role level">
                <Select.Option value="Highest">Highest (SuperAdmin)</Select.Option>
                <Select.Option value="High">High (Admin)</Select.Option>
                <Select.Option value="Medium">Medium (Manager)</Select.Option>
                <Select.Option value="Normal">Normal (User)</Select.Option>
                <Select.Option value="Read Only">Read Only (Viewer)</Select.Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
        
        <Form.Item 
          label="Description" 
          name="description"
          rules={[
            { max: 500, message: 'Description must not exceed 500 characters' }
          ]}
        >
          <TextArea 
            rows={3} 
            placeholder="Describe the duties and responsibilities of this role..."
          />
        </Form.Item>

        <Alert
          message="Note"
          description="After creating the role, you can assign access permissions in the next step"
          type="info"
          showIcon
          style={{ marginTop: '16px' }}
        />
      </Form>
    </Modal>
  );
}

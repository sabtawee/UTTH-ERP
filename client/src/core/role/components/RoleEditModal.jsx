import { Modal, Divider, Form, Input } from 'antd';
import { EditOutlined, SafetyCertificateOutlined } from '@ant-design/icons';

const { TextArea } = Input;

export default function RoleEditModal({
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
          <EditOutlined style={{ color: '#1890ff', marginRight: '8px' }} />
          Edit Role
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
      width={600}
    >
      <Divider />
      <Form layout="vertical" form={form}>
        <Form.Item
          label="Role Name"
          name="name"
          rules={[
            { required: true, message: 'Please enter role name' },
            { min: 2, message: 'Role name must be at least 2 characters' }
          ]}
        >
          <Input prefix={<SafetyCertificateOutlined />} />
        </Form.Item>
        
        <Form.Item label="Description" name="description">
          <TextArea rows={3} />
        </Form.Item>
      </Form>
    </Modal>
  );
}

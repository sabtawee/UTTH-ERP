import { Modal, Form, Row, Col, Input, Divider } from 'antd';
import { EditOutlined, AppstoreOutlined, KeyOutlined } from '@ant-design/icons';

const { TextArea } = Input;

export default function PermissionEditModal({
  open,
  loading,
  form,
  onOk,
  onCancel
}) {
  return (
    <Modal
      title={
        <div style={{ textAlign: 'center' }}>
          <EditOutlined style={{ color: '#1890ff', marginRight: '8px' }} />
          Edit Permission
        </div>
      }
      open={open}
      onCancel={onCancel}
      onOk={onOk}
      confirmLoading={loading}
      okText="Save Changes"
      cancelText="Cancel"
      width={600}
    >
      <Divider />
      <Form layout="vertical" form={form}>
        <Row gutter={[16, 0]}>
          <Col xs={24} md={12}>
            <Form.Item
              label="Module"
              name="module"
              rules={[
                { required: true, message: 'Please enter module name' },
                { min: 2, message: 'Module name must be at least 2 characters' }
              ]}
            >
              <Input prefix={<AppstoreOutlined />} />
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item
              label="Permission Name"
              name="name"
              rules={[
                { required: true, message: 'Please enter permission name' },
                { min: 2, message: 'Permission name must be at least 2 characters' }
              ]}
            >
              <Input prefix={<KeyOutlined />} />
            </Form.Item>
          </Col>
        </Row>
        
        <Form.Item label="Description" name="description">
          <TextArea rows={3} />
        </Form.Item>
      </Form>
    </Modal>
  );
}

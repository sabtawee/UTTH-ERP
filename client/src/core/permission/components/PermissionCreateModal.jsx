import { Modal, Form, Row, Col, Input, Select, Divider, Alert } from 'antd';
import { PlusOutlined, AppstoreOutlined, KeyOutlined } from '@ant-design/icons';

const { TextArea } = Input;

export default function PermissionCreateModal({
  open,
  loading,
  form,
  uniqueModules,
  getModuleConfig,
  onOk,
  onCancel
}) {
  return (
    <Modal
      title={
        <div style={{ textAlign: 'center' }}>
          <PlusOutlined style={{ color: '#52c41a', marginRight: '8px' }} />
          Create New Permission
        </div>
      }
      open={open}
      onOk={onOk}
      onCancel={onCancel}
      confirmLoading={loading}
      okText="Create Permission"
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
             {/* input */}
             <Input placeholder="Enter module name" />
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
              <Select
                placeholder="Select or type permission name"
                showSearch
                allowClear
                optionFilterProp="children"
                style={{ width: '100%' }}
              >
                <Select.Option value="view">view (View/Read)</Select.Option>
                <Select.Option value="create">create (Create)</Select.Option>
                <Select.Option value="edit">edit (Edit)</Select.Option>
                <Select.Option value="delete">delete (Delete)</Select.Option>
                <Select.Option value="update">update (Update)</Select.Option>
                <Select.Option value="manage">manage (Manage)</Select.Option>
                <Select.Option value="admin">admin (Admin)</Select.Option>
                <Select.Option value="approve">approve (Approve)</Select.Option>
                <Select.Option value="export">export (Export)</Select.Option>
                <Select.Option value="import">import (Import)</Select.Option>
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
            placeholder="Describe the details of this permission, e.g., can view all user data in the system..."
          />
        </Form.Item>

        <Alert
          message="Note"
          description="Created permissions must be assigned to roles before users can use them"
          type="info"
          showIcon
          style={{ marginTop: '16px' }}
        />
      </Form>
    </Modal>
  );
}

import { Modal, Form, Row, Col, Input, Select, Button } from "antd";
import { GlobalOutlined } from "@ant-design/icons";

const { Option } = Select;

export default function ProcessModal({
  open,
  editing,
  form,
  loading,
  onCancel,
  onSubmit
}) {
  return (
    <Modal
      title={
        <div className="flex items-center">
          <GlobalOutlined className="mr-2" />
          {editing ? "Edit Process" : "Add New Process"}
        </div>
      }
      open={open}
      onCancel={onCancel}
      footer={[
        <Button key="cancel" onClick={onCancel}>
          Cancel
        </Button>,
        <Button
          key="submit"
          type="primary"
          loading={loading}
          onClick={() => form.submit()}
        >
          {editing ? "Update" : "Create"}
        </Button>,
      ]}
      width={600}
    >
      <Form
        form={form}
        layout="vertical"
        onFinish={onSubmit}
        className="mt-4"
      >
        <Row gutter={[16, 0]}>
          <Col span={12}>
            <Form.Item
              name="code"
              label="Process Code"
              rules={[
                { required: true, message: "Please enter process code" },
                { min: 2, message: "Code must be at least 2 characters" },
              ]}
            >
              <Input placeholder="e.g., PROC001" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="isActive"
              label="Status"
              rules={[{ required: true, message: "Please select status" }]}
            >
              <Select placeholder="Select status">
                <Option value={true}>Active</Option>
                <Option value={false}>Inactive</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
        
        <Form.Item
          name="name"
          label="Process Name"
          rules={[
            { required: true, message: "Please enter process name" },
            { min: 3, message: "Name must be at least 3 characters" },
          ]}
        >
          <Input placeholder="Enter process name" />
        </Form.Item>

        <Form.Item
          name="description"
          label="Description"
          rules={[
            { required: true, message: "Please enter description" },
          ]}
        >
          <Input.TextArea
            rows={4}
            placeholder="Enter process description"
          />
        </Form.Item>
      </Form>
    </Modal>
  );
}

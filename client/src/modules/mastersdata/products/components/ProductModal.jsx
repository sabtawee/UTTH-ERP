import { Modal, Form, Input, Select, InputNumber, Button } from "antd";
import { useState, useEffect } from "react";

const { Option } = Select;
const { TextArea } = Input;

export default function ProductModal({
  visible,
  onCancel,
  onSubmit,
  editingProduct,
  loading
}) {
  const [form] = Form.useForm();

  const isEditing = !!editingProduct;

  // Reset form when modal opens/closes or when editingProduct changes
  useEffect(() => {
    if (visible) {
      if (editingProduct) {
        form.setFieldsValue({
          partNo: editingProduct.partNo,
          name: editingProduct.name,
          customer: editingProduct.customer,
          description: editingProduct.description,
          layerCount: editingProduct.layerCount,
          size: editingProduct.size,
          isActive: editingProduct.isActive
        });
      } else {
        form.resetFields();
        form.setFieldsValue({
          isActive: true
        });
      }
    }
  }, [visible, editingProduct, form]);

  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();
      await onSubmit(values);
      form.resetFields();
    } catch (error) {
      console.error("Form validation failed:", error);
    }
  };

  const handleCancel = () => {
    form.resetFields();
    onCancel();
  };

  return (
    <Modal
      title={isEditing ? "Edit Product" : "Add New Product"}
      open={visible}
      onCancel={handleCancel}
      footer={[
        <Button key="cancel" onClick={handleCancel}>
          Cancel
        </Button>,
        <Button
          key="submit"
          type="primary"
          loading={loading}
          onClick={handleSubmit}
        >
          {isEditing ? "Update" : "Create"}
        </Button>,
      ]}
      width={600}
      destroyOnClose
    >
      <Form
        form={form}
        layout="vertical"
      >
        <Form.Item
          label="Part Number"
          name="partNo"
          rules={[
            { required: true, message: "Please enter part number" },
            { pattern: /^[A-Z0-9-]+$/, message: "Part number must contain only uppercase letters, numbers, and hyphens" }
          ]}
        >
          <Input placeholder="e.g., PCB-001" />
        </Form.Item>

        <Form.Item
          label="Product Name"
          name="name"
          rules={[{ required: true, message: "Please enter product name" }]}
        >
          <Input placeholder="Enter product name" />
        </Form.Item>

        <Form.Item
          label="Customer"
          name="customer"
        >
          <Input placeholder="Enter customer name" />
        </Form.Item>

        <Form.Item
          label="Description"
          name="description"
        >
          <TextArea rows={3} placeholder="Enter product description" />
        </Form.Item>

        <div className="grid grid-cols-2 gap-4">
          <Form.Item
            label="Layer Count"
            name="layerCount"
          >
            <InputNumber
              min={1}
              placeholder="Number of layers"
              className="w-full"
            />
          </Form.Item>

          <Form.Item
            label="Size"
            name="size"
          >
            <Input placeholder="e.g., 100x50mm" />
          </Form.Item>
        </div>

        <Form.Item
          label="Status"
          name="isActive"
          rules={[{ required: true, message: "Please select status" }]}
        >
          <Select>
            <Option value={true}>Active</Option>
            <Option value={false}>Inactive</Option>
          </Select>
        </Form.Item>
      </Form>
    </Modal>
  );
}

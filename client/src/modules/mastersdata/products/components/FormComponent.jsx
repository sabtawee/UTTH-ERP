import { Form, Input, InputNumber } from 'antd';

export default function FormComponent({ form, initialValues }) {
  return (
    <Form form={form} layout="vertical" initialValues={initialValues}>
      <Form.Item name="partNo" label="Part No." rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="name" label="Product Name" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="customer" label="Customer">
        <Input />
      </Form.Item>
      <Form.Item name="layerCount" label="Layer Count">
        <InputNumber className="w-full" min={1} />
      </Form.Item>
      <Form.Item name="size" label="Size (e.g. 18x24)">
        <Input />
      </Form.Item>
      <Form.Item name="description" label="Description">
        <Input.TextArea rows={2} />
      </Form.Item>
    </Form>
  );
}

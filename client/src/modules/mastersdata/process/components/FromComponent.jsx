import { Form, Input, InputNumber } from 'antd';

export default function FormComponent({ form, initialValues }) {
  return (
    <Form form={form} layout="vertical" initialValues={initialValues}>
      <Form.Item name="name" label="Process Name" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="code" label="Code">
        <Input />
      </Form.Item>
      <Form.Item name="sequence" label="Sequence" rules={[{ required: true }]}>
        <InputNumber min={1} className="w-full" />
      </Form.Item>
    </Form>
  );
}

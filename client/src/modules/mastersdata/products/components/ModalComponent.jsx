import { Modal } from 'antd';
import FormComponent from './FormComponent';

export default function ModalComponent({ open, onCancel, onOk, form, initialValues }) {
  return (
    <Modal
      title={initialValues ? "Edit Product" : "Add Product"}
      open={open}
      onCancel={onCancel}
      onOk={() => form.submit()}
    >
      <FormComponent form={form} initialValues={initialValues} />
    </Modal>
  );
}

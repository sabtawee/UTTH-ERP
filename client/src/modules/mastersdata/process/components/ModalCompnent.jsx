import { Modal } from 'antd';
import FormComponent from './FromComponent';

export default function ModalComponent({ open, onCancel, onOk, form, initialValues }) {
  return (
    <Modal
      title={initialValues ? "Edit Process" : "Add Process"}
      open={open}
      onCancel={onCancel}
      onOk={() => form.submit()}
    >
      <FormComponent form={form} initialValues={initialValues} />
    </Modal>
  );
}

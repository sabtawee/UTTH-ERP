import React, { useState } from 'react';
import {
  Form,
  Input,
  Select,
  InputNumber,
  Button,
  Card,
  Row,
  Col,
  Typography,
  Divider,
  Space,
  Table,
  Switch,
  DatePicker,
  message,
  Steps,
  Checkbox
} from 'antd';
import {
  SaveOutlined,
  PlusOutlined,
  DeleteOutlined,
  ArrowLeftOutlined,
  CheckCircleOutlined,
  FormOutlined,
  DatabaseOutlined
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const { Title, Text } = Typography;
const { Option } = Select;
const { TextArea } = Input;
const { Step } = Steps;

export default function AdddrillholePage() {
  const [form] = Form.useForm();
  const [workOrderForm] = Form.useForm();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [currentStep, setCurrentStep] = useState(0);
  const [yellowFormData, setYellowFormData] = useState([]);
  const [workOrderData, setWorkOrderData] = useState([]);
  const [loading, setLoading] = useState(false);

  // Yellow Form Drilling Data columns
  const yellowFormColumns = [
    {
      title: t('yellowsheet.form.number'),
      dataIndex: 'number',
      key: 'number',
      width: 80,
      render: (_, __, index) => index + 1
    },
    {
      title: t('yellowsheet.form.hole_diameter'),
      dataIndex: 'holeDiameter',
      key: 'holeDiameter',
      width: 120,
      render: (text, record, index) => (
        <InputNumber
          size="small"
          value={text}
          onChange={(value) => updateYellowFormData(index, 'holeDiameter', value)}
          precision={2}
          style={{ width: '100%' }}
        />
      )
    },
    {
      title: t('yellowsheet.form.number_holes'),
      dataIndex: 'numberHoles',
      key: 'numberHoles',
      width: 100,
      render: (text, record, index) => (
        <InputNumber
          size="small"
          value={text}
          onChange={(value) => updateYellowFormData(index, 'numberHoles', value)}
          min={1}
          style={{ width: '100%' }}
        />
      )
    }
  ];

  // Work Order Drilling Data columns
  const workOrderColumns = [
    {
      title: t('yellowsheet.form.process_code'),
      dataIndex: 'processCode',
      key: 'processCode',
      width: 120,
      render: (text, record, index) => (
        <Input
          size="small"
          value={text}
          onChange={(e) => updateWorkOrderData(index, 'processCode', e.target.value)}
          style={{ width: '100%' }}
        />
      )
    },
    {
      title: t('yellowsheet.form.complete_aperture'),
      dataIndex: 'completeAperture',
      key: 'completeAperture',
      width: 120,
      render: (text, record, index) => (
        <InputNumber
          size="small"
          value={text}
          onChange={(value) => updateWorkOrderData(index, 'completeAperture', value)}
          precision={2}
          style={{ width: '100%' }}
        />
      )
    },
    {
      title: t('yellowsheet.form.hole_diameter'),
      dataIndex: 'holeDiameter',
      key: 'holeDiameter',
      width: 120,
      render: (text, record, index) => (
        <InputNumber
          size="small"
          value={text}
          onChange={(value) => updateWorkOrderData(index, 'holeDiameter', value)}
          precision={2}
          style={{ width: '100%' }}
        />
      )
    },
    {
      title: t('yellowsheet.form.number_holes'),
      dataIndex: 'numberHoles',
      key: 'numberHoles',
      width: 100,
      render: (text, record, index) => (
        <InputNumber
          size="small"
          value={text}
          onChange={(value) => updateWorkOrderData(index, 'numberHoles', value)}
          min={1}
          style={{ width: '100%' }}
        />
      )
    },
    {
      title: t('yellowsheet.form.pth'),
      dataIndex: 'pth',
      key: 'pth',
      width: 100,
      render: (text, record, index) => (
        <Checkbox
          checked={text}
          onChange={(e) => updateWorkOrderData(index, 'pth', e.target.checked)}
        />
      )
    },
    {
      title: t('yellowsheet.form.laser_drilling'),
      dataIndex: 'laserDrilling',
      key: 'laserDrilling',
      width: 100,
      render: (text, record, index) => (
        <Checkbox
          checked={text}
          onChange={(e) => updateWorkOrderData(index, 'laserDrilling', e.target.checked)}
        />
      )
    },
    {
      title: t('yellowsheet.form.slot_cutter'),
      dataIndex: 'slotCutter',
      key: 'slotCutter',
      width: 100,
      render: (text, record, index) => (
        <Checkbox
          checked={text}
          onChange={(e) => updateWorkOrderData(index, 'slotCutter', e.target.checked)}
        />
      )
    },
    {
      title: t('yellowsheet.form.connect_hole'),
      dataIndex: 'connectHole',
      key: 'connectHole',
      width: 100,
      render: (text, record, index) => (
        <Checkbox
          checked={text}
          onChange={(e) => updateWorkOrderData(index, 'connectHole', e.target.checked)}
        />
      )
    },
    {
      title: t('yellowsheet.form.slow'),
      dataIndex: 'slow',
      key: 'slow',
      width: 80,
      render: (text, record, index) => (
        <Checkbox
          checked={text}
          onChange={(e) => updateWorkOrderData(index, 'slow', e.target.checked)}
        />
      )
    },
    {
      title: t('yellowsheet.form.slot_length'),
      dataIndex: 'slotLength',
      key: 'slotLength',
      width: 100,
      render: (text, record, index) => (
        <InputNumber
          size="small"
          value={text}
          onChange={(value) => updateWorkOrderData(index, 'slotLength', value)}
          precision={2}
          style={{ width: '100%' }}
        />
      )
    },
    {
      title: t('yellowsheet.form.offset'),
      dataIndex: 'offset',
      key: 'offset',
      width: 100,
      render: (text, record, index) => (
        <InputNumber
          size="small"
          value={text}
          onChange={(value) => updateWorkOrderData(index, 'offset', value)}
          precision={2}
          style={{ width: '100%' }}
        />
      )
    }
  ];

  const updateYellowFormData = (index, field, value) => {
    const newData = [...yellowFormData];
    newData[index] = { ...newData[index], [field]: value };
    setYellowFormData(newData);
  };

  const updateWorkOrderData = (index, field, value) => {
    const newData = [...workOrderData];
    newData[index] = { ...newData[index], [field]: value };
    setWorkOrderData(newData);
  };

  const addYellowFormRow = () => {
    setYellowFormData([
      ...yellowFormData,
      {
        key: yellowFormData.length,
        holeDiameter: null,
        numberHoles: null
      }
    ]);
  };

  const addWorkOrderRow = () => {
    setWorkOrderData([
      ...workOrderData,
      {
        key: workOrderData.length,
        processCode: '',
        completeAperture: null,
        holeDiameter: null,
        numberHoles: null,
        pth: false,
        laserDrilling: false,
        slotCutter: false,
        connectHole: false,
        slow: false,
        slotLength: null,
        offset: null
      }
    ]);
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const mainFormValues = await form.validateFields();
      
      // Combine all data
      const submitData = {
        ...mainFormValues,
        yellowFormData,
        workOrderData,
        status: 'draft',
        createdAt: new Date().toISOString()
      };

      console.log('Submit Data:', submitData);
      
      // TODO: Call API to save data
      // await saveDrillholeData(submitData);
      
      message.success(t('yellowsheet.messages.saved_successfully'));
      navigate('/yellowsheets/yellowsheet');
    } catch (error) {
      message.error(t('yellowsheet.messages.save_failed'));
    } finally {
      setLoading(false);
    }
  };

  const steps = [
    {
      title: t('yellowsheet.steps.basic_info'),
      icon: <FormOutlined />
    },
    {
      title: t('yellowsheet.steps.drilling_data'),
      icon: <DatabaseOutlined />
    },
    {
      title: t('yellowsheet.steps.review'),
      icon: <CheckCircleOutlined />
    }
  ];

  const renderBasicInfoStep = () => (
    <Row gutter={[24, 24]}>
      {/* Left Column */}
      <Col xs={24} lg={12}>
        <Card title={t('yellowsheet.form.general_info')} className="h-full">
          <Form.Item
            name="partnum"
            label={t('yellowsheet.form.partnum')}
            rules={[{ required: true, message: t('yellowsheet.validation.partnum_required') }]}
          >
            <Input placeholder={t('yellowsheet.placeholders.enter_partnum')} />
          </Form.Item>

          <Form.Item
            name="forew"
            label={t('yellowsheet.form.forew')}
          >
            <Input placeholder={t('yellowsheet.placeholders.enter_forew')} />
          </Form.Item>

          <Form.Item
            name="layer"
            label={t('yellowsheet.form.layer')}
          >
            <Select placeholder={t('yellowsheet.placeholders.select_layer')}>
              <Option value="1">Layer 1</Option>
              <Option value="2">Layer 2</Option>
              <Option value="4">Layer 4</Option>
              <Option value="6">Layer 6</Option>
              <Option value="8">Layer 8</Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="customer"
            label={t('yellowsheet.form.customer')}
            rules={[{ required: true, message: t('yellowsheet.validation.customer_required') }]}
          >
            <Input placeholder={t('yellowsheet.placeholders.enter_customer')} />
          </Form.Item>

          <Form.Item
            name="customerPartnum"
            label={t('yellowsheet.form.customer_partnum')}
          >
            <Input placeholder={t('yellowsheet.placeholders.enter_customer_partnum')} />
          </Form.Item>
        </Card>
      </Col>

      {/* Right Column */}
      <Col xs={24} lg={12}>
        <Card title={t('yellowsheet.form.technical_info')} className="h-full">
          <Form.Item
            name="type"
            label={t('yellowsheet.form.type')}
          >
            <Input placeholder={t('yellowsheet.placeholders.enter_type')} />
          </Form.Item>

          <Form.Item
            name="version"
            label={t('yellowsheet.form.version')}
          >
            <Input placeholder={t('yellowsheet.placeholders.enter_version')} />
          </Form.Item>

          <Form.Item
            name="singleLayout"
            label={t('yellowsheet.form.single_layout')}
            valuePropName="checked"
          >
            <Switch />
          </Form.Item>

          <Form.Item
            name="cuttingSize"
            label={t('yellowsheet.form.cutting_size')}
          >
            <Select placeholder={t('yellowsheet.placeholders.select_cutting_size')}>
              <Option value="small">Small</Option>
              <Option value="medium">Medium</Option>
              <Option value="large">Large</Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="useNewG93Prog"
            label={t('yellowsheet.form.use_new_g93_prog')}
            valuePropName="checked"
          >
            <Switch />
          </Form.Item>
        </Card>
      </Col>

      {/* Full Width Cards */}
      <Col xs={24}>
        <Card title={t('yellowsheet.form.program_info')}>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={8}>
              <Form.Item
                name="program"
                label={t('yellowsheet.form.program')}
              >
                <Input placeholder={t('yellowsheet.placeholders.enter_program')} />
              </Form.Item>
            </Col>
            <Col xs={24} sm={8}>
              <Form.Item
                name="mhHole"
                label={t('yellowsheet.form.mh_hole')}
              >
                <InputNumber
                  placeholder={t('yellowsheet.placeholders.enter_mh_hole')}
                  style={{ width: '100%' }}
                  precision={2}
                />
              </Form.Item>
            </Col>
            <Col xs={24} sm={8}>
              <Form.Item
                name="zeroPoint"
                label={t('yellowsheet.form.zero_point')}
              >
                <Input placeholder={t('yellowsheet.placeholders.enter_zero_point')} />
              </Form.Item>
            </Col>
          </Row>
        </Card>
      </Col>

      <Col xs={24}>
        <Card title={t('yellowsheet.form.remarks_status')}>
          <Form.Item
            name="remarks"
            label={t('yellowsheet.form.remarks')}
          >
            <TextArea
              rows={3}
              placeholder={t('yellowsheet.placeholders.enter_remarks')}
            />
          </Form.Item>

          <Row gutter={[16, 16]}>
            <Col xs={24} sm={6}>
              <Form.Item
                name="status"
                label={t('yellowsheet.form.status')}
                initialValue="in_progress"
              >
                <Select>
                  <Option value="in_progress">{t('yellowsheet.status.in_progress')}</Option>
                  <Option value="completed">{t('yellowsheet.status.completed')}</Option>
                  <Option value="on_hold">{t('yellowsheet.status.on_hold')}</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col xs={24} sm={6}>
              <Form.Item
                name="creator"
                label={t('yellowsheet.form.creator')}
                initialValue="25029"
              >
                <Input disabled />
              </Form.Item>
            </Col>
            <Col xs={24} sm={6}>
              <Form.Item
                name="verifier"
                label={t('yellowsheet.form.verifier')}
              >
                <Input placeholder={t('yellowsheet.placeholders.enter_verifier')} />
              </Form.Item>
            </Col>
            <Col xs={24} sm={6}>
              <Form.Item
                name="reviewer"
                label={t('yellowsheet.form.reviewer')}
              >
                <Input placeholder={t('yellowsheet.placeholders.enter_reviewer')} />
              </Form.Item>
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  );

  const renderDrillingDataStep = () => (
    <Row gutter={[24, 24]}>
      <Col xs={24}>
        <Card 
          title={
            <div className="flex justify-between items-center">
              <span>{t('yellowsheet.form.yellow_form_drilling_data')}</span>
              <Button 
                type="dashed" 
                icon={<PlusOutlined />} 
                onClick={addYellowFormRow}
                size="small"
              >
                {t('yellowsheet.form.add_row')}
              </Button>
            </div>
          }
        >
          <Table
            dataSource={yellowFormData}
            columns={yellowFormColumns}
            pagination={false}
            size="small"
            scroll={{ x: true }}
            locale={{ emptyText: t('yellowsheet.form.no_data') }}
          />
        </Card>
      </Col>

      <Col xs={24}>
        <Card 
          title={
            <div className="flex justify-between items-center">
              <span>{t('yellowsheet.form.work_order_drilling_data')}</span>
              <Button 
                type="dashed" 
                icon={<PlusOutlined />} 
                onClick={addWorkOrderRow}
                size="small"
              >
                {t('yellowsheet.form.add_row')}
              </Button>
            </div>
          }
        >
          <Table
            dataSource={workOrderData}
            columns={workOrderColumns}
            pagination={false}
            size="small"
            scroll={{ x: true }}
            locale={{ emptyText: t('yellowsheet.form.no_data') }}
          />
        </Card>
      </Col>

      <Col xs={24}>
        <Card title={t('yellowsheet.form.process_notes')}>
          <Form.Item
            name="processNotes"
            label={t('yellowsheet.form.notes')}
          >
            <TextArea
              rows={4}
              placeholder={t('yellowsheet.placeholders.enter_process_notes')}
            />
          </Form.Item>
        </Card>
      </Col>
    </Row>
  );

  const renderReviewStep = () => (
    <Row gutter={[24, 24]}>
      <Col xs={24}>
        <Card title={t('yellowsheet.form.review_data')}>
          <Text type="secondary">
            {t('yellowsheet.form.review_description')}
          </Text>
          <Divider />
          
          {/* Summary of entered data */}
          <div className="space-y-4">
            <div>
              <Text strong>{t('yellowsheet.form.yellow_form_rows')}: </Text>
              <Text>{yellowFormData.length}</Text>
            </div>
            <div>
              <Text strong>{t('yellowsheet.form.work_order_rows')}: </Text>
              <Text>{workOrderData.length}</Text>
            </div>
          </div>
        </Card>
      </Col>
    </Row>
  );

  return (
    <div className="min-h-screen p-6">
      {/* Header */}
      <Card className="mb-6 shadow-lg border-0" style={{ borderRadius: '16px' }}>
        <div className="flex justify-between items-center">
          <div>
            <Title level={2} className="mb-2" style={{ color: '#1890ff' }}>
              <FormOutlined className="mr-3" />
              {t('yellowsheet.add_drillhole')}
            </Title>
            <Text type="secondary" style={{ fontSize: '16px' }}>
              {t('yellowsheet.add_drillhole_desc')}
            </Text>
          </div>
          <Button
            icon={<ArrowLeftOutlined />}
            onClick={() => navigate('/yellowsheets/yellowsheet')}
            size="large"
          >
            {t('yellowsheet.form.back')}
          </Button>
        </div>
      </Card>

      {/* Steps */}
      <Card className="mb-6 shadow-lg border-0" style={{ borderRadius: '16px' }}>
        <Steps current={currentStep} size="small">
          {steps.map((step, index) => (
            <Step key={index} title={step.title} icon={step.icon} />
          ))}
        </Steps>
      </Card>

      {/* Form Content */}
      <Form
        form={form}
        layout="vertical"
        onFinish={handleSubmit}
        initialValues={{
          status: 'in_progress',
          creator: '25029',
          singleLayout: false,
          useNewG93Prog: false
        }}
      >
        <Card className="shadow-lg border-0" style={{ borderRadius: '16px' }}>
          {currentStep === 0 && renderBasicInfoStep()}
          {currentStep === 1 && renderDrillingDataStep()}
          {currentStep === 2 && renderReviewStep()}
        </Card>

        {/* Action Buttons */}
        <Card className="mt-6 shadow-lg border-0" style={{ borderRadius: '16px' }}>
          <div className="flex justify-between">
            <Space>
              {currentStep > 0 && (
                <Button
                  onClick={() => setCurrentStep(currentStep - 1)}
                  size="large"
                >
                  {t('yellowsheet.form.previous')}
                </Button>
              )}
            </Space>
            <Space>
              {currentStep < steps.length - 1 ? (
                <Button
                  type="primary"
                  onClick={() => setCurrentStep(currentStep + 1)}
                  size="large"
                >
                  {t('yellowsheet.form.next')}
                </Button>
              ) : (
                <Button
                  type="primary"
                  htmlType="submit"
                  loading={loading}
                  icon={<SaveOutlined />}
                  size="large"
                >
                  {t('yellowsheet.form.save')}
                </Button>
              )}
            </Space>
          </div>
        </Card>
      </Form>
    </div>
  );
}

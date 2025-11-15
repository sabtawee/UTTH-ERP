import React, { useState, useEffect } from 'react';
import {
  Tabs,
  Card,
  Form,
  Input,
  Select,
  InputNumber,
  Button,
  Table,
  Typography,
  Row,
  Col,
  Space,
  Checkbox,
  Switch,
  message,
  Alert,
  Spin,
  Tag,
  Tooltip,
  Empty
} from 'antd';
import {
  SaveOutlined,
  EditOutlined,
  CheckCircleOutlined,
  InfoCircleOutlined,
  TableOutlined,
  SearchOutlined,
  ArrowLeftOutlined,
  ReloadOutlined,
  ExportOutlined,
  LoadingOutlined
} from '@ant-design/icons';
import { useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const { Title, Text } = Typography;
const { Option } = Select;
const { TextArea } = Input;

export default function EditdrillholePage() {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const { id } = useParams();
  const { t } = useTranslation();
  
  // State management
  const [activeTab, setActiveTab] = useState('detailed');
  const [loading, setLoading] = useState(false);
  const [pageLoading, setPageLoading] = useState(true);
  const [drillData, setDrillData] = useState([]);
  const [browseData, setBrowseData] = useState([]);
  const [checkData, setCheckData] = useState([]);
  const [drillholeInfo, setDrillholeInfo] = useState(null);

  // Load data from API
  useEffect(() => {
    loadDrillholeData();
  }, [id]);

  const loadDrillholeData = async () => {
    try {
      setPageLoading(true);
      
      // TODO: Replace with actual API calls
      // const response = await fetch(`/api/yellowsheet/drillhole/${id}`);
      // const data = await response.json();
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // This will be replaced with actual API data
      console.log('Loading drillhole data for ID:', id);
      
      // Set empty initial state - data will come from API
      setDrillholeInfo(null);
      setDrillData([]);
      setBrowseData([]);
      setCheckData([]);
      
    } catch (error) {
      console.error('Error loading drillhole data:', error);
      message.error(t('yellowsheet.messages.load_failed'));
    } finally {
      setPageLoading(false);
    }
  };

  const handleSave = async () => {
    try {
      setLoading(true);
      const values = await form.validateFields();
      
      // TODO: Replace with actual API call
      // const response = await fetch(`/api/yellowsheet/drillhole/${id}`, {
      //   method: 'PUT',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(values)
      // });
      
      console.log('Saving drillhole data:', values);
      message.success(t('yellowsheet.messages.saved_successfully'));
      
    } catch (error) {
      console.error('Error saving drillhole data:', error);
      message.error(t('yellowsheet.messages.save_failed'));
    } finally {
      setLoading(false);
    }
  };

  const handleRefresh = () => {
    loadDrillholeData();
  };

  // Yellow Form Drilling Data columns
  const yellowFormColumns = [
    {
      title: t('yellowsheet.form.number'),
      dataIndex: 'num',
      key: 'num',
      width: 80,
      render: (_, __, index) => index + 1
    },
    {
      title: t('yellowsheet.form.hole_diameter'),
      dataIndex: 'holeDiameter',
      key: 'holeDiameter',
      width: 150,
      render: (text) => text ? `${text} mm` : '-'
    },
    {
      title: t('yellowsheet.form.number_holes'),
      dataIndex: 'numberOfHoles',
      key: 'numberOfHoles',
      width: 120,
      render: (text) => text || '-'
    }
  ];

  // Work Order Drilling Data columns
  const workOrderColumns = [
    {
      title: t('yellowsheet.form.number'),
      dataIndex: 'num',
      key: 'num',
      width: 60,
      render: (_, __, index) => index + 1
    },
    {
      title: t('yellowsheet.form.process_code'),
      dataIndex: 'processCode',
      key: 'processCode',
      width: 100
    },
    {
      title: t('yellowsheet.form.complete_aperture'),
      dataIndex: 'completeAperture',
      key: 'completeAperture',
      width: 120,
      render: (text) => text ? `${text} mm` : '-'
    },
    {
      title: t('yellowsheet.form.hole_diameter'),
      dataIndex: 'holeDiameter',
      key: 'holeDiameter',
      width: 120,
      render: (text) => text ? `${text} mm` : '-'
    },
    {
      title: t('yellowsheet.form.number_holes'),
      dataIndex: 'numberOfHoles',
      key: 'numberOfHoles',
      width: 120
    },
    {
      title: t('yellowsheet.form.pth'),
      dataIndex: 'pth',
      key: 'pth',
      width: 80,
      render: (checked) => <Checkbox checked={checked} disabled />
    },
    {
      title: t('yellowsheet.form.laser_drilling'),
      dataIndex: 'laserDrilling',
      key: 'laserDrilling',
      width: 120,
      render: (checked) => <Checkbox checked={checked} disabled />
    },
    {
      title: t('yellowsheet.form.slot_cutter'),
      dataIndex: 'slotCutter',
      key: 'slotCutter',
      width: 100,
      render: (checked) => <Checkbox checked={checked} disabled />
    },
    {
      title: t('yellowsheet.form.connect_hole'),
      dataIndex: 'connectHole',
      key: 'connectHole',
      width: 120,
      render: (checked) => <Checkbox checked={checked} disabled />
    },
    {
      title: t('yellowsheet.form.slow'),
      dataIndex: 'slow',
      key: 'slow',
      width: 80,
      render: (checked) => <Checkbox checked={checked} disabled />
    },
    {
      title: t('yellowsheet.form.slot_length'),
      dataIndex: 'slotLength',
      key: 'slotLength',
      width: 100,
      render: (text) => text ? `${text} mm` : '-'
    },
    {
      title: t('yellowsheet.form.offset'),
      dataIndex: 'offset',
      key: 'offset',
      width: 100,
      render: (text) => text ? `${text} mm` : '-'
    }
  ];

  // Browse Data columns
  const browseColumns = [
    {
      title: t('yellowsheet.form.partnum'),
      dataIndex: 'partnum',
      key: 'partnum',
      width: 100,
      fixed: 'left'
    },
    {
      title: t('yellowsheet.form.forew'),
      dataIndex: 'foreword',
      key: 'foreword',
      width: 80
    },
    {
      title: t('yellowsheet.form.layer'),
      dataIndex: 'layer',
      key: 'layer',
      width: 80
    },
    {
      title: t('yellowsheet.form.type'),
      dataIndex: 'type',
      key: 'type',
      width: 80
    },
    {
      title: t('yellowsheet.form.version'),
      dataIndex: 'version',
      key: 'version',
      width: 80
    },
    {
      title: t('yellowsheet.form.status'),
      dataIndex: 'status',
      key: 'status',
      width: 100,
      render: (status) => {
        const color = status === 'OPEN' ? 'green' : status === 'CLOSED' ? 'red' : 'orange';
        return <Tag color={color}>{status}</Tag>;
      }
    },
    {
      title: t('yellowsheet.form.cutting_size'),
      dataIndex: 'cuttingSize',
      key: 'cuttingSize',
      width: 120
    },
    {
      title: t('yellowsheet.form.zero_point'),
      dataIndex: 'zeroPoint',
      key: 'zeroPoint',
      width: 120
    },
    {
      title: t('yellowsheet.form.remarks'),
      dataIndex: 'remarks',
      key: 'remarks',
      width: 200,
      fixed: 'right'
    }
  ];

  const renderDetailedInformation = () => (
    <div className="space-y-6">
      {/* Search Section */}
      <Card title={t('yellowsheet.form.search_data')} className="shadow-sm">
        <Row gutter={[16, 16]}>
          <Col xs={24} md={8}>
            <Input 
              placeholder={t('yellowsheet.search_placeholder')} 
              prefix={<SearchOutlined />}
              size="large"
            />
          </Col>
          <Col xs={24} md={16}>
            <Space>
              <Button 
                icon={<ReloadOutlined />}
                onClick={handleRefresh}
                size="large"
              >
                {t('yellowsheet.actions.refresh')}
              </Button>
              <Button 
                icon={<ExportOutlined />}
                size="large"
              >
                {t('yellowsheet.actions.export')}
              </Button>
              <Button 
                type="primary"
                icon={<SearchOutlined />}
                size="large"
              >
                {t('yellowsheet.form.search')}
              </Button>
            </Space>
          </Col>
        </Row>
      </Card>

      {/* Basic Information Section */}
      <Card title={t('yellowsheet.form.general_info')} className="shadow-sm">
        <Row gutter={[24, 16]}>
          <Col xs={24} sm={12} md={6}>
            <Form.Item
              name="partnum"
              label={t('yellowsheet.form.partnum')}
              rules={[{ required: true, message: t('yellowsheet.validation.partnum_required') }]}
            >
              <Input placeholder={t('yellowsheet.placeholders.enter_partnum')} />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <Form.Item 
              name="forew" 
              label={t('yellowsheet.form.forew')}
            >
              <Input placeholder={t('yellowsheet.placeholders.enter_forew')} />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={6}>
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
          </Col>
          <Col xs={24} sm={12} md={6}>
            <Form.Item 
              name="customer" 
              label={t('yellowsheet.form.customer')}
              rules={[{ required: true, message: t('yellowsheet.validation.customer_required') }]}
            >
              <Input placeholder={t('yellowsheet.placeholders.enter_customer')} />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={[24, 16]}>
          <Col xs={24} sm={12} md={6}>
            <Form.Item 
              name="type" 
              label={t('yellowsheet.form.type')}
            >
              <Input placeholder={t('yellowsheet.placeholders.enter_type')} />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <Form.Item 
              name="version" 
              label={t('yellowsheet.form.version')}
            >
              <Input placeholder={t('yellowsheet.placeholders.enter_version')} />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <Form.Item 
              name="singleLayout" 
              label={t('yellowsheet.form.single_layout')} 
              valuePropName="checked"
            >
              <Switch />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={6}>
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
          </Col>
        </Row>
      </Card>

      {/* Program Information */}
      <Card title={t('yellowsheet.form.program_info')} className="shadow-sm">
        <Row gutter={[24, 16]}>
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
        <Row gutter={[24, 16]}>
          <Col xs={24} sm={12}>
            <Form.Item 
              name="useNewG93Prog" 
              label={t('yellowsheet.form.use_new_g93_prog')} 
              valuePropName="checked"
            >
              <Switch />
            </Form.Item>
          </Col>
        </Row>
      </Card>

      {/* Status and Users */}
      <Card title={t('yellowsheet.form.remarks_status')} className="shadow-sm">
        <Row gutter={[24, 16]}>
          <Col xs={24} md={12}>
            <Form.Item 
              name="remarks" 
              label={t('yellowsheet.form.remarks')}
            >
              <TextArea 
                rows={3} 
                placeholder={t('yellowsheet.placeholders.enter_remarks')}
              />
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Row gutter={[16, 16]}>
              <Col xs={24} sm={12}>
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
              <Col xs={24} sm={12}>
                <Form.Item 
                  name="creator" 
                  label={t('yellowsheet.form.creator')}
                >
                  <Input disabled />
                </Form.Item>
              </Col>
              <Col xs={24} sm={12}>
                <Form.Item 
                  name="verifier" 
                  label={t('yellowsheet.form.verifier')}
                >
                  <Input placeholder={t('yellowsheet.placeholders.enter_verifier')} />
                </Form.Item>
              </Col>
              <Col xs={24} sm={12}>
                <Form.Item 
                  name="reviewer" 
                  label={t('yellowsheet.form.reviewer')}
                >
                  <Input placeholder={t('yellowsheet.placeholders.enter_reviewer')} />
                </Form.Item>
              </Col>
            </Row>
          </Col>
        </Row>
      </Card>

      {/* Process Notes */}
      <Card title={t('yellowsheet.form.process_notes')} className="shadow-sm">
        <Form.Item 
          name="processNotes" 
          label={t('yellowsheet.form.notes')}
        >
          <TextArea
            rows={3}
            placeholder={t('yellowsheet.placeholders.enter_process_notes')}
          />
        </Form.Item>
      </Card>

      {/* Drilling Data Tables */}
      <Row gutter={[24, 24]}>
        <Col xs={24} lg={12}>
          <Card title={t('yellowsheet.form.yellow_form_drilling_data')} className="shadow-sm">
            <Table
              dataSource={drillData}
              columns={yellowFormColumns}
              pagination={false}
              size="small"
              scroll={{ y: 300 }}
              locale={{ emptyText: t('yellowsheet.form.no_data') }}
            />
          </Card>
        </Col>
        <Col xs={24} lg={12}>
          <Card title={t('yellowsheet.form.work_order_drilling_data')} className="shadow-sm">
            <Table
              dataSource={[]}
              columns={workOrderColumns}
              pagination={false}
              size="small"
              scroll={{ x: true, y: 300 }}
              locale={{ emptyText: t('yellowsheet.form.no_data') }}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );

  const renderBrowseData = () => (
    <div className="space-y-4">
      <Card className="shadow-sm">
        <Table
          dataSource={browseData}
          columns={browseColumns}
          pagination={{ 
            pageSize: 10, 
            showSizeChanger: true,
            showTotal: (total, range) => 
              `${range[0]}-${range[1]} ${t('yellowsheet.form.of')} ${total} ${t('yellowsheet.form.items')}`
          }}
          size="small"
          scroll={{ x: 1500 }}
          bordered
          locale={{ emptyText: t('yellowsheet.form.no_data') }}
        />
      </Card>
    </div>
  );

  const renderMisCheck = () => (
    <div className="space-y-4">
      <Alert
        message={t('yellowsheet.form.quality_check')}
        description={t('yellowsheet.form.quality_check_desc')}
        type="info"
        showIcon
        className="mb-4"
      />
      <Card title={t('yellowsheet.form.validation_results')} className="shadow-sm">
        <Empty
          image={Empty.PRESENTED_IMAGE_SIMPLE}
          description={t('yellowsheet.form.no_validation_data')}
        />
      </Card>
    </div>
  );

  const tabItems = [
    {
      key: 'detailed',
      label: (
        <span>
          <InfoCircleOutlined />
          {t('yellowsheet.tabs.detailed_info')}
        </span>
      ),
      children: renderDetailedInformation()
    },
    {
      key: 'browse',
      label: (
        <span>
          <TableOutlined />
          {t('yellowsheet.tabs.browse_data')}
        </span>
      ),
      children: renderBrowseData()
    },
    {
      key: 'check',
      label: (
        <span>
          <CheckCircleOutlined />
          {t('yellowsheet.tabs.quality_check')}
        </span>
      ),
      children: renderMisCheck()
    }
  ];

  if (pageLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Spin 
          size="large" 
          indicator={<LoadingOutlined style={{ fontSize: 48 }} spin />}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <Card className="mb-6 shadow-lg border-0" style={{ borderRadius: '16px' }}>
        <div className="flex justify-between items-center">
          <div>
            <Title level={2} className="mb-2" style={{ color: '#1890ff' }}>
              <EditOutlined className="mr-3" />
              {t('yellowsheet.edit_drillhole')}
            </Title>
            <Text type="secondary" style={{ fontSize: '16px' }}>
              {t('yellowsheet.edit_drillhole_desc')}
            </Text>
          </div>
          <Space>
            <Button
              icon={<ArrowLeftOutlined />}
              onClick={() => navigate('/yellowsheets/yellowsheet')}
              size="large"
            >
              {t('yellowsheet.form.back')}
            </Button>
            <Button
              type="primary"
              icon={<SaveOutlined />}
              onClick={handleSave}
              loading={loading}
              size="large"
            >
              {t('yellowsheet.form.save')}
            </Button>
          </Space>
        </div>
      </Card>

      {/* Main Content with Tabs */}
      <Card className="shadow-lg border-0" style={{ borderRadius: '16px' }}>
        <Form
          form={form}
          layout="vertical"
          onFinish={handleSave}
        >
          <Tabs
            activeKey={activeTab}
            onChange={setActiveTab}
            size="large"
            items={tabItems}
            className="custom-tabs"
          />
        </Form>
      </Card>

      <style jsx>{`
        .custom-tabs .ant-tabs-tab {
          padding: 12px 24px;
          font-weight: 500;
        }
        .custom-tabs .ant-tabs-tab-active {
          border-radius: 8px 8px 0 0;
        }
      `}</style>
    </div>
  );
}

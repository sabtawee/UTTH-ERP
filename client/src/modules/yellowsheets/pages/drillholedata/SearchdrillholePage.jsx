import React, { useState, useEffect } from 'react';
import {
    Card,
    Form,
    Input,
    Select,
    Button,
    Table,
    Typography,
    Row,
    Col,
    Space,
    DatePicker,
    message,
    Tag,
    Tooltip,
    Empty,
    Divider,
    Collapse,
    Checkbox,
    InputNumber
} from 'antd';
import {
    SearchOutlined,
    FilterOutlined,
    ReloadOutlined,
    ExportOutlined,
    ArrowLeftOutlined,
    ClearOutlined,
    EyeOutlined,
    EditOutlined,
    DeleteOutlined,
    DownloadOutlined
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const { Title, Text } = Typography;
const { Option } = Select;
const { RangePicker } = DatePicker;
const { Panel } = Collapse;

export default function SearchdrillholePage() {
    const [form] = Form.useForm();
    const navigate = useNavigate();
    const { t } = useTranslation();

    // State management
    const [loading, setLoading] = useState(false);
    const [searchResults, setSearchResults] = useState([]);
    const [totalResults, setTotalResults] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const [advancedSearch, setAdvancedSearch] = useState(false);
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);

    useEffect(() => {
        // Load initial data or recent searches
        loadRecentData();
    }, []);

    const loadRecentData = async () => {
        try {
            setLoading(true);
            // TODO: Replace with actual API call
            // const response = await fetch('/api/yellowsheet/drillhole/recent');
            // const data = await response.json();

            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));

            // Mock data for demonstration
            const mockData = [
                {
                    key: '1',
                    partnum: 'T71K132',
                    revision: 'R1',
                    layer: '4',
                    layername: 'Layer 4',
                    type: 'G2',
                    version: 'R1',
                    status: 'completed',
                    creator: 'J1906',
                    createdDate: '2025-11-15',
                    totalHoles: 1205,
                    remarks: 'Production ready'
                },
                {
                    key: '2',
                    partnum: 'A58C188',
                    revision: 'R2',
                    layer: '6',
                    layername: 'Layer 6',
                    type: 'G1',
                    version: 'R2',
                    status: 'in_progress',
                    creator: '89928',
                    createdDate: '2025-11-14',
                    totalHoles: 987,
                    remarks: 'Under review'
                },
                {
                    key: '3',
                    partnum: 'B45M291',
                    revision: 'R1',
                    layer: '2',
                    layername: 'Layer 2',
                    type: 'G3',
                    version: 'R1',
                    status: 'on_hold',
                    creator: 'M2341',
                    createdDate: '2025-11-13',
                    totalHoles: 2341,
                    remarks: 'Waiting for approval'
                }
            ];

            setSearchResults(mockData);
            setTotalResults(mockData.length);

        } catch (error) {
            console.error('Error loading data:', error);
            message.error(t('yellowsheet.messages.load_failed'));
        } finally {
            setLoading(false);
        }
    };

    const handleSearch = async (values) => {
        try {
            setLoading(true);
            console.log('Search criteria:', values);

            // TODO: Replace with actual API call
            // const response = await fetch('/api/yellowsheet/drillhole/search', {
            //   method: 'POST',
            //   headers: { 'Content-Type': 'application/json' },
            //   body: JSON.stringify(values)
            // });

            // Simulate search with delay
            await new Promise(resolve => setTimeout(resolve, 1500));

            message.success(t('yellowsheet.messages.search_completed'));

        } catch (error) {
            console.error('Error searching:', error);
            message.error(t('yellowsheet.messages.search_failed'));
        } finally {
            setLoading(false);
        }
    };

    const handleReset = () => {
        form.resetFields();
        setSearchResults([]);
        setSelectedRowKeys([]);
        setCurrentPage(1);
        loadRecentData();
    };

    const handleExport = () => {
        if (selectedRowKeys.length === 0) {
            message.warning(t('yellowsheet.messages.select_records_to_export'));
            return;
        }

        console.log('Exporting records:', selectedRowKeys);
        message.success(t('yellowsheet.messages.export_started'));
    };

    const handleView = (record) => {
        navigate(`/yellowsheets/yellowsheet/view/${record.key}`);
    };

    const handleEdit = (record) => {
        navigate(`/yellowsheets/yellowsheet/editdrillhole/${record.key}`);
    };

    const handleDelete = (record) => {
        console.log('Delete record:', record);
        message.success(t('yellowsheet.messages.deleted_successfully'));
    };

    // Table columns
    const columns = [
        {
            title: t('yellowsheet.form.partnum'),
            dataIndex: 'partnum',
            key: 'partnum',
            width: 180,
            fixed: 'left',
            sorter: true,
        },
        {
            title: t('yellowsheet.form.revision'),
            dataIndex: 'revision',
            key: 'revision',
            width: 150,
            sorter: true,
        },
        {
            title: t('yellowsheet.form.layer'),
            dataIndex: 'layer',
            key: 'layer',
            width: 120,
            sorter: true,
        },
        {
            title: t('yellowsheet.form.layername'),
            dataIndex: 'layername',
            key: 'layername',
            width: 200,
            sorter: true,
        },
        {
            title: t('yellowsheet.form.type'),
            dataIndex: 'type',
            key: 'type',
            width: 80,
        },
        {
            title: t('yellowsheet.form.version'),
            dataIndex: 'version',
            key: 'version',
            width: 100,
        },
        {
            title: t('yellowsheet.form.status'),
            dataIndex: 'status',
            key: 'status',
            width: 120,
            render: (status) => {
                const colors = {
                    completed: 'green',
                    in_progress: 'blue',
                    on_hold: 'orange',
                    cancelled: 'red'
                };
                return (
                    <Tag color={colors[status] || 'default'}>
                        {t(`yellowsheet.status.${status}`)}
                    </Tag>
                );
            },
        },
        {
            title: t('yellowsheet.form.cuttingLength'),
            dataIndex: 'cuttingLength',
            key: 'cuttingLength',
            width: 220,
            sorter: true,
        },
        {
            title: t('yellowsheet.form.cuttingWidth'),
            dataIndex: 'cuttingWidth',
            key: 'cuttingWidth',
            width: 220,
            sorter: true,
        },
        {
            title: t('yellowsheet.form.MH-X1'),
            dataIndex: 'MH-X1',
            key: 'MH-X1',
            width: 120,
            sorter: true,
        },
        {
            title: t('yellowsheet.form.MH-Y1'),
            dataIndex: 'MH-Y1',
            key: 'MH-Y1',
            width: 120,
            sorter: true,
        },
        {
            title: t('yellowsheet.form.MH-X2'),
            dataIndex: 'MH-X2',
            key: 'MH-X2',
            width: 120,
            sorter: true,
        },
        {
            title: t('yellowsheet.form.MH-Y2'),
            dataIndex: 'MH-Y2',
            key: 'MH-Y2',
            width: 120,
            sorter: true,
        },
        {
            title: t('yellowsheet.form.MH-X3'),
            dataIndex: 'MH-X3',
            key: 'MH-X3',
            width: 120,
            sorter: true,
        },
        {
            title: t('yellowsheet.form.MH-Y3'),
            dataIndex: 'MH-Y3',
            key: 'MH-Y3',
            width: 120,
            sorter: true,
        },
        {
            title: t('yellowsheet.form.MH-X4'),
            dataIndex: 'MH-X4',
            key: 'MH-X4',
            width: 120,
            sorter: true,
        },
        {
            title: t('yellowsheet.form.MH-Y4'),
            dataIndex: 'MH-Y4',
            key: 'MH-Y4',
            width: 120,
            sorter: true,
        },
        {
            title: t('yellowsheet.form.MH-X5'),
            dataIndex: 'MH-X5',
            key: 'MH-X5',
            width: 120,
            sorter: true,
        },
        {
            title: t('yellowsheet.form.MH-Y5'),
            dataIndex: 'MH-Y5',
            key: 'MH-Y5',
            width: 120,
            sorter: true,
        },
        {
            title: t('yellowsheet.form.Zero-Point-X'),
            dataIndex: 'Zero-Point-X',
            key: 'Zero-Point-X',
            width: 130,
            sorter: true,
        },
        {
            title: t('yellowsheet.form.Zero-Point-Y'),
            dataIndex: 'Zero-Point-Y',
            key: 'Zero-Point-Y',
            width: 130,
            sorter: true,
        },
        {
            title: t('yellowsheet.form.Quadrant'),
            dataIndex: 'Quadrant',
            key: 'Quadrant',
            width: 150,
            sorter: true,
        },
        {
            title: t('yellowsheet.form.remarks'),
            dataIndex: 'remarks',
            key: 'remarks',
            width: 200,
            ellipsis: {
                showTitle: false,
            },
            render: (remarks) => (
                <Tooltip placement="topLeft" title={remarks}>
                    {remarks}
                </Tooltip>
            ),
        },
        {
            title: t('yellowsheet.form.actions'),
            key: 'actions',
            width: 150,
            fixed: 'right',
            render: (_, record) => (
                <Space size="small">
                    <Tooltip title={t('yellowsheet.form.view')}>
                        <Button
                            type="text"
                            icon={<EyeOutlined />}
                            onClick={() => handleView(record)}
                            size="small"
                        />
                    </Tooltip>
                    <Tooltip title={t('yellowsheet.form.edit')}>
                        <Button
                            type="text"
                            icon={<EditOutlined />}
                            onClick={() => handleEdit(record)}
                            size="small"
                        />
                    </Tooltip>
                    <Tooltip title={t('yellowsheet.form.delete')}>
                        <Button
                            type="text"
                            icon={<DeleteOutlined />}
                            onClick={() => handleDelete(record)}
                            danger
                            size="small"
                        />
                    </Tooltip>
                </Space>
            ),
        },
    ];

    const rowSelection = {
        selectedRowKeys,
        onChange: setSelectedRowKeys,
        selections: [
            Table.SELECTION_ALL,
            Table.SELECTION_INVERT,
            Table.SELECTION_NONE,
        ],
    };

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            {/* Header */}
            <Card className="mb-6 shadow-lg border-0" style={{ borderRadius: '16px' }}>
                <div className="flex justify-between items-center">
                    <div>
                        <Title level={2} className="mb-2" style={{ color: '#13c2c2' }}>
                            <SearchOutlined className="mr-3" />
                            {t('yellowsheet.search_drillhole')}
                        </Title>
                        <Text type="secondary" style={{ fontSize: '16px' }}>
                            {t('yellowsheet.search_drillhole_desc')}
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

            {/* Search Form */}
            <Card className="mb-6 shadow-lg border-0" style={{ borderRadius: '16px' }}>
                <Form
                    form={form}
                    layout="vertical"
                    onFinish={handleSearch}
                    initialValues={{
                        status: 'all',
                        pageSize: 10
                    }}
                >
                    {/* Basic Search */}
                    <Row gutter={[24, 16]}>
                        <Col xs={24} sm={12} md={8}>
                            <Form.Item
                                name="partnum"
                                label={t('yellowsheet.form.partnum')}
                            >
                                <Input
                                    placeholder={t('yellowsheet.placeholders.enter_partnum')}
                                    prefix={<SearchOutlined />}
                                />
                            </Form.Item>
                        </Col>
                        <Col xs={24} sm={12} md={8}>
                            <Form.Item
                                name="revision"
                                label={t('yellowsheet.form.revision')}
                            >
                                <Input
                                    placeholder={t('yellowsheet.placeholders.enter_revision')}
                                />
                            </Form.Item>
                        </Col>
                        <Col xs={24} sm={12} md={8}>
                            <Form.Item
                                name="layer"
                                label={t('yellowsheet.form.layer')}
                            >
                                <Input
                                    placeholder={t('yellowsheet.placeholders.enter_layer')}
                                />
                            </Form.Item>
                        </Col>
                    </Row>

                    {/* Action Buttons */}
                    <Divider />
                    <Row gutter={[16, 16]} justify="space-between">
                        <Col>
                            <Space>
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    icon={<SearchOutlined />}
                                    loading={loading}
                                    size="large"
                                >
                                    {t('yellowsheet.form.search')}
                                </Button>
                                <Button
                                    icon={<ClearOutlined />}
                                    onClick={handleReset}
                                    size="large"
                                >
                                    {t('yellowsheet.form.reset')}
                                </Button>
                                <Button
                                    icon={<ReloadOutlined />}
                                    onClick={loadRecentData}
                                    size="large"
                                >
                                    {t('yellowsheet.actions.refresh')}
                                </Button>
                            </Space>
                        </Col>
                        <Col>
                            <Space>
                                <Button
                                    icon={<ExportOutlined />}
                                    onClick={handleExport}
                                    disabled={selectedRowKeys.length === 0}
                                    size="large"
                                >
                                    {t('yellowsheet.actions.export')} ({selectedRowKeys.length})
                                </Button>
                            </Space>
                        </Col>
                    </Row>
                </Form>
            </Card>

            {/* Results Table */}
            <Card className="shadow-lg border-0" style={{ borderRadius: '16px' }}>
                <div className="mb-4 flex justify-between items-center">
                    <div>
                        <Title level={4} className="mb-0">
                            {t('yellowsheet.form.search_results')}
                        </Title>
                        <Text type="secondary">
                            {t('yellowsheet.form.found_records', {
                                count: totalResults,
                                selected: selectedRowKeys.length
                            })}
                        </Text>
                    </div>
                </div>

                <Table
                    rowSelection={rowSelection}
                    columns={columns}
                    dataSource={searchResults}
                    loading={loading}
                    scroll={{ x: 1500 }}
                    pagination={{
                        current: currentPage,
                        pageSize: pageSize,
                        total: totalResults,
                        showSizeChanger: true,
                        showQuickJumper: true,
                        showTotal: (total, range) =>
                            `${range[0]}-${range[1]} ${t('yellowsheet.actions.of')} ${total} ${t('yellowsheet.actions.items')}`,
                        onChange: (page, size) => {
                            setCurrentPage(page);
                            setPageSize(size);
                        },
                    }}
                    locale={{
                        emptyText: (
                            <Empty
                                image={Empty.PRESENTED_IMAGE_SIMPLE}
                                description={t('yellowsheet.form.no_search_results')}
                            />
                        ),
                    }}
                />
            </Card>
        </div>
    );
}

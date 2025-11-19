import React, { useState, useEffect } from 'react';
import {
    Form,
    Space,
    message,
    Tag,
    Tooltip,
    Button,
    Table,
    Card,
} from 'antd';
import {
    EyeOutlined,
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { funcSerachDrillholes } from '../../yellowsheet.api';

// Import components
import SearchHeader from './components/SearchHeader';
import SearchForm from './components/SearchForm';
import SearchResultsTable from './components/SearchResultsTable';
import ResultsHeader from './components/ResultsHeader';

export default function SearchdrillholePage() {
    const [form] = Form.useForm();
    const navigate = useNavigate();
    const { t } = useTranslation();

    const [loading, setLoading] = useState(false);
    const [searchResults, setSearchResults] = useState([]);
    const [totalResults, setTotalResults] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    useEffect(() => {
        loadRecentData();
    }, []);

    const loadRecentData = async () => {
        try {
            setLoading(true);
            setSearchResults([]);
            setTotalResults(0);
            await new Promise(resolve => setTimeout(resolve, 1000));
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
            const { partnum, revision, layer } = values;
            const results = await funcSerachDrillholes(partnum, revision, layer);
            setSearchResults(results.holeData);
            setTotalResults(results.holeData.length);
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
        navigate(`/yellowsheets/yellowsheet/view/${record.key}`, {
            state: { 
                fullRecord: record
             }
        });

    };


    // Table columns
    const columns = [
        {
            title: t('yellowsheet.form.partnum'),
            dataIndex: 'Partnum',
            key: 'Partnum',
            width: 180,
            fixed: 'left',
            sorter: true,
        },
        {
            title: t('yellowsheet.form.revision'),
            dataIndex: 'Foreword',
            key: 'Foreword',
            width: 150,
            sorter: true,
        },
        {
            title: t('yellowsheet.form.layer'),
            dataIndex: 'Layer',
            key: 'Layer',
            width: 120,
            sorter: true,
        },
        {
            title: t('yellowsheet.form.layername'),
            dataIndex: 'LayerName',
            key: 'LayerName',
            width: 200,
            sorter: true,
        },
        {
            title: t('yellowsheet.form.creator'),
            dataIndex: 'Creator',
            key: 'Creator',
            width: 200,
            sorter: true,
        },
        {
            title: t('yellowsheet.form.type'),
            dataIndex: 'Type',
            key: 'Type',
            width: 90,
        },
        {
            title: t('yellowsheet.form.version'),
            dataIndex: 'VERSION',
            key: 'VERSION',
            width: 100,
        },
        {
            title: t('yellowsheet.form.status'),
            dataIndex: 'status',
            key: 'status',
            width: 120,
            render: (status) => {
                const colors = {
                    "In progress": 'blue',
                    "SR": 'orange',
                    "On Hold": 'yellow',
                    "undefined": 'gray',
                    "OPEN": 'purple',
                    "CLOSED": 'green'
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
            dataIndex: 'QUADRANT',
            key: 'QUADRANT',
            width: 150,
            sorter: true,
        },
        {
            title: t('yellowsheet.form.remarks'),
            dataIndex: 'Remarks',
            key: 'Remarks',
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

    const handlePageChange = (page, size) => {
        setCurrentPage(page);
        setPageSize(size);
    };

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            {/* Header Component */}
            <SearchHeader />

            {/* Search Form Component */}
            <SearchForm
                form={form}
                onFinish={handleSearch}
                onReset={handleReset}
                onReload={loadRecentData}
                loading={loading}
            />
            <Card className="shadow-lg border-0 mb-4" style={{ borderRadius: '16px' }}>
                <div className="mb-4 justify-between items-center">

                    {/* Results Header Component */}
                    <ResultsHeader
                        totalResults={totalResults}
                        selectedCount={selectedRowKeys.length}
                    />

                    {/* Results Table Component */}
                    <SearchResultsTable
                        columns={columns}
                        dataSource={searchResults}
                        loading={loading}
                        rowSelection={rowSelection}
                        currentPage={currentPage}
                        pageSize={pageSize}
                        totalResults={totalResults}
                        onPageChange={handlePageChange}
                        onView={handleView}
                    />
                </div>
            </Card>
        </div>
    );
}

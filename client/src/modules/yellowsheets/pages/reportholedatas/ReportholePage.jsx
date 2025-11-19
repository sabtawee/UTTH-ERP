import React, { useState, useEffect } from 'react';
import { 
    Card, 
    Row, 
    Col, 
    Statistic, 
    Typography, 
    Button, 
    Space,
    Avatar,
    List,
    Progress,
    Tag,
    Divider,
    DatePicker,
    Select,
    Table,
    Badge,
    Tooltip,
    Empty,
    Timeline
} from 'antd';
import { 
    BarChartOutlined,
    FileTextOutlined,
    DownloadOutlined,
    PrinterOutlined,
    CalendarOutlined,
    DatabaseOutlined,
    TrophyOutlined,
    RiseOutlined,
    FallOutlined,
    UserOutlined,
    ClockCircleOutlined,
    CheckCircleOutlined,
    ExclamationCircleOutlined,
    SyncOutlined,
    EyeOutlined,
    FilterOutlined,
    ReloadOutlined
} from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const { Title, Text, Paragraph } = Typography;
const { RangePicker } = DatePicker;
const { Option } = Select;

export default function ReportholePage() {
    const { t } = useTranslation();
    const navigate = useNavigate();
    
    const [loading, setLoading] = useState(false);
    const [dateRange, setDateRange] = useState(null);
    const [selectedDepartment, setSelectedDepartment] = useState('all');
    const [reportData, setReportData] = useState({
        totalReports: 1245,
        completedReports: 892,
        pendingReports: 287,
        overdueReports: 66,
        monthlyGrowth: 12.5,
        averageProcessingTime: '2.3 days'
    });

    // Mock data for recent reports
    const recentReports = [
        {
            id: 'RPT-2024-001',
            title: 'PCB Drilling Analysis Report',
            type: 'Drilling Analysis',
            status: 'completed',
            createdBy: 'John Smith',
            createdAt: '2024-11-18',
            department: 'Production'
        },
        {
            id: 'RPT-2024-002',
            title: 'Monthly Quality Control Report',
            type: 'Quality Control',
            status: 'pending',
            createdBy: 'Sarah Wilson',
            createdAt: '2024-11-17',
            department: 'QC'
        },
        {
            id: 'RPT-2024-003',
            title: 'Drill Hole Data Summary',
            type: 'Data Summary',
            status: 'completed',
            createdBy: 'Mike Johnson',
            createdAt: '2024-11-16',
            department: 'Engineering'
        },
        {
            id: 'RPT-2024-004',
            title: 'Equipment Performance Report',
            type: 'Performance',
            status: 'overdue',
            createdBy: 'Lisa Chen',
            createdAt: '2024-11-15',
            department: 'Maintenance'
        }
    ];

    // Mock data for report categories
    const reportCategories = [
        {
            title: 'Drilling Reports',
            description: 'Comprehensive drilling data analysis and summaries',
            icon: <DatabaseOutlined />,
            count: 456,
            color: '#1890ff',
            route: '/yellowsheets/reports/drilling'
        },
        {
            title: 'Quality Control Reports',
            description: 'Quality assessment and control reports',
            icon: <CheckCircleOutlined />,
            count: 234,
            color: '#52c41a',
            route: '/yellowsheets/reports/quality'
        },
        {
            title: 'Performance Reports',
            description: 'Equipment and process performance analysis',
            icon: <TrophyOutlined />,
            count: 189,
            color: '#faad14',
            route: '/yellowsheets/reports/performance'
        },
        {
            title: 'Monthly Summaries',
            description: 'Monthly operation summaries and insights',
            icon: <CalendarOutlined />,
            count: 92,
            color: '#722ed1',
            route: '/yellowsheets/reports/monthly'
        },
        {
            title: 'Custom Reports',
            description: 'User-defined custom reports and analytics',
            icon: <FileTextOutlined />,
            count: 156,
            color: '#eb2f96',
            route: '/yellowsheets/reports/custom'
        },
        {
            title: 'Data Export',
            description: 'Export data in various formats',
            icon: <DownloadOutlined />,
            count: 318,
            color: '#13c2c2',
            route: '/yellowsheets/reports/export'
        }
    ];

    const getStatusColor = (status) => {
        switch (status) {
            case 'completed': return 'success';
            case 'pending': return 'processing';
            case 'overdue': return 'error';
            default: return 'default';
        }
    };

    const getStatusIcon = (status) => {
        switch (status) {
            case 'completed': return <CheckCircleOutlined />;
            case 'pending': return <SyncOutlined spin />;
            case 'overdue': return <ExclamationCircleOutlined />;
            default: return <ClockCircleOutlined />;
        }
    };

    const handleCategoryClick = (route) => {
        navigate(route);
    };

    const handleReportView = (reportId) => {
        navigate(`/yellowsheets/reports/view/${reportId}`);
    };

    const handleRefresh = () => {
        setLoading(true);
        // Simulate API call
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    };

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            {/* Header Section */}
            <Card className="mb-6 shadow-lg border-0" style={{ borderRadius: '16px' }}>
                <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-4">
                        <Avatar 
                            size={64} 
                            style={{ backgroundColor: '#1890ff' }}
                            icon={<BarChartOutlined />}
                        />
                        <div>
                            <Title level={2} className="mb-1" style={{ color: '#1890ff' }}>
                                <BarChartOutlined className="mr-3" />
                                {t('yellowsheet.reports_dashboard')}
                            </Title>
                            <Text type="secondary" style={{ fontSize: '16px' }}>
                                {t('yellowsheet.comprehensive_reporting_analytics')}
                            </Text>
                        </div>
                    </div>
                    <Space>
                        <RangePicker 
                            value={dateRange}
                            onChange={setDateRange}
                            style={{ width: 280 }}
                        />
                        <Select
                            value={selectedDepartment}
                            onChange={setSelectedDepartment}
                            style={{ width: 150 }}
                            placeholder={t('yellowsheet.select_department')}
                        >
                            <Option value="all">{t('yellowsheet.all_departments')}</Option>
                            <Option value="production">{t('yellowsheet.production')}</Option>
                            <Option value="qc">{t('yellowsheet.quality_control')}</Option>
                            <Option value="engineering">{t('yellowsheet.engineering')}</Option>
                            <Option value="maintenance">{t('yellowsheet.maintenance')}</Option>
                        </Select>
                        <Button 
                            icon={<FilterOutlined />}
                            size="large"
                        >
                            {t('yellowsheet.filter')}
                        </Button>
                        <Button 
                            icon={<ReloadOutlined />}
                            onClick={handleRefresh}
                            loading={loading}
                            size="large"
                        >
                            {t('yellowsheet.refresh')}
                        </Button>
                    </Space>
                </div>
            </Card>

            {/* Statistics Cards */}
            <Row gutter={[24, 24]} className="mb-6">
                <Col xs={24} sm={12} md={6}>
                    <Card className="text-center" style={{ borderRadius: '12px' }}>
                        <Statistic
                            title={t('yellowsheet.total_reports')}
                            value={reportData.totalReports}
                            prefix={<FileTextOutlined />}
                            valueStyle={{ color: '#1890ff' }}
                        />
                    </Card>
                </Col>
                <Col xs={24} sm={12} md={6}>
                    <Card className="text-center" style={{ borderRadius: '12px' }}>
                        <Statistic
                            title={t('yellowsheet.completed_reports')}
                            value={reportData.completedReports}
                            prefix={<CheckCircleOutlined />}
                            valueStyle={{ color: '#52c41a' }}
                        />
                        <Progress 
                            percent={Math.round((reportData.completedReports / reportData.totalReports) * 100)} 
                            size="small" 
                            showInfo={false}
                            strokeColor="#52c41a"
                        />
                    </Card>
                </Col>
                <Col xs={24} sm={12} md={6}>
                    <Card className="text-center" style={{ borderRadius: '12px' }}>
                        <Statistic
                            title={t('yellowsheet.pending_reports')}
                            value={reportData.pendingReports}
                            prefix={<SyncOutlined />}
                            valueStyle={{ color: '#faad14' }}
                        />
                    </Card>
                </Col>
                <Col xs={24} sm={12} md={6}>
                    <Card className="text-center" style={{ borderRadius: '12px' }}>
                        <Statistic
                            title={t('yellowsheet.overdue_reports')}
                            value={reportData.overdueReports}
                            prefix={<ExclamationCircleOutlined />}
                            valueStyle={{ color: '#ff4d4f' }}
                        />
                    </Card>
                </Col>
            </Row>

            <Row gutter={[24, 24]}>
                {/* Report Categories */}
                <Col xs={24} lg={16}>
                    <Card 
                        title={
                            <span>
                                <DatabaseOutlined className="mr-2" />
                                {t('yellowsheet.report_categories')}
                            </span>
                        }
                        style={{ borderRadius: '12px' }}
                        className="mb-6"
                    >
                        <Row gutter={[16, 16]}>
                            {reportCategories.map((category, index) => (
                                <Col xs={24} sm={12} key={index}>
                                    <Card
                                        hoverable
                                        className="h-full"
                                        style={{ 
                                            borderRadius: '8px',
                                            borderLeft: `4px solid ${category.color}`
                                        }}
                                        onClick={() => handleCategoryClick(category.route)}
                                    >
                                        <div className="flex items-start space-x-3">
                                            <Avatar 
                                                style={{ backgroundColor: category.color }}
                                                icon={category.icon}
                                            />
                                            <div className="flex-1">
                                                <div className="flex justify-between items-start mb-2">
                                                    <Title level={5} className="mb-1">
                                                        {category.title}
                                                    </Title>
                                                    <Badge 
                                                        count={category.count} 
                                                        style={{ backgroundColor: category.color }}
                                                    />
                                                </div>
                                                <Paragraph 
                                                    type="secondary" 
                                                    className="mb-0"
                                                    ellipsis={{ rows: 2 }}
                                                >
                                                    {category.description}
                                                </Paragraph>
                                            </div>
                                        </div>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </Card>
                </Col>

                {/* Recent Reports & Quick Stats */}
                <Col xs={24} lg={8}>
                    {/* Performance Metrics */}
                    <Card 
                        title={
                            <span>
                                <TrophyOutlined className="mr-2" />
                                {t('yellowsheet.performance_metrics')}
                            </span>
                        }
                        style={{ borderRadius: '12px' }}
                        className="mb-6"
                    >
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <Text>{t('yellowsheet.monthly_growth')}</Text>
                                <div className="flex items-center">
                                    <RiseOutlined style={{ color: '#52c41a', marginRight: 4 }} />
                                    <Text strong style={{ color: '#52c41a' }}>
                                        +{reportData.monthlyGrowth}%
                                    </Text>
                                </div>
                            </div>
                            <div className="flex justify-between items-center">
                                <Text>{t('yellowsheet.avg_processing_time')}</Text>
                                <Text strong>{reportData.averageProcessingTime}</Text>
                            </div>
                            <Progress 
                                percent={85} 
                                size="small" 
                                format={() => t('yellowsheet.efficiency')}
                                strokeColor="#1890ff"
                            />
                        </div>
                    </Card>

                    {/* Recent Reports */}
                    <Card 
                        title={
                            <span>
                                <ClockCircleOutlined className="mr-2" />
                                {t('yellowsheet.recent_reports')}
                            </span>
                        }
                        style={{ borderRadius: '12px' }}
                        extra={
                            <Button 
                                type="link" 
                                onClick={() => navigate('/yellowsheets/reports/all')}
                            >
                                {t('yellowsheet.view_all')}
                            </Button>
                        }
                    >
                        <List
                            dataSource={recentReports}
                            renderItem={item => (
                                <List.Item
                                    className="cursor-pointer hover:bg-gray-50 p-3 rounded"
                                    onClick={() => handleReportView(item.id)}
                                >
                                    <List.Item.Meta
                                        avatar={
                                            <Badge 
                                                status={getStatusColor(item.status)}
                                                dot
                                            >
                                                <Avatar 
                                                    style={{ backgroundColor: '#f0f0f0', color: '#666' }}
                                                    icon={getStatusIcon(item.status)}
                                                />
                                            </Badge>
                                        }
                                        title={
                                            <div className="flex justify-between items-start">
                                                <Text strong ellipsis style={{ maxWidth: 180 }}>
                                                    {item.title}
                                                </Text>
                                                <Tag color="blue" style={{ fontSize: '10px' }}>
                                                    {item.type}
                                                </Tag>
                                            </div>
                                        }
                                        description={
                                            <div>
                                                <div className="flex items-center text-xs text-gray-500 mb-1">
                                                    <UserOutlined className="mr-1" />
                                                    {item.createdBy}
                                                </div>
                                                <div className="flex justify-between items-center">
                                                    <Text type="secondary" style={{ fontSize: '11px' }}>
                                                        {item.createdAt}
                                                    </Text>
                                                    <Tag 
                                                        color={getStatusColor(item.status)}
                                                        style={{ fontSize: '10px', margin: 0 }}
                                                    >
                                                        {item.status}
                                                    </Tag>
                                                </div>
                                            </div>
                                        }
                                    />
                                </List.Item>
                            )}
                        />
                    </Card>
                </Col>
            </Row>

            {/* Quick Actions */}
            <Card 
                title={
                    <span>
                        <FileTextOutlined className="mr-2" />
                        {t('yellowsheet.quick_actions')}
                    </span>
                }
                style={{ borderRadius: '12px' }}
                className="mt-6"
            >
                <Row gutter={[16, 16]}>
                    <Col xs={24} sm={8}>
                        <Button 
                            type="primary" 
                            size="large" 
                            block
                            icon={<FileTextOutlined />}
                            onClick={() => navigate('/yellowsheets/reports/create')}
                        >
                            {t('yellowsheet.create_new_report')}
                        </Button>
                    </Col>
                    <Col xs={24} sm={8}>
                        <Button 
                            size="large" 
                            block
                            icon={<DownloadOutlined />}
                            onClick={() => navigate('/yellowsheets/reports/export')}
                        >
                            {t('yellowsheet.bulk_export')}
                        </Button>
                    </Col>
                    <Col xs={24} sm={8}>
                        <Button 
                            size="large" 
                            block
                            icon={<EyeOutlined />}
                            onClick={() => navigate('/yellowsheets/reports/analytics')}
                        >
                            {t('yellowsheet.view_analytics')}
                        </Button>
                    </Col>
                </Row>
            </Card>
        </div>
    );
}

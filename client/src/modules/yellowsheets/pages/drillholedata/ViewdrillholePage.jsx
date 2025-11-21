import React, { useState, useEffect } from 'react';
import {
    Tabs,
    Spin,
    Alert,
    message,
    Button,
    Modal
} from 'antd';
import { DatabaseOutlined, ToolOutlined, CalendarOutlined, EnvironmentOutlined } from '@ant-design/icons';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { funcGetDetailDrillhole, funcGenerateYellowsheetReport } from '../../yellowsheet.api';

// Import components
import ViewHeader from './components/view/ViewHeader';
import StatisticsCards from './components/view/StatisticsCards';
import ProductInfoCards from './components/view/ProductInfoCards';
import HoleDetailsTable from './components/view/HoleDetailsTable';
import WorkOrderTable from './components/view/WorkOrderTable';
import YellowDrillTable from './components/view/YellowDrillTable';
import CoordinatesTab from './components/view/CoordinatesTab';

const { TabPane } = Tabs;

export default function ViewdrillholePage() {
    const location = useLocation();
    const navigate = useNavigate();
    const { t } = useTranslation();

    const [loading, setLoading] = useState(false);
    const [drillholeData, setDrillholeData] = useState(null);
    const [holeDetails, setHoleDetails] = useState([]);
    const [basicInfo, setBasicInfo] = useState(null);
    const [workOrderData, setWorkOrderData] = useState([]);
    const [yellowDrillData, setYellowDrillData] = useState([]);
    const [error, setError] = useState(null);
    const [pdfPreviewVisible, setPdfPreviewVisible] = useState(false);
    const [pdfUrl, setPdfUrl] = useState('');


    useEffect(() => {
        const fetchData = async () => {
            if (location.state && location.state.fullRecord) {
                try {
                    setLoading(true);
                    setError(null);

                    const record = location.state.fullRecord;
                    const res = await funcGetDetailDrillhole(
                        record.Partnum,
                        record.Foreword,
                        record.Layer,
                        record.Type,
                        record.VERSION
                    );

                    console.log('Detailed drillhole data:', res.yellowdetaildata);
                    console.log('Work Order Data:', res.workorderdrilldata);
                    console.log('Yellow Drill Data:', res.yellowdrilldata);

                    setDrillholeData(record);
                    setHoleDetails(res.yellowdetaildata || []);
                    //setBasicInfo(res.dtldata?.[0] || null);
                    setBasicInfo(res.yellowdetail?.[0] || null);
                    setWorkOrderData(res.workorderdrilldata || []);
                    setYellowDrillData(res.yellowdrilldata || []);
                    console.log("===== FULL API RESPONSE =====");
                    console.log(JSON.stringify(res, null, 2));
                    console.log("🔥 res.yellowdetail:", res.yellowdetail);



                } catch (error) {
                    console.error('Error fetching drill hole details:', error);
                    setError(error.message || 'Failed to load drill hole data');
                } finally {
                    setLoading(false);
                }
            } else {
                setError('No drill hole data provided');
            }
        };


        fetchData();
    }, [location.state]);

    const handleBack = () => {
        navigate(-1);
    };

    const handlePrint = async () => {
        try {
            setLoading(true);
            message.loading({
                content: t('yellowsheet.generating_report'),
                key: 'generating',
                duration: 0
            });

            // 📄 Generate PDF report
            const reportBlob = await funcGenerateYellowsheetReport();
            
            // 🔗 Create object URL for the PDF
            const url = window.URL.createObjectURL(new Blob([reportBlob], { type: 'application/pdf' }));
            setPdfUrl(url);
            setPdfPreviewVisible(true);
            
            message.success({
                content: t('yellowsheet.report_generated_success'),
                key: 'generating'
            });
            
        } catch (error) {
            message.error({
                content: t('yellowsheet.report_generation_failed'),
                key: 'generating'
            });
            console.error('Error generating report:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleDownloadPdf = () => {
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = `yellowsheet_report_${drillholeData?.Partnum || 'unknown'}.pdf`;
        link.click();
    };

    const handleClosePdfPreview = () => {
        setPdfPreviewVisible(false);
        if (pdfUrl) {
            window.URL.revokeObjectURL(pdfUrl);
            setPdfUrl('');
        }
    };

    const handleEdit = () => {
        if (drillholeData) {
            navigate('/yellowsheets/yellowsheet/editdrillhole', {
                state: {
                    fullRecord: drillholeData,
                    fromView: true
                }
            });
        }
    };


    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <Spin size="large" tip={t('yellowsheet.loading')} />
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen bg-gray-50 p-6">
                <Alert
                    message={t('yellowsheet.error')}
                    description={error}
                    type="error"
                    showIcon
                    action={
                        <Button onClick={handleBack}>
                            {t('yellowsheet.form.back')}
                        </Button>
                    }
                />
            </div>
        );
    }

    if (!drillholeData) {
        return (
            <div className="min-h-screen bg-gray-50 p-6">
                <Alert
                    message={t('yellowsheet.no_data')}
                    description={t('yellowsheet.no_data_desc')}
                    type="warning"
                    showIcon
                    action={
                        <Button onClick={handleBack}>
                            {t('yellowsheet.form.back')}
                        </Button>
                    }
                />
            </div>
        );
    }

    // Calculate counts for statistics
    const holeDetailsCount = holeDetails?.length || 0;
    const workOrderCount = workOrderData?.length || 0;
    const yellowDrillCount = yellowDrillData?.length || 0;

    return (
        <div className="min-h-screen bg-gray-50 p-6">
             {/* PDF Preview Modal */}
            <Modal
                title={t('yellowsheet.pdf_preview')}
                open={pdfPreviewVisible}
                onCancel={handleClosePdfPreview}
                width="90%"
                style={{ top: 20 }}
                footer={[
                    <Button key="download" type="primary" onClick={handleDownloadPdf}>
                        📥 {t('yellowsheet.download_pdf')}
                    </Button>,
                    <Button key="close" onClick={handleClosePdfPreview}>
                        {t('yellowsheet.form.close')}
                    </Button>
                ]}
            >
                {pdfUrl && (
                    <iframe
                        src={pdfUrl}
                        style={{ width: '100%', height: '70vh', border: 'none' }}
                        title="PDF Preview"
                    />
                )}
            </Modal>
            {/* Header Section */}
            <ViewHeader
                drillholeData={drillholeData}
                // onBack={handleBack}
                // onEdit={handleEdit}
                onPrint={handlePrint}
            // onExport={handleExport}
            />

            <Tabs defaultActiveKey="1" size="large">
                {/* Basic Information Tab */}
                <TabPane
                    tab={
                        <span>
                            <DatabaseOutlined />
                            {t('yellowsheet.basic_info')}
                        </span>
                    }
                    key="1"
                >
                    {/* Product Information Cards */}
                    <ProductInfoCards
                        drillholeData={drillholeData}
                        basicInfo={basicInfo}
                    />
                </TabPane>

                {/* Basic Hole Data Tab */}
                {/* <TabPane 
                    tab={
                        <span>
                            <ToolOutlined />
                            {t('yellowsheet.hole_details')} ({holeDetailsCount})
                        </span>
                    } 
                    key="2"
                >
                    <HoleDetailsTable holeDetails={holeDetails} />
                </TabPane> */}

                {/* Work Order Drilling Data Tab */}
                <TabPane
                    tab={
                        <span>
                            <DatabaseOutlined />
                            {t('yellowsheet.form.work_order_drilling_data')} ({workOrderCount})
                        </span>
                    }
                    key="3"
                >
                    <WorkOrderTable workOrderData={workOrderData} />
                </TabPane>

                {/* Yellow Form Drilling Data Tab */}
                <TabPane
                    tab={
                        <span>
                            <CalendarOutlined />
                            {t('yellowsheet.form.yellow_form_drilling_data')} ({yellowDrillCount})
                        </span>
                    }
                    key="4"
                >
                    <YellowDrillTable yellowDrillData={yellowDrillData} />
                </TabPane>

                {/* Coordinates Tab */}
                {/* <TabPane 
                    tab={
                        <span>
                            <EnvironmentOutlined />
                            {t('yellowsheet.coordinates')}
                        </span>
                    } 
                    key="5"
                >
                    <CoordinatesTab drillholeData={drillholeData} />
                </TabPane> */}
            </Tabs>
        </div>
    );
}

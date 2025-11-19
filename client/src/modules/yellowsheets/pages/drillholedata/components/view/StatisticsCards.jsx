import React from 'react';
import { Row, Col, Card, Statistic } from 'antd';
import { 
    ToolOutlined,
    DatabaseOutlined,
    CalendarOutlined,
    CheckCircleOutlined
} from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

export default function StatisticsCards({ 
    holeDetailsCount,
    workOrderCount,
    yellowDrillCount,
    drillholeData,
    basicInfo 
}) {
    const { t } = useTranslation();

    return (
        <Row gutter={[24, 24]}>
            <Col xs={24} sm={12} md={6}>
                <Card className="text-center" style={{ borderRadius: '12px' }}>
                    <Statistic
                        title={t('yellowsheet.hole_details')}
                        value={holeDetailsCount}
                        prefix={<ToolOutlined />}
                        valueStyle={{ color: '#3f8600' }}
                    />
                </Card>
            </Col>
            <Col xs={24} sm={12} md={6}>
                <Card className="text-center" style={{ borderRadius: '12px' }}>
                    <Statistic
                        title={t('yellowsheet.form.work_order_drilling_data')}
                        value={workOrderCount}
                        prefix={<DatabaseOutlined />}
                        valueStyle={{ color: '#52c41a' }}
                    />
                </Card>
            </Col>
            <Col xs={24} sm={12} md={6}>
                <Card className="text-center" style={{ borderRadius: '12px' }}>
                    <Statistic
                        title={t('yellowsheet.form.yellow_form_drilling_data')}
                        value={yellowDrillCount}
                        prefix={<CalendarOutlined />}
                        valueStyle={{ color: '#faad14' }}
                    />
                </Card>
            </Col>
            <Col xs={24} sm={12} md={6}>
                <Card className="text-center" style={{ borderRadius: '12px' }}>
                    <Statistic
                        title={t('yellowsheet.cutting_area')}
                        value={basicInfo?.ProdLeng && basicInfo?.ProdWid ? 
                            (parseFloat(basicInfo.ProdLeng) * parseFloat(basicInfo.ProdWid)).toFixed(2) : 0}
                        suffix="mm²"
                        prefix={<CheckCircleOutlined />}
                        valueStyle={{ color: '#cf1322' }}
                    />
                </Card>
            </Col>
        </Row>
    );
}
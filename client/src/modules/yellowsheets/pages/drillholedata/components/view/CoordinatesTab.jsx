import { Row, Col, Card, Descriptions, Tag, Typography } from 'antd';
import { useTranslation } from 'react-i18next';

const { Text, Paragraph } = Typography;

export default function CoordinatesTab({ drillholeData }) {
    const { t } = useTranslation();

    return (
        <Row gutter={[24, 24]}>
            <Col xs={24} lg={12}>
                <Card 
                    title={t('yellowsheet.mounting_holes')}
                    style={{ borderRadius: '12px' }}
                >
                    <Descriptions column={2} bordered size="small">
                        <Descriptions.Item label="MH-X1">
                            {drillholeData?.['MH-X1'] || 'N/A'}
                        </Descriptions.Item>
                        <Descriptions.Item label="MH-Y1">
                            {drillholeData?.['MH-Y1'] || 'N/A'}
                        </Descriptions.Item>
                        <Descriptions.Item label="MH-X2">
                            {drillholeData?.['MH-X2'] || 'N/A'}
                        </Descriptions.Item>
                        <Descriptions.Item label="MH-Y2">
                            {drillholeData?.['MH-Y2'] || 'N/A'}
                        </Descriptions.Item>
                        <Descriptions.Item label="MH-X3">
                            {drillholeData?.['MH-X3'] || 'N/A'}
                        </Descriptions.Item>
                        <Descriptions.Item label="MH-Y3">
                            {drillholeData?.['MH-Y3'] || 'N/A'}
                        </Descriptions.Item>
                        <Descriptions.Item label="MH-X4">
                            {drillholeData?.['MH-X4'] || 'N/A'}
                        </Descriptions.Item>
                        <Descriptions.Item label="MH-Y4">
                            {drillholeData?.['MH-Y4'] || 'N/A'}
                        </Descriptions.Item>
                        <Descriptions.Item label="MH-X5">
                            {drillholeData?.['MH-X5'] || 'N/A'}
                        </Descriptions.Item>
                        <Descriptions.Item label="MH-Y5">
                            {drillholeData?.['MH-Y5'] || 'N/A'}
                        </Descriptions.Item>
                    </Descriptions>
                </Card>
            </Col>
            
            <Col xs={24} lg={12}>
                <Card 
                    title={t('yellowsheet.reference_points')}
                    style={{ borderRadius: '12px' }}
                >
                    <Descriptions column={1} bordered size="small">
                        <Descriptions.Item label={t('yellowsheet.form.zero_point_x')}>
                            <Text strong>{drillholeData?.['Zero Point-X'] || 'N/A'}</Text>
                        </Descriptions.Item>
                        <Descriptions.Item label={t('yellowsheet.form.zero_point_y')}>
                            <Text strong>{drillholeData?.['Zero Point-Y'] || 'N/A'}</Text>
                        </Descriptions.Item>
                        <Descriptions.Item label={t('yellowsheet.form.quadrant')}>
                            <Tag color="purple">{drillholeData?.QUADRANT || 'N/A'}</Tag>
                        </Descriptions.Item>
                        <Descriptions.Item label={t('yellowsheet.form.remarks')}>
                            <Paragraph ellipsis={{ rows: 3, expandable: true }}>
                                {drillholeData?.Remarks || t('yellowsheet.no_remarks')}
                            </Paragraph>
                        </Descriptions.Item>
                    </Descriptions>
                </Card>
            </Col>
        </Row>
    );
}
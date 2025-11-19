import React from 'react';
import { Row, Col, Card, Descriptions, Tag, Typography } from 'antd';
import { DatabaseOutlined, EnvironmentOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

const { Text } = Typography;

export default function ProductInfoCards({ drillholeData, basicInfo }) {
    const { t } = useTranslation();
   //const data = basicInfo || drillholeData || {};
    const drilldetaildata = { ...drillholeData, ...basicInfo };


    console.log('ProductInfoCards DATA:', drilldetaildata);
  //console.log('ProductInfoCards basicInfo:', drillholeData);


    return (
        <Row gutter={[24, 24]} className="mt-6">
            {/* Product Information */}
            <Col xs={24} lg={24}>
                <Card 
                    title={
                        <span>
                            <DatabaseOutlined className="mr-2" />
                            {t('yellowsheet.product_info')}
                        </span>
                    }
                    className="h-full"
                    style={{ borderRadius: '12px' }}
                >
                    
                    <Descriptions column={1} bordered size="small">
                        <Descriptions.Item label={t('yellowsheet.form.partnum')}>
                            <Text copyable strong>{drilldetaildata.Partnum}</Text>
                        </Descriptions.Item>
                        <Descriptions.Item label={t('yellowsheet.form.revision')}>
                            <Tag color="blue">{drilldetaildata.Foreword}</Tag>
                        </Descriptions.Item>
                        <Descriptions.Item label={t('yellowsheet.form.layer')}>
                            <Tag color="green">{drilldetaildata.Layer}</Tag>
                        </Descriptions.Item>
                        <Descriptions.Item label={t('yellowsheet.form.layername')}>
                            {drilldetaildata.LayerName || 'N/A'}
                        </Descriptions.Item>
                        <Descriptions.Item label={t('yellowsheet.form.type')}>
                            <Tag color="purple">{drilldetaildata.Type || 'N/A'}</Tag>
                        </Descriptions.Item>
                        <Descriptions.Item label={t('yellowsheet.form.version')}>
                            <Tag color="red">{drilldetaildata.VERSION || 'N/A'}</Tag>
                        </Descriptions.Item>
                        <Descriptions.Item label={t('yellowsheet.form.category')}>
                            {drilldetaildata.Category || 'N/A'}
                        </Descriptions.Item>
                        <Descriptions.Item label={t('yellowsheet.form.status')}>
                            {drilldetaildata.status || 'N/A'}
                        </Descriptions.Item>
                        <Descriptions.Item label={t('yellowsheet.form.customer_partnum')}>
                            {drilldetaildata.CustomerPartNum || 'N/A'}
                        </Descriptions.Item>
                        <Descriptions.Item label={t('yellowsheet.form.creator')}>
                            {drilldetaildata.Creator || 'N/A'}
                        </Descriptions.Item>
                        <Descriptions.Item label={t('yellowsheet.form.verifier')}>
                            {drilldetaildata.Verifier || 'N/A'}
                        </Descriptions.Item>
                        <Descriptions.Item label={t('yellowsheet.form.reviewer')}>
                            {drilldetaildata.Reviewer || 'N/A'}
                        </Descriptions.Item>
                    </Descriptions>
                </Card>
            </Col>

            {/* cutting Information */}
            <Col xs={24} lg={12}>
                <Card 
                    title={
                        <span>
                            <DatabaseOutlined className="mr-2" />
                            {t('yellowsheet.cutting')}
                        </span>
                    }
                    className="h-full"
                    style={{ borderRadius: '12px' }}
                >
                    
                    <Descriptions column={1} bordered size="small">
                        <Descriptions.Item label={t('yellowsheet.form.cutting_length')}>
                            <Text>{drillholeData?.['Cutting Length']}</Text>
                        </Descriptions.Item>
                        <Descriptions.Item label={t('yellowsheet.form.cutting_width')}>
                            <Text>{drillholeData?.['Cutting Width']}</Text>
                        </Descriptions.Item>
                        <Descriptions.Item label={t('yellowsheet.form.AV')}>
                            <Text>{drilldetaildata?.['AV']}</Text>
                        </Descriptions.Item>
                    </Descriptions>
                </Card>
            </Col>

             {/* MH Hole & Program Zero */}
            <Col xs={24} lg={12}>
                <Card 
                    title={
                        <span>
                            <DatabaseOutlined className="mr-2" />
                            {t('yellowsheet.program_zero_mh')}
                        </span>
                    }
                    className="h-full"
                    style={{ borderRadius: '12px' }}
                >
                    
                    <Descriptions column={1} bordered size="small">
                        <Descriptions.Item label={t('yellowsheet.form.zero_point_x')}>
                            <Text>{drillholeData?.['Zero Point-X']}</Text>
                        </Descriptions.Item>
                        <Descriptions.Item label={t('yellowsheet.form.zero_point_y')}>
                            <Text>{drillholeData?.['Zero Point-Y']}</Text>
                        </Descriptions.Item>
                        <Descriptions.Item label={t('yellowsheet.form.MH-X1')}>
                            <Text>{drillholeData?.['MH-X1']}</Text>
                        </Descriptions.Item>
                        <Descriptions.Item label={t('yellowsheet.form.MH-Y1')}>
                            <Text>{drillholeData?.['MH-Y1']}</Text>
                        </Descriptions.Item>
                        <Descriptions.Item label={t('yellowsheet.form.MH-X2')}>
                            <Text>{drillholeData?.['MH-X2']}</Text>
                        </Descriptions.Item>
                        <Descriptions.Item label={t('yellowsheet.form.MH-Y2')}>
                            <Text>{drillholeData?.['MH-Y2']}</Text>
                        </Descriptions.Item>
                        <Descriptions.Item label={t('yellowsheet.form.MH-X3')}>
                            <Text>{drillholeData?.['MH-X3']}</Text>
                        </Descriptions.Item>
                        <Descriptions.Item label={t('yellowsheet.form.MH-Y3')}>
                            <Text>{drillholeData?.['MH-Y3']}</Text>
                        </Descriptions.Item>
                        <Descriptions.Item label={t('yellowsheet.form.MH-X4')}>
                            <Text>{drillholeData?.['MH-X4']}</Text>
                        </Descriptions.Item>
                        <Descriptions.Item label={t('yellowsheet.form.MH-Y4')}>
                            <Text>{drillholeData?.['MH-Y4']}</Text>
                        </Descriptions.Item>
                        <Descriptions.Item label={t('yellowsheet.form.MH-X5')}>
                            <Text>{drillholeData?.['MH-X5']}</Text>
                        </Descriptions.Item>
                        <Descriptions.Item label={t('yellowsheet.form.MH-Y5')}>
                            <Text>{drillholeData?.['MH-Y5']}</Text>
                        </Descriptions.Item>
                        <Descriptions.Item label={t('yellowsheet.form.use_new_g93_prog')}>
                            <Text>{drillholeData?.['Use G93']}</Text>
                        </Descriptions.Item>
                        <Descriptions.Item label={t('yellowsheet.form.remarks')}>
                            <Text>{drillholeData?.['Remarks']}</Text>
                        </Descriptions.Item>
                    </Descriptions>
                </Card>
            </Col>
        </Row>
    );
}
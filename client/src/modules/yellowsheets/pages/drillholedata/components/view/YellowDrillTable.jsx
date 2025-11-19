import React from 'react';
import { Card, Table, Badge, Tag, Typography } from 'antd';
import { CalendarOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

const { Text } = Typography;

export default function YellowDrillTable({ yellowDrillData }) {
    const { t } = useTranslation();
    console.log('YellowDrillData:', yellowDrillData);

    const columns = [
        {
            title: t('yellowsheet.form.number'),
            dataIndex: 'Number',
            key: 'Number',
            width: 80,
            
        },
        {
            title: t('yellowsheet.form.hole_diameter'),
            dataIndex: 'Hole Diameter',
            key: 'Hole Diameter',
            width: 120,
            render: (value) => value ? Number(value).toFixed(4) : '0.0000'
        },
        {
            title: t('yellowsheet.form.number_holes'),
            dataIndex: 'Number of Holes',
            key: 'Number of Holes',
            width: 120,
        },
        {
            title: t('yellowsheet.form.number_drill'),
            dataIndex: 'Number of Drilling',
            key: 'Number of Drilling',
            width: 120,
        },
    ];

    return (
        <Card 
            title={
                <span>
                    <CalendarOutlined className="mr-2" style={{ color: '#faad14' }} />
                    {t('yellowsheet.form.yellow_form_drilling_data')}
                </span>
            }
            style={{ borderRadius: '12px' }}
        >
            <Table
                columns={columns}
                dataSource={yellowDrillData}
                rowKey={(record, index) => `yellow-${index}`}
                scroll={{ x: 1400 }}
                pagination={{
                    pageSize: 10,
                    showSizeChanger: true,
                    showQuickJumper: true,
                    showTotal: (total, range) =>
                        `${range[0]}-${range[1]} ${t('yellowsheet.actions.of')} ${total} ${t('yellowsheet.items')}`,
                }}
                size="small"
            />
        </Card>
    );
}
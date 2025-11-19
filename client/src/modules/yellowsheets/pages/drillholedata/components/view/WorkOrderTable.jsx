import React from 'react';
import { Card, Table, Badge, Tag, Typography } from 'antd';
import { DatabaseOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

const { Text } = Typography;

export default function WorkOrderTable({ workOrderData }) {
    const { t } = useTranslation();
    console.log('WorkOrderData:', workOrderData);
    const columns = [
        {
            title: t('yellowsheet.form.number'),
            dataIndex: 'Process',
            key: 'Process',
            width: 80,

        },
        {
            title: t('yellowsheet.form.process_code'),
            dataIndex: 'Code',
            key: 'Code',
            width: 150,

        },
        {
            title: t('yellowsheet.form.complete_aperture'),
            dataIndex: 'Complete aperture',
            key: 'Complete aperture',
            width: 120,

        },
        {
            title: t('yellowsheet.form.hole_diameter'),
            dataIndex: 'HoleDiameter',
            key: 'HoleDiameter',
            width: 120,
            render: (value) => value ? Number(value).toFixed(4) : '0.0000'
        }
        ,
        {
            title: t('yellowsheet.form.number_holes'),
            dataIndex: 'Number of Holes',
            key: 'Number of Holes',
            width: 120,

        },

        {
            title: t('yellowsheet.form.pth'),
            dataIndex: 'PTH',
            key: 'PTH',
            width: 80,
            render: (value) =>
                value === 'Y' ? (
                    <Tag color="green">{t('Yes')}</Tag>
                ) : (
                    <Tag color="red">{t('No')}</Tag>
                )
        },
        {
            title: t('yellowsheet.form.laser_drilling'),
            dataIndex: 'Laser drilling',
            key: 'Laser drilling',
            width: 120,
            render: (value) =>
                value === 'Y' ? (
                    <Tag color="green">{t('Yes')}</Tag>
                ) : (
                    <Tag color="red">{t('No')}</Tag>
                )

        },
        {
            title: t('yellowsheet.form.slot_cutter'),
            dataIndex: 'Slot Cutter',
            key: 'Slot Cutter',
            width: 100,
            render: (value) =>
                value === 'Y' ? (
                    <Tag color="green">{t('Yes')}</Tag>
                ) : (
                    <Tag color="red">{t('No')}</Tag>
                )
        },
        {
            title: t('yellowsheet.form.connect_hole'),
            dataIndex: 'Slot Cutter',
            key: 'Slot Cutter',
            width: 100,
            render: (value) =>
                value === 'Y' ? (
                    <Tag color="green">{t('Yes')}</Tag>
                ) : (
                    <Tag color="red">{t('No')}</Tag>
                )
        },
        {
            title: t('yellowsheet.form.slow'),
            dataIndex: 'Slow',
            key: 'Slow',
            width: 80,
            render: (value) =>
                value === 'Y' ? (
                    <Tag color="green">{t('Yes')}</Tag>
                ) : (
                    <Tag color="red">{t('No')}</Tag>
                )
        },
        {
            title: t('yellowsheet.form.slot_length'),
            dataIndex: 'Slot Length',
            key: 'Slot Length',
            width: 120,

        },
        {
            title: t('yellowsheet.form.offset'),
            dataIndex: 'Offset',
            key: 'Offset',
            width: 100,

        },
    ];

    return (
        <Card
            title={
                <span>
                    <DatabaseOutlined className="mr-2" style={{ color: '#52c41a' }} />
                    {t('yellowsheet.form.work_order_drilling_data')}
                </span>
            }
            style={{ borderRadius: '12px' }}
        >
            <Table
                columns={columns}
                dataSource={workOrderData}
                rowKey={(record, index) => `work-${index}`}
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
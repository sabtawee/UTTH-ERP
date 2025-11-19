import React from 'react';
import { Card, Table, Badge, Tag, Typography } from 'antd';
import { DatabaseOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

const { Text } = Typography;

export default function WorkOrderTable({ workOrderData }) {
    const { t } = useTranslation();
    const columns = [
        {
            title: t('yellowsheet.form.number'),
            dataIndex: 'Code',
            key: 'Code',
            width: 80,
            render: (text) => (
                text ? <Badge count={text} style={{ backgroundColor: '#52c41a' }} /> : <Text>N/A</Text>
            )
        },
        {
            title: t('yellowsheet.form.hole_diameter'),
            dataIndex: 'Complete aperture',
            key: 'Complete aperture',
            width: 150,
            render: (text) => (
                text ? <Badge count={text} style={{ backgroundColor: '#52c41a' }} /> : <Text>N/A</Text>
            )
        },
        {
            title: t('yellowsheet.form.number_holes'),
            dataIndex: 'ConnectHole',
            key: 'ConnectHole',
            width: 120,
            render: (text) => (
                text ? <Badge count={text} style={{ backgroundColor: '#52c41a' }} /> : <Text>N/A</Text>
            )
        },
        {
            title: t('yellowsheet.form.process_code'),
            dataIndex: 'HoleDiameter',
            key: 'HoleDiameter',
            width: 120,
            render: (text) => (
                text ? <Badge count={text} style={{ backgroundColor: '#52c41a' }} /> : <Text>N/A</Text>
            )
        },
        {
            title: t('yellowsheet.form.complete_aperture'),
            dataIndex: 'Laser drilling',
            key: 'Laser drilling',
            width: 180,
            render: (text) => (
                text ? <Badge count={text} style={{ backgroundColor: '#52c41a' }} /> : <Text>N/A</Text>
            )
        },
        {
            title: t('yellowsheet.form.pth'),
            dataIndex: 'PTH',
            key: 'PTH',
            width: 80,
            render: (text) => (
                text ? <Badge count={text} style={{ backgroundColor: '#52c41a' }} /> : <Text>N/A</Text>
            )
        },
        {
            title: t('yellowsheet.form.laser_drilling'),
            dataIndex: 'Offset',
            key: 'Offset',
            width: 120,
            render: (text) => (
                text ? <Badge count={text} style={{ backgroundColor: '#52c41a' }} /> : <Text>N/A</Text>
            )
        },
        {
            title: t('yellowsheet.form.slot_cutter'),
            dataIndex: 'Process',
            key: 'Process',
            width: 100,
            render: (text) => (
                text ? <Badge count={text} style={{ backgroundColor: '#52c41a' }} /> : <Text>N/A</Text>
            )
        },
        {
            title: t('yellowsheet.form.connect_hole'),
            dataIndex: 'Slot Cutter',
            key: 'Slot Cutter',
            width: 100,
            render: (text) => (
                text ? <Badge count={text} style={{ backgroundColor: '#52c41a' }} /> : <Text>N/A</Text>
            )
        },
        {
            title: t('yellowsheet.form.slow'),
            dataIndex: 'Slot Length',
            key: 'Slot Length',
            width: 80,
            render: (text) => (
                text ? <Badge count={text} style={{ backgroundColor: '#52c41a' }} /> : <Text>N/A</Text>
            )
        },
        {
            title: t('yellowsheet.form.slot_length'),
            dataIndex: 'Slow',
            key: 'Slow',
            width: 120,
            render: (text) => (
                text ? <Badge count={text} style={{ backgroundColor: '#52c41a' }} /> : <Text>N/A</Text>
            )
        },
        {
            title: t('yellowsheet.form.offset'),
            dataIndex: 'offset',
            key: 'offset',
            width: 100,
            render: (text) => (
                text ? <Badge count={text} style={{ backgroundColor: '#52c41a' }} /> : <Text>N/A</Text>
            )
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
import React from 'react';
import { Card, Table, Badge, Tag, Typography } from 'antd';
import { ToolOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

const { Text } = Typography;

export default function HoleDetailsTable({ holeDetails }) {
    const { t } = useTranslation();

    const columns = [
        {
            title: t('yellowsheet.form.hole_number'),
            dataIndex: 'NO',
            key: 'NO',
            width: 100,
            render: (text) => (
                <Badge count={text} style={{ backgroundColor: '#13c2c2' }} />
            )
        },
        {
            title: t('yellowsheet.form.hole_size'),
            dataIndex: 'Hole',
            key: 'Hole',
            width: 120,
            render: (text) => (
                <Text strong>{text} mm</Text>
            )
        },
        {
            title: t('yellowsheet.form.hole_length'),
            dataIndex: 'HoleL',
            key: 'HoleL',
            width: 120,
            render: (text) => (
                <Text>{text} mm</Text>
            )
        },
        {
            title: t('yellowsheet.form.hole_name'),
            dataIndex: 'HoleN',
            key: 'HoleN',
            width: 150,
        },
        {
            title: t('yellowsheet.form.pth'),
            dataIndex: 'PTH',
            key: 'PTH',
            width: 80,
            render: (text) => (
                <Tag color={text === 'Y' ? 'green' : 'orange'}>
                    {text === 'Y' ? 'Yes' : 'No'}
                </Tag>
            )
        },
        {
            title: t('yellowsheet.form.tso_down'),
            dataIndex: 'TsoDow',
            key: 'TsoDow',
            width: 100,
        },
        {
            title: t('yellowsheet.form.lian_kong'),
            dataIndex: 'LianKong',
            key: 'LianKong',
            width: 100,
        },
        {
            title: t('yellowsheet.form.ld_hole'),
            dataIndex: 'ldhole',
            key: 'ldhole',
            width: 100,
        },
        {
            title: t('yellowsheet.form.slow'),
            dataIndex: 'Slow',
            key: 'Slow',
            width: 80,
        },
        {
            title: t('yellowsheet.form.tso_length'),
            dataIndex: 'TsoLength',
            key: 'TsoLength',
            width: 120,
            render: (text) => (
                <Text>{text} mm</Text>
            )
        },
        {
            title: t('yellowsheet.form.offset'),
            dataIndex: 'offset',
            key: 'offset',
            width: 100,
        },
    ];

    return (
        <Card 
            title={
                <span>
                    <ToolOutlined className="mr-2" style={{ color: '#13c2c2' }} />
                    {t('yellowsheet.hole_details')} - {t('yellowsheet.basic_drilling_data')}
                </span>
            }
            style={{ borderRadius: '12px' }}
        >
            <Table
                columns={columns}
                dataSource={holeDetails}
                rowKey={(record, index) => `hole-${index}`}
                scroll={{ x: 1200 }}
                pagination={{
                    pageSize: 10,
                    showSizeChanger: true,
                    showQuickJumper: true,
                    showTotal: (total, range) =>
                        `${range[0]}-${range[1]} ${t('yellowsheet.actions.of')} ${total} ${t('yellowsheet.holes')}`,
                }}
                size="small"
            />
        </Card>
    );
}
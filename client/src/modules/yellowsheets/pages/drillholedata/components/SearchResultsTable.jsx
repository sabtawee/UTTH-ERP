import React from 'react';
import { Table, Tag, Space, Button, Tooltip, Empty, Card } from 'antd';
import { EyeOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

export default function SearchResultsTable({
    columns,
    dataSource,
    loading,
    rowSelection,
    currentPage,
    pageSize,
    totalResults,
    onPageChange,
    onView
}) {
    const { t } = useTranslation();

    return (
        <Table
            rowSelection={rowSelection}
            columns={columns}
            dataSource={dataSource}
            loading={loading}
            scroll={{ x: 1500 }}
            pagination={{
                current: currentPage,
                pageSize: pageSize,
                total: totalResults,
                showSizeChanger: true,
                showQuickJumper: true,
                showTotal: (total, range) =>
                    `${range[0]}-${range[1]} ${t('yellowsheet.actions.of')} ${total} ${t('yellowsheet.actions.items')}`,
                onChange: onPageChange,
            }}
            locale={{
                emptyText: (
                    <Empty
                        image={Empty.PRESENTED_IMAGE_SIMPLE}
                        description={t('yellowsheet.form.no_search_results')}
                    />
                ),
            }}
        />
    );
}
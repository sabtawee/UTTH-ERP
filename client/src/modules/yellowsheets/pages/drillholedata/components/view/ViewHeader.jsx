import React from 'react';
import { Card, Typography, Button, Space, Avatar } from 'antd';
import { 
    ArrowLeftOutlined, 
    EditOutlined, 
    PrinterOutlined, 
    DownloadOutlined,
    EyeOutlined,
    DatabaseOutlined
} from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

const { Title, Text } = Typography;

export default function ViewHeader({ 
    drillholeData, 
    onBack, 
    onEdit, 
    onPrint, 
    onExport 
}) {
    const { t } = useTranslation();

    if (!drillholeData) return null;

    return (
        <Card className="mb-6 shadow-lg border-0" style={{ borderRadius: '16px' }}>
            <div className="flex justify-between items-center">
                <div className="flex items-center space-x-4">
                    <Avatar 
                        size={64} 
                        style={{ backgroundColor: '#13c2c2' }}
                        icon={<DatabaseOutlined />}
                    />
                    <div>
                        <Title level={2} className="mb-1" style={{ color: '#13c2c2' }}>
                            <EyeOutlined className="mr-3" />
                            {t('yellowsheet.view_drillhole')}
                        </Title>
                        <Text type="secondary" style={{ fontSize: '16px' }}>
                            {drillholeData.Partnum} - {drillholeData.Foreword} - {drillholeData.Layer}
                        </Text>
                    </div>
                </div>
            </div>
        </Card>
    );
}
import { Card, Row, Col, Avatar, Badge, Typography } from 'antd';
import { AppstoreOutlined } from '@ant-design/icons';

const { Text } = Typography;

export default function PermissionModuleOverview({
  uniqueModules,
  permissions,
  getModuleConfig,
  onModuleClick
}) {
  return (
    <Card
      title={
        <div className="flex items-center">
          <AppstoreOutlined className="mr-2" />
          Module & Permission Overview
        </div>
      }
      size="small"
      className="mb-4"
      style={{ borderRadius: '8px' }}
    >
      <Row gutter={[8, 8]}>
        {uniqueModules.map(module => {
          const modulePerms = permissions.filter(p => p.module === module);
          const config = getModuleConfig(module);
          const systemModules = ['User', 'Role', 'Permission', 'Auth'];
          const isSystem = systemModules.includes(module);
          
          return (
            <Col xs={12} sm={8} md={6} lg={4} key={module}>
              <Card 
                size="small" 
                hoverable
                style={{ 
                  textAlign: 'center',
                  border: `2px solid ${isSystem ? '#ff7875' : '#95de64'}`,
                  borderRadius: '8px'
                }}
                onClick={() => onModuleClick(module)}
              >
                <Badge count={modulePerms.length} style={{ backgroundColor: config.color }}>
                  <Avatar 
                    size={32} 
                    style={{ backgroundColor: config.color }}
                    icon={<AppstoreOutlined />}
                  >
                    {module.charAt(0)}
                  </Avatar>
                </Badge>
                <div className="mt-2">
                  <Text strong style={{ fontSize: '12px' }}>{module}</Text>
                  <br />
                  <Text type="secondary" style={{ fontSize: '10px' }}>
                    {isSystem ? 'System' : 'Custom'}
                  </Text>
                </div>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Card>
  );
}

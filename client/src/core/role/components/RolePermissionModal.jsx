import { Modal, Divider, Button, Space, Typography, Collapse, Checkbox, Row, Col, Card, Badge } from 'antd';
import { KeyOutlined, SecurityScanOutlined } from '@ant-design/icons';

const { Text } = Typography;
const { Panel } = Collapse;

export default function RolePermissionModal({
  open,
  onOk,
  onCancel,
  loading,
  permissions,
  selectedPermIds,
  setSelectedPermIds
}) {
  // Group permissions by module
  const groupPermissionsByModule = (permissions) => {
    const grouped = {};
    permissions.forEach(perm => {
      if (!grouped[perm.module]) {
        grouped[perm.module] = [];
      }
      grouped[perm.module].push(perm);
    });
    return grouped;
  };

  const groupedPermissions = groupPermissionsByModule(permissions);

  return (
    <Modal
      title={
        <div style={{ textAlign: 'center' }}>
          <KeyOutlined style={{ color: '#1890ff', marginRight: '8px' }} />
          Assign Access Permissions
        </div>
      }
      open={open}
      onOk={onOk}
      onCancel={onCancel}
      confirmLoading={loading}
      okText="Save"
      cancelText="Cancel"
      width={800}
    >
      <Divider />
      <div className="mb-4">
        <div className="flex justify-between items-center">
          <Text strong>Select permissions for this role:</Text>
          <Space>
            <Button 
              size="small" 
              onClick={() => setSelectedPermIds(permissions.map(p => p.id))}
              type="primary"
              ghost
            >
              Select All
            </Button>
            <Button 
              size="small" 
              onClick={() => setSelectedPermIds([])}
            >
              Deselect All
            </Button>
          </Space>
        </div>
      </div>
      
      <Collapse defaultActiveKey={Object.keys(groupedPermissions)} ghost>
        {Object.entries(groupedPermissions).map(([module, perms]) => (
          <Panel 
            header={
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <SecurityScanOutlined className="mr-2" />
                  <Text strong>{module}</Text>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge 
                    count={perms.filter(p => selectedPermIds.includes(p.id)).length} 
                    total={perms.length}
                    style={{ backgroundColor: '#1890ff' }}
                  />
                  <Button 
                    size="small" 
                    type="text"
                    onClick={(e) => {
                      e.stopPropagation();
                      const modulePermIds = perms.map(p => p.id);
                      const allSelected = modulePermIds.every(id => selectedPermIds.includes(id));
                      if (allSelected) {
                        setSelectedPermIds(selectedPermIds.filter(id => !modulePermIds.includes(id)));
                      } else {
                        setSelectedPermIds([...new Set([...selectedPermIds, ...modulePermIds])]);
                      }
                    }}
                  >
                    {perms.every(p => selectedPermIds.includes(p.id)) ? 'Deselect All' : 'Select All'}
                  </Button>
                </div>
              </div>
            } 
            key={module}
          >
            <Row gutter={[8, 8]}>
              {perms.map((p) => (
                <Col xs={24} sm={12} md={8} key={p.id}>
                  <Card size="small" hoverable className="h-full">
                    <Checkbox 
                      checked={selectedPermIds.includes(p.id)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSelectedPermIds([...selectedPermIds, p.id]);
                        } else {
                          setSelectedPermIds(selectedPermIds.filter(id => id !== p.id));
                        }
                      }}
                      style={{ width: '100%' }}
                    >
                      <div>
                        <Text strong style={{ fontSize: '12px' }}>
                          {p.name}
                        </Text>
                        <br />
                        <Text type="secondary" style={{ fontSize: '10px' }}>
                          {p.description || 'No description'}
                        </Text>
                      </div>
                    </Checkbox>
                  </Card>
                </Col>
              ))}
            </Row>
          </Panel>
        ))}
      </Collapse>
    </Modal>
  );
}

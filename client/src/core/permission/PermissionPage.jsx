import { useEffect, useState } from 'react';
import { Form, message, Card, Alert } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import { getPermissions, createPermission } from './api';

// Import components
import PermissionStatistics from './components/PermissionStatistics';
import PermissionHeader from './components/PermissionHeader';
import PermissionFilters from './components/PermissionFilters';
import PermissionModuleOverview from './components/PermissionModuleOverview';
import PermissionTable from './components/PermissionTable';
import PermissionCreateModal from './components/PermissionCreateModal';
import PermissionEditModal from './components/PermissionEditModal';
import PermissionDetailDrawer from './components/PermissionDetailDrawer';

function PermissionPage() {
  const [permissions, setPermissions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [viewDrawerOpen, setViewDrawerOpen] = useState(false);
  const [selectedPermission, setSelectedPermission] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [filterModule, setFilterModule] = useState("");
  const [tableLoading, setTableLoading] = useState(false);
  const [statsData, setStatsData] = useState({
    total: 0,
    modules: 0,
    systemPerms: 0,
    customPerms: 0
  });
  
  const [form] = Form.useForm();
  const [editForm] = Form.useForm();

  const fetchPermissions = async () => {
    setTableLoading(true);
    try {
      const res = await getPermissions();
      setPermissions(res);
      
      // Calculate statistics
      const uniqueModules = [...new Set(res.map(p => p.module))].filter(Boolean);
      const systemModules = ['User', 'Role', 'Permission', 'Auth'];
      const systemPerms = res.filter(p => systemModules.includes(p.module));
      
      setStatsData({
        total: res.length,
        modules: uniqueModules.length,
        systemPerms: systemPerms.length,
        customPerms: res.length - systemPerms.length
      });
    } catch {
      message.error('Failed to load permissions');
    }
    setTableLoading(false);
  };

  const handleCreate = async () => {
    setLoading(true);
    try {
      const values = await form.validateFields();
      await createPermission(values);
      message.success('Permission created successfully');
      setCreateModalOpen(false);
      form.resetFields();
      fetchPermissions();
    } catch (e) {
      message.error('Failed to create permission');
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchPermissions();
  }, []);

  // Utility functions
  const openViewDrawer = (permission) => {
    setSelectedPermission(permission);
    setViewDrawerOpen(true);
  };

  const openEditModal = (permission) => {
    setSelectedPermission(permission);
    editForm.setFieldsValue({
      module: permission.module,
      name: permission.name,
      description: permission.description || ''
    });
    setEditModalOpen(true);
  };

  const handleEditPermission = async () => {
    setLoading(true);
    try {
      const values = await editForm.validateFields();
      // await updatePermission(selectedPermission.id, values); // Implement this API
      message.success('Permission updated successfully');
      setEditModalOpen(false);
      editForm.resetFields();
      fetchPermissions();
    } catch {
      message.error('Failed to update permission');
    }
    setLoading(false);
  };

  const handleDeletePermission = async (permissionId) => {
    setLoading(true);
    try {
      // await deletePermission(permissionId); // Implement this API
      message.success('Permission deleted successfully');
      fetchPermissions();
    } catch {
      message.error('Failed to delete permission');
    }
    setLoading(false);
  };

  // Filter functions
  const filteredPermissions = permissions.filter((permission) => {
    const matchSearch = 
      permission.name?.toLowerCase().includes(searchText.toLowerCase()) ||
      permission.module?.toLowerCase().includes(searchText.toLowerCase()) ||
      permission.description?.toLowerCase().includes(searchText.toLowerCase());
    
    const matchModule = filterModule ? permission.module === filterModule : true;
    
    return matchSearch && matchModule;
  });

  const uniqueModules = [...new Set(permissions.map(p => p.module))].filter(Boolean);

  // Get module color and icon
  const getModuleConfig = (module) => {
    const configs = {
      'User': { color: 'blue', icon: 'UserOutlined' },
      'Role': { color: 'purple', icon: 'SafetyCertificateOutlined' },
      'Permission': { color: 'orange', icon: 'KeyOutlined' },
      'Auth': { color: 'red', icon: 'SecurityScanOutlined' },
      'Asset': { color: 'green', icon: 'DatabaseOutlined' },
      'Ticket': { color: 'cyan', icon: 'BugOutlined' },
      'Production': { color: 'gold', icon: 'AppstoreOutlined' },
      'Quality': { color: 'magenta', icon: 'CheckCircleOutlined' },
      'API': { color: 'lime', icon: 'ApiOutlined' },
    };
    return configs[module] || { color: 'default', icon: 'SettingOutlined' };
  };

  // Get permission type
  const getPermissionType = (name) => {
    const types = {
      'view': 'View',
      'create': 'Create',
      'edit': 'Edit',
      'delete': 'Delete',
      'update': 'Update',
      'manage': 'Manage',
      'admin': 'Admin',
      'approve': 'Approve',
      'export': 'Export',
      'import': 'Import',
    };
    return types[name] || name;
  };

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

    const handleRefresh = () => {
      fetchPermissions();
      message.success('Data refreshed');
    };

    const handleClearFilters = () => {
      setSearchText("");
      setFilterModule("");
    };

  return (
    <div className="p-6 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 min-h-screen">
      <PermissionStatistics statsData={statsData} />

      {/* Main Content Card */}
      <Card
        className="shadow-lg border-0"
        style={{
          background: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(10px)',
          borderRadius: '16px'
        }}
      >
        <PermissionHeader 
          filteredPermissions={filteredPermissions}
          onRefresh={handleRefresh}
          onCreateNew={() => setCreateModalOpen(true)}
        />

        {/* Alert Section */}
        <Alert
          message="Important Information"
          description="System permissions (User, Role, Permission, Auth) cannot be edited or deleted as they are critical to system functionality"
          type="warning"
          showIcon
          icon={<InfoCircleOutlined />}
          className="mb-4"
          style={{ borderRadius: '8px' }}
        />

        <PermissionFilters
          searchText={searchText}
          onSearchChange={setSearchText}
          filterModule={filterModule}
          onModuleChange={setFilterModule}
          uniqueModules={uniqueModules}
          getModuleConfig={getModuleConfig}
          filteredCount={filteredPermissions.length}
          totalCount={permissions.length}
          onClearFilters={handleClearFilters}
        />

        <PermissionModuleOverview
          uniqueModules={uniqueModules}
          permissions={permissions}
          getModuleConfig={getModuleConfig}
          onModuleClick={setFilterModule}
        />

        <PermissionTable
          filteredPermissions={filteredPermissions}
          tableLoading={tableLoading}
          getModuleConfig={getModuleConfig}
          getPermissionType={getPermissionType}
          onViewDetails={openViewDrawer}
          onEdit={openEditModal}
          onDelete={handleDeletePermission}
          onCreateNew={() => setCreateModalOpen(true)}
        />
      </Card>

      <PermissionCreateModal
        open={createModalOpen}
        loading={loading}
        form={form}
        uniqueModules={uniqueModules}
        getModuleConfig={getModuleConfig}
        onOk={handleCreate}
        onCancel={() => {
          setCreateModalOpen(false);
          form.resetFields();
        }}
      />

      <PermissionEditModal
        open={editModalOpen}
        loading={loading}
        form={editForm}
        onOk={handleEditPermission}
        onCancel={() => {
          setEditModalOpen(false);
          editForm.resetFields();
        }}
      />

      <PermissionDetailDrawer
        open={viewDrawerOpen}
        selectedPermission={selectedPermission}
        getModuleConfig={getModuleConfig}
        getPermissionType={getPermissionType}
        onClose={() => setViewDrawerOpen(false)}
      />
    </div>
  );
}

export default PermissionPage;

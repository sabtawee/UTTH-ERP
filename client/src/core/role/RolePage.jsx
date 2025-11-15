import { useEffect, useState } from 'react';
import {
  Card,
  message,
  Alert,
  Form,
} from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import {
  getRoles,
  getPermissions,
  assignPermissionsToRole,
  createRole,
} from './api';

// Import components
import RoleStatistics from './components/RoleStatistics';
import RoleHeader from './components/RoleHeader';
import RoleSearchFilter from './components/RoleSearchFilter';
import RoleTable from './components/RoleTable';
import RolePermissionModal from './components/RolePermissionModal';
import RoleCreateModal from './components/RoleCreateModal';
import RoleEditModal from './components/RoleEditModal';
import RoleDetailDrawer from './components/RoleDetailDrawer';
import { useTranslation } from 'react-i18next';


export default function RolePage() {
  const [roles, setRoles] = useState([]);
  const [permissions, setPermissions] = useState([]);
  const [selectedRoleId, setSelectedRoleId] = useState(null);
  const [selectedPermIds, setSelectedPermIds] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [viewDrawerOpen, setViewDrawerOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [tableLoading, setTableLoading] = useState(false);
  const [statsData, setStatsData] = useState({
    total: 0,
    withPermissions: 0,
    withoutPermissions: 0,
    totalPermissions: 0
  });

  const { t } = useTranslation();
  
  const [form] = Form.useForm();
  const [editForm] = Form.useForm();

  const fetchAll = async () => {
    setTableLoading(true);
    try {
      const [rolesRes, permsRes] = await Promise.all([
        getRoles(),
        getPermissions(),
      ]);
      setRoles(rolesRes);
      setPermissions(permsRes);
      
      // Calculate statistics
      setStatsData({
        total: rolesRes.length,
        withPermissions: rolesRes.filter(r => r.permissions?.length > 0).length,
        withoutPermissions: rolesRes.filter(r => !r.permissions || r.permissions.length === 0).length,
        totalPermissions: permsRes.length
      });
    } catch {
      message.error(t('rolemanagement.failed_load_roles'));
    }
    setTableLoading(false);
  };

  useEffect(() => {
    fetchAll();
  }, []);

  // Utility functions
  const openAssignModal = (role) => {
    setSelectedRoleId(role.id);
    setSelectedPermIds(role.permissions?.map((p) => p.permission.id) || []);
    setModalOpen(true);
  };

  const openViewDrawer = (role) => {
    setSelectedRole(role);
    setViewDrawerOpen(true);
  };

  const openEditModal = (role) => {
    setSelectedRole(role);
    editForm.setFieldsValue({
      name: role.name,
      description: role.description || ''
    });
    setEditModalOpen(true);
  };

  const handleAssign = async () => {
    setLoading(true);
    try {
      await assignPermissionsToRole(selectedRoleId, selectedPermIds);
      message.success(t('rolemanagement.permissions_assigned_success'));
      setModalOpen(false);
      fetchAll();
    } catch {
      message.error(t('rolemanagement.failed_assign_permissions'));
    }
    setLoading(false);
  };

  const handleCreateRole = async () => {
    setLoading(true);
    try {
      const values = await form.validateFields();
      await createRole(values.name, values.description);
      message.success(t('rolemanagement.role_created_success'));
      setCreateModalOpen(false);
      form.resetFields();
      fetchAll();
    } catch {
      message.error(t('rolemanagement.failed_create_role'));
    }
    setLoading(false);
  };

  const handleEditRole = async () => {
    setLoading(true);
    try {
      const values = await editForm.validateFields();
      // await updateRole(selectedRole.id, values); // Implement this API
      message.success(t('rolemanagement.role_updated_success'));
      setEditModalOpen(false);
      editForm.resetFields();
      fetchAll();
    } catch {
      message.error(t('rolemanagement.failed_update_role'));
    }
    setLoading(false);
  };

  const handleDeleteRole = async (roleId) => {
    setLoading(true);
    try {
      // await deleteRole(roleId); // Implement this API
      message.success(t('rolemanagement.role_deleted_success'));
      fetchAll();
    } catch {
      message.error(t('rolemanagement.failed_delete_role'));
    }
    setLoading(false);
  };

  // Filter functions
  const filteredRoles = roles.filter((role) => {
    return role.name?.toLowerCase().includes(searchText.toLowerCase()) ||
           role.description?.toLowerCase().includes(searchText.toLowerCase());
  });

  return (
    <div className="p-6 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 min-h-screen">
      {/* Statistics Cards */}
      <RoleStatistics statsData={statsData} />

      {/* Main Content Card */}
      <Card
        className="shadow-lg border-0"
        style={{
          background: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(10px)',
          borderRadius: '16px'
        }}
      >
        {/* Header Section */}
        <RoleHeader 
          filteredRoles={filteredRoles}
          onRefresh={fetchAll}
          onCreateRole={() => setCreateModalOpen(true)}
        />

        {/* Alert Section */}
        <Alert
          message={t('rolemanagement.important_information')}
          description={t('rolemanagement.important_description')}
          type="info"
          showIcon
          icon={<InfoCircleOutlined />}
          className="mb-4"
          style={{ borderRadius: '8px' }}
        />

        {/* Search and Filter Section */}
        <RoleSearchFilter 
          searchText={searchText}
          onSearchChange={setSearchText}
          filteredRoles={filteredRoles}
          totalRoles={roles.length}
        />

        {/* Table Section */}
        <RoleTable 
          roles={filteredRoles}
          loading={tableLoading}
          onViewRole={openViewDrawer}
          onEditRole={openEditModal}
          onAssignPermissions={openAssignModal}
          onDeleteRole={handleDeleteRole}
          onCreateRole={() => setCreateModalOpen(true)}
        />
      </Card>

      {/* Assign Permissions Modal */}
      <RolePermissionModal 
        open={modalOpen}
        onOk={handleAssign}
        onCancel={() => setModalOpen(false)}
        loading={loading}
        permissions={permissions}
        selectedPermIds={selectedPermIds}
        setSelectedPermIds={setSelectedPermIds}
      />

      {/* Create Role Modal */}
      <RoleCreateModal 
        open={createModalOpen}
        onOk={handleCreateRole}
        onCancel={() => setCreateModalOpen(false)}
        loading={loading}
        form={form}
      />

      {/* Edit Role Modal */}
      <RoleEditModal 
        open={editModalOpen}
        onOk={handleEditRole}
        onCancel={() => setEditModalOpen(false)}
        loading={loading}
        form={editForm}
      />

      {/* Role Detail Drawer */}
      <RoleDetailDrawer 
        open={viewDrawerOpen}
        onClose={() => setViewDrawerOpen(false)}
        selectedRole={selectedRole}
        onAssignPermissions={openAssignModal}
      />
    </div>
  );
}

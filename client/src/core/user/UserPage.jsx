import { useEffect, useState } from "react";
import {
  Card,
  message,
  Form,
} from "antd";
import { getUsers, getRoles, assignRolesToUser, createUser } from "./api";

// Import components
import UserStatistics from './components/UserStatistics';
import UserHeader from './components/UserHeader';
import UserSearchFilter from './components/UserSearchFilter';
import UserTable from './components/UserTable';
import UserAssignRoleModal from './components/UserAssignRoleModal';
import UserCreateModal from './components/UserCreateModal';
import UserEditModal from './components/UserEditModal';
import UserDetailDrawer from './components/UserDetailDrawer';

export default function UserPage() {
  const [users, setUsers] = useState([]);
  const [roles, setRoles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [selectedRoleIds, setSelectedRoleIds] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [viewDrawerOpen, setViewDrawerOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [filterDepartment, setFilterDepartment] = useState("");
  const [filterRole, setFilterRole] = useState("");
  const [tableLoading, setTableLoading] = useState(false);
  const [statsData, setStatsData] = useState({
    total: 0,
    active: 0,
    inactive: 0,
    departments: 0,
  });

  const [form] = Form.useForm();
  const [editForm] = Form.useForm();

  const fetchUsers = async () => {
    setTableLoading(true);
    try {
      const users = await getUsers();
      setUsers(users);

      // Calculate statistics
      const uniqueDepts = [...new Set(users.map((u) => u.department))].filter(
        Boolean
      );
      setStatsData({
        total: users.length,
        active: users.filter((u) => u.status === "active").length,
        inactive: users.filter((u) => u.status === "inactive").length,
        departments: uniqueDepts.length,
      });
    } catch {
      message.error("Failed to load users");
    }
    setTableLoading(false);
  };

  const fetchRoles = async () => {
    try {
      const roles = await getRoles();
      setRoles(roles);
    } catch {
      message.error("Failed to load roles");
    }
  };

  useEffect(() => {
    fetchUsers();
    fetchRoles();
  }, []);

  // Utility functions
  const openAssignModal = (user) => {
    setSelectedUserId(user.id);
    setSelectedRoleIds(user.roles.map((r) => r.role.id));
    setModalOpen(true);
  };

  const openViewDrawer = (user) => {
    setSelectedUser(user);
    setViewDrawerOpen(true);
  };

  const openEditModal = (user) => {
    setSelectedUser(user);
    editForm.setFieldsValue({
      fullName: user.fullName,
      email: user.email,
      department: user.department,
      employeeId: user.employeeId,
      phone: user.phone || "",
      position: user.position || "",
      notes: user.notes || "",
    });
    setEditModalOpen(true);
  };

  const handleAssign = async () => {
    setLoading(true);
    try {
      await assignRolesToUser(selectedUserId, selectedRoleIds);
      message.success("Roles assigned successfully");
      setModalOpen(false);
      fetchUsers();
    } catch {
      message.error("Failed to assign roles");
    }
    setLoading(false);
  };

  const handleCreateUser = async () => {
    setLoading(true);
    try {
      const values = await form.validateFields();
      await createUser(values);
      message.success("User created successfully");
      setCreateModalOpen(false);
      form.resetFields();
      fetchUsers();
    } catch (err) {
      message.error("Failed to create user");
    }
    setLoading(false);
  };

  const handleEditUser = async () => {
    setLoading(true);
    try {
      const values = await editForm.validateFields();
      // await updateUser(selectedUser.id, values); // Implement this API
      message.success("User updated successfully");
      setEditModalOpen(false);
      editForm.resetFields();
      fetchUsers();
    } catch (err) {
      message.error("Failed to update user");
    }
    setLoading(false);
  };

  const handleDeleteUser = async (userId) => {
    setLoading(true);
    try {
      // await deleteUser(userId); // Implement this API
      message.success("User deleted successfully");
      fetchUsers();
    } catch {
      message.error("Failed to delete user");
    }
    setLoading(false);
  };

  // Filter functions
  const filteredUsers = users.filter((user) => {
    const matchSearch =
      user.fullName?.toLowerCase().includes(searchText.toLowerCase()) ||
      user.email?.toLowerCase().includes(searchText.toLowerCase()) ||
      user.employeeId?.toLowerCase().includes(searchText.toLowerCase());

    const matchDepartment = filterDepartment
      ? user.department === filterDepartment
      : true;
    const matchRole = filterRole
      ? user.roles?.some((r) => r.role.id === filterRole)
      : true;

    return matchSearch && matchDepartment && matchRole;
  });

  const uniqueDepartments = [
    ...new Set(users.map((user) => user.department)),
  ].filter(Boolean);

  // Clear filters function
  const handleClearFilters = () => {
    setSearchText("");
    setFilterDepartment("");
    setFilterRole("");
  };

  return (
    <div className="p-6 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 min-h-screen">
      {/* Statistics Cards */}
      <UserStatistics statsData={statsData} />

      {/* Main Content Card */}
      <Card
        className="shadow-lg border-0"
        style={{
          background: "rgba(255, 255, 255, 0.95)",
          backdropFilter: "blur(10px)",
          borderRadius: "16px",
        }}
      >
        {/* Header Section */}
        <UserHeader 
          filteredUsers={filteredUsers}
          onRefresh={fetchUsers}
          onCreateUser={() => setCreateModalOpen(true)}
        />

        {/* Search and Filter Section */}
        <UserSearchFilter 
          searchText={searchText}
          onSearchChange={setSearchText}
          filterDepartment={filterDepartment}
          onFilterDepartmentChange={setFilterDepartment}
          filterRole={filterRole}
          onFilterRoleChange={setFilterRole}
          uniqueDepartments={uniqueDepartments}
          roles={roles}
          filteredUsers={filteredUsers}
          totalUsers={users.length}
          onClearFilters={handleClearFilters}
        />

        {/* Table Section */}
        <UserTable 
          users={filteredUsers}
          loading={tableLoading}
          onViewUser={openViewDrawer}
          onEditUser={openEditModal}
          onAssignRoles={openAssignModal}
          onDeleteUser={handleDeleteUser}
          onCreateUser={() => setCreateModalOpen(true)}
        />
      </Card>

      {/* Assign Roles Modal */}
      <UserAssignRoleModal 
        open={modalOpen}
        onOk={handleAssign}
        onCancel={() => setModalOpen(false)}
        loading={loading}
        roles={roles}
        selectedRoleIds={selectedRoleIds}
        setSelectedRoleIds={setSelectedRoleIds}
      />

      {/* Create User Modal */}
      <UserCreateModal 
        open={createModalOpen}
        onOk={handleCreateUser}
        onCancel={() => setCreateModalOpen(false)}
        loading={loading}
        form={form}
        uniqueDepartments={uniqueDepartments}
      />

      {/* Edit User Modal */}
      <UserEditModal 
        open={editModalOpen}
        onOk={handleEditUser}
        onCancel={() => setEditModalOpen(false)}
        loading={loading}
        form={editForm}
      />

      {/* User Detail Drawer */}
      <UserDetailDrawer 
        open={viewDrawerOpen}
        onClose={() => setViewDrawerOpen(false)}
        selectedUser={selectedUser}
      />
    </div>
  );
}

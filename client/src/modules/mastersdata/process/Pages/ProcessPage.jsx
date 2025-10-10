import { useState, useEffect } from "react";
import { Form, message } from "antd";
import {
  getProcesses,
  createProcess,
  updateProcess,
  deleteProcess,
} from "../process.api";

// Import components
import ProcessBreadcrumb from "../components/ProcessBreadcrumb";
import ProcessHeader from "../components/ProcessHeader";
import ProcessStatistics from "../components/ProcessStatistics";
import ProcessFilters from "../components/ProcessFilters";
import ProcessTable from "../components/ProcessTable";
import ProcessModal from "../components/ProcessModal";

export default function ProcessPage() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [form] = Form.useForm();
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await getProcesses();
      // Mock data structure - adjust according to your API response
      const processData = response?.data || response || [];
      setData(processData);
      setFilteredData(processData);
    } catch (err) {
      message.error("Failed to load process data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Filter data based on search and status
  useEffect(() => {
    let filtered = data;
    
    if (searchText) {
      filtered = filtered.filter(item => 
        item.name?.toLowerCase().includes(searchText.toLowerCase()) ||
        item.code?.toLowerCase().includes(searchText.toLowerCase()) ||
        item.description?.toLowerCase().includes(searchText.toLowerCase())
      );
    }
    
    if (statusFilter !== "all") {
      if (statusFilter === "active") {
        filtered = filtered.filter(item => item.isActive === true);
      } else if (statusFilter === "inactive") {
        filtered = filtered.filter(item => item.isActive === false);
      }
    }
    
    setFilteredData(filtered);
  }, [data, searchText, statusFilter]);

  const handleSubmit = async (values) => {
    setLoading(true);
    try {
      if (editing) {
        await updateProcess(editing.id, values);
        message.success("Process updated successfully!");
      } else {
        await createProcess(values);
        message.success("Process created successfully!");
      }
      fetchData();
      setOpen(false);
      form.resetFields();
      setEditing(null);
    } catch (err) {
      message.error("Operation failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    setLoading(true);
    try {
      await deleteProcess(id);
      message.success("Process deleted successfully!");
      fetchData();
    } catch (err) {
      message.error("Failed to delete process");
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (record) => {
    setEditing(record);
    form.setFieldsValue(record);
    setOpen(true);
  };

  const handleAdd = () => {
    setEditing(null);
    form.resetFields();
    setOpen(true);
  };

  const handleCancel = () => {
    setOpen(false);
    form.resetFields();
    setEditing(null);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <ProcessBreadcrumb />
      
      <ProcessHeader 
        onAdd={handleAdd}
        loading={loading}
      />

      <ProcessStatistics data={data} />

      <ProcessFilters
        searchText={searchText}
        onSearchChange={setSearchText}
        statusFilter={statusFilter}
        onStatusChange={setStatusFilter}
        filteredCount={filteredData.length}
        totalCount={data.length}
        onRefresh={fetchData}
        loading={loading}
      />

      <ProcessTable
        data={filteredData}
        loading={loading}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      <ProcessModal
        open={open}
        editing={editing}
        form={form}
        loading={loading}
        onCancel={handleCancel}
        onSubmit={handleSubmit}
      />
    </div>
  );
}

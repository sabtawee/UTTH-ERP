import { useState, useEffect } from "react";
import { Card, message, Modal } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import ProductBreadcrumb from "../components/ProductBreadcrumb";
import ProductHeader from "../components/ProductHeader";
import ProductStatistics from "../components/ProductStatistics";
import ProductFilters from "../components/ProductFilters";
import ProductTable from "../components/ProductTable";
import ProductModal from "../components/ProductModal";
import ProductDetailDrawer from "../components/ProductDetailDrawer";
import { getProducts, createProduct, updateProduct, deleteProduct } from "../product.api";

const { confirm } = Modal;

export default function ProductPage() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [modalVisible, setModalVisible] = useState(false);
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [statistics, setStatistics] = useState({
    total: 0,
    active: 0,
    inactive: 0,
    lowStock: 0
  });
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
    total: 0,
  });

  // Initialize data
  useEffect(() => {
    loadProducts();
  }, []);

  // Filter products based on search and status
  useEffect(() => {
    let filtered = products || [];

    if (searchText) {
      filtered = filtered.filter(
        (product) =>
          product.name.toLowerCase().includes(searchText.toLowerCase()) ||
          product.partNo.toLowerCase().includes(searchText.toLowerCase()) ||
          (product.customer && product.customer.toLowerCase().includes(searchText.toLowerCase()))
      );
    }

    if (statusFilter !== "all") {
      const isActive = statusFilter === "active";
      filtered = filtered.filter((product) => product.isActive === isActive);
    }

    setFilteredProducts(filtered);
    setPagination(prev => ({
      ...prev,
      total: filtered.length,
      current: 1
    }));
  }, [products, searchText, statusFilter]);

  const loadProducts = async () => {
    setLoading(true);
    try {
      const result = await getProducts();
      setProducts(result);
      calculateStatistics(result);
      // message.success("Products loaded successfully");
    } catch (error) {
      console.error("Load products error:", error);
      message.error("Failed to load products");
    } finally {
      setLoading(false);
    }
  };

  const calculateStatistics = (productList) => {
    const list = productList || [];
    const stats = {
      total: list.length,
      active: list.filter(p => p.isActive === true).length,
      inactive: list.filter(p => p.isActive === false).length,
      lowStock: 0 // Remove this since there's no stock field in the schema
    };
    setStatistics(stats);
  };

  const handleAddProduct = () => {
    setEditingProduct(null);
    setModalVisible(true);
  };

  const handleEditProduct = (product) => {
    setEditingProduct(product);
    setModalVisible(true);
  };

  const handleDeleteProduct = (product) => {
    confirm({
      title: "Delete Product",
      icon: <ExclamationCircleOutlined />,
      content: `Are you sure you want to delete "${product.name}"?`,
      okText: "Yes, Delete",
      okType: "danger",
      cancelText: "Cancel",
      onOk: async () => {
        try {
          await deleteProduct(product.id);
          await loadProducts(); // Reload the products from API
          message.success("Product deleted successfully");
        } catch (error) {
          console.error("Delete product error:", error);
          message.error("Failed to delete product");
        }
      },
    });
  };

  const handleViewProduct = (product) => {
    setSelectedProduct(product);
    setDrawerVisible(true);
  };

  const handleModalSubmit = async (values) => {
    setLoading(true);
    try {
      if (editingProduct) {
        // Update existing product
        await updateProduct(editingProduct.id, values);
        message.success("Product updated successfully");
      } else {
        // Create new product
        await createProduct(values);
        message.success("Product created successfully");
      }

      // Reload products from API after create/update
      await loadProducts();
      setModalVisible(false);
      setEditingProduct(null);
    } catch (error) {
      console.error("Save product error:", error);
      message.error("Failed to save product");
    } finally {
      setLoading(false);
    }
  };

  const handleImport = () => {
    message.info("Import functionality will be implemented soon");
  };

  const handleExport = () => {
    message.info("Export functionality will be implemented soon");
  };

  const handlePageChange = (page, pageSize) => {
    setPagination({
      current: page,
      pageSize: pageSize,
      total: filteredProducts?.length || 0,
    });
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <ProductBreadcrumb />
      
      <ProductHeader
        onAddProduct={handleAddProduct}
        onImport={handleImport}
        onExport={handleExport}
      />

      <ProductStatistics statistics={statistics} />

      <ProductFilters
        searchText={searchText}
        onSearchChange={setSearchText}
        statusFilter={statusFilter}
        onStatusChange={setStatusFilter}
        filteredCount={filteredProducts?.length || 0}
        totalCount={products?.length || 0}
        onRefresh={loadProducts}
        loading={loading}
      />

      <Card className="shadow-sm">
        <ProductTable
          products={(filteredProducts || []).slice(
            (pagination.current - 1) * pagination.pageSize,
            pagination.current * pagination.pageSize
          )}
          loading={loading}
          pagination={pagination}
          onPageChange={handlePageChange}
          onEdit={handleEditProduct}
          onDelete={handleDeleteProduct}
          onView={handleViewProduct}
        />
      </Card>

      <ProductModal
        visible={modalVisible}
        onCancel={() => {
          setModalVisible(false);
          setEditingProduct(null);
        }}
        onSubmit={handleModalSubmit}
        editingProduct={editingProduct}
        loading={loading}
      />

      <ProductDetailDrawer
        visible={drawerVisible}
        onClose={() => setDrawerVisible(false)}
        product={selectedProduct}
      />
    </div>
  );
}

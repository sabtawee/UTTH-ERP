import { Card, Typography, Button } from "antd";
import { ShopOutlined, PlusOutlined, ImportOutlined, ExportOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

export default function ProductHeader({ onAddProduct, onImport, onExport, loading }) {
  return (
    <Card className="mb-6 shadow-sm">
      <div className="flex justify-between items-center">
        <div>
          <Title level={2} className="mb-2">
            <ShopOutlined className="mr-2" />
            Product Management
          </Title>
          <Text type="secondary">
            Manage and configure product catalog in your manufacturing system
          </Text>
        </div>
        <div className="flex gap-2">
          <Button 
            icon={<ImportOutlined />} 
            size="large"
            onClick={onImport}
          >
            Import
          </Button>
          <Button 
            icon={<ExportOutlined />} 
            size="large"
            onClick={onExport}
          >
            Export
          </Button>
          <Button
            type="primary"
            icon={<PlusOutlined />}
            size="large"
            onClick={onAddProduct}
            loading={loading}
          >
            Add Product
          </Button>
        </div>
      </div>
    </Card>
  );
}

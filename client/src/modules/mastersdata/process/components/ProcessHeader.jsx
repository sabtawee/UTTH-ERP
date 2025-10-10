import { Card, Typography, Button, message } from "antd";
import {
  GlobalOutlined,
  PlusOutlined,
  ImportOutlined,
  ExportOutlined,
} from "@ant-design/icons";

const { Title, Text } = Typography;

export default function ProcessHeader({ onAdd, loading }) {
  const handleImport = () => {
    message.info("Import functionality is not implemented yet.");
  };

  const handleExport = () => {
    message.info("Export functionality is not implemented yet.");
  };

  return (
    <Card className="mb-6 shadow-sm">
      <div className="flex justify-between items-center">
        <div>
          <Title level={2} className="mb-2">
            <GlobalOutlined className="mr-2" />
            Process Management
          </Title>
          <Text type="secondary">
            Manage and configure manufacturing processes in your system
          </Text>
        </div>
        <div className="flex gap-2">
          <Button icon={<ImportOutlined />} size="large" onClick={handleImport}>
            Import
          </Button>
          <Button icon={<ExportOutlined />} size="large" onClick={handleExport}>
            Export
          </Button>
          <Button
            type="primary"
            icon={<PlusOutlined />}
            size="large"
            onClick={onAdd}
            loading={loading}
          >
            Add Process
          </Button>
        </div>
      </div>
    </Card>
  );
}

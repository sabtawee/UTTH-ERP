import { Breadcrumb } from "antd";
import { HomeOutlined, GlobalOutlined } from "@ant-design/icons";

export default function ProcessBreadcrumb() {
  return (
    <Breadcrumb className="mb-4">
      <Breadcrumb.Item>
        <HomeOutlined />
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <GlobalOutlined />
        <span>Master Information</span>
      </Breadcrumb.Item>
      <Breadcrumb.Item>Process Management</Breadcrumb.Item>
    </Breadcrumb>
  );
}

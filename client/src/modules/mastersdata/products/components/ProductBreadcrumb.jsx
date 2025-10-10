import { Breadcrumb } from "antd";
import { HomeOutlined, GlobalOutlined } from "@ant-design/icons";

export default function ProductBreadcrumb() {
  return (
    <Breadcrumb className="mb-4">
      <Breadcrumb.Item>
        <HomeOutlined />
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <GlobalOutlined />
        <span>Master Information</span>
      </Breadcrumb.Item>
      <Breadcrumb.Item>Product Management</Breadcrumb.Item>
    </Breadcrumb>
  );
}

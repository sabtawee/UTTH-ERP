import { Drawer, Descriptions, Tag, Divider } from "antd";

export default function ProductDetailDrawer({
  visible,
  onClose,
  product
}) {
  if (!product) return null;

  return (
    <Drawer
      title="Product Details"
      placement="right"
      onClose={onClose}
      open={visible}
      width={600}
    >
      <div className="space-y-6">
        {/* Basic Information */}
        <Descriptions title="Basic Information" bordered column={1}>
          <Descriptions.Item label="Part Number">
            <span className="font-mono font-medium">{product.partNo}</span>
          </Descriptions.Item>
          <Descriptions.Item label="Product Name">
            <span className="font-medium">{product.name}</span>
          </Descriptions.Item>
          <Descriptions.Item label="Customer">
            <span>{product.customer || "No customer specified"}</span>
          </Descriptions.Item>
          <Descriptions.Item label="Description">
            {product.description || "No description available"}
          </Descriptions.Item>
          <Descriptions.Item label="Status">
            <Tag color={product.isActive ? "green" : "red"}>
              {product.isActive ? "Active" : "Inactive"}
            </Tag>
          </Descriptions.Item>
        </Descriptions>

        <Divider />

        {/* Technical Information */}
        <Descriptions title="Technical Information" bordered column={1}>
          <Descriptions.Item label="Layer Count">
            <span className="font-mono font-medium text-lg">
              {product.layerCount ? `${product.layerCount} layers` : "Not specified"}
            </span>
          </Descriptions.Item>
          <Descriptions.Item label="Size">
            <span className="font-mono font-medium text-lg">
              {product.size || "Not specified"}
            </span>
          </Descriptions.Item>
        </Descriptions>

        <Divider />

        {/* Additional Information */}
        <Descriptions title="System Information" bordered column={1}>
          <Descriptions.Item label="Created Date">
            {product.createdAt ? new Date(product.createdAt).toLocaleDateString() : "N/A"}
          </Descriptions.Item>
          <Descriptions.Item label="Last Updated">
            {product.updatedAt ? new Date(product.updatedAt).toLocaleDateString() : "N/A"}
          </Descriptions.Item>
          <Descriptions.Item label="Created By">
            {product.createdBy || "System"}
          </Descriptions.Item>
          <Descriptions.Item label="Last Modified By">
            {product.updatedBy || "System"}
          </Descriptions.Item>
        </Descriptions>
      </div>
    </Drawer>
  );
}

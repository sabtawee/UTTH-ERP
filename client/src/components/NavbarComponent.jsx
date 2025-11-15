import React from "react";
import { useAuth } from "../core/context/AuthContext";
import {
  Layout,
  Avatar,
  Dropdown,
  Space,
  Typography,
  Button,
  Badge,
  Tag,
} from "antd";
import {
  UserOutlined,
  BellOutlined,
  SettingOutlined,
  LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  GlobalOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

import LanguageSwitcher from "../core/components/LanguageSwitcher";

const { Header } = Layout;
const { Text } = Typography;

export default function NavbarComponent({ collapsed, onCollapse, isMobile }) {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const userMenuItems = [
    {
      key: "profile",
      icon: <UserOutlined />,
      label: "Profile Settings",
      onClick: () => navigate("/profile"),
    },
    {
      key: "settings",
      icon: <SettingOutlined />,
      label: "Account Settings",
      onClick: () => navigate("/settings"),
    },
    {
      type: "divider",
    },
    {
      key: "logout",
      icon: <LogoutOutlined />,
      label: "Sign Out",
      onClick: handleLogout,
      danger: true,
    },
  ];

  return (
    <Header
      style={{
        background:
          "linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 250, 252, 0.95) 100%)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(0, 0, 0, 0.06)",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.06)",
        padding: isMobile ? "0 16px" : "0 24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: "64px",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      {/* Left Side - Logo and Title */}
      <div className="flex items-center space-x-2 md:space-x-4">
        {!isMobile && (
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={onCollapse}
            className="flex items-center justify-center w-8 h-8 hover:bg-gray-100 rounded-lg transition-colors"
          />
        )}

        {isMobile && (
          <Button
            type="text"
            icon={<MenuUnfoldOutlined />}
            onClick={() => onCollapse && onCollapse(false)}
            className="flex items-center justify-center w-8 h-8 hover:bg-gray-100 rounded-lg transition-colors"
          />
        )}

        <div className="flex items-center space-x-2 md:space-x-3">
          {!isMobile && (
            <div>
              <Text strong className="text-sm md:text-lg text-gray-800">
                UTTH-ERP
              </Text>
              <Tag color="blue" className="ml-2 text-xs hidden md:inline">
                Enterprise Resource Planning
              </Tag>
            </div>
          )}
        </div>
      </div>

      {/* Right Side - User Info and Actions */}
      <Space size={isMobile ? "small" : "middle"} className="flex items-center">
        {/* Notifications */}
        <Badge count={3} size="small">
          <Button
            type="text"
            icon={<BellOutlined />}
            className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 hover:bg-gray-100 rounded-lg transition-colors"
          />
        </Badge>
        <LanguageSwitcher />

        {/* User Info */}
        <div
          className={`flex items-center space-x-2 md:space-x-3 bg-white/60 backdrop-blur-sm rounded-lg px-2 md:px-4 py-2 border border-gray-200/50 ${
            isMobile ? "max-w-[120px]" : ""
          }`}
        >
          {!isMobile && (
            <div className="text-right hidden sm:block">
              <Text strong className="text-sm text-gray-800 block truncate">
                {user?.fullName || user?.user?.fullName || "User"}
              </Text>
            </div>
          )}

          <Dropdown
            menu={{ items: userMenuItems }}
            placement="bottomRight"
            trigger={["click"]}
            overlayStyle={{
              background: "rgba(255, 255, 255, 0.95)",
              backdropFilter: "blur(10px)",
              borderRadius: "12px",
              border: "1px solid rgba(0, 0, 0, 0.06)",
            }}
          >
            <Avatar
              size={isMobile ? 32 : 40}
              icon={<UserOutlined />}
              className="cursor-pointer bg-gradient-to-br from-blue-500 to-purple-600 hover:shadow-lg transition-shadow"
            />
          </Dropdown>
        </div>
      </Space>
    </Header>
  );
}

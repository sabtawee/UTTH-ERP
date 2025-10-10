import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useAuth } from "../core/context/AuthContext";
import { usePermission } from "../core/hooks/usePermission";
import { useSocketOnlineUsers, useSocket } from "../core/hooks/useSocket";
import {
  Menu,
  Layout,
  Avatar,
  Typography,
  Space,
  Badge,
  Progress,
  Drawer,
  Tooltip,
  Tag,
} from "antd";
import {
  UserOutlined,
  SafetyOutlined,
  CheckCircleOutlined,
  LogoutOutlined,
  DashboardOutlined,
  SettingOutlined,
  TeamOutlined,
  GlobalOutlined,
  BarChartOutlined,
  FileTextOutlined,
  WifiOutlined,
} from "@ant-design/icons";
import { useNavigate, useLocation } from "react-router-dom";
import { mt_processNav } from "../modules/mastersdata/process/process.routes";
import { mt_productNav } from "../modules/mastersdata/products/product.route";

const { Sider } = Layout;
const { Text } = Typography;

export default function SidebarComponent({ collapsed, onCollapse, isMobile }) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const online = useSocketOnlineUsers();
  const { socket, isConnected } = useSocket();
  const { logout, user } = useAuth();
  const hasPermission = usePermission();
  const [selectedKeys, setSelectedKeys] = useState([]);
  const [openKeys, setOpenKeys] = useState([]);

  // Update selected keys based on current path
  useEffect(() => {
    const path = location.pathname;

    if (path === "/") {
      setSelectedKeys(["dashboard"]);
    } else if (path === "/users") {
      setSelectedKeys(["users"]);
      setOpenKeys(["admin-management"]);
    } else if (path === "/roles") {
      setSelectedKeys(["roles"]);
      setOpenKeys(["admin-management"]);
    } else if (path === "/permissions") {
      setSelectedKeys(["permissions"]);
      setOpenKeys(["admin-management"]);
    } else if (path === "/reports") {
      setSelectedKeys(["reports"]);
    } else if (path === "/docs") {
      setSelectedKeys(["documentation"]);
    } else if (path === "/settings") {
      setSelectedKeys(["settings"]);
    } else if (path === "/master/process") {
      setSelectedKeys(["process"]);
      setOpenKeys(["master-information"]);
    } else if (path === "/master/product") {
      setSelectedKeys(["product"]);
      setOpenKeys(["master-information"]);
    } else if (path === "/basic/account") {
      setSelectedKeys(["account"]);
      setOpenKeys(["basic-information"]);
    }
  }, [location.pathname]);

  const menuItems = [
    {
      key: "dashboard",
      icon: <DashboardOutlined />,
      label: t("menu.dashboard"),
      onClick: () => navigate("/"),
    },
    hasPermission("Admin.view") && {
      key: "admin-management",
      icon: <SettingOutlined />,
      label: t("menu.admin"),
      children: [
        hasPermission("User.view") && {
          key: "users",
          icon: <UserOutlined />,
          label: t("admin_menu.user_management"),
          onClick: () => navigate("/users"),
        },
        hasPermission("Role.view") && {
          key: "roles",
          icon: <SafetyOutlined />,
          label: t("admin_menu.role_management"),
          onClick: () => navigate("/roles"),
        },
        hasPermission("Permission.view") && {
          key: "permissions",
          icon: <CheckCircleOutlined />,
          label: t("admin_menu.permission_management"),
          onClick: () => navigate("/permissions"),
        },
      ].filter(Boolean),
    },
    hasPermission("User.view") && {
      key: "master-information",
      icon: <GlobalOutlined />,
      label: t("menu.master"),
      children: [
        ...mt_processNav
          .map(
            (navItem) =>
              hasPermission(navItem.permission) && {
                ...navItem,
                label: t(`master_menu.${navItem.label}`),
                onClick: () => {
                  console.log(`Navigating to ${navItem.path}`);
                  navigate(navItem.path);
                },
              }
          )
          .filter(Boolean),
        ...mt_productNav
          .map(
            (navItem) =>
              hasPermission(navItem.permission) && {
                ...navItem,
                label: t(`master_menu.${navItem.label}`),
                onClick: () => {
                  console.log(`Navigating to ${navItem.path}`);
                  navigate(navItem.path);
                },
              }
          )
          .filter(Boolean),
      ],
    },
    hasPermission("User.view") && {
      key: "basic-information",
      icon: <FileTextOutlined />,
      label: t("menu.basic"),
      children: [
        // ...mt_processNav
        //   .map(
        //     (navItem) =>
        //       hasPermission(navItem.permission) && {
        //         ...navItem,
        //         label: t(`basic_info.${navItem.label}`),
        //         onClick: () => {
        //           console.log(`Navigating to ${navItem.path}`);
        //           navigate(navItem.path);
        //         },
        //       }
        //   )
        //   .filter(Boolean),
      ],
    },
    {
      type: "divider",
    },
    // {
    //   key: "settings",
    //   icon: <SettingOutlined />,
    //   label: "System Settings",
    //   onClick: () => {
    //     console.log("Navigating to /settings");
    //     navigate("/settings");
    //   },
    // },
    {
      key: "logout",
      icon: <LogoutOutlined />,
      danger: true,
      label: "Sign Out",
      onClick: () => {
        logout();
        navigate("/login");
      },
    },
  ].filter(Boolean);

  const SidebarContent = () => (
    <div className="h-full flex flex-col">
      {/* Logo Section */}
      <div className="flex-shrink-0">
        <div className="text-white p-4 rounded-xl">
          <div className="flex items-center justify-center">
            <div>
              {!collapsed ? (
                <>
                  <img src="/logo.gif" alt="UTTH MES Logo" className="h-8" />
                </>
              ) : (
                <>
                  <img
                    src="/prototype.ico"
                    className={`opacity-80 ${
                      collapsed
                        ? "mx-auto text-red-500"
                        : "mx-auto text-red-500"
                    }`}
                  />
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Menu */}
      <div className="flex-1 overflow-y-auto">
        <Menu
          theme="light"
          mode="inline"
          items={menuItems}
          selectedKeys={selectedKeys}
          openKeys={openKeys}
          onOpenChange={setOpenKeys}
          className="border-0 bg-transparent px-2"
          style={{
            fontSize: "14px",
            fontWeight: "500",
            height: "100%",
          }}
          inlineIndent={16}
        />
      </div>

      {/* Footer */}
      {!collapsed && (
        <div className="flex-shrink-0 p-4">
          <div className="text-center">
            <div className="text-xs text-gray-500 mb-1">
              UTTH Manufacturing Execution System
            </div>
            <div className="text-xs text-gray-400 mb-2">v0.0.0 • © 2025</div>

            {/* Online Status */}
            <div className="flex items-center justify-center space-x-2 text-xs"></div>

            {/* Online Users Count */}
            {isConnected && (
              <div className="mt-1 text-xs text-gray-500">
                <Tooltip title="Users currently online">
                  <span className="flex items-center justify-center space-x-1">
                    <UserOutlined />
                    <span>{online} users online</span>
                  </span>
                </Tooltip>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );

  // Mobile Drawer
  if (isMobile) {
    return (
      <Drawer
        title={
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <GlobalOutlined className="text-white text-xs" />
            </div>
            <span>UTTH-MES</span>
          </div>
        }
        placement="left"
        onClose={() => onCollapse(true)}
        open={!collapsed}
        width={280}
        styles={{
          body: { padding: 0 },
          header: {
            background:
              "linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 250, 252, 0.95) 100%)",
            borderBottom: "1px solid rgba(0, 0, 0, 0.06)",
          },
        }}
      >
        <div
          style={{
            background:
              "linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 250, 252, 0.95) 100%)",
            height: "100vh",
            position: "relative",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <SidebarContent />
        </div>
      </Drawer>
    );
  }

  // Desktop Sider
  return (
    <Sider
      theme="light"
      collapsible
      collapsed={collapsed}
      onCollapse={onCollapse}
      width={280}
      collapsedWidth={80}
      className="shadow-2xl border-r border-gray-200/20"
      style={{
        background:
          "linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 250, 252, 0.95) 100%)",
        backdropFilter: "blur(10px)",
        position: "relative",
        height: "100vh",
        overflow: "hidden",
      }}
      breakpoint="lg"
      onBreakpoint={(broken) => {
        if (broken && !collapsed) {
          onCollapse(true);
        }
      }}
    >
      <SidebarContent />
    </Sider>
  );
}

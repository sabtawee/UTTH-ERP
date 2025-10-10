import { Layout } from "antd";
import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import SidebarComponent from "../components/SidebarComponent";
import NavbarComponent from "../components/NavbarComponent";
import FooterComponent from "../components/FooterComponent";

const { Content } = Layout;

export default function MainLayout() {
  const [collapsed, setCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Handle responsive behavior
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      // Auto-collapse on mobile
      if (mobile && !collapsed) {
        setCollapsed(true);
      }
    };

    handleResize(); // Check initial size
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [collapsed]);

  const handleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout
      style={{
        background:
          "linear-gradient(135deg, rgba(240, 242, 247, 0.8) 0%, rgba(255, 255, 255, 0.9) 100%)",
        maxHeight: "100vh",
        overflow: "hidden",
      }}
    >
      <SidebarComponent
        collapsed={collapsed}
        onCollapse={setCollapsed}
        isMobile={isMobile}
      />
      <Layout className="site-layout">
        <NavbarComponent
          collapsed={collapsed}
          onCollapse={handleCollapse}
          isMobile={isMobile}
        />
        <Content
          style={{
            margin: isMobile ? "8px" : "16px",
            padding: isMobile ? "16px" : "24px",
            minHeight: "calc(100vh - 140px)",
            // fixed height

            height: "calc(100vh - 140px)",
            background:
              "linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 250, 252, 0.95) 100%)",
            backdropFilter: "blur(20px)",
            borderRadius: "12px",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            overflow: "auto",
          }}
        >
          <div className="responsive-content">
            <Outlet />
          </div>
        </Content>
        {/* <FooterComponent /> */}
      </Layout>
    </Layout>
  );
}

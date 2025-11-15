import { Dropdown, Button, Space, Typography, Badge, Tooltip } from "antd";
import { GlobalOutlined, CheckOutlined, DownOutlined } from "@ant-design/icons";
import i18n from "i18next";
import { useState, useEffect } from "react";

const { Text } = Typography;

export default function LanguageSwitcher() {
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language || "en");

  useEffect(() => {
    const handleLanguageChange = (lng) => {
      setCurrentLanguage(lng);
    };

    i18n.on('languageChanged', handleLanguageChange);
    return () => {
      i18n.off('languageChanged', handleLanguageChange);
    };
  }, []);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lang", lng);
    setCurrentLanguage(lng);
  };

  const languages = [
    {
      key: "en",
      label: "English",
      flag: "https://flagcdn.com/w40/us.png",
      nativeName: "English",
      flagAlt: "United States"
    },
    {
      key: "th", 
      label: "Thai",
      flag: "https://flagcdn.com/w40/th.png",
      nativeName: "ไทย",
      flagAlt: "Thailand"
    },
    {
      key: "zh",
      label: "Taiwanese (Traditional)",
      flag: "https://flagcdn.com/w40/tw.png",
      nativeName: "繁體中文",
      flagAlt: "Taiwan"
    }
  ];

  const currentLang = languages.find(lang => lang.key === currentLanguage) || languages[0];

  const menuItems = languages.map(lang => ({
    key: lang.key,
    label: (
      <div className="flex items-center justify-between px-3 py-2 hover:bg-blue-50 rounded-lg transition-all duration-200">
        <Space size={12}>
          <div 
            style={{ 
              width: '28px', 
              height: '20px', 
              borderRadius: '4px',
              overflow: 'hidden',
              border: '1px solid #e8e8e8',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
            }}
          >
            <img 
              src={lang.flag} 
              alt={lang.flagAlt}
              style={{ 
                width: '100%', 
                height: '100%', 
                objectFit: 'cover',
                display: 'block'
              }}
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'block';
              }}
            />
            <div 
              style={{ 
                display: 'none', 
                width: '100%', 
                height: '100%', 
                background: '#f0f0f0',
                fontSize: '12px',
                textAlign: 'center',
                lineHeight: '20px'
              }}
            >
              {lang.key.toUpperCase()}
            </div>
          </div>
          <div>
            <Text strong style={{ fontSize: '14px', color: '#2c3e50' }}>
              {lang.label}
            </Text>
            <br />
            <Text type="secondary" style={{ fontSize: '12px' }}>
              {lang.nativeName}
            </Text>
          </div>
        </Space>
        {currentLanguage === lang.key && (
          <CheckOutlined style={{ color: '#52c41a', fontSize: '16px' }} />
        )}
      </div>
    ),
    onClick: () => changeLanguage(lang.key)
  }));

  return (
    <Tooltip title="Switch Language" placement="bottom">
      <Dropdown
        menu={{ items: menuItems }}
        trigger={['click']}
        placement="bottomRight"
        overlayStyle={{
          minWidth: '220px',
          borderRadius: '12px',
          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
          border: '1px solid #e8e8e8',
          padding: '8px'
        }}
      >
        <Button
          type="text"
          style={{
            height: '40px',
            borderRadius: '8px',
            border: '1px solid #e8e8e8',
            transition: 'all 0.3s ease'
          }}
          className="hover:shadow-md hover:border-blue-400"
        >
          <Space>
            <Badge 
              count={0} 
              dot 
              style={{ backgroundColor: '#52c41a' }}
              offset={[6, -6]}
            >
              <GlobalOutlined 
                style={{ 
                  fontSize: '16px', 
                  color: '#1890ff' 
                }} 
              />
            </Badge>
            <div className="flex flex-col items-start">
              <div className="flex items-center space-x-2">
                <div 
                  style={{ 
                    width: '20px', 
                    height: '14px', 
                    borderRadius: '2px',
                    overflow: 'hidden',
                    border: '1px solid #d9d9d9',
                    boxShadow: '0 1px 2px rgba(0,0,0,0.1)'
                  }}
                >
                  <img 
                    src={currentLang.flag} 
                    alt={currentLang.flagAlt}
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'cover',
                      display: 'block'
                    }}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'block';
                    }}
                  />
                  <div 
                    style={{ 
                      display: 'none', 
                      width: '100%', 
                      height: '100%', 
                      background: '#f0f0f0',
                      fontSize: '8px',
                      textAlign: 'center',
                      lineHeight: '14px'
                    }}
                  >
                    {currentLang.key.toUpperCase()}
                  </div>
                </div>
                <Text 
                  strong 
                  style={{ 
                    fontSize: '13px', 
                    lineHeight: '1.2',
                    color: '#2c3e50'
                  }}
                >
                  {currentLang.nativeName}
                </Text>
              </div>
              <Text 
                type="secondary" 
                style={{ 
                  fontSize: '11px', 
                  lineHeight: '1.2'
                }}
              >
                Language
              </Text>
            </div>
            <DownOutlined 
              style={{ 
                fontSize: '12px', 
                color: '#8c8c8c',
                transition: 'transform 0.3s ease'
              }} 
            />
          </Space>
        </Button>
      </Dropdown>
    </Tooltip>
  );
}

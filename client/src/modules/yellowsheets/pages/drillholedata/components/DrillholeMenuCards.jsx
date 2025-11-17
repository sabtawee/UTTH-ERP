import React from 'react';
import { Card, Row, Col, Button, Typography } from 'antd';
import {
  PlusOutlined,
  EditOutlined,
  CheckCircleOutlined,
  DeleteOutlined,
  SearchOutlined
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const { Title, Paragraph } = Typography;

export default function DrillholeMenuCards() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const menuItems = [
    {
      key: 'search',
      title: t('yellowsheet.search_drillhole'),
      description: t('yellowsheet.search_drillhole_desc'),
      icon: <SearchOutlined style={{ fontSize: '48px', color: '#13c2c2' }} />,
      color: '#13c2c2',
      path: '/yellowsheets/yellowsheet/searchdrillhole',
      gradient: 'linear-gradient(135deg, #13c2c2, #36cfc9)'
    }, {
      key: 'add',
      title: t('yellowsheet.add_drillhole'),
      description: t('yellowsheet.add_drillhole_desc'),
      icon: <PlusOutlined style={{ fontSize: '48px', color: '#52c41a' }} />,
      color: '#52c41a',
      path: '/yellowsheets/yellowsheet/adddrillhole',
      gradient: 'linear-gradient(135deg, #52c41a, #73d13d)'
    },
    {
      key: 'edit',
      title: t('yellowsheet.edit_drillhole'),
      description: t('yellowsheet.edit_drillhole_desc'),
      icon: <EditOutlined style={{ fontSize: '48px', color: '#1890ff' }} />,
      color: '#1890ff',
      path: '/yellowsheets/yellowsheet/editdrillhole',
      gradient: 'linear-gradient(135deg, #1890ff, #40a9ff)'
    },

    {
      key: 'delete',
      title: t('yellowsheet.delete_drillhole'),
      description: t('yellowsheet.delete_drillhole_desc'),
      icon: <DeleteOutlined style={{ fontSize: '48px', color: '#ff4d4f' }} />,
      color: '#ff4d4f',
      path: '/yellowsheets/yellowsheet/deletedrillhole',
      gradient: 'linear-gradient(135deg, #ff4d4f, #ff7875)'
    },

    {
      key: 'check',
      title: t('yellowsheet.check_drillhole'),
      description: t('yellowsheet.check_drillhole_desc'),
      icon: <CheckCircleOutlined style={{ fontSize: '48px', color: '#722ed1' }} />,
      color: '#722ed1',
      path: '/yellowsheets/yellowsheet/checkdrillhole',
      gradient: 'linear-gradient(135deg, #722ed1, #9254de)'
    }
  ];

  const handleMenuClick = (path) => {
    navigate(path);
  };

  return (
    <div className="menu-cards-container">
      <Row gutter={[32, 32]} justify="center" align="stretch">
        {menuItems.map((item, index) => (
          <Col xs={24} sm={12} lg={8} xl={4} key={item.key}>
            <div
              className="menu-card-wrapper"
              style={{
                height: '100%',
                perspective: '1000px',
                animationDelay: `${index * 0.1}s`
              }}
            >
              <Card
                hoverable
                className="menu-card h-full border-0 overflow-hidden"
                style={{
                  borderRadius: '24px',
                  background: 'linear-gradient(145deg, rgba(255,255,255,0.9), rgba(248,250,252,0.8))',
                  backdropFilter: 'blur(20px)',
                  cursor: 'pointer',
                  transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.1), 0 2px 8px rgba(0,0,0,0.05)'
                }}
                onClick={() => handleMenuClick(item.path)}
                bodyStyle={{
                  padding: '32px 24px',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                {/* Decorative Elements */}
                <div
                  className="absolute top-0 left-0 w-full h-1"
                  style={{
                    background: item.gradient,
                    borderRadius: '24px 24px 0 0'
                  }}
                />

                <div className="text-center flex-grow flex flex-col justify-center">
                  {/* Icon Section with Animation */}
                  <div className="icon-container mb-6 relative">
                    <div
                      className="icon-background"
                      style={{
                        width: '100px',
                        height: '100px',
                        borderRadius: '50%',
                        background: `linear-gradient(135deg, ${item.color}15, ${item.color}25)`,
                        border: `2px solid ${item.color}20`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto',
                        position: 'relative',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      {/* Animated Ring */}
                      <div
                        className="icon-ring"
                        style={{
                          position: 'absolute',
                          width: '120px',
                          height: '120px',
                          border: `3px solid ${item.color}30`,
                          borderRadius: '50%',
                          top: '-10px',
                          left: '-10px',
                          animation: 'pulse 2s infinite'
                        }}
                      />

                      {React.cloneElement(item.icon, {
                        style: {
                          fontSize: '48px',
                          color: item.color,
                          filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))'
                        }
                      })}
                    </div>
                  </div>

                  {/* Title with Gradient Text */}
                  <Title
                    level={4}
                    style={{
                      marginBottom: '16px',
                      fontSize: '18px',
                      fontWeight: '700',
                      background: item.gradient,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text'
                    }}
                  >
                    {item.title}
                  </Title>

                  {/* Description */}
                  <Paragraph
                    style={{
                      color: '#64748b',
                      fontSize: '14px',
                      lineHeight: '1.6',
                      marginBottom: '24px',
                      minHeight: '60px',
                      display: 'flex',
                      alignItems: 'center'
                    }}
                  >
                    {item.description}
                  </Paragraph>
                </div>

                {/* Action Button with Hover Effects */}
                <div className="action-section">
                  <Button
                    type="primary"
                    size="large"
                    block
                    className="action-button"
                    style={{
                      background: item.gradient,
                      border: 'none',
                      borderRadius: '16px',
                      height: '48px',
                      fontWeight: '600',
                      fontSize: '15px',
                      boxShadow: `0 4px 20px ${item.color}40`,
                      transition: 'all 0.3s ease',
                      position: 'relative',
                      overflow: 'hidden'
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleMenuClick(item.path);
                    }}
                  >
                    <span style={{ position: 'relative', zIndex: 2 }}>
                      {t('yellowsheet.get_started')}
                    </span>
                  </Button>
                </div>
              </Card>
            </div>
          </Col>
        ))}
      </Row>

      <style jsx>{`
        .menu-cards-container {
          padding: 20px 0;
        }
        
        .menu-card-wrapper {
          animation: fadeInUp 0.6s ease-out both;
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.05);
          }
        }
        
        .menu-card:hover {
          transform: translateY(-12px) scale(1.02);
          box-shadow: 0 20px 60px rgba(0,0,0,0.15), 0 8px 20px rgba(0,0,0,0.1) !important;
        }
        
        .menu-card:hover .icon-background {
          transform: scale(1.1);
          box-shadow: 0 8px 30px rgba(0,0,0,0.2);
        }
        
        .menu-card:hover .icon-ring {
          animation: pulse 1s infinite;
        }
        
        .action-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(0,0,0,0.3) !important;
        }
        
        .action-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          transition: left 0.5s;
        }
        
        .action-button:hover::before {
          left: 100%;
        }
        
        @media (max-width: 768px) {
          .menu-card {
            margin-bottom: 16px;
          }
          
          .icon-background {
            width: 80px !important;
            height: 80px !important;
          }
          
          .icon-ring {
            width: 100px !important;
            height: 100px !important;
            top: -10px !important;
            left: -10px !important;
          }
        }
      `}</style>
    </div>
  );
}
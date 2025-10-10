import { useState, useEffect } from "react";
import { Input, Button, Card, message, Spin } from "antd";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

// Beautiful Login Loading Component
const LoginLoading = () => {
  const [loadingText, setLoadingText] = useState("Preparing system...");

  useEffect(() => {
    const messages = [
      "Preparing system...",
      "Loading components...",
      "Connecting to server...",
      "Checking permissions...",
      "Almost ready...",
    ];

    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % messages.length;
      setLoadingText(messages[index]);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="text-center auth-loading-container">
        <div className="mb-8">

          <h1 className="text-4xl font-bold text-gray-800 mb-3 animate-pulse">
            UTTH MES
          </h1>
          <p className="text-lg text-gray-600 mb-2">
            Manufacturing Execution System
          </p>
          <p className="text-sm text-gray-500 h-6">{loadingText}</p>
        </div>

        <div className="relative">
          <Spin size="large" className="custom-spin" />
          <div className="mt-6">
            <div className="flex justify-center space-x-2 mb-4">
              <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"></div>
              <div
                className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"
                style={{ animationDelay: "0.1s" }}
              ></div>
              <div
                className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"
                style={{ animationDelay: "0.2s" }}
              ></div>
            </div>
            <p className="text-gray-500 text-sm animate-pulse">
              Please wait a moment...
            </p>
          </div>
        </div>

        <div className="mt-8 text-xs text-gray-400">
          <div className="mb-2">Loading system components</div>
          <div className="w-64 mx-auto bg-gray-200 rounded-full h-2">
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full animate-progress"></div>
          </div>
        </div>

        <div className="mt-6 text-xs text-gray-400">
          Version 1.0.0 | Powered by UTTH
        </div>
      </div>
    </div>
  );
};

export default function LoginPage() {
  const { login, isLoading } = useAuth();
  const [email, setEmail] = useState("superadmin@yourdomain.com");
  const [password, setPassword] = useState("SuperSecret123");
  const [submitting, setSubmitting] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const navigate = useNavigate();

  // When component mounts, show loading for 5 seconds first
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoginForm(true);
    }, 5000); // 5 seconds

    return () => clearTimeout(timer);
  }, []);

  // If it's not time to show the form yet, show loading
  if (!showLoginForm) {
    return <LoginLoading />;
  }

  const handleSubmit = async () => {
    if (!email || !password) {
      message.warning("Please enter email and password");
      return;
    }

    setSubmitting(true);

    // Add loading for visual appeal
    await new Promise((resolve) => setTimeout(resolve, 500)); // Wait 0.5 seconds

    try {
      await login(email, password);
      

      // Add slight delay before going to main page
      setTimeout(() => {
        navigate("/");
        message.success("Login successful");
      }, 5000);
    } catch (err) {
      message.error("Login failed. Please check your email and password");
    } finally {
      setSubmitting(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !submitting && !isLoading) {
      handleSubmit();
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="w-full max-w-md mx-4 animate-fadeIn">
        <div className="text-center mb-8">
          <div className="w-20 h-20 mx-auto mb-4 relative">
            <img
              src="/logo.gif"
              alt="UTTH MES"
              className="w-full h-full object-contain"
            />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">UTTH MES</h1>
          <p className="text-gray-600">Manufacturing Execution System</p>
        </div>

        <Card
          title={
            <div className="text-center">
              <span className="text-lg font-semibold">Login</span>
            </div>
          }
          className="shadow-lg border-0 animate-slideUp"
          style={{
            background: "rgba(255, 255, 255, 0.95)",
            backdropFilter: "blur(10px)",
            borderRadius: "16px",
          }}
        >
          <Input
            placeholder="Email"
            className="mb-4 h-12"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyPress={handleKeyPress}
            disabled={submitting || isLoading}
          />
          <Input.Password
            placeholder="Password"
            className="mb-6 h-12"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyPress={handleKeyPress}
            disabled={submitting || isLoading}
          />
          <Button
            type="primary"
            block
            size="large"
            onClick={handleSubmit}
            loading={submitting || isLoading}
            className="h-12 text-base font-medium"
            style={{
              background: "linear-gradient(45deg, #3b82f6, #8b5cf6)",
              border: "none",
              borderRadius: "8px",
            }}
          >
            {submitting || isLoading ? "Logging in..." : "Login"}
          </Button>

          <div className="text-center mt-6 text-xs text-gray-400">
            Version 1.0.0 | © 2025 UTTH. All rights reserved.
          </div>
        </Card>
      </div>
    </div>
  );
}

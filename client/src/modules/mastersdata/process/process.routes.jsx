import ProcessPage from "./Pages/ProcessPage";
import ProtectedRoute from "../../../core/components/ProtectedRoute";
import { GlobalOutlined } from "@ant-design/icons";


export const mt_processRoutes = [
  {
    path: "process",
    element: (
      <ProtectedRoute requirePerm="Process.view">
        <ProcessPage />
      </ProtectedRoute>
    ),
  },
];

export const mt_processNav = [
  {
    key: "process",
    icon: <GlobalOutlined />,
    label: "process_management",
    path: "/master/process",
    permission: "User.view"
  },
];

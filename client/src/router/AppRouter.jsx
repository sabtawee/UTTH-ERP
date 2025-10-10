import { createBrowserRouter, Navigate } from 'react-router-dom';
import LoginPage from '../core/auth/LoginPage';
import DashboardPage from '../pages/DashboardPage';
import SettingsPage from '../pages/SettingsPage';
import UsersPage from '../core/user/UserPage';
import RolesPage from '../core/role/RolePage';
import PermissionsPage from '../core/permission/PermissionPage';
import ProtectedRoute from '../core/components/ProtectedRoute';
import MainLayout from '../layouts/MainLayout';
import { mt_processRoutes } from '../modules/mastersdata/process/process.routes';
import { mt_productRoutes } from '../modules/mastersdata/products/product.route';

const AppRouter = createBrowserRouter([
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/',
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
      {
        path: 'users',
        element: (
          <ProtectedRoute requirePerm="User.view">
            <UsersPage />
          </ProtectedRoute>
        ),
      },
      {
        path: 'roles',
        element: (
          <ProtectedRoute requirePerm="Role.view">
            <RolesPage />
          </ProtectedRoute>
        ),
      },
      {
        path: 'permissions',
        element: (
          <ProtectedRoute requirePerm="Permission.view">
            <PermissionsPage />
          </ProtectedRoute>
        ),
      },
      // Process Management routes from external module
      ...mt_processRoutes.map(route => ({
        path: `master/${route.path}`,
        element: route.element,
      })),
      ...mt_productRoutes.map(route => ({
        path: `master/${route.path}`,
        element: route.element,
      })),
      {
        path: 'settings',
        element: <SettingsPage />,
      },
    ],
  },
  {
    path: '*',
    element: <Navigate to="/" />,
  },
]);

export default AppRouter;

import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { usePermission } from '../hooks/usePermission';

/**
 * @param children - React element
 * @param requirePerm - optional string (e.g. 'User.view')
 */
export default function ProtectedRoute({ children, requirePerm }) {
  const { user } = useAuth();
  const hasPermission = usePermission();

  if (!user) return <Navigate to="/login" />;

  if (requirePerm && !hasPermission(requirePerm)) {
    return <div className="p-6 text-red-500">403 - Permission Denied</div>;
  }

  return children;
}
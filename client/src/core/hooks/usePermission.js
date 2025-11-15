import { useAuth } from '../context/AuthContext';

export function usePermission() {
  const { user } = useAuth();
  return (perm) => {
    if (!user) return false;
    // SUPER_ADMIN มี '*.*'
    return (
      user.permissions?.includes(perm) ||
      user.permissions?.includes('*.*')
    );
  };
}

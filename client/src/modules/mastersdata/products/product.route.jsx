import ProductPage from './Pages/ProductPage';
import ProtectedRoute from '../../../core/components/ProtectedRoute';
import { DatabaseOutlined } from '@ant-design/icons';

export const mt_productRoutes = [
  {
    path: 'product',
    element: (
      <ProtectedRoute requirePerm="Product.view">
        <ProductPage />
      </ProtectedRoute>
    ),
  },
];

export const mt_productNav = [
  {
    key: 'product',
    icon: <DatabaseOutlined />,
    label: 'product_management',
    path: '/master/product',
    permission: 'Product.view',
  },
];

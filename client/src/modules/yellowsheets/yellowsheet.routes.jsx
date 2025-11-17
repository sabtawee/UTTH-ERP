import YellowssheetPage from './pages/YellowsheetPage';
import ProtectedRoute from '../../core/components/ProtectedRoute';
import { FileTextOutlined } from '@ant-design/icons';
import DrillholedataPage from './pages/drillholedata/DrillholedataPage';
import AdddrillholePage from './pages/drillholedata/AdddrillholePage';
import EditdrillholePage from './pages/drillholedata/EditdrillholePage';
import CheckdrillholePage from './pages/drillholedata/CheckdrillholePage';
import SearchdrillholePage from './pages/drillholedata/SearchdrillholePage';

export const yellowsheetRoutes = [
    {
        path : 'yellowsheet',
        children : [
            {
                path : '',
                element : (
                    <ProtectedRoute requirePerm="User.view">
                        <DrillholedataPage />
                    </ProtectedRoute>
                ),
            },
            {
                path : 'adddrillhole',
                element : (
                    <ProtectedRoute requirePerm="User.view">
                        <AdddrillholePage />
                    </ProtectedRoute>
                ),
            },
            {
                path : 'editdrillhole',
                element : (
                    <ProtectedRoute requirePerm="User.view">
                        <EditdrillholePage />
                    </ProtectedRoute>
                ),
            },
            {
                path : 'checkdrillhole',
                element : (
                    <ProtectedRoute requirePerm="User.view">
                        <CheckdrillholePage />
                    </ProtectedRoute>
                ),
            },
            {
                path : 'searchdrillhole',
                element : (
                    <ProtectedRoute requirePerm="User.view">
                        <SearchdrillholePage />
                    </ProtectedRoute>
                ),
            }
        ],
    },
    {
        path : 'parameter-maintenance',
        element : (
            <ProtectedRoute requirePerm="User.view">
                <YellowssheetPage />
            </ProtectedRoute>
        ),
    },
    {
        path : 'report-management',
        element : (
            <ProtectedRoute requirePerm="User.view">
                <YellowssheetPage />
            </ProtectedRoute>
        ),
    },
];

export const yellowsheetNav = [
    {
        key : 'yellowsheet',
        icon : <FileTextOutlined />,
        label : 'yellowdrillholedata_management',
        path : '/yellowsheets/yellowsheet',
        permission : 'Yellowsheet.view'
    },
    {
        key : 'parameter-maintenance',
        icon : <FileTextOutlined />,
        label : 'parameter_maintenance',
        path : '/yellowsheets/parameter-maintenance',
        permission : 'Yellowsheet.view'
    },
    {
        key : 'report-management',
        icon : <FileTextOutlined />,
        label : 'report_management',
        path : '/yellowsheets/report-management',
        permission : 'Yellowsheet.view'
    },
];
import YellowssheetPage from './pages/YellowsheetPage';
import ProtectedRoute from '../../core/components/ProtectedRoute';
import { FileTextOutlined } from '@ant-design/icons';
import DrillholedataPage from './pages/drillholedata/DrillholedataPage';
import AdddrillholePage from './pages/drillholedata/AdddrillholePage';
import EditdrillholePage from './pages/drillholedata/EditdrillholePage';
import CheckdrillholePage from './pages/drillholedata/CheckdrillholePage';
import SearchdrillholePage from './pages/drillholedata/SearchdrillholePage';
import ViewdrillholePage from './pages/drillholedata/ViewdrillholePage';
import ReportholePage from './pages/reportholedatas/ReportholePage';

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
            },
            {
                path : 'view/:id',
                element : (
                    <ProtectedRoute requirePerm="User.view">
                        <ViewdrillholePage />
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
                <ReportholePage />
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
        permission : ''
    },
    {
        key : 'parameter-maintenance',
        icon : <FileTextOutlined />,
        label : 'parameter_maintenance',
        path : '/yellowsheets/parameter-maintenance',
        permission : ''
    },
    {
        key : 'report-management',
        icon : <FileTextOutlined />,
        label : 'report_management',
        path : '/yellowsheets/report-management',
        permission : ''
    },
];
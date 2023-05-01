import { screen } from '@testing-library/react';
import {
    getRouteAbout,
    getRouteAdminPanel,
    getRouteProfile,
} from '@/shared/constants/router';
import { componentRender } from '@/shared/lib/tests/componentRender/componentRender';
import AppRouter from './AppRouter';
import { UserRole } from '@/entities/User';

describe('app/router/ui/AppRouter', () => {
    test('Page must be rendered', async () => {
        componentRender(<AppRouter />, {
            route: getRouteAbout(),
        });
        const page = await screen.findByTestId('AboutPage');
        expect(page).toBeInTheDocument();
    });

    test('Page not found', async () => {
        componentRender(<AppRouter />, {
            route: '/zzz300303',
        });
        const page = await screen.findByTestId('NotFoundPage');
        expect(page).toBeInTheDocument();
    });

    test('Unauthorized user must be redirected to MainPage', async () => {
        componentRender(<AppRouter />, {
            route: getRouteProfile('1'),
        });
        const page = await screen.findByTestId('MainPage');
        expect(page).toBeInTheDocument();
    });

    test('Access to private page only authorized user has', async () => {
        componentRender(<AppRouter />, {
            route: getRouteProfile('1'),
            initialState: {
                user: { _inited: true, authData: {} },
            },
        });
        const page = await screen.findByTestId('ProfilePage');
        expect(page).toBeInTheDocument();
    });

    test('Access is denied (must have the role)', async () => {
        componentRender(<AppRouter />, {
            route: getRouteAdminPanel(),
            initialState: {
                user: { _inited: true, authData: { roles: [UserRole.USER] } },
            },
        });
        const page = await screen.findByTestId('ForbiddenPage');
        expect(page).toBeInTheDocument();
    });

    test('Access is allowed (you have the role)', async () => {
        componentRender(<AppRouter />, {
            route: getRouteAdminPanel(),
            initialState: {
                user: { _inited: true, authData: { roles: [UserRole.ADMIN] } },
            },
        });
        const page = await screen.findByTestId('AdminPanelPage');
        expect(page).toBeInTheDocument();
    });
});

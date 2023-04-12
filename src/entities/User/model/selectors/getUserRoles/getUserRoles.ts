import { createSelector } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { UserRole } from '../../constants/userConstants';

export const getUserRoles = (state: StateSchema) => state.user.authData?.roles;

export const isAdminSelector = createSelector(
    getUserRoles,
    (roles) => Boolean(roles?.includes(UserRole.ADMIN)),
);

export const isManagerSelector = createSelector(
    getUserRoles,
    (roles) => Boolean(roles?.includes(UserRole.MANAGER)),
);

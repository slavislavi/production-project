import { FeatureFlags } from '@/shared/types/featureFlags';
import { UserRole } from '../constants/userConstants';
import { JsonSettings } from './jsonSettings';

export interface User {
    id: string;
    username: string;
    avatar?: string;
    roles?: UserRole[];
    features?: FeatureFlags;
    jsonSettings?: JsonSettings;
}

export interface UserSchema {
    authData?: User;
    _inited: boolean;
}

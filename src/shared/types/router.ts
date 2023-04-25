import { RouteProps } from 'react-router-dom';
// eslint-disable-next-line slavio-fsd-plugin/fsd-layer-imports
import { UserRole } from '@/entities/User';

export type AppRoutesProps = RouteProps & {
    authOnly?: boolean;
    roles?: UserRole[];
}

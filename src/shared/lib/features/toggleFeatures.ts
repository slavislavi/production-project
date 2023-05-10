import { FeatureFlags } from '@/shared/types/featureFlags';
import { getFeatureFlags } from './featureFlagsController';

interface ToggleFeaturesOptions<T> {
    name: keyof FeatureFlags;
    on: () => T;
    off: () => T;
}

export function toggleFeatures<T>({ name, on, off }: ToggleFeaturesOptions<T>): T {
    if (getFeatureFlags(name)) {
        return on();
    }

    return off();
}

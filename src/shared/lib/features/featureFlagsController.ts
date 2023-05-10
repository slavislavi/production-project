import { FeatureFlags } from '@/shared/types/featureFlags';

// Feature flags will not be changed during the session. They don't need to be reactive.
let featureFlags: FeatureFlags;

export function setFeatureFlags(newFeatureFlags?: FeatureFlags) {
    if (newFeatureFlags) {
        featureFlags = newFeatureFlags;
    }
}

export function getFeatureFlags(flag: keyof FeatureFlags) {
    return featureFlags[flag];
}

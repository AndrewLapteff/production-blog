import { FeatureFlags } from 'shared/types/features'

let featureFlags: FeatureFlags

export const setFeatureFlags = (flags?: FeatureFlags) => {
  if (!flags) {
    return
  }
  featureFlags = flags
}

export const getFeatureFlags = (name: keyof FeatureFlags) => {
  if (!featureFlags || !featureFlags[name]) {
    return false
  }
  return featureFlags[name]
}

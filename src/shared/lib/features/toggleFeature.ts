import { ToggleFeatureProps } from 'shared/types/features'
import { getFeatureFlags } from './featureFlags'

export function toggleFeature<T>({ name, on, off }: ToggleFeatureProps<T>): T {
  const isFeatureOn = getFeatureFlags(name)
  return isFeatureOn ? on() : off()
}

export const spacing = {
  xxxs: 2,
  xxs: 4,
  s: 8,
  sm: 12,
  md: 16,
  l: 24,
  xl: 32,
  xxl: 48,
} as const;

export type Spacing = keyof typeof spacing;

export const fontSize = {
  xxl: 36,
  xl: 24,
  lg: 20,
  md: 18,
  sm: 16,
  xs: 14,
  xxs: 12,
} as const;

export type FontSize = keyof typeof fontSize;

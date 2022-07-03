export const COLORS = [
  'gray',
  'red',
  'orange',
  'yellow',
  'green',
  'teal',
  'blue',
  'cyan',
] as const

export type ColorScheme = typeof COLORS[number]

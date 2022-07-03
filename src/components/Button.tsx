import clsx from 'clsx'
import { Component, createMemo, mergeProps, ParentProps } from 'solid-js'
import { ColorScheme } from '../theme'

export type ButtonProps = {
  class?: string
  onClick?: () => void
  size?: 'lg' | 'md' | 'sm' | 'xs'
  variant?: 'solid' | 'ghost' | 'outline' | 'link'
  colorScheme?: ColorScheme
}

export const Button: Component<ParentProps<ButtonProps>> = (rawProps) => {
  const props = mergeProps(
    { size: 'md', variant: 'solid', colorScheme: 'gray' },
    rawProps
  )

  return (
    <button
      class={clsx(
        'inline-flex items-center justify-center whitespace-nowrap outline-none duration-200',
        'font-semibold rounded-md',
        sizes[props.size],
        variants[props.variant](props.colorScheme),
        props.class
      )}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  )
}

const sizes: Record<ButtonProps['size'], string> = {
  lg: 'h-12 min-w-12 text-lg px-6',
  md: 'h-10 min-w-10 text-base px-4',
  sm: 'h-8 min-w-8 text-sm px-3',
  xs: 'h-6 min-w-6 text-xs px-2',
}

const variants: Record<ButtonProps['variant'], (c: ColorScheme) => string> = {
  solid: (c) => {
    return colorSchemes.solid[c]
  },
  ghost: (c) => {
    return colorSchemes.ghost[c]
  },
  link: (c) => {
    return `${colorSchemes.link[c]} hover:underline`
  },
  outline: (c) => {
    const borderColor = c === 'gray' ? 'border-gray-200' : 'border-current'
    return `${colorSchemes.ghost[c]} border ${borderColor}`
  },
}

const colorSchemes: Record<
  Exclude<ButtonProps['variant'], 'outline'>,
  Record<ColorScheme, string>
> = {
  solid: {
    gray: 'bg-gray-100 hover:bg-gray-200 active:bg-gray-300 text-inherit',
    red: 'bg-red-500 hover:bg-red-600 active:bg-red-700 text-white',
    orange: 'bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white',
    blue: 'bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white',
    cyan: 'bg-cyan-500 hover:bg-cyan-600 active:bg-cyan-700 text-black',
    yellow: 'bg-yellow-500 hover:bg-yellow-600 active:bg-yellow-700 text-black',
    teal: 'bg-teal-600 hover:bg-teal-700 active:bg-teal-800 text-white',
    green: 'bg-green-600 hover:bg-green-700 active:bg-green-800 text-white',
  },
  ghost: {
    gray: 'bg-inherit hover:bg-gray-100 active:bg-gray-200 text-inherit',
    red: 'bg-transparent hover:bg-red-50 active:bg-red-100 text-red-600',
    orange:
      'bg-transparent hover:bg-orange-50 active:bg-orange-100 text-orange-600',
    blue: 'bg-transparent hover:bg-blue-50 active:bg-blue-100 text-blue-600',
    cyan: 'bg-transparent hover:bg-cyan-50 active:bg-cyan-100 text-cyan-600',
    yellow:
      'bg-transparent hover:bg-yellow-50 active:bg-yellow-100 text-yellow-600',
    teal: 'bg-transparent hover:bg-teal-50 active:bg-teal-100 text-teal-600',
    green:
      'bg-transparent hover:bg-green-50 active:bg-green-100 text-green-600',
  },
  link: {
    gray: 'text-gray-500 active:text-gray-700',
    red: 'text-red-500 active:text-red-700',
    orange: 'text-orange-500 active:text-orange-700',
    blue: 'text-blue-500 active:text-blue-700',
    cyan: 'text-cyan-500 active:text-cyan-700',
    yellow: 'text-yellow-500 active:text-yellow-700',
    teal: 'text-teal-500 active:text-teal-700',
    green: 'text-green-500 active:text-green-700',
  },
}

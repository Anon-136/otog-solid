import clsx from 'clsx'
import { Component, mergeProps, ParentProps } from 'solid-js'

export type StackProps = {
  class?: string
  direction?: 'row' | 'column'
}

export const Stack: Component<ParentProps<StackProps>> = (rawProps) => {
  const props = mergeProps({ direction: 'column' }, rawProps)
  return (
    <div
      class={clsx(
        'flex items-center gap-2',
        {
          'flex-col': props.direction === 'column',
          'flex-row': props.direction === 'row',
        },
        props.class
      )}
    >
      {props.children}
    </div>
  )
}

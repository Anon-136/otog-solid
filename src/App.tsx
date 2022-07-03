import { Component, createSignal, For } from 'solid-js'
import { Button, ButtonProps } from './components/Button'
import { Stack, StackProps } from './components/Stack'
import { COLORS } from './theme'

const App: Component = () => {
  const [direction, setDirection] = createSignal<StackProps['direction']>()
  const [size, setSize] = createSignal<ButtonProps['size']>()
  return (
    <>
      <Stack class="p-6" direction="row">
        <Button>Button</Button>
      </Stack>
      <Stack class="p-6" direction="row">
        <Button size={size()} onClick={() => setSize('xs')} colorScheme="teal">
          Button xs
        </Button>
        <Button size={size()} onClick={() => setSize('sm')} colorScheme="teal">
          Button sm
        </Button>
        <Button size={size()} onClick={() => setSize('md')} colorScheme="teal">
          Button md
        </Button>
        <Button size={size()} onClick={() => setSize('lg')} colorScheme="teal">
          Button lg
        </Button>
      </Stack>

      <Stack class="p-6" direction="row">
        <For each={COLORS}>
          {(color) => <Button colorScheme={color}>{color}</Button>}
        </For>
      </Stack>
      <Stack class="p-6" direction="row">
        <Button variant="solid">Button</Button>
        <Button variant="outline">Button</Button>
        <Button variant="ghost">Button</Button>
        <Button variant="link">Button</Button>
      </Stack>

      <Stack class="p-6" direction={direction()}>
        <Button onClick={() => setDirection('column')}>Column</Button>
        <Button onClick={() => setDirection('row')}>Row</Button>
      </Stack>
    </>
  )
}

export default App

// Theme
import './theme/variables.css'

// Components
export { LuButton } from './components/button'
export type { ButtonProps } from './components/button'

export { LuInput } from './components/input'
export type { InputProps } from './components/input'

export { LuSwitch } from './components/switch'
export type { SwitchProps } from './components/switch'

// Theme utilities
export { useTheme } from './theme'
export type { ThemeMode } from './theme'

// Install function
import type { App } from 'vue'
import { LuButton } from './components/button'
import { LuInput } from './components/input'
import { LuSwitch } from './components/switch'

const components = [LuButton, LuInput, LuSwitch]

export function install(app: App) {
  components.forEach((comp) => {
    app.component(comp.name || comp.__name || '', comp)
  })
}

export default { install }



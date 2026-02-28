import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import DemoBlock from './DemoBlock.vue'
import './custom.css'

// Import luna-ui styles
import 'luna-ui/theme/variables.css'

// Import luna-ui components for demos
import { LuButton, LuInput, LuSwitch } from 'luna-ui'

const theme: Theme = {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('DemoBlock', DemoBlock)
    // Register luna-ui components globally for demo usage
    app.component('lu-button', LuButton)
    app.component('lu-input', LuInput)
    app.component('lu-switch', LuSwitch)
  }
}

export default theme




import { ref, watch, type Ref } from 'vue'

export type ThemeMode = 'light' | 'dark' | 'auto'

const STORAGE_KEY = 'luna-ui-theme'

const currentTheme: Ref<ThemeMode> = ref('light')

function getSystemTheme(): 'light' | 'dark' {
  if (typeof window === 'undefined') return 'light'
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function applyTheme(mode: ThemeMode) {
  if (typeof document === 'undefined') return
  const resolved = mode === 'auto' ? getSystemTheme() : mode
  document.documentElement.setAttribute('data-theme', resolved)
}

export function useTheme() {
  // Initialize from storage
  if (typeof localStorage !== 'undefined') {
    const stored = localStorage.getItem(STORAGE_KEY) as ThemeMode | null
    if (stored) currentTheme.value = stored
  }

  // Apply on change
  watch(currentTheme, (mode) => {
    applyTheme(mode)
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, mode)
    }
  }, { immediate: true })

  // Listen for system theme changes when in auto mode
  if (typeof window !== 'undefined') {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
      if (currentTheme.value === 'auto') {
        applyTheme('auto')
      }
    })
  }

  function setTheme(mode: ThemeMode) {
    currentTheme.value = mode
  }

  function toggleTheme() {
    const modes: ThemeMode[] = ['light', 'dark', 'auto']
    const idx = modes.indexOf(currentTheme.value)
    currentTheme.value = modes[(idx + 1) % modes.length]
  }

  return {
    theme: currentTheme,
    setTheme,
    toggleTheme,
  }
}



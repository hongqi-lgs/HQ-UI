/** BEM-style class name helper */
export function bem(block: string, element?: string, modifier?: string | Record<string, boolean>) {
  let cls = block
  if (element) cls += `__${element}`
  if (typeof modifier === 'string') {
    cls += ` ${cls}--${modifier}`
  } else if (modifier) {
    const mods = Object.entries(modifier)
      .filter(([, v]) => v)
      .map(([k]) => `${cls}--${k}`)
    cls = [cls, ...mods].join(' ')
  }
  return cls
}

/** Generate unique ID */
let idCounter = 0
export function useId(prefix = 'lu'): string {
  return `${prefix}-${++idCounter}`
}



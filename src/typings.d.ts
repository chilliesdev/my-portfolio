import 'styled-components'

interface CSSModule {
  [className: string]: string
}

// type shims for CSS modules

declare module '*.module.scss' {
  const cssModule: CSSModule
  export = cssModule
}

declare module '*.module.css' {
  const cssModule: CSSModule
  export = cssModule
}

declare module '*.svg' {
  const Svg: any
  export = Svg
}

declare module 'styled-components' {
  export interface DefaultTheme {
    primary: string
    secondary: string
    accent: string
  }
}

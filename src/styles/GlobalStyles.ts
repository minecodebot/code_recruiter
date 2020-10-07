import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: var(--color-ad-text);
  }
  html, body, #root {
    width: 100%;
    height:100vh;
    overflow-y: hidden;
    background: var(--color-background);
  }
  *, button, input {
    font-family: -apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Fira Sans,Ubuntu,Oxygen,Oxygen Sans,Cantarell,Droid Sans,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Lucida Grande,Helvetica,Arial,sans-serif;
  }
  :root {
    --color-header: #D62828;
    --color-background: #000D14;
    --color-dark: #001B29;
    --color-medium: #00293D;
    --color-light: #007AB8;
    --color-black: rgba(0,0,0,.9);
    --color-gray: rgba(0,0,0,.6);
    --color-separator: rgba(0,0,0,0.15);
    --color-hashtag: #7a8b98;
    --color-icons: #c7d1d8;
    --color-input: #e1e9ee;
    --color-panel: #fff;
    --color-ad-text: #f7fff7;
  }
`

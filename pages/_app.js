import '../css/style.css'
import { initializeIcons } from '@uifabric/icons'

initializeIcons()

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

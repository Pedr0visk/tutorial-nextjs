// tailwind
import 'tailwindcss/tailwind.css'

// fontawesome
import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core"

config.autoAddCss = false

// global style
import GlobalStyle from '../styles/GlobalStyle'

// antdesign
import 'antd/dist/antd.css';

// reactwindow

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp

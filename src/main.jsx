import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  FpjsProvider,
  FingerprintJSPro
} from '@fingerprintjs/fingerprintjs-pro-react'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FpjsProvider
      loadOptions={{
        apiKey: "8hW8Rhvr0ciO1CltLP4G",
        region: "ap"
      }}
    >
      {/* <FpjsProvider
      loadOptions={{
        apiKey: "<PUBLIC_API_KEY>",
        endpoint: [
          // "https://metrics.yourwebsite.com", 
          FingerprintJSPro.defaultEndpoint
        ],
        scriptUrlPattern: [
          // "https://metrics.yourwebsite.com/web/v<version>/<apiKey>/loader_v<loaderVersion>.js",
          FingerprintJSPro.defaultScriptUrlPattern
        ],
        // region: "eu"
      }}
    > */}
      <App />
    </FpjsProvider>
  </StrictMode>,
)

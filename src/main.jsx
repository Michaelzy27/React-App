import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { TonConnectUIProvider } from '@tonconnect/ui-react'

const manifestUrl = "https://raw.githubusercontent.com/Michaelzy27/Soundrig-Ton-Manifest/main/tonconnect-manifest.json"

createRoot(document.getElementById('root')).render(
  <TonConnectUIProvider manifestUrl={manifestUrl}>
    <StrictMode>
    <App />
  </StrictMode>,
  </TonConnectUIProvider>
  
)

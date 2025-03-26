import { use, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TonConnectUIProvider, TonConnectButton, useTonConnectUI } from '@tonconnect/ui-react'

function App() {
  const [count, setCount] = useState(0)
  const [tonConnectUI] = useTonConnectUI();


  const handleWalletAction = async () => {
    console.log("button clicked");
    if(tonConnectUI){console.log("uuu");
    }
    await tonConnectUI.openModal();
    
  }


  return (
    <>
      <div>
      <button
            onClick={handleWalletAction}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Disconnect Wallet
          </button>
      <TonConnectButton/>
      </div>
      
    </>
  )
}

export default App

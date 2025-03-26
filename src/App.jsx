import { use, useState } from 'react'
import './App.css'
import { TonConnectUIProvider, TonConnectButton, useTonConnectUI } from '@tonconnect/ui-react'
import { SDKProvider, useWebApp, useInitData } from '@telegram-apps/sdk-react'

function App() {
  const [count, setCount] = useState(0)
  const [tonConnectUI] = useTonConnectUI();

  const webApp = useWebApp()
  const initData = useInitData()


  const handleWalletAction = async () => {
    console.log("button clicked");
    if(tonConnectUI){console.log("uuu");
    }
    await tonConnectUI.openModal();
    
  }

  const handleStarsPayment = async () => {
    try{
      await webApp.showInvoice({
        title: 'Premium Feature', // Title of the item
        description: 'Unlock exclusive content', // Description
        prices: [
          { 
            label: 'Premium Access', 
            amount: 5 * 1000000 // 5 Stars (converted to micro-stars)
          }
        ],
        payload: JSON.stringify({
          userId: initData.user.id,
          productId: 'premium_feature_001',
          timestamp: Date.now()
        })
        //photoUrl: 'https://example.com/product-image.jpg' // Optional product image
      });
    } catch (error) {

    }

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
      <button
            onClick={handleStarsPayment}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Buy Stars
          </button>
      </div>
      
    </>
  )
}

export default App

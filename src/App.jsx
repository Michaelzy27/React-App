import { use, useState, useEffect } from 'react'
import './App.css'
import { TonConnectUIProvider, TonConnectButton, useTonConnectUI } from '@tonconnect/ui-react'
//import { SDKProvider, initInvoice, LaunchParams} from '@telegram-apps/sdk-react'
import WebApp from '@twa-dev/sdk'
import WebView from '@twa-dev/sdk'
import { invoice } from '@telegram-apps/sdk';

function App() {
  //const [count, setCount] = useState(0)
  const [tonConnectUI] = useTonConnectUI();

  const [webApp, setWebApp] = useState(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.Telegram && window.Telegram.WebApp) {
      window.Telegram.WebApp.ready();
      setWebApp(window.Telegram.WebApp);
      console.log('Telegram WebApp SDK version:', window.Telegram.WebApp.version);
    } else {
      console.warn("Telegram WebApp not found. Are you running inside Telegram?");
    }
  }, []);

  //const webApp = window.Telegram.WebApp;

  //const webAppi = window.Telegram.WebApp

  const useWebApp = WebApp
  const useWebView = WebView
  // const useInitData = initDuuata()
  //const invoice = initInvoice()


  const handleWalletAction = async () => {
    console.log("button clicked");
    
    if(tonConnectUI){console.log("uuu");
    }
    await tonConnectUI.openModal();
    
  }

  // useWebApp.openInvoice('payment invoice', (status) => {
  //   if (status == 'successful') {

  //   } else {
      
  //   }
  // })

  // const handleStarsPayment = async () => {
  //   try{

  //     try {
  //       const response = await fetch(`https://soundrig-backend-2.onrender.com/payment/invoice/1`, {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({
  //           title: "SoundRig Stars Payment",
  //           description: "Payment for Tun3z",
  //           payload: "{}",
  //           currency: "XTR",
  //           prices: [{
  //             amount: 10,
  //             label: "Payment for Tun3z 3"
  //           }],
  //           tun3zId: 1,
  //         })
  //       })
        
  //       console.log("response: " + response);

  //       if (!response.ok) {
  //         const errorData = await response.json();
  //         throw new Error(errorData.error);
  //       }
    
  //       console.log("response json: " + await response.json());
  //       console.log("data: " + response.body);
        
  //       console.log("respose body: " + response.body);
  //     } catch (error) {
  //       console.log("error: " + error);
        
  //     }


  //     // await invoice.open("SoundRig").then((status) => {
  //     //   return console.log(status);
        
  //     // })

  //     console.log("hhjj");
  //     // WebApp.sendData()
  //     // WebApp.openInvoice()
  //     //useWebApp.showInvoice()

      


  //     await useWebApp.showInvoice({
  //       title: 'Premium Feature',
  //       description: 'Unlock exclusive content',
  //       prices: [
  //         { 
  //           label: 'Premium Access', 
  //           amount: 5 * 1000000 // 5 Stars
  //         }
  //       ]
  //     });

  //     // await webAppi.showInvoice({
  //     //   title: 'Premium Feature',
  //     //   description: 'Unlock exclusive content',
  //     //   prices: [
  //     //     { 
  //     //       label: 'Premium Access', 
  //     //       amount: 5 * 1000000 // 5 Stars
  //     //     }
  //     //   ]
  //     // });

  //     // await useWebApp.showInvoice({
  //     //   title: 'Premium Feature', // Title of the item
  //     //   description: 'Unlock exclusive content', // Description
  //     //   prices: [
  //     //     { 
  //     //       label: 'Premium Access', 
  //     //       amount: 5 * 1000000 // 5 Stars (converted to micro-stars)
  //     //     }
  //     //   ],
  //     //   payload: JSON.stringify({
  //     //     userId: useInitData.user.id,
  //     //     productId: 'premium_feature_001',
  //     //     timestamp: Date.now()
  //     //   })
  //       //photoUrl: 'https://example.com/product-image.jpg' // Optional product image
  //     //});
  //   } catch (error) {

  //   }

  // }

  let id = 2;

  const handleStarsPayment = async () => {
    try {
      const response = await fetch(`https://soundrig-backend-2.onrender.com/payment/invoice/d14d676d-68c8-418b-99fe-990a94feb25c`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJkMTRkNjc2ZC02OGM4LTQxOGItOTlmZS05OTBhOTRmZWIyNWMiLCJpYXQiOjE3NDQ1NzQyNjcsImV4cCI6MTc0NDY2MDY2N30.MVK_fmjd3JYyoIFzY8CKdKwkOJlAdK8u2bpr2GrMatw`,
        },
        body: JSON.stringify({
          title: "SoundRig Stars Payment",
          description: "Payment for Tun3z",
          payload: JSON.stringify({
            userId: 'd14d676d-68c8-418b-99fe-990a94feb25c',
            tun3zId: id
          }),
          currency: "XTR",
          prices: [
            {
              amount: 700,
              label: "Payment for Tun3z",
            },
          ],
          tun3zId: id,
        })
      })

      // alert(window.Telegram?.WebApp?.version);
      alert("usewebview: " + useWebView.version)

      if(!response.ok) {
        throw new Error("Failed!")
      }

      const data = await response.json();
      const starsInvoice = data.link;
      console.log(starsInvoice);
      //useWebApp.openLink(starsInvoice);
      // if (webApp?.openInvoice) {
      //   webApp.openInvoice(starsInvoice);
      // } else {
      //   alert("Telegram WebApp not available or method unsupported.");
      // }
      
      // if(useWebApp?.openInvoice) {
      //   useWebApp.openInvoice(starsInvoice);
      // } else {
      //   console.log("openInvoice does not exist");
      // }

      //invoice.open(starsInvoice, "url");

      // window.Telegram.WebApp.openInvoice(starsInvoice);
      // console.log(useWebApp.version);
      
      // window.Telegram.WebApp
      
    
    } catch (error) {
      console.log("error: " + error);
    }
  };


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

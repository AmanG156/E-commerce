// 
// import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
// import axios from "axios"
// import React, { useState } from 'react'
// import { json } from "react-router-dom"
// // import "./PaymentForm.css"

// const CARD_OPTIONS = {
// 	iconStyle: "solid",
// 	style: {
// 		base: {
// 			iconColor: "#c4f0ff",
// 			color: "#fff",
// 			fontWeight: 500,
// 			 fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
// 			fontSize: "16px",
// 			fontSmoothing: "antialiased",
// 			":-webkit-autofill": { color: "#fce883" },
// 			"::placeholder": { color: "#87bbfd" }
// 		},
// 		invalid: {
// 			iconColor: "#ffc7ee",
// 			color: "#ffc7ee"
// 		}
// 	}
// }

// export default function PaymentForm() {
//     const [success, setSuccess ] = useState(false)
//     const stripe = useStripe()
//     // console.log(JSON.stringify(stripe))
//     const elements = useElements()


//     const handleSubmit = (stripe, elements) => async () => {
//         const cardElement = elements.getElement(CardElement);
      
//         const {error, paymentMethod} = await stripe.createPaymentMethod({
//           type: 'card',
//           card: cardElement,
//         });
      
//         if (error) {
//           console.log('[error]', error);
//         } else {
//           console.log('[PaymentMethod]', paymentMethod);
//         }
//     }      

//     return (
//         <>
//         {!success ? 
//       <div>
//                     <CardElement options={CARD_OPTIONS}/>
//             <button onClick={handleSubmit(stripe, elements)}>Buy</button>
//             </div>
//         :
//        <div>
//            <h2>You just bought a sweet spatula congrats this is the best decision of you're life</h2>
//        </div> 
//         }
            
//         </>
//     )
// }
import React, { useEffect } from "react";
import { CardElement, useElements } from "@stripe/react-stripe-js";

export function PaymentForm() {
  const elements = useElements();
  useEffect(() => {
    if (elements) {
      const cardElement = elements.getElement("card");
      console.log(cardElement);
    }
  }, [elements]);
  return (
    <label>
      Card details
      <CardElement />
    </label>
  );
}

export default PaymentForm;
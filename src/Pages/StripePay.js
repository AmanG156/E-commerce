// import { Elements } from "@stripe/react-stripe-js"
// import { loadStripe } from "@stripe/stripe-js"
// import React from "react"
// import PaymentForm from "./PaymentForm"

// const PUBLIC_KEY = "pk_test_51MBXbhSIgJc8WqgXjAVJwur5MeLDvPDgz2rfWnahMUwfNcJaqQmJ1AvHFkeNAvDkE1GU8WTLsMIIM5ruWDXtbicw00A4Gekza8"

// const stripeTestPromise = loadStripe(PUBLIC_KEY)

// export default function StripePay() {
// 	return (
// 		<Elements stripe={stripeTestPromise}>
// 			  <PaymentForm  />
//               {/* {(ctx: any) => <PaymentForm {...ctx} />} */}
// 		</Elements>
// 	)
// }

import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

// import CheckoutForm from "./CheckoutForm";
import PaymentForm from "./PaymentForm";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe("pk_test_51MBXbhSIgJc8WqgXjAVJwur5MeLDvPDgz2rfWnahMUwfNcJaqQmJ1AvHFkeNAvDkE1GU8WTLsMIIM5ruWDXtbicw00A4Gekza8");

export default function App() {
  return (
    <Elements stripe={stripePromise}>
      <PaymentForm />
    </Elements>
  );
}
import React from "react";
import { useSelector } from "react-redux";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_test_51OoTgtB0ThGnFv31xCrrR7UFQqlWTmBi8EMmqpHC4aKhCaMVSiWOnUSsdE4C6eMrEBYGVPefXpBSOOcjFh6gDuKr00kUfb0cQ8"
);

const Checkout = () => {
  const cart = useSelector((state) => state.cart.cart);

  async function makePayment(values) {
    const stripe = await stripePromise;
    const requestBody = {
      userName: [values.firstName, values.lastName].join(" "),
      email: values.email,
      products: cart.map(({ id, count }) => ({
        id,
        count,
      })),
    };

    const response = await fetch("http://localhost/3005/create-order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestBody),
    });

    const session = await response.json();
    await stripe.redirectToCheckout({
      sessionId: session.id,
    });
  }
  return <div></div>;
};

export default Checkout;

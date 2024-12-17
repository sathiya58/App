// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { FaGooglePay } from "react-icons/fa";  // Google Pay Icon
import { FaPaypal } from "react-icons/fa";     // PayPal Icon
import { FaCcVisa } from "react-icons/fa";     // Paytm icon placeholder (Visa)

import GooglePayButton from "./GooglePayButton";
import PayPalButton from "./PayPalButton";
import PaytmIntegration from "./PaytmIntegration";

const PaymentForm = () => {
  const [amount] = useState(100); // Static amount for payment
  const [currency] = useState("USD"); // Currency is USD

  const handlePaymentSuccess = (paymentDetails) => {
    console.log("Payment successful with details:", paymentDetails);
    alert("Payment was successful!");
  };

  return (
    <div className="payment-form-container">
      <h2 className="text-xl font-bold mb-4">Make Payment</h2>
      
      <div className="payment-buttons-container">
        {/* Google Pay Button with icon */}
        <div className="payment-button flex items-center gap-2">
          <FaGooglePay size={30} color="green" /> {/* Google Pay icon */}
          <GooglePayButton 
            amount={amount}
            currency={currency}
            onSuccess={handlePaymentSuccess} 
          />
        </div>

        {/* PayPal Button with icon */}
        <div className="payment-button flex items-center gap-2">
          <FaPaypal size={30} color="#0070ba" /> {/* PayPal icon */}
          <PayPalButton
            amount={amount}
            currency={currency}
            onSuccess={handlePaymentSuccess}
          />
        </div>

        {/* Paytm Button with icon */}
        <div className="payment-button flex items-center gap-2">
          <FaCcVisa size={30} color="#0047b3" /> {/* Visa icon for Paytm */}
          <PaytmIntegration
            amount={amount}
            currency={currency}
            onSuccess={handlePaymentSuccess}
          />
        </div>
      </div>
    </div>
  );
};

export default PaymentForm;

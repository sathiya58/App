 
import PropTypes from "prop-types"; // Ensure PropTypes is imported

const PayPalButton = ({ amount, currency, onSuccess }) => {
  const handlePayPalPayment = () => {
    // Simulate PayPal payment handling logic
    console.log("Processing PayPal Payment");
    onSuccess({ paymentMethod: "PayPal", amount, currency });
  };

  return (
    <button className="paypal-btn" onClick={handlePayPalPayment}>
      Pay with PayPal
    </button>
  );
};

// Prop validation using PropTypes
PayPalButton.propTypes = {
  amount: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
  onSuccess: PropTypes.func.isRequired,
};

export default PayPalButton;

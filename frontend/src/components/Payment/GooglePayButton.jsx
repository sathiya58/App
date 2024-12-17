
import PropTypes from "prop-types"; // Ensure PropTypes is imported

const GooglePayButton = ({ amount, currency, onSuccess }) => {
  const handleGooglePay = () => {
    // Simulate payment handling logic
    console.log("Processing Google Pay Payment");
    onSuccess({ paymentMethod: "GooglePay", amount, currency });
  };

  return (
    <button className="google-pay-btn" onClick={handleGooglePay}>
      Pay with Google Pay
    </button>
  );
};

// Prop validation using PropTypes
GooglePayButton.propTypes = {
  amount: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
  onSuccess: PropTypes.func.isRequired,
};

export default GooglePayButton;

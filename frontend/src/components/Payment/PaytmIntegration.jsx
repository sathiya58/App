
import PropTypes from 'prop-types'; // Make sure PropTypes is imported

const PaytmIntegration = ({ amount, currency, onSuccess }) => {
  const handlePaytmPayment = () => {
    // Logic for handling Paytm payment processing
    console.log('Paytm Payment Processing');
    onSuccess({ paymentMethod: 'Paytm', amount, currency });
  };

  return (
    <button className="paytm-btn" onClick={handlePaytmPayment}>
      Pay with Paytm
    </button>
  );
};

// Prop validation using PropTypes
PaytmIntegration.propTypes = {
  amount: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
  onSuccess: PropTypes.func.isRequired,
};

export default PaytmIntegration;

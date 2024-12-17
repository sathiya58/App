
import PropTypes from 'prop-types'; // Import prop-types package

const ChatMessage = ({ message, sender }) => {
  return (
    <div className={`flex ${sender === 'client' ? 'justify-end' : 'justify-start'} mb-2`}>
      <div
        className={`p-2 rounded-lg ${sender === 'client' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
      >
        <p>{message}</p>
      </div>
    </div>
  );
};

// Add prop validation
ChatMessage.propTypes = {
  message: PropTypes.string.isRequired, // Validate that message is a string and required
  sender: PropTypes.string.isRequired, // Validate that sender is a string and required
};

export default ChatMessage;

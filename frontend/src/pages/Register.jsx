// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password || !confirmPassword) {
      setError('All fields are required.');
      setSuccessMessage(''); // Clear success message if error occurs
    } else if (password !== confirmPassword) {
      setError('Passwords do not match.');
      setSuccessMessage(''); // Clear success message if error occurs
    } else {
      // Implement your API registration logic here
      console.log('Registering with:', email, password);
      setError(''); // Clear any previous errors

      // Set the success message
      setSuccessMessage('Registration successful! Please login to continue.');
    }
  };

  return (
    <div className="register-container max-w-md mx-auto p-8 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-center mb-6">Create a New Account</h2>
      
      {error && <div className="error text-red-500 mb-4">{error}</div>}
      {successMessage && <div className="success text-green-500 mb-4">{successMessage}</div>}

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block font-semibold">Email Address</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-2"
            placeholder="Enter your email"
            required
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="password" className="block font-semibold">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-2"
            placeholder="Enter your password"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="confirmPassword" className="block font-semibold">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-2"
            placeholder="Confirm your password"
            required
          />
        </div>

        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
          Register
        </button>
      </form>

      <p className="mt-4 text-center text-sm">
        Already have an account? 
        <Link to="/login" className="text-blue-500 underline">Login here</Link>
      </p>
    </div>
  );
};

export default Register;

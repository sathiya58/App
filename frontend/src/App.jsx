// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";  // Assuming Navbar component exists
import Footer from "./components/Footer";  // Footer component
import Home from "./pages/Home";
import Payment from "./components/Payment/PaymentForm";  // Assuming Payment component exists
import Profile from "./pages/Profile";
import AppointmentBooking from "./pages/AppointmentBooking";
import VideoCall from './components/Videocall/VideoCall'; // Make sure the path to VideoCall is correct
import Login from './pages/Login';    // Ensure correct paths
import Register from './pages/Register';

const App = () => {
    // State for tracking payment status
    const [paymentStatus, setPaymentStatus] = useState('');
    const paymentAmount = 50.0; // Example payment amount
  
    // Example values for video call props
    const meetingNumber = '123456789';
    const passcode = 'yourPasscode';
    const userName = '';
  
    // Success callback for payment
    const handlePaymentSuccess = (message) => {
      setPaymentStatus(message);
    };
  
    return (
      <Router>
        <div className="App">
          {/* Navbar Component */}
          <Navbar />
  
          <div className="container mx-auto p-4">
            {/* Routing for Pages */}
            <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
              <Route path="/" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/appointment-booking" element={<AppointmentBooking />} />
              {/* Video Call Route */}
              <Route
                path="/video-call"
                element={<VideoCall meetingNumber={meetingNumber} passcode={passcode} userName={userName} />}
              />
              {/* Payment Route */}
              <Route
                path="/payments"
                element={<Payment amount={paymentAmount} onSuccess={handlePaymentSuccess} />}
              />
            </Routes>
            
            {/* Display payment status if present */}
            {paymentStatus && <p>{paymentStatus}</p>}
          </div>
  
          {/* Footer Component */}
          <Footer />
        </div>
      </Router>
    );
  };
  
  export default App;
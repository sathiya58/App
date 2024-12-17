// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Profile = () => {
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'johndoe@example.com',
    bio: 'A passionate therapist dedicated to improving mental health.',
    phone: '123-456-7890',
    address: '1234 Elm Street, Springfield, IL',
    image: 'https://via.placeholder.com/150', // Default profile image
  });

  const [updatedUser, setUpdatedUser] = useState({ ...user });
  const [isEditing, setIsEditing] = useState(false);
  const [publicUrl, setPublicUrl] = useState('https://example.com/profile/johndoe');
  const [imageUrl, setImageUrl] = useState('');  // Public image URL input state

  // Handle changes in editable inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle changes for public image URL input
  const handleImageUrlChange = (e) => {
    setImageUrl(e.target.value);
  };

  // Toggle edit mode
  const toggleEdit = () => {
    setIsEditing((prevState) => !prevState);
  };

  // Handle saving updates to user profile
  const saveProfile = (e) => {
    e.preventDefault();
    if (imageUrl) {
      setUser({
        ...updatedUser,
        image: imageUrl, // Update image if the user provided an image URL
      });
    } else {
      setUser(updatedUser); // Save profile changes if no image URL was entered
    }
    setIsEditing(false);
  };

  // Simulate fetching user data (optional)
  useEffect(() => {
    setUser({
      name: 'sathiyapriya',
      email: 'priyamsathiya622@gmail@.com',
      bio: 'A passionate therapist dedicated to improving mental health.',
      phone: '123-456-7890',
      address: '1234 Elm Street, Springfield, IL',
      
    });
    setPublicUrl('https://example.com/profile/johndoe'); // Setting the public URL dynamically
  }, []);

  return (
    <div className="profile-container max-w-4xl mx-auto px-4 py-8 bg-white rounded-lg shadow-lg">
      {/* Profile Header */}
      <div className="profile-header text-center mb-6">
        <img
          src={user.image || 'https://via.placeholder.com/150'}
          alt="Profile"
          className="profile-image rounded-full w-32 h-32 mx-auto border-4 border-indigo-500"
        />
        <h1 className="text-3xl font-semibold text-indigo-700 mt-4">{user.name}</h1>
        <p className="text-gray-600">{user.email}</p>
        <p className="text-gray-500 text-sm mt-2">{user.bio}</p>
      </div>

      {/* Profile Info Section */}
      <div className="profile-info grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <div>
          <h3 className="text-xl font-semibold text-indigo-700 mb-4">Contact Information</h3>
          <div className="info-item mb-4">
            <label className="text-gray-600">Phone:</label>
            {isEditing ? (
              <input
                type="tel"
                name="phone"
                value={updatedUser.phone}
                onChange={handleInputChange}
                className="input-field mt-2 w-full p-2 border border-gray-300 rounded-md"
              />
            ) : (
              <p className="text-gray-800 mt-2">{user.phone}</p>
            )}
          </div>

          <div className="info-item mb-4">
            <label className="text-gray-600">Address:</label>
            {isEditing ? (
              <input
                type="text"
                name="address"
                value={updatedUser.address}
                onChange={handleInputChange}
                className="input-field mt-2 w-full p-2 border border-gray-300 rounded-md"
              />
            ) : (
              <p className="text-gray-800 mt-2">{user.address}</p>
            )}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-indigo-700 mb-4">Edit Profile</h3>
          {isEditing ? (
            <form onSubmit={saveProfile}>
              <div className="form-group mb-4">
                <label className="text-gray-600">Full Name:</label>
                <input
                  type="text"
                  name="name"
                  value={updatedUser.name}
                  onChange={handleInputChange}
                  className="input-field mt-2 w-full p-2 border border-gray-300 rounded-md"
                />
              </div>

              <div className="form-group mb-4">
                <label className="text-gray-600">Email Address:</label>
                <input
                  type="email"
                  name="email"
                  value={updatedUser.email}
                  onChange={handleInputChange}
                  className="input-field mt-2 w-full p-2 border border-gray-300 rounded-md"
                />
              </div>

              <div className="form-group mb-4">
                <label className="text-gray-600">Public Profile Image URL:</label>
                <input
                  type="text"
                  name="imageUrl"
                  value={imageUrl}
                  onChange={handleImageUrlChange}
                  placeholder="Enter the URL for your profile image"
                  className="input-field mt-2 w-full p-2 border border-gray-300 rounded-md"
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 mt-4"
              >
                Save Changes
              </button>
            </form>
          ) : (
            <p className="text-gray-800">{user.name}</p>
          )}
        </div>
      </div>

      {/* Public URL Section */}
      <div className="public-url-section mt-8">
        <h3 className="text-xl font-semibold text-indigo-700 mb-4">Your Public Profile URL</h3>
        <div className="bg-gray-100 p-4 rounded-md flex items-center justify-between">
          <p className="text-gray-700">{publicUrl}</p>
          <button
            onClick={() => navigator.clipboard.writeText(publicUrl)}
            className="btn btn-secondary bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600"
          >
            Copy URL
          </button>
        </div>
      </div>

      {/* Profile Edit Button */}
      <div className="mt-6 text-center">
        <button
          onClick={toggleEdit}
          className={`btn ${isEditing ? 'bg-red-500 hover:bg-red-600' : 'bg-indigo-500 hover:bg-indigo-600'} 
                      text-white py-2 px-4 rounded-md`}
        >
          {isEditing ? 'Cancel' : 'Edit Profile'}
        </button>
      </div>

      {/* Link to go back to the main page */}
      <div className="mt-6 text-center">
        <Link to="/" className="text-blue-500 hover:underline">Back to Home</Link>
      </div>
    </div>
  );
};

export default Profile;

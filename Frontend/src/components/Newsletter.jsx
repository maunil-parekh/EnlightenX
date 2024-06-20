import React from 'react';

const Newsletter = () => {
 return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">Newsletter</h1>
      <form className="mb-4">
        {/* Adjusted width for smaller size */}
        <input type="email" placeholder="Enter your email" className="w-1/2 p-2 border border-gray-300 rounded-md" />
        {/* Adjusted width for smaller size */}
        <div></div>
        <button type="submit" className="w-1/2 p-2 mt-2 bg-blue-500 text-white rounded-md">Subscribe</button>
      </form>
      <h2 className="text-2xl font-semibold mb-4">Previous Newsletters</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Example newsletter card */}
        <div className="card bg-white shadow-md rounded-lg p-4">
          <h3 className="text-xl font-semibold mb-2">Newsletter Title</h3>
          <p className="text-gray-600">Date: 2023-04-01</p>
          {/* Add newsletter details and functionality here */}
        </div>
        {/* Add more newsletter cards as needed */}
      </div>
    </div>
 );
};

export default Newsletter;

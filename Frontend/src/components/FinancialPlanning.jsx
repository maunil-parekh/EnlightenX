import React from 'react';
import { Link } from 'react-router-dom';
import fc from './image/fc.jpeg'; // Import the image

const FinancialPlanning = () => {
 return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">Financial Planning</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Lumpsum Calculator Card */}
        <div className="col-12 col-md-4 mb-5">
          <div className="card border-0 shadow">
            <img src={fc} alt="Lumpsum Calculator" className="card-img-top" /> {/* Use the imported image */}
            <div className="card-body text-center">
              <h5 className="card-title font-bold">Lumpsum Calculator</h5>
              <div className="card-text text-black-50">
                Thinking of making a Lumpsum investment? Calculate the future value of your wealth using our Lumpsum Calculator.
              </div>
              <br />
              <Link to="/Invest/Lumpsum-Calculator" className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold mb-5 py-2 px-4 rounded">Launch Calculator</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
 );
};

export default FinancialPlanning;

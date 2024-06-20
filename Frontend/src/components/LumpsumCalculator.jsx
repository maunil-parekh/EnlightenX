import React, { useState } from 'react';

const LumpsumCalculator = () => {
 // State to hold the selected values
 const [totalInvestment, setTotalInvestment] = useState(1000);
 const [expectedReturnRate, setExpectedReturnRate] = useState(1);
 const [timePeriod, setTimePeriod] = useState(1);
 const [expectedReturns, setExpectedReturns] = useState();

 // Function to handle form submission
 const handleSubmit = (event) => {
    event.preventDefault();
    // Convert the values to numbers for calculation
    const P = totalInvestment;
    const r = expectedReturnRate / 100; // Convert percentage to decimal
    const n = 1; // Assuming annual compounding
    const t = timePeriod; // Time in years

    // Calculate the future value using the formula
    const A = P * Math.pow((1 + r / n), n * t);

    // Display the result
    setExpectedReturns(A.toFixed(2));
    //alert(`The future value of your investment is ₹${A.toFixed(2)}`);
 };

 return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">Lumpsum Calculator</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="totalInvestment" className="block text-sm font-medium text-gray-700">Total Investment</label>
          <input type="range" id="totalInvestment" min="1000" max="10000000" step="1000" value={totalInvestment} onChange={(e) => setTotalInvestment(e.target.value)} className="mt-1 block w-full" />
          <p>₹{totalInvestment.toLocaleString()}</p>
        </div>
        <div className="mb-4">
          <label htmlFor="expectedReturnRate" className="block text-sm font-medium text-gray-700">Expected Return Rate</label>
          <input type="range" id="expectedReturnRate" min="1" max="35" step="1" value={expectedReturnRate} onChange={(e) => setExpectedReturnRate(e.target.value)} className="mt-1 block w-full" />
          <p>{expectedReturnRate}%</p>
        </div>
        <div className="mb-4">
          <label htmlFor="timePeriod" className="block text-sm font-medium text-gray-700">Time Period</label>
          <input type="range" id="timePeriod" min="1" max="25" step="1" value={timePeriod} onChange={(e) => setTimePeriod(e.target.value)} className="mt-1 block w-full" />
          <p>{timePeriod} Years</p>
        </div>
        <button type="submit" className="btn inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold mb-5 py-2 px-4 rounded">Calculate</button>
      </form>
      {expectedReturns && (
        <div>Expected returns: ₹{expectedReturns}</div>
      )}
    </div>
 );
};

export default LumpsumCalculator;

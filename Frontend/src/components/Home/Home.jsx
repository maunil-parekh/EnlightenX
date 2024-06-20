// import React from 'react'
// import { Link } from 'react-router-dom';

// export default function Home() {
//     return (
// <div className='w-full flex items-center justify-center flex-col'>
// <h1 className="text-4xl font-bold">Boost your Knowledge</h1>
// <br />
// <p>By help of this you can get updates on AI, Finanicial Planning and many more.</p>
// <br />
// <img src="https://www.finology.in/image/hero.svg" alt="Description of the image" />
// </div>


//     );
// }


// // Home.js

// import React from 'react';
// import Card from '../Crd.jsx'; // Adjust the import path as necessary

// export default function Home() {
//     return (
//         <div className='w-full flex flex-col items-center justify-center p-8 bg-gray-100'>
//             <h1 className="text-4xl font-bold text-center mb-8">Boost your Knowledge</h1>
//             <p className="text-center mb-8">Discover the latest in AI, Financial Planning, and more. Stay updated with our curated content and insights.</p>
//             <div className="flex flex-wrap justify-center">
//                 <Crd
//                     title="AI Insights"
//                     description="Explore the latest trends and developments in AI technology."
//                     image="https://via.placeholder.com/150" // Replace with your image URL
//                     link="/ai-insights"
//                 />
//                 <Crd
//                     title="Financial Planning"
//                     description="Learn about strategies and tools for effective financial planning."
//                     image="https://via.placeholder.com/150" // Replace with your image URL
//                     link="/financial-planning"
//                 />
//                 {/* Add more cards as needed */}
//             </div>
//         </div>
//     );
// }
// Home.js
// import React from 'react';

// export default function Home() {
//     // Define the Card component inline
//     const Card = ({ title, description, image, link }) => (
//         <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
//             <img className="w-full" src={image} alt={title} />
//             <div className="px-6 py-4">
//                 <div className="font-bold text-xl mb-2">{title}</div>
//                 <p className="text-gray-700 text-base">{description}</p>
//             </div>
//             <div className="px-6 pt-4 pb-2">
//                 <a href={link} className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//                     Learn More
//                 </a>
//             </div>
//         </div>
//     );

//     return (
//         <div className='w-full flex flex-col items-center justify-center p-8 bg-gray-100'>
//             <h1 className="text-4xl font-bold text-center mb-8">Boost your Knowledge</h1>
//             <p className="text-center mb-8">Discover the latest in AI, Financial Planning, and more. Stay updated with our curated content and insights.</p>
//             <div className="flex flex-wrap justify-center">
//                 <Card
//                     title="AI Insights"
//                     description="Explore the latest trends and developments in AI technology."
//                     link="/ai-insights"
//                 />
//                 <Card
//                     title="Financial Planning"
//                     description="Learn about strategies and tools for effective financial planning."
//                     link="/financial-planning"
//                 />
//                 {/* Add more cards as needed */}
//             </div>
//         </div>
//     );
// }
// Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import Crd from '../Crd'; // Adjust the import path as necessary

export default function Home() {
    return (
        <div className='w-full flex flex-col items-center justify-center p-8 bg-gray-100'>
            <h1 className="text-4xl font-bold text-center mb-8">Boost your Knowledge</h1>
            <p className="text-center mb-8">Discover the latest in AI, Financial Planning, and more. Stay updated with our curated content and insights.</p>
            <img src="https://www.finology.in/image/hero.svg" alt="Boost your Knowledge" className="w-full max-w-md mx-auto mb-8" />
            <div className="text-center">
                <Link to="/about" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Learn More
                </Link>
            </div>
            <div className="w-full mx-auto mt-8 ">
    {/* <h2 className="text-2xl font-bold mb-4 text-center">Key Features</h2>  */}
       <h2 className="text-2xl font-bold mb-4 ml-[320px]  text-black-500 hover:text-blue-700 transition-colors duration-200">Key Features</h2>
       
    
   

     
                <div className="flex flex-wrap justify-center">
                    <Crd
                        title="Trending AI "
                        description="Explore our curated content on AI to enhance your knowledge."
                        link="/ai-tools-update"
                    />
                    <Crd
                        title="Financial Planning"
                        description="Elevate your finances with our intuitive planning calculators. Personalized insights, optimized decisions. Start planning smarter now!"
                        link="/financial-planning"
                    />
                    <Crd
                        title="Expert Insights and Articles"
                        description="Read expert insights and articles to deepen your understanding."
                        link="/articles"
                    />
                    <Crd
                        title="Book Notes"
                        description="Fuel your personal growth journey with our empowering self-help book notes, designed to ignite your inner potential and inspire transformation."
                        link="/book-summary"
                    />
                </div>
            </div>
        </div>
       
    );
}

// // Card.js
// import React from 'react';
// import { Link } from 'react-router-dom';

// const Crd = ({ title, description, image, link }) => {
//     return (
//         <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
//             <img className="w-full" src={image} alt={title} />
//             <div className="px-6 py-4">
//                 <div className="font-bold text-xl mb-2">{title}</div>
//                 <p className="text-gray-700 text-base">{description}</p>
//             </div>
//             <div className="px-6 pt-4 pb-2">
//                 <Link to={link} className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//                     Learn More
//                 </Link>
//             </div>
//         </div>
//     );
// };

// export default Crd;
// FeatureCard.js
// import React from 'react';
// import { Link } from 'react-router-dom';

// const Crd = ({ title, description, link }) => {
//     return (
//         <div className="bg-white shadow-md rounded-lg p-6 m-4 max-w-sm">
//             <h3 className="text-xl font-bold mb-2">{title}</h3>
//             <p className="text-gray-700">{description}</p>
//             {link && (
//                 <Link to={link} className="text-blue-500 hover:text-blue-700 mt-4 inline-block">
//                     Learn More
//                 </Link>
//             )}
//         </div>
//     );
// };

// export default Crd;

// FeatureCard.js
import React from 'react';
import { Link } from 'react-router-dom';

const Crd = ({ title, description, link }) => {
    return (
        <div className="bg-white shadow-lg rounded-lg p-6 m-4 max-w-sm transform hover:scale-105 transition-transform duration-200">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-700">{description}</p>
        {link && (
            <Link to={link} className="text-blue-500 hover:text-blue-700 mt-4 inline-block">
                Learn More
            </Link>
        )}
    </div>
    );
};

export default Crd;


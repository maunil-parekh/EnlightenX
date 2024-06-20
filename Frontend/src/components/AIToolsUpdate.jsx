import { Link } from 'react-router-dom';

const AIToolsUpdate = () => {
  // Updated AI tool data with links
  const aiTools = [
     { id: 1, title: 'Tome', category: 'Presentations', link: 'https://www.tome.app/' },
     { id: 2, title: 'Humata AI', category: 'Research', link: 'https://https://www.humata.ai/' },
     { id: 3, title: 'Merlin', category: 'Email Assistant', link: 'https://getmerlin.in' },
     { id: 4, title: 'MidjourneyAI', category: 'Photos', link: 'https://www.midjourney.ai/' },
     { id: 5, title: 'Codeium', category: 'AI Tool', link: 'https://www.codeium.io/' },
     // Add more AI tools as needed
  ];
 
  return (
     <div className="container mx-auto px-4 py-8">
       <h1 className="text-4xl font-bold mb-4">AI Tools & Updates</h1>
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
         {aiTools.map(tool => (
           <div key={tool.id} className="card bg-white shadow-md rounded-lg p-4">
             <Link to={tool.link} target="_blank" rel="noopener noreferrer" className="text-xl font-semibold mb-2 text-indigo-500 hover:text-indigo-700">
               {tool.title}
             </Link>
             <p className="text-gray-600">Category: {tool.category}</p>
           </div>
         ))}
       </div>
     </div>
  );
 };
 
 export default AIToolsUpdate;
 
import React from 'react';
import { useParams } from 'react-router-dom';

const AIToolDetail = () => {
 const { id } = useParams(); // Retrieve the AI tool ID from the URL

 // Example AI tool data
 const aiTools = [
    { id: 1, title: 'AI Tool Title 1', description: 'Full description of the AI tool...' },
    // Add more AI tools as needed
 ];

 // Find the AI tool by ID
 const aiTool = aiTools.find(tool => tool.id === Number(id));

 if (!aiTool) {
    return <div>AI Tool not found</div>;
 }

 return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">{aiTool.title}</h1>
      <p className="text-gray-600">{aiTool.description}</p>
    </div>
 );
};

export default AIToolDetail;

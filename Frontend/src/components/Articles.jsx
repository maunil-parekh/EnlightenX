import React from 'react';
import { Link } from 'react-router-dom';

const Articles = () => {
 // Example article data
 const articles = [
  { id: 1, title: 'The Impact of Cryptocurrency on Global Finance', category: 'Finance', author: 'John Doe', date: '2023-04-01', description: 'This article explores the transformative effects of cryptocurrency on the global financial landscape.' },
  { id: 2, title: 'The Future of Renewable Energy: Opportunities and Challenges', category: 'Environment', author: 'Jane Smith', date: '2023-04-05', description: 'A comprehensive look at the potential of renewable energy sources and the challenges they face.' },
  { id: 3, title: 'Artificial Intelligence in Healthcare: Transforming Patient Care', category: 'Technology', author: 'Dr. AI', date: '2023-04-10', description: 'Exploring how AI is revolutionizing healthcare, improving patient outcomes, and enhancing efficiency.' },
  { id: 4, title: 'The Role of Blockchain in Supply Chain Management', category: 'Technology', author: 'Blockchain Expert', date: '2023-04-15', description: 'An in-depth analysis of how blockchain technology is reshaping supply chain management.' },
  // Add more articles as needed
 ];


 return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">Articles</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {articles.map(article => (
          <div key={article.id} className="card bg-white shadow-md rounded-lg p-4">
            <Link to={`/article/${article.id}`} className="text-xl font-semibold mb-2">
              {article.title}
            </Link>
            <p className="text-gray-600">Category: {article.category}</p>
            {/* <p className="text-gray-600">Written by: {article.author}</p> */}
            <p className="text-gray-600">Date: {article.date}</p>
          </div>
        ))}
      </div>
    </div>
 );
};

export default Articles;

import React from 'react';
import { Link } from 'react-router-dom';

// Import images
import habitsImage from './image/habits.jpg';
import powerImage from './image/power.jpg';
import msmImage from './image/msm.jpg';
import alchemistImage from './image/alchemist.jpg';

const BookSummary = () => {
 // Example book data with imported images
 const books = [
    { id: 1, title: 'Atomic Habits', description: '"Atomic Habits" by James Clear is a book that explores the power of small changes and habits in achieving remarkable results.', image: habitsImage },
    { id: 2, title: 'The Power of Now', description: 'This transformative guide offers insights into the importance of living in the present moment and letting go of past regrets and future anxieties.', image: powerImage },
    { id: 3, title: "Man's Search for Meaning", description: 'Drawing from his experiences as a Holocaust survivor, Viktor Frankl explores the human capacity for finding meaning in even the most challenging circumstances.', image: msmImage },
    { id: 4, title: 'The Alchemist', description: 'This timeless fable follows the journey of Santiago, a young shepherd who embarks on a quest to fulfill his dreams and discover his personal legend.', image: alchemistImage },
    // Add more books as needed
 ];

 return (
  <div className="container mx-auto px-4 py-8">
    <h1 className="text-4xl font-bold mb-4">Book Summaries</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {books.map(book => (
        <div key={book.id} className="card bg-white shadow-md rounded-lg flex flex-col justify-between">
          <div className="flex flex-col items-center">
            <img src={book.image} alt="Book Cover" className="w-full h-auto object-cover rounded-t-lg" style={{ maxWidth: "200px" }} />
            <div className="p-4 text-center">
              <Link to={`/book/${book.id}`} className="text-xl font-semibold mb-2 block">
                {book.title}
              </Link>
              <p className="text-gray-600 text-sm">{book.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

}

export default BookSummary;

import React from 'react';
import { useParams } from 'react-router-dom';

const BookDetails = () => {
 const { id } = useParams(); // Retrieve the article ID from the URL

 // Example article data
 const books = [
   { id: 1, title: 'Atomic Habits', description:  <div className="max-w-2xl mx-auto px-4 py-8">
   <h2 className="text-2xl font-bold mb-4">The 4 Laws of Behaviour Change</h2>
   <p className="mb-4">There are 4 laws of behaviour change that we can use to create good habits and break the bad ones. A single habit is made of a cue, craving, response, and reward. And these components are formed according to the 4 laws of behaviour change:</p>
  
   <div className="space-y-4">
      <div>
        <h3 className="text-xl font-semibold mb-2">Make it obvious</h3>
        <p>The habit needs to be effortless for us and require no active thinking. For example, when I had a hard time remembering to take my Vitamin D pills. I realised that the problem was that I kept these pills on the other side of the kitchen. Once I put them in the obvious spot that I couldn’t miss, I started taking them more regularly.</p>
      </div>
  
      <div>
        <h3 className="text-xl font-semibold mb-2">Make it attractive</h3>
        <p>If the habit is unattractive we likely won’t have enough willpower to do it over and over. Therefore, you should come up with some ways to make the habit attractive even if it’s something hard like going to a gym or studying for long hours. For me, it was restricting my fantasy audiobooks listen-time to when I was at the gym which made the whole workout thing much more pleasurable.</p>
      </div>
  
      <div>
        <h3 className="text-xl font-semibold mb-2">Make it easy</h3>
        <p>The less friction there is between you and the habit, the greater the chances are that you’ll actually do it. This applies to simple things like packing your gym bag a day before you want to go to the gym or preparing a healthy meal to make sure that you don’t order another takeaway.</p>
      </div>
  
      <div>
        <h3 className="text-xl font-semibold mb-2">Make it immediately satisfying</h3>
        <p>Our brain rewards immediate returns so it’s good to come up with something simple that brings us joy right after we perform our habit. Every time I go to the gym, I hop into a pool and spend 10 to 20 minutes in a spa. I know that it sounds a bit excessive but this little routine makes me much more optimistic about spending an hour or two in the gym.</p>
      </div>
   </div>
  </div>},
   { id: 2, title: 'The Power of Now', description: 'This transformative guide offers insights into the importance of living in the present moment and letting go of past regrets and future anxieties.' },
   { id: 3, title: "Man's Search for Meaning", description: 'Drawing from his experiences as a Holocaust survivor, Viktor Frankl explores the human capacity for finding meaning in even the most challenging circumstances.' },
   { id: 4, title: 'The Alchemist', description: 'This timeless fable follows the journey of Santiago, a young shepherd who embarks on a quest to fulfill his dreams and discover his personal legend.' },
    // Add more books as needed
];


 // Find the article by ID
 const book = books.find(bk => bk.id === Number(id));

 if (!book) {
    return <div>Book not found</div>;
 }

 return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">{book.title}</h1>
      <p className="text-gray-600">{book.description}</p>
    </div>
 );
};

export default BookDetails;

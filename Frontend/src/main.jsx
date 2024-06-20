import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from './Layout.jsx';
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import BookSummary from './components/Booksummary.jsx'; // Add this line
// import BookDetails from './components/BookDetails.jsx'; // Add this line
import BookDetails from './components/BookDetails.jsx';
import Articles from './components/Articles.jsx'; // Add this line
import FinancialPlanning from './components/FinancialPlanning.jsx'; // Add this line
import AIToolsUpdate from './components/AIToolsUpdate.jsx'; // Add this line
import AIToolDetail from './components/AIToolDetail';
import Newsletter from './components/Newsletter.jsx'; // Add this line
import ArticleDetail from './components/ArticleDetail.jsx';
import LumpsumCalculator from './components/LumpsumCalculator.jsx';


const router = createBrowserRouter(
  createRoutesFromElements(
     <Route path='/' element={<Layout />}>
       <Route path='' element={<Home />} />
       <Route path='about' element={<About />} />
       <Route path='book-summary' element={<BookSummary />} /> {/* Add this line */}
       {/* <Route path='book-details' element={<BookDetails />} /> Add this line */}
       <Route path='articles' element={<Articles />} /> {/* Add this line */}
       <Route path="book/:id" element={<BookDetails />} /> 
       <Route path="/ai-tool/:id" element={<AIToolDetail />} />
       <Route path='financial-planning' element={<FinancialPlanning />} /> {/* Add this line */}
       <Route path="/article/:id" element={<ArticleDetail />} />
       <Route path="/Invest/Lumpsum-Calculator" element={<LumpsumCalculator />} />
       <Route path='ai-tools-update' element={<AIToolsUpdate />} /> {/* Add this line */}
       <Route path='newsletter' element={<Newsletter />} /> {/* Add this line */}
     </Route>
  )
 );
 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* must take one props */}
  </React.StrictMode>,
)

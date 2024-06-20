import React from 'react';
import { useParams } from 'react-router-dom';

const ArticleDetail = () => {
 const { id } = useParams(); // Retrieve the article ID from the URL

 // Example article data
 const articles = [
    { id: 1, title: 'The Impact of Cryptocurrency on Global Finance', category: 'Finance', author: 'John Doe', date: '2023-04-01', description: <div className="max-w-2xl mx-auto px-4 py-8">
    
    <p className="mb-4">Cryptocurrency, once a niche interest of tech-savvy enthusiasts, has rapidly transformed into a significant player in the realm of global finance. Since the inception of Bitcoin in 2009, followed by the proliferation of numerous altcoins, the landscape of finance has been undergoing a profound evolution. This article explores the multifaceted impact of cryptocurrency on global finance, spanning from economic empowerment to regulatory challenges.</p>
   
    <div className="space-y-4">
       <div>
         <h3 className="text-xl font-semibold mb-2">Democratization of Financial Access</h3>
         <p>Cryptocurrency has emerged as a powerful tool for financial inclusion, particularly in regions with limited access to traditional banking services. By leveraging blockchain technology, cryptocurrencies facilitate peer-to-peer transactions, bypassing intermediaries and reducing transaction costs. This has enabled millions of unbanked individuals worldwide to participate in the global economy, fostering economic empowerment and reducing financial exclusion.</p>
       </div>
   
       <div>
         <h3 className="text-xl font-semibold mb-2">Disruption of Traditional Banking</h3>
         <p>The rise of cryptocurrency poses a formidable challenge to traditional banking institutions. With decentralized finance (DeFi) platforms offering a range of services such as lending, borrowing, and trading, individuals can now access financial services without relying on banks. This disintermediation threatens the traditional banking model, prompting incumbents to explore blockchain technology and adapt their business strategies to remain relevant in the digital age.</p>
       </div>
   
       <div>
         <h3 className="text-xl font-semibold mb-2">Volatility and Speculation</h3>
         <p>Despite its potential benefits, cryptocurrency markets are notorious for their volatility. The prices of major cryptocurrencies such as Bitcoin and Ethereum can fluctuate dramatically within short periods, driven by factors ranging from market sentiment to regulatory developments. While volatility presents opportunities for traders to profit, it also poses risks for investors and undermines cryptocurrency's utility as a stable medium of exchange and store of value.</p>
       </div>
   
       <div>
         <h3 className="text-xl font-semibold mb-2">Regulatory Challenges</h3>
         <p>The decentralized nature of cryptocurrencies presents significant regulatory challenges for governments and regulatory bodies worldwide. Concerns regarding money laundering, terrorist financing, and consumer protection have prompted governments to implement regulatory frameworks to govern the use and trading of cryptocurrencies. However, regulatory approaches vary widely across jurisdictions, leading to regulatory uncertainty and hindering mainstream adoption of cryptocurrencies.</p>
       </div>
   
       <div>
         <h3 className="text-xl font-semibold mb-2">Institutional Adoption</h3>
         <p>Despite regulatory hurdles, institutional adoption of cryptocurrency is on the rise. Major financial institutions, including investment banks, asset managers, and payment processors, are increasingly embracing cryptocurrency as an asset class. The entry of institutional investors into the cryptocurrency market has brought liquidity, stability, and legitimacy, driving mainstream acceptance and paving the way for broader adoption.</p>
       </div>
   
       <div>
         <h3 className="text-xl font-semibold mb-2">Technological Innovation</h3>
         <p>Beyond its role as a financial asset, cryptocurrency underpins a wave of technological innovation. Blockchain technology, the underlying technology behind cryptocurrencies, holds the potential to revolutionize various industries beyond finance, including supply chain management, healthcare, and voting systems. As developers continue to explore and refine blockchain solutions, the impact on global finance and other sectors is expected to be profound.</p>
       </div>
    </div>
   </div>
    },
    { id: 2, title: 'The Future of Renewable Energy: Opportunities and Challenges', category: 'Environment', author: 'Jane Smith', date: '2023-04-05', description: 'A comprehensive look at the potential of renewable energy sources and the challenges they face.' },
    { id: 3, title: 'Artificial Intelligence in Healthcare: Transforming Patient Care', category: 'Technology', author: 'Dr. AI', date: '2023-04-10', description: 'Exploring how AI is revolutionizing healthcare, improving patient outcomes, and enhancing efficiency.' },
    { id: 4, title: 'The Role of Blockchain in Supply Chain Management', category: 'Technology', author: 'Blockchain Expert', date: '2023-04-15', description: 'An in-depth analysis of how blockchain technology is reshaping supply chain management.' },
    // Add more articles as needed
   ];


 // Find the article by ID
 const article = articles.find(art => art.id === Number(id));

 if (!article) {
    return <div>Article not found</div>;
 }

 return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-4xl font-bold mb-4">{article.title}</h2>
      <p className="text-gray-600">{article.description}</p>
    </div>
 );
};

export default ArticleDetail;

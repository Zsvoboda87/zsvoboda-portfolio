import './App.css';
import React, { useState, useEffect } from "react";
import NavTabs from './components/Nav/NavTabs';
import Portfolio from './components/pages/Portfolio';
import Contact from './components/pages/Contact';
import Resume from './components/pages/Resume';
import About from './components/pages/About';

function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <About />;
  };

  const handlePageChange = (page) => setCurrentPage(page);


  return (
    <div >
      <header>
        <div className='flex'>
          <img src='assets/images/avatar.png' alt="Zachary's avitar"></img>
          <h1>Zachary Svoboda</h1>
        </div>
        <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      </header >

      <main>
        {renderPage()}
      </main>
    </div >
  );
}

export default App;

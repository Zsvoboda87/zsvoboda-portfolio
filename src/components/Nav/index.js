import React, { useState } from "react";
import NavTabs from './NavTabs';

export default function Nav() {
    const [currentPage, setCurrentPage] = useState('Home');

    const renderPage = () => {
        // if (currentPage === 'Home') {
        //     return <Home />;
        // }
        // if (currentPage === 'About') {
        //     return <About />;
        // }
        // if (currentPage === 'Blog') {
        //     return <Blog />;
        // }
        // return <Contact />;
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />

            {renderPage()}
        </div>
    );
}



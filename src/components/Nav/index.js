// import React, { useState } from "react";
// import NavTabs from './NavTabs';
// import Portfolio from "../pages/Portfolio";
// import Contact from "../pages/Contact";
// import Resume from "../pages/Resume";
// import About from "../pages/About";

// export default function Nav() {
//     const [currentPage, setCurrentPage] = useState('Home');

//     const renderPage = () => {
//         if (currentPage === 'Portfolio') {
//             return <Portfolio />;
//         }
//         if (currentPage === 'Contact') {
//             return <Contact />;
//         }
//         if (currentPage === 'Resume') {
//             return <Resume />;
//         }
//         return <About />;
//     };

//     const handlePageChange = (page) => setCurrentPage(page);

//     return (
//         <div>
//             <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
//             {renderPage()}
//         </div>
//     );
// }



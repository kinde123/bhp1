// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import ImageSection from './pages/imageSection';
 import Navbar from './pages/Navbar.js';
import Home from './pages/Home';
import About from './pages/About';
import CourseDetails from './pages/CourseDetails';
import ContactUs from './pages/ContactUs';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
     <Navbar />
      
      <Routes>
     
        <Route exact path="/" element={<Home />} />
        <Route exact path="/About" element={<About />} />
        <Route exact path="/CourseDetails" element={<CourseDetails />} />
        <Route exact path="/ContactUs" element={<ContactUs />} />
      </Routes>
      
    </BrowserRouter>
  );
};

export default App;

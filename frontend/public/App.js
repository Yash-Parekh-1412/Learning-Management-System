import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CoursesPage from './CoursesPage';
import Assessment from './Assessment';
import C from './C';
import Cpp from './Cpp';
import Java from './Java';
import Html from './Html';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<CoursesPage />} />
          <Route path="/assessment/:courseId" element={<Assessment />} />
          <Route path="/c" element={<C />} />
          <Route path="/cpp" element={<Cpp />} />
          <Route path="/java" element={<Java />} />
          <Route path="/html" element={<Html />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CoursesPage.css';
import c_logo from './c_logo.png';
import cpp_logo from './cpp_logo.png';
import java_logo from './java_logo.png';
import html_logo from './html_logo.png';

const CoursesPage = () => {
  const [searchInput, setSearchInput] = useState('');

  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  const courses = [
    {
      id: 1,
      logo: c_logo,
      link: '/c',
    },
    {
      id: 2,
      logo: cpp_logo,
      link: '/cpp',
    },
    {
      id: 3,
      logo: java_logo,
      link: '/java',
    },
    {
      id: 4,
      logo: html_logo,
      link: '/html',
    },
  ];

  const filteredCourses = courses.filter((course) =>
    course.logo.toLowerCase().startsWith(searchInput.toLowerCase().trim())
  );

  return (
    <div className="container">
      <h1>
        <center>COURSES</center>
      </h1>
      <div id="search-bar">
        <input
          type="text"
          value={searchInput}
          onChange={handleSearchInputChange}
          placeholder="Search courses..."
        />
        <button>Search</button>
      </div>

      {filteredCourses.length > 0 ? (
        <div id="course-list">
          {filteredCourses.map((course) => (
            <div key={course.id} className="course">
              <Link to={course.link}>
                <img src={course.logo} alt={`Course ${course.id}`} />
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <p>No courses found.</p>
      )}
    </div>
  );
};

export default CoursesPage;

import React, { useState } from 'react';
import './courses.css';
import v1 from './videos/html_videos/html_video1.mp4';
import v2 from './videos/html_videos/html_video2.mp4';
import v3 from './videos/html_videos/html_video3.mp4';
import v4 from './videos/html_videos/html_video4.mp4';
import v5 from './videos/html_videos/html_video5.mp4';
import v6 from './videos/html_videos/html_video6.mp4';
import v7 from './videos/html_videos/html_video7.mp4';
import v8 from './videos/html_videos/html_video8.mp4';
import v9 from './videos/html_videos/html_video9.mp4';
import v10 from './videos/html_videos/html_video10.mp4';
const Html = () => {
  const [isRegistered, setIsRegistered] = useState(false);
  const [completedVideos, setCompletedVideos] = useState(0);

  const handleRegister = () => {
    setIsRegistered(true);
  };

  const handleVideoEnd = () => {
    setCompletedVideos((prevCount) => prevCount + 1);
  };

  const handleAssessment = () => {
    // assessment page
  };

  return (
    <div>
      <h2><center>HTML Course</center></h2>
      <p>Register for the course to gain access to the video lessons and assessments.</p>
      {!isRegistered ? (
        <button onClick={handleRegister}>Register</button>
      ) : (
        <div>
            <div>
      <p>Welcome to the HTML course page. This course will introduce you to the basics of HTML and web development.</p>
      <p>The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It is often assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript.
        Web browsers receive HTML documents from a web server or from local storage and render the documents into multimedia web pages. HTML describes the structure of a web page semantically and originally included cues for its appearance.
        HTML elements are the building blocks of HTML pages.</p>
            </div>
          <h3>Video Lessons</h3>
          <p>Watch the following videos:</p>
          Video 1: Creating the first web page
          <video src={v1} onEnded={handleVideoEnd} controls />
          Video 2: Line breaks, spacing, and comments
          <video src={v2} onEnded={handleVideoEnd} controls />
          Video 3: Ordered and Unordered lists
          <video src={v3} onEnded={handleVideoEnd} controls />
          Video 4: Creating a table
          <video src={v4} onEnded={handleVideoEnd} controls />
          Video 5: Creating a web link
          <video src={v5} onEnded={handleVideoEnd} controls />
          Video 6: Creating links within same web page
          <video src={v6} onEnded={handleVideoEnd} controls />
          Video 7: Adding an image to a web page
          <video src={v7} onEnded={handleVideoEnd} controls />
          Video 8: Resizing and sizing images
          <video src={v8} onEnded={handleVideoEnd} controls />
          Video 9: Nested elements
          <video src={v9} onEnded={handleVideoEnd} controls />
          Video 10: One-line text box
          <video src={v10} onEnded={handleVideoEnd} controls />

          {completedVideos >= 5 && (
            <button onClick={handleAssessment}>Take Assessment</button>
          )}
          {"\n"}
          {"\n"}
          {"\n"}
          <center><h3>Thank you for taking the course!!</h3></center>
        </div>
      )}
      
    </div>
  );
};

export default Html;

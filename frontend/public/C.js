import React, { useState } from 'react';
import './courses.css';
import v1 from './videos/c_videos/c_video1.mp4';
import v2 from './videos/c_videos/c_video2.mp4';
import v3 from './videos/c_videos/c_video3.mp4';
import v4 from './videos/c_videos/c_video4.mp4';
import v5 from './videos/c_videos/c_video5.mp4';
import v6 from './videos/c_videos/c_video6.mp4';
import v7 from './videos/c_videos/c_video7.mp4';
import v8 from './videos/c_videos/c_video8.mp4';
import v9 from './videos/c_videos/c_video9.mp4';
import v10 from './videos/c_videos/c_video10.mp4';
const C = () => {
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
      <h2><center>C Course</center></h2>
      <p>Register for the course to gain access to the video lessons and assessments.</p>
      {!isRegistered ? (
        <button onClick={handleRegister}>Register</button>
      ) : (
        <div>
            <div>
      <p>Welcome to the C course page. This course will teach you the fundamentals of the C programming language.</p>
      <p>C is an imperative procedural language, supporting structured programming, lexical variable scope and recursion, with a static type system. It was designed to be compiled to provide low-level access to memory and language constructs that map efficiently to machine instructions, all with minimal runtime support. Despite its low-level capabilities, the language was designed to encourage cross-platform programming </p>
            </div>
          <h3>Video Lessons</h3>
          <p>Watch the following videos:</p>
          Video 1: HELLO WORLD
          <video src={v1} onEnded={handleVideoEnd} controls />
          Video 2: AREA OF A CIRCLE
          <video src={v2} onEnded={handleVideoEnd} controls />
          Video 3: OUTPUT A TRIANGLE OF STARS
          <video src={v3} onEnded={handleVideoEnd} controls />
          Video 4: DOT PRODUCT
          <video src={v4} onEnded={handleVideoEnd} controls />
          Video 5: FIND THE LENGTH OF A STRING MANUALLY
          <video src={v5} onEnded={handleVideoEnd} controls />
          Video 6: FIND THE MINIMUM NUMBER IN AN ARRAY
          <video src={v6} onEnded={handleVideoEnd} controls />
          Video 7: CHECK IF THE ARRAY IS DISJOINT
          <video src={v7} onEnded={handleVideoEnd} controls />
          Video 8: PROGRAM THAT PRINTS ITS OWN SOURCE CODE
          <video src={v8} onEnded={handleVideoEnd} controls />
          Video 9: REPLACE A CHARACTER IN A STRING WITH ANOTHER CHARACTER
          <video src={v9} onEnded={handleVideoEnd} controls />
          Video 10: COUNT THE PUNCTUATION MARKS IN A STRING
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

export default C;

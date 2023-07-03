import React, { useState } from 'react';
import './courses.css';
import v1 from './videos/cpp_videos/cpp_video1.mp4';
import v2 from './videos/cpp_videos/cpp_video2.mp4';
import v3 from './videos/cpp_videos/cpp_video3.mp4';
import v4 from './videos/cpp_videos/cpp_video4.mp4';
import v5 from './videos/cpp_videos/cpp_video5.mp4';
import v6 from './videos/cpp_videos/cpp_video6.mp4';
import v7 from './videos/cpp_videos/cpp_video7.mp4';
import v8 from './videos/cpp_videos/cpp_video8.mp4';
import v9 from './videos/cpp_videos/cpp_video9.mp4';
import v10 from './videos/cpp_videos/cpp_video10.mp4';
const Cpp = () => {
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
      <h2><center>C++ Course</center></h2>
      <p>Register for the course to gain access to the video lessons and assessments.</p>
      {!isRegistered ? (
        <button onClick={handleRegister}>Register</button>
      ) : (
        <div>
            <div>
      <p>Welcome to the C++ course page. This course will take you through object-oriented programming concepts using C++.</p>
      <p>C++ is an object-oriented programming language which gives a clear structure to programs and allows code to be reused, lowering development costs. C++ is portable and can be used to develop applications that can be adapted to multiple platforms.</p>
            </div>
          <h3>Video Lessons</h3>
          <p>Watch the following videos:</p>
          Video 1: TO CHECK EVEN OR ODD
          <video src={v1} onEnded={handleVideoEnd} controls />
          Video 2: TO CHECK FOR LEAP YEAR
          <video src={v2} onEnded={handleVideoEnd} controls />
          Video 3: TO CHECK IS IT IS A PALINDROME
          <video src={v3} onEnded={handleVideoEnd} controls />
          Video 4: SWAP VARIABLES USING 3 VARIABLES
          <video src={v4} onEnded={handleVideoEnd} controls />
          Video 5: 2D ARRAYS (ADD AND SUBTRACT)
          <video src={v5} onEnded={handleVideoEnd} controls />
          Video 6: DYNAMIC MEMORY ALLOCATION 
          <video src={v6} onEnded={handleVideoEnd} controls />
          Video 7: EXCEPTION HANDLING 
          <video src={v7} onEnded={handleVideoEnd} controls />
          Video 8: FILE HANDLING
          <video src={v8} onEnded={handleVideoEnd} controls />
          Video 9: INTRODUCTION TO POINTERS
          <video src={v9} onEnded={handleVideoEnd} controls />
          Video 10: STRUCTURES
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

export default Cpp;

import React, { useState } from 'react';
import './courses.css';
import v1 from './videos/java_videos/java_video1.mp4';
import v2 from './videos/java_videos/java_video2.mp4';
import v3 from './videos/java_videos/java_video3.mp4';
import v4 from './videos/java_videos/java_video4.mp4';
import v5 from './videos/java_videos/java_video5.mp4';
import v6 from './videos/java_videos/java_video6.mp4';
import v7 from './videos/java_videos/java_video7.mp4';
import v8 from './videos/java_videos/java_video8.mp4';
import v9 from './videos/java_videos/java_video9.mp4';
import v10 from './videos/java_videos/java_video10.mp4';
const Java = () => {
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
      <h2><center>Java Course</center></h2>
      <p>Register for the course to gain access to the video lessons and assessments.</p>
      {!isRegistered ? (
        <button onClick={handleRegister}>Register</button>
      ) : (
        <div>
            <div>
      <p>Welcome to the Java course page. This course will teach you the Java programming language and its application in building software.</p>
      <p>Java is a programming language and a platform. Java is a high level, robust, object-oriented and secure programming language.

Java was developed by Sun Microsystems (which is now the subsidiary of Oracle) in the year 1995. James Gosling is known as the father of Java. Before Java, its name was Oak. Since Oak was already a registered company, so James Gosling and his team changed the name from Oak to Java.</p>
            </div>
          <h3>Video Lessons</h3>
          <p>Watch the following videos:</p>
          Video 1: DISPLAYING NUMBERS
          <video src={v1} onEnded={handleVideoEnd} controls />
          Video 2: ADD TWO NUMBERS
          <video src={v2} onEnded={handleVideoEnd} controls />
          Video 3: FACTORIAL USING RECURSION
          <video src={v3} onEnded={handleVideoEnd} controls />
          Video 4: HOW TO CALCULATE AGE FROM DATE OF BIRTH
          <video src={v4} onEnded={handleVideoEnd} controls />
          Video 5: PALINDROME
          <video src={v5} onEnded={handleVideoEnd} controls />
          Video 6: CREATING A CLASS
          <video src={v6} onEnded={handleVideoEnd} controls />
          Video 7: PASSING ARRAY AS ARGUMENTS IN METHODS RETURNING ARRAYS
          <video src={v7} onEnded={handleVideoEnd} controls />
          Video 8: REVERSE A STRING
          <video src={v8} onEnded={handleVideoEnd} controls />
          Video 9: FIND DUPLICATES IN THE STRING
          <video src={v9} onEnded={handleVideoEnd} controls />
          Video 10: TO CAPITALIZE THE FIRST LETTER OF STRING
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

export default Java;

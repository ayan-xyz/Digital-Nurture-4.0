import React from 'react';

const CourseDetails = () => {
  const courses = [
    { name: 'Angular', date: '4/5/2021' },
    { name: 'React', date: '6/3/20201' },
  ];

  if (courses.length === 0) {
    return <p>No course data available.</p>;
  } else {
    return (
      <div>
        <h2>Course Details</h2>
        {courses.map((course, index) => (
          <div key={index}>
            <h3>{course.name}</h3>
            <p>{course.date}</p>
          </div>
        ))}
      </div>
    );
  }
};

export default CourseDetails;

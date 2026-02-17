import React, { useEffect, useState } from "react";
import base_url from "./../api/BootApi";
import axios from "axios";
import { toast } from "react-toastify";
import Courses from "./Courses";   

const AllCourses = () => {
  useEffect(() => {
    document.title = "All Courses || Learncodewith Anish";
  }, []);

  const [courses, setCourses] = useState([]);

  // function to call Server
  const getAllCoursesFromServer = () => {
    axios.get(`${base_url}/courses`).then(
      (response) => {
        console.log("API response:", response.data); 
        toast.success("Courses have been loaded");
        setCourses(response.data); // or response.data.courses if backend wraps it
      },
      (error) => {
        console.log(error);
        toast.error("Something went wrong");
      }
    );
  };

  // Calling loading courses function
  useEffect(() => {
    getAllCoursesFromServer();
  }, []);

  const updateCourses = (id) => {
    setCourses(courses.filter((c) => c.id !== id));
  };

  return (
    <div>
      <h1>All Courses</h1>
      <p>List of courses as follows:</p>
      <hr />
      {courses.length > 0 ? (
        courses.map((item) => (
          <Courses key={item.id} courses={item} update={updateCourses} />
        ))
      ) : (
        "No courses"
      )}
    </div>
  );
};

export default AllCourses;

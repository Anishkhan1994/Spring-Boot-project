import React, { Fragment, useEffect, useState } from "react";
import { Button, Container, Form, FormGroup, Input, Spinner } from "reactstrap";
import axios from "axios";
import base_url from "./../api/BootApi";
import { toast } from "react-toastify";

const AddCourses = () => {
  useEffect(() => {
    document.title = "Add Courses || Learncodewith Anish";
  }, []);

  const [course, setCourse] = useState({ id: "", title: "", description: "" });
  const [loading, setLoading] = useState(false);

  // form handle function
  const handleForm = (e) => {
    e.preventDefault();

    // validation
    if (!course.id || !course.title || !course.description) {
      toast.error("All fields are required!");
      return;
    }

    postDatatoServer(course);
  };

  // server call
  const postDatatoServer = (data) => {
    setLoading(true);
    axios.post(`${base_url}/courses`, data).then(
      (response) => {
        toast.success("Course is added Successfully 🎉");
        setCourse({ id: "", title: "", description: "" }); // reset form
        setLoading(false);
      },
      (error) => {
        toast.error("Error! Something went wrong ❌");
        setLoading(false);
      }
    );
  };

  return (
    <Fragment>
      <h1 className="text-center my-3">Fill the Courses Details</h1>
      <Form onSubmit={handleForm}>
        <FormGroup>
          <label htmlFor="userId">Course Id</label>
          <Input
            type="text"
            placeholder="Enter here"
            id="userId"
            value={course.id}
            onChange={(e) => setCourse({ ...course, id: e.target.value })}
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="title">Course Title</label>
          <Input
            type="text"
            placeholder="Enter title here"
            id="title"
            value={course.title}
            onChange={(e) => setCourse({ ...course, title: e.target.value })}
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="description">Course Description</label>
          <Input
            type="textarea"
            placeholder="Enter description here"
            id="description"
            style={{ height: 150 }}
            value={course.description}
            onChange={(e) =>
              setCourse({ ...course, description: e.target.value })
            }
          />
        </FormGroup>
        <Container className="text-center">
          <Button type="submit" color="success" disabled={loading}>
            {loading ? <Spinner size="sm" /> : "Add Courses"}
          </Button>
          <Button
            type="reset"
            color="warning"
            className="m-2"
            onClick={() => setCourse({ id: "", title: "", description: "" })}
          >
            Clear
          </Button>
        </Container>
      </Form>

      {/* Live Preview */}
      {course.title && (
        <Container className="mt-4 p-3 border rounded bg-light">
          <h4>📖 Preview</h4>
          <p>
            <strong>ID:</strong> {course.id}
          </p>
          <p>
            <strong>Title:</strong> {course.title}
          </p>
          <p>
            <strong>Description:</strong> {course.description}
          </p>
        </Container>
      )}
    </Fragment>
  );
};

export default AddCourses;

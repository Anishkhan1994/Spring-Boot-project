import React, { useState } from "react";
import {
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  Button,
  Container,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";
import axios from "axios";
import { toast } from "react-toastify";
import base_url from "./../api/BootApi";

const Courses = ({ courses, update }) => {
  const [modal, setModal] = useState(false);
  const [updatedCourse, setUpdatedCourse] = useState(courses);

  const toggle = () => setModal(!modal);

  const deleteCourses = (id) => {
    axios.delete(`${base_url}/courses/${id}`).then(
      (response) => {
        toast.success("Course deleted");
        update(id);
      },
      (error) => {
        toast.error("Course is not deleted | Server problem");
      }
    );
  };

  const handleChange = (e) => {
    setUpdatedCourse({ ...updatedCourse, [e.target.name]: e.target.value });
  };

  const updateCourses = () => {
  axios.put(`${base_url}/courses/${updatedCourse.id}`, updatedCourse).then(
    (response) => {
      toast.success("Course updated successfully");
      update(response.data); // pass updated course back
      toggle();
    },
    (error) => {
      toast.error("Course is not updated | Server problem");
    }
  );
};


  return (
    <Card className="text-center">
      <CardBody>
        <CardSubtitle className="font-weight-bold">
          {courses.title}
        </CardSubtitle>
        <CardText>{courses.description}</CardText>
        <Container className="text-center">
          <Button
            color="danger"
            onClick={() => {
              deleteCourses(courses.id);
            }}
          >
            Delete
          </Button>
          <Button color="warning m-2" onClick={toggle}>
            Update
          </Button>
        </Container>
      </CardBody>

      {/* Update Modal */}
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Update Course</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="title">Course Title</Label>
              <Input
                type="text"
                name="title"
                id="title"
                value={updatedCourse.title}
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="description">Course Description</Label>
              <Input
                type="textarea"
                name="description"
                id="description"
                value={updatedCourse.description}
                onChange={handleChange}
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={updateCourses}>
            Save Changes
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </Card>
  );
};

export default Courses;

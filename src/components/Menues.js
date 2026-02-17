import React from "react";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem } from "reactstrap";

const Menues = () => {
  return (
    <ListGroup>
      <ListGroupItem tag={Link} to="/" action>
        Home
      </ListGroupItem>
      <ListGroupItem tag={Link} to="/add-courses" action>
        Add Courses
      </ListGroupItem>
      <ListGroupItem tag={Link} to="/view-courses" action>
        View Courses
      </ListGroupItem>
      <ListGroupItem tag={Link} to="/about" action>
        About Courses
      </ListGroupItem>
      <ListGroupItem tag={Link} to="/contact" action>
        Contact
      </ListGroupItem>
    </ListGroup>
  );
};

export default Menues;

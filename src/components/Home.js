import React, { useState, useEffect } from "react";
import { Button, Container } from "reactstrap";

const Home = () => {
  const [showForm, setShowForm] = useState(false); // state to toggle form
  const [name, setName] = useState(""); // state to store input value

  useEffect(() => {
    document.title = "Home || Learncodewith Anish";
  }, []);

  return (
    <Container className="text-center my-5">
      <h1>Learn Code with Anish Khan</h1>
      <p>This is my first React home page demonstrating the use of Container</p>

      {/* Toggle form visibility */}
      <Button color="warning" outline onClick={() => setShowForm(!showForm)}>
        {showForm ? "Hide Form" : "Start Using"}
      </Button>

      {/* Conditional rendering of form */}
      {showForm && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert(`Hello, ${name}! 🎉`);
          }}
        >
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)} // capture input
          />
          <Button color="success" type="submit">
            Submit
          </Button>
        </form>
      )}
    </Container>
  );
};

export default Home;

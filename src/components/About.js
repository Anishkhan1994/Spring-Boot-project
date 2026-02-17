import React from "react";

const About = () => {
  return (
    <div className="about-page">
      <h1>About Our Courses</h1>
      <p>
        Welcome to our Courses application! We are dedicated to providing
        high-quality learning experiences that help students and professionals
        achieve their goals.
      </p>

      <section className="mission">
        <h2>Our Mission</h2>
        <p>
          Our mission is to make education accessible, engaging, and practical.
          We believe learning should empower you to apply knowledge in real-world
          situations.
        </p>
      </section>

      <section className="what-we-offer">
        <h2>What We Offer</h2>
        <ul>
          <li>Expert-led courses across multiple disciplines</li>
          <li>Interactive lessons and hands-on projects</li>
          <li>Flexible learning schedules</li>
          <li>Certificates to showcase your achievements</li>
        </ul>
      </section>

      <section className="team">
        <h2>Our Team</h2>
        <p>
          We are a group of passionate educators, developers, and designers
          committed to creating the best learning experience possible.
        </p>
      </section>
    </div>
  );
};

export default About;

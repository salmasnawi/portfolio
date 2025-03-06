import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <section className="hero-section d-flex align-items-center">
      <Container>
        <Row className="justify-content-center text-center">
          <Col lg={8} data-aos="fade-up" data-aos-delay="250">
            <h1 className="mb-4 ">Hi! I'm <span className="text-highlight">Salma Sanwi</span></h1>

            <h2 className="role-text">
              <Typewriter
                options={{
                  strings: ["Software Developer", "Front-end developer", "UI/UX Designer","full-stack developer"],
                  autoStart: true,
                  loop: true,
                  delay: 75,
                  deleteSpeed: 50,
                }}
              />
            </h2>

            <p className="mb-4">
              Passionate about crafting modern web experiences with <strong>React, Next.js</strong> & AI. 
            </p>

            <div className="buttons mt-4">
              <Button 
                className="btn me-3 glow-pink" 
                href="https://github.com/salmasnawi" 
                target="_blank" 
                rel="noopener noreferrer"
                data-aos="fade-up" 
                data-aos-delay="500"
              >
                View My Work
              </Button>

              <Button 
                variant="outline-light" 
                href="https://drive.google.com/uc?export=download&id=1gkqzCCJkedaZm6I8C7-MxR1hQdUbbR_U" 
                download 
                data-aos="fade-up" 
                data-aos-delay="750"
              >
                Download CV
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;

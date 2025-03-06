import React, { useState, useEffect } from "react";
import profileImg from '../assets/me3.jpg'; // تأكد من وجود صورة شخصية في assets
import { Container, Row, Col, ProgressBar } from "react-bootstrap";

const skillsData = [
  { name: "React.js", value: 100, color: "#ff4081" }, 
  { name: "bootstrap", value: 100, color: "#ff4081" }, 
  { name: "Next.js", value: 90, color: "#ff4081" }, 
  { name: "PHP,MYSQL", value: 75, color: "#ff4081" }, 
];




const About = () => {
    const [skills, setSkills] = useState(
      skillsData.map(skill => ({ ...skill, animatedValue: 0 }))
    );
  
    useEffect(() => {
      const interval = setInterval(() => {
        setSkills(prevSkills =>
          prevSkills.map(skill => ({
            ...skill,
            animatedValue: skill.animatedValue < skill.value
              ? skill.animatedValue + 1
              : skill.value
          }))
        );
      }, 15);
  
      return () => clearInterval(interval);
    }, []);
  return (
    <section className="about-section py-5">
      <Container>
        <Row>
          {/* الصورة والمعلومات */}
          <Col md={5} className="text-center" data-aos="fade-up" data-aos-delay="250">
          <img src={profileImg} alt="My Profile" className="about-img" />

        

            {/* شريط المهارات */}
            <div className="skills mt-4">
              {skills.map((skill, index) => (
                <div key={index} className="skill-item mb-3 text-dark">
                  <div className="d-flex justify-content-between">
                    <p className="mb-1 text-dark">{skill.name}</p>
                    <p className="mb-1 text-dark">{skill.animatedValue}%</p>
                  </div>
                  <ProgressBar
                    now={skill.animatedValue}
                    className="custom-progress"
                    style={{ backgroundColor: "#ddd" }}
                  >
                    <div className="progress-bar" style={{ 
                      width: `${skill.animatedValue}%`, 
                      backgroundColor: skill.color 
                    }}></div>
                  </ProgressBar>
                </div>
              ))}
            </div>
          </Col>
          {/* About Me */}

          <Col md={7} data-aos="fade-up" data-aos-delay="750">
            <h2 className="section-title">About me</h2>
            <div className="info text-dark mt-3 text-start">
              <p><strong>Name:</strong> Salma Atef Mohamed Snawi</p>
              <p><strong>Profile:</strong> Front-End Developer</p>
              <p><strong>Email:</strong> salmaatef272@gmail.com</p>
              <p><strong>Phone:</strong> +20 111 979 1826</p>
            </div>
            <p className='text-dark'>
              Passionate software developer skilled in <strong>React, Next.js, and AI technologies</strong>. I thrive on building 
              <strong>scalable and intelligent solutions</strong> that make an impact!
            </p>
            <p  className='text-dark'>
              With experience in both frontend and backend development, I specialize in creating <strong>dynamic, user-friendly applications</strong> 
              with modern frameworks and tools.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
    
  );
};

export default About;

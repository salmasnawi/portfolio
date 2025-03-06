import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import emailjs from "@emailjs/browser"; 

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [alert, setAlert] = useState({ type: "", message: "", visible: false });

  useEffect(() => {
    if (alert.visible) {
      const timer = setTimeout(() => {
        setAlert((prev) => ({ ...prev, visible: false }));
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [alert.visible]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const sendEmail = (e) => {
    e.preventDefault();
    const templateParams = {
      from_name: formData.name,
      reply_to: formData.email,
      message: formData.message,
    };
    emailjs.send(
        "service_c9g1h19",
        "template_unfbk0i",
        templateParams,
        "6FbzD_SQf4ufgIoQ-"
      )
      .then(
        () => {
          setAlert({ type: "success", message: "✅ Message sent successfully!", visible: true });
          setFormData({ name: "", email: "", subject: "", message: "" });
        },
        (error) => {
          setAlert({ type: "danger", message: "❌ Error sending message!", visible: true });
          console.log("FAILED...", error);
        }
      );
    };

  return (
    <div className="contact-section py-5" style={{ backgroundColor: "#ffdef6" }}>
     <div className="container">
     
        <div className="row text-center mb-4">
          <div className="col-md-4">
            <motion.div 
              className="contact-box p-4 rounded shadow-sm"
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ scale: 1.05, boxShadow: "0px 4px 12px rgba(0,0,0,0.2)" }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              style={{ background: "white", borderRadius: "12px", boxShadow: "0px 2px 8px rgba(0,0,0,0.1)", cursor: "pointer" }}
            >
              <FaMapMarkerAlt size={40} color="#EC407A" />
              <h5 className="mt-3" style={{ color: "#880E4F" }}>Address</h5>
              <p className="text-muted">Alexandra, Cairo</p>
            </motion.div>
          </div>
          <div className="col-md-4">
            <motion.div 
              className="contact-box p-4 rounded shadow-sm"
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ scale: 1.05, boxShadow: "0px 4px 12px rgba(0,0,0,0.2)" }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              style={{ background: "white", borderRadius: "12px", boxShadow: "0px 2px 8px rgba(0,0,0,0.1)", cursor: "pointer" }}
            >
              <FaPhoneAlt size={40} color="#EC407A" />
              <h5 className="mt-3" style={{ color: "#880E4F" }}>Call Us</h5>
              <p className="text-muted">+20 111 979 1826</p>
            </motion.div>
          </div>
          <div className="col-md-4">
            <motion.div 
              className="contact-box p-4 rounded shadow-sm"
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ scale: 1.05, boxShadow: "0px 4px 12px rgba(0,0,0,0.2)" }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              style={{ background: "white", borderRadius: "12px", boxShadow: "0px 2px 8px rgba(0,0,0,0.1)", cursor: "pointer" }}
            >
              <FaEnvelope size={40} color="#EC407A" />
              <h5 className="mt-3" style={{ color: "#880E4F" }}>Email Us</h5>
              <p className="text-muted">salmaatef272@gmail.com</p>
            </motion.div>
          </div>
        </div>
        {alert.visible && (
          <motion.div 
            className={`alert alert-${alert.type} text-center`} 
            role="alert"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 1, delay: 3 }}
          >
            {alert.message}
          </motion.div>
        )}    

        <motion.form 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="contact-form p-4 rounded shadow-sm"
          style={{ background: "white" }}
          onSubmit={sendEmail}
        >
          <div className="row mb-3">
            <div className="col-md-6">
              <input type="text" name="name" className="form-control" placeholder="Your Name" required onChange={handleChange} value={formData.name} />
            </div>
            <div className="col-md-6">
              <input type="email" name="email" className="form-control" placeholder="Your Email" required onChange={handleChange} value={formData.email} />
            </div>
          </div>
          <input type="text" name="subject" className="form-control mb-3" placeholder="Subject" required onChange={handleChange} value={formData.subject} />
          <textarea name="message" className="form-control mb-3" rows="5" placeholder="Message" required onChange={handleChange} value={formData.message}></textarea>
          <button type="submit" className="btn btn-primary " style={{ backgroundColor: "#EC407A", border: "none", padding: "12px", fontSize: "18px", borderRadius: "8px", transition: "0.3s ease-in-out" }}>Send Message</button>
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;

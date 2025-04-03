import React, { useEffect, useState } from 'react';
import NavigationBar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });

    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };

  return (
    <div className="contact-page">
     <NavigationBar/>
      
      {/* Hero Section */}
      <section className="py-5 bg-light">
        <div className="container section-container">
          <div className="row align-items-center">
            <div className="col-lg-6 fade-in">
              <h1 className="display-4 fw-bold mb-4">Contact Us</h1>
              <p className="lead mb-4">We're here to answer your questions and provide the support you need.</p>
            </div>
            <div className="col-lg-6 slide-in">
              <img src="https://placehold.co/600x400/e0f2fe/333333.png?text=Contact+Us" alt="Contact Us" className="img-fluid rounded shadow" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-5">
        <div className="container section-container">
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm text-center hover-scale">
                <div className="card-body p-4">
                  <div className="rounded-circle bg-primary bg-opacity-10 p-3 d-inline-flex mb-3">
                    <i className="bi bi-geo-alt fs-2 text-primary"></i>
                  </div>
                  <h4>Visit Us</h4>
                  <p className="mb-0">123 Derma Street<br />Medical District<br />New York, NY 10001</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm text-center hover-scale">
                <div className="card-body p-4">
                  <div className="rounded-circle bg-primary bg-opacity-10 p-3 d-inline-flex mb-3">
                    <i className="bi bi-telephone fs-2 text-primary"></i>
                  </div>
                  <h4>Call Us</h4>
                  <p className="mb-2">Customer Support:</p>
                  <p className="text-primary fw-bold mb-2">(555) 123-4567</p>
                  <p className="mb-0">Mon-Fri: 8AM-6PM EST</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm text-center hover-scale">
                <div className="card-body p-4">
                  <div className="rounded-circle bg-primary bg-opacity-10 p-3 d-inline-flex mb-3">
                    <i className="bi bi-envelope fs-2 text-primary"></i>
                  </div>
                  <h4>Email Us</h4>
                  <p className="mb-2">General Inquiries:</p>
                  <p className="text-primary fw-bold mb-2">info@dermaconnect.com</p>
                  <p className="mb-0">Support: support@dermaconnect.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-5 bg-light">
        <div className="container section-container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="card border-0 shadow">
                <div className="card-body p-4 p-md-5">
                  <h2 className="text-center mb-4">Send Us a Message</h2>
                  {formSubmitted ? (
                    <div className="alert alert-success fade-in" role="alert">
                      <i className="bi bi-check-circle me-2"></i>
                      Thank you for your message! We'll get back to you shortly.
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit}>
                      <div className="row g-3">
                        <div className="col-md-6">
                          <label htmlFor="name" className="form-label">Full Name</label>
                          <input 
                            type="text" 
                            className="form-control" 
                            id="name" 
                            name="name" 
                            value={formData.name}
                            onChange={handleChange}
                            required 
                          />
                        </div>
                        <div className="col-md-6">
                          <label htmlFor="email" className="form-label">Email Address</label>
                          <input 
                            type="email" 
                            className="form-control" 
                            id="email" 
                            name="email" 
                            value={formData.email}
                            onChange={handleChange}
                            required 
                          />
                        </div>
                        <div className="col-md-6">
                          <label htmlFor="phone" className="form-label">Phone Number</label>
                          <input 
                            type="tel" 
                            className="form-control" 
                            id="phone" 
                            name="phone" 
                            value={formData.phone}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="col-md-6">
                          <label htmlFor="subject" className="form-label">Subject</label>
                          <select 
                            className="form-select" 
                            id="subject" 
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                          >
                            <option value="">Select a subject</option>
                            <option value="General Inquiry">General Inquiry</option>
                            <option value="Appointment Question">Appointment Question</option>
                            <option value="Technical Support">Technical Support</option>
                            <option value="Billing Question">Billing Question</option>
                            <option value="Partnership Opportunity">Partnership Opportunity</option>
                          </select>
                        </div>
                        <div className="col-12">
                          <label htmlFor="message" className="form-label">Message</label>
                          <textarea 
                            className="form-control" 
                            id="message" 
                            name="message" 
                            rows="5"
                            value={formData.message}
                            onChange={handleChange}
                            required
                          ></textarea>
                        </div>
                        <div className="col-12 text-center">
                          <button type="submit" className="btn btn-primary btn-lg px-5 mt-3">Send Message</button>
                        </div>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer/>
    </div>
  );
};

export default Contact;
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./About.css";
import NavigationBar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import aboutt from "../assets/images/dermatologist.jpg";
const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (

    <div className="dermaconnect-home">
      <NavigationBar/>

      {/* Hero Section */}
      <section className="animated-bg py-5">
        <div className="container section-container">
          <div className="row align-items-center">
            <div className="col-lg-6 fade-in">
              <h1 className="display-4 fw-bold mb-4">Your Skin Deserves The Best Care</h1>
              <p className="lead mb-4">Connect with top dermatologists online and get personalized skin care recommendations from the comfort of your home.</p>
              <div className="d-flex gap-3">
                <Link to="/book-appointment" className="btn btn-primary btn-lg btn-pulse">Book an Appointment</Link>
                <Link to="/about" className="btn btn-outline-secondary btn-lg">Learn More</Link>
              </div>
            </div>
            <div className="col-lg-6 slide-in">
            <img src={aboutt} alt="Dermatology Care" className="img-fluid rounded shadow" />            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-5 bg-light">
        <div className="container section-container">
          <div className="text-center mb-5">
            <h2 className="mb-3">Our Services</h2>
            <p className="lead text-muted">Comprehensive dermatological care at your fingertips</p>
          </div>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100">
                <div className="card-body text-center p-4">
                  <div className="rounded-circle bg-primary bg-opacity-10 p-3 d-inline-flex mb-3">
                    <i className="bi bi-camera fs-2 text-primary"></i>
                  </div>
                  <h4 className="card-title">Online Diagnosis</h4>
                  <p className="card-text">Upload photos of your skin concern and receive professional analysis from certified dermatologists.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100">
                <div className="card-body text-center p-4">
                  <div className="rounded-circle bg-primary bg-opacity-10 p-3 d-inline-flex mb-3">
                    <i className="bi bi-calendar-check fs-2 text-primary"></i>
                  </div>
                  <h4 className="card-title">Video Consultations</h4>
                  <p className="card-text">Schedule face-to-face virtual appointments with dermatologists from anywhere.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100">
                <div className="card-body text-center p-4">
                  <div className="rounded-circle bg-primary bg-opacity-10 p-3 d-inline-flex mb-3">
                    <i className="bi bi-clipboard-pulse fs-2 text-primary"></i>
                  </div>
                  <h4 className="card-title">Personalized Treatment</h4>
                  <p className="card-text">Receive customized skin care regimens and treatment plans based on your unique needs.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-5">
        <div className="container section-container">
          <div className="text-center mb-5">
            <h2 className="mb-3">How It Works</h2>
            <p className="lead text-muted">Get professional dermatological care in three simple steps</p>
          </div>
          <div className="row">
            <div className="col-md-4 text-center mb-4">
              <div className="rounded-circle bg-primary text-white d-inline-flex justify-content-center align-items-center mb-3" style={{ width: '80px', height: '80px' }}>
                <h3 className="m-0">1</h3>
              </div>
              <h4>Create an Account</h4>
              <p>Sign up and complete your profile with relevant health information and skin concerns.</p>
            </div>
            <div className="col-md-4 text-center mb-4">
              <div className="rounded-circle bg-primary text-white d-inline-flex justify-content-center align-items-center mb-3" style={{ width: '80px', height: '80px' }}>
                <h3 className="m-0">2</h3>
              </div>
              <h4>Book a Consultation</h4>
              <p>Choose a dermatologist and schedule an appointment at your preferred time.</p>
            </div>
            <div className="col-md-4 text-center mb-4">
              <div className="rounded-circle bg-primary text-white d-inline-flex justify-content-center align-items-center mb-3" style={{ width: '80px', height: '80px' }}>
                <h3 className="m-0">3</h3>
              </div>
              <h4>Receive Care</h4>
              <p>Get diagnosis, treatment plans, and follow-up care from certified dermatologists.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-5 bg-light">
        <div className="container section-container">
          <div className="text-center mb-5">
            <h2 className="mb-3">Patient Testimonials</h2>
            <p className="lead text-muted">What our patients say about us</p>
          </div>
          <div className="row">
            <div className="col-lg-4 mb-4">
              <div className="card h-100">
                <div className="card-body p-4">
                  <div className="d-flex mb-3">
                    <i className="bi bi-star-fill text-warning me-1"></i>
                    <i className="bi bi-star-fill text-warning me-1"></i>
                    <i className="bi bi-star-fill text-warning me-1"></i>
                    <i className="bi bi-star-fill text-warning me-1"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                  </div>
                  <p className="card-text">"DermaConnect has changed my life! After struggling with acne for years, the dermatologist I connected with through the platform provided a treatment plan that actually worked."</p>
                  <div className="d-flex align-items-center mt-3">
                    <img src="https://placehold.co/50x50/e0f2fe/333333.png?text=S" className="rounded-circle me-3" alt="Patient" />
                    <div>
                      <h6 className="mb-0">Sarah Johnson</h6>
                      <small className="text-muted">Patient</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div className="card h-100">
                <div className="card-body p-4">
                  <div className="d-flex mb-3">
                    <i className="bi bi-star-fill text-warning me-1"></i>
                    <i className="bi bi-star-fill text-warning me-1"></i>
                    <i className="bi bi-star-fill text-warning me-1"></i>
                    <i className="bi bi-star-fill text-warning me-1"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                  </div>
                  <p className="card-text">"The convenience of getting expert advice without leaving my home is incredible. My dermatologist was thorough and the follow-up care has been excellent."</p>
                  <div className="d-flex align-items-center mt-3">
                    <img src="https://placehold.co/50x50/e0f2fe/333333.png?text=M" className="rounded-circle me-3" alt="Patient" />
                    <div>
                      <h6 className="mb-0">Michael Roberts</h6>
                      <small className="text-muted">Patient</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div className="card h-100">
                <div className="card-body p-4">
                  <div className="d-flex mb-3">
                    <i className="bi bi-star-fill text-warning me-1"></i>
                    <i className="bi bi-star-fill text-warning me-1"></i>
                    <i className="bi bi-star-fill text-warning me-1"></i>
                    <i className="bi bi-star-fill text-warning me-1"></i>
                    <i className="bi bi-star-half text-warning"></i>
                  </div>
                  <p className="card-text">"I was skeptical about online dermatology, but after my first consultation, I was impressed by the professionalism and knowledge of my doctor. Great service!"</p>
                  <div className="d-flex align-items-center mt-3">
                    <img src="https://placehold.co/50x50/e0f2fe/333333.png?text=J" className="rounded-circle me-3" alt="Patient" />
                    <div>
                      <h6 className="mb-0">Jennifer Lee</h6>
                      <small className="text-muted">Patient</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-5 bg-primary text-white">
        <div className="container section-container text-center">
          <h2 className="mb-4">Ready to transform your skin care journey?</h2>
          <p className="lead mb-4">Join thousands of satisfied patients who have found relief and confidence through our platform.</p>
          <Link to="/book-appointment" className="btn btn-light btn-lg px-4 py-2">Book Your Appointment Today</Link>
        </div>
      </section>

     <Footer/>
    </div>
  );
};

export default About;

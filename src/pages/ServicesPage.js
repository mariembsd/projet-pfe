import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { ArrowRight, Heart, Calendar, MessageSquare, Image, User, TestTube, Droplet, ScanFace } from 'lucide-react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ServicesPage.css';

const Index = () => {
  return (
    <div className="services-page">
      {/* Hero Section */}
      <header className="hero-section py-5">
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="mb-4 mb-md-0 fade-in">
              <h1 className="display-4 fw-bold mb-3">DermaScan Connect</h1>
              <p className="lead mb-4">Modern dermatology care at your fingertips. Connect with dermatologists, track your skin health, and receive personalized recommendations.</p>
              <Button variant="primary" size="lg" className="rounded-pill me-3">Get Started</Button>
              <Button variant="outline-secondary" size="lg" className="rounded-pill">Learn More</Button>
            </Col>
            <Col md={6} className="slide-in-right">
              <div className="hero-image-container">
                <img 
                  src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&q=80" 
                  alt="Dermatology App" 
                  className="img-fluid rounded-lg shadow-lg"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </header>

      {/* Services Section */}
      <section className="services-section py-5 bg-light">
        <Container>
          <div className="text-center mb-5 fade-in">
            <h2 className="display-5 fw-bold">Our Services</h2>
            <p className="lead">Comprehensive dermatology care through technology</p>
          </div>
          
          <Row className="g-4">
            <Col md={4} className="service-card-anim">
              <Card className="service-card h-100 border-0 shadow-sm">
                <div className="icon-container">
                  <User size={40} />
                </div>
                <Card.Body className="text-center">
                  <Card.Title className="fw-bold">Online Consultations</Card.Title>
                  <Card.Text>
                    Connect with certified dermatologists from the comfort of your home for expert skin care advice.
                  </Card.Text>
                  <Button variant="link" className="text-decoration-none">
                    Learn more <ArrowRight size={16} className="ms-1" />
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            
            <Col md={4} className="service-card-anim delay-1">
              <Card className="service-card h-100 border-0 shadow-sm">
                <div className="icon-container">
                  <Image size={40} />
                </div>
                <Card.Body className="text-center">
                  <Card.Title className="fw-bold">Skin Analysis</Card.Title>
                  <Card.Text>
                    Submit images of your skin concerns for professional evaluation and personalized treatment options.
                  </Card.Text>
                  <Button variant="link" className="text-decoration-none">
                    Learn more <ArrowRight size={16} className="ms-1" />
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            
            <Col md={4} className="service-card-anim delay-2">
              <Card className="service-card h-100 border-0 shadow-sm">
                <div className="icon-container">
                  <Calendar size={40} />
                </div>
                <Card.Body className="text-center">
                  <Card.Title className="fw-bold">Appointment Scheduling</Card.Title>
                  <Card.Text>
                    Easily book, reschedule, or cancel appointments with your preferred dermatologist.
                  </Card.Text>
                  <Button variant="link" className="text-decoration-none">
                    Learn more <ArrowRight size={16} className="ms-1" />
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Treatments Photo Gallery */}
      <section className="treatments-section py-5">
        <Container>
          <div className="text-center mb-5 fade-in">
            <h2 className="display-5 fw-bold">Explore Our Treatments</h2>
            <p className="lead">Effective solutions for a variety of skin conditions</p>
          </div>
          
          <Row className="g-4">
            <Col md={4} className="photo-card-anim">
              <Card className="treatment-card h-100 border-0 shadow-sm">
                <Card.Img variant="top" src="https://images.unsplash.com/photo-1590439471364-192aa70c0b53?auto=format&fit=crop&w=800&q=80" className="treatment-img" />
                <Card.Body>
                  <div className="treatment-icon">
                    <ScanFace size={28} />
                  </div>
                  <Card.Title className="fw-bold">Acne & Pimple Treatment</Card.Title>
                  <Card.Text>
                    Advanced solutions for clear, healthy skin using the latest dermatological techniques.
                  </Card.Text>
                  <Button variant="outline-primary" className="rounded-pill">Learn More</Button>
                </Card.Body>
              </Card>
            </Col>
            
            <Col md={4} className="photo-card-anim delay-1">
              <Card className="treatment-card h-100 border-0 shadow-sm">
                <Card.Img variant="top" src="https://images.unsplash.com/photo-1596778402767-c7feb18fde4b?auto=format&fit=crop&w=800&q=80" className="treatment-img" />
                <Card.Body>
                  <div className="treatment-icon">
                    <Droplet size={28} />
                  </div>
                  <Card.Title className="fw-bold">Hair Transplant</Card.Title>
                  <Card.Text>
                    Restore your natural hairline with our minimally invasive hair transplantation techniques.
                  </Card.Text>
                  <Button variant="outline-primary" className="rounded-pill">Learn More</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="photo-card-anim delay-2">
              <Card className="treatment-card h-100 border-0 shadow-sm">
                <Card.Img variant="top" src="https://images.unsplash.com/photo-1600428877878-1a0ff561d8b6?auto=format&fit=crop&w=800&q=80" className="treatment-img" />
                <Card.Body>
                  <div className="treatment-icon">
                    <TestTube size={28} />
                  </div>
                  <Card.Title className="fw-bold">Skin Rejuvenation</Card.Title>
                  <Card.Text>
                    Turn back the clock with our comprehensive skin rejuvenation and anti-aging treatments.
                  </Card.Text>
                  <Button variant="outline-primary" className="rounded-pill">Learn More</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="photo-card-anim delay-2">
              <Card className="treatment-card h-100 border-0 shadow-sm">
                <Card.Img variant="top" src="https://images.unsplash.com/photo-1600428877878-1a0ff561d8b6?auto=format&fit=crop&w=800&q=80" className="treatment-img" />
                <Card.Body>
                  <div className="treatment-icon">
                    <TestTube size={28} />
                  </div>
                  <Card.Title className="fw-bold">Skin Rejuvenation</Card.Title>
                  <Card.Text>
                    Turn back the clock with our comprehensive skin rejuvenation and anti-aging treatments.
                  </Card.Text>
                  <Button variant="outline-primary" className="rounded-pill">Learn More</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="photo-card-anim delay-2">
              <Card className="treatment-card h-100 border-0 shadow-sm">
                <Card.Img variant="top" src="https://images.unsplash.com/photo-1600428877878-1a0ff561d8b6?auto=format&fit=crop&w=800&q=80" className="treatment-img" />
                <Card.Body>
                  <div className="treatment-icon">
                    <TestTube size={28} />
                  </div>
                  <Card.Title className="fw-bold">Skin Rejuvenation</Card.Title>
                  <Card.Text>
                    Turn back the clock with our comprehensive skin rejuvenation and anti-aging treatments.
                  </Card.Text>
                  <Button variant="outline-primary" className="rounded-pill">Learn More</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="photo-card-anim delay-2">
              <Card className="treatment-card h-100 border-0 shadow-sm">
                <Card.Img variant="top" src="https://images.unsplash.com/photo-1600428877878-1a0ff561d8b6?auto=format&fit=crop&w=800&q=80" className="treatment-img" />
                <Card.Body>
                  <div className="treatment-icon">
                    <TestTube size={28} />
                  </div>
                  <Card.Title className="fw-bold">Skin Rejuvenation</Card.Title>
                  <Card.Text>
                    Turn back the clock with our comprehensive skin rejuvenation and anti-aging treatments.
                  </Card.Text>
                  <Button variant="outline-primary" className="rounded-pill">Learn More</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="photo-card-anim delay-2">
              <Card className="treatment-card h-100 border-0 shadow-sm">
                <Card.Img variant="top" src="https://images.unsplash.com/photo-1600428877878-1a0ff561d8b6?auto=format&fit=crop&w=800&q=80" className="treatment-img" />
                <Card.Body>
                  <div className="treatment-icon">
                    <TestTube size={28} />
                  </div>
                  <Card.Title className="fw-bold">Skin Rejuvenation</Card.Title>
                  <Card.Text>
                    Turn back the clock with our comprehensive skin rejuvenation and anti-aging treatments.
                  </Card.Text>
                  <Button variant="outline-primary" className="rounded-pill">Learn More</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="photo-card-anim delay-2">
              <Card className="treatment-card h-100 border-0 shadow-sm">
                <Card.Img variant="top" src="https://images.unsplash.com/photo-1600428877878-1a0ff561d8b6?auto=format&fit=crop&w=800&q=80" className="treatment-img" />
                <Card.Body>
                  <div className="treatment-icon">
                    <TestTube size={28} />
                  </div>
                  <Card.Title className="fw-bold">Skin Rejuvenation</Card.Title>
                  <Card.Text>
                    Turn back the clock with our comprehensive skin rejuvenation and anti-aging treatments.
                  </Card.Text>
                  <Button variant="outline-primary" className="rounded-pill">Learn More</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="photo-card-anim delay-2">
              <Card className="treatment-card h-100 border-0 shadow-sm">
                <Card.Img variant="top" src="https://images.unsplash.com/photo-1600428877878-1a0ff561d8b6?auto=format&fit=crop&w=800&q=80" className="treatment-img" />
                <Card.Body>
                  <div className="treatment-icon">
                    <TestTube size={28} />
                  </div>
                  <Card.Title className="fw-bold">Skin Rejuvenation</Card.Title>
                  <Card.Text>
                    Turn back the clock with our comprehensive skin rejuvenation and anti-aging treatments.
                  </Card.Text>
                  <Button variant="outline-primary" className="rounded-pill">Learn More</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Features Section */}
      <section className="features-section py-5">
        <Container>
          <Row className="align-items-center mb-5">
            <Col md={6} className="fade-in">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80" 
                alt="Patient Monitoring" 
                className="img-fluid rounded-lg shadow-lg"
              />
            </Col>
            <Col md={6} className="slide-in-right">
              <h2 className="fw-bold mb-3">Follow-up and Monitoring</h2>
              <p className="mb-4">Keep track of your skin's progress over time with our advanced monitoring tools. Receive regular follow-ups from your dermatologist.</p>
              <ul className="feature-list">
                <li>
                  <Heart className="me-2 text-primary" size={20} />
                  <span>Track treatment progress</span>
                </li>
                <li>
                  <MessageSquare className="me-2 text-primary" size={20} />
                  <span>Direct messaging with your dermatologist</span>
                </li>
                <li>
                  <Calendar className="me-2 text-primary" size={20} />
                  <span>Automated treatment reminders</span>
                </li>
              </ul>
              <Button variant="outline-primary" className="rounded-pill mt-3">Explore Features</Button>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section py-5 bg-light">
        <Container>
          <div className="text-center mb-5 fade-in">
            <h2 className="display-5 fw-bold">What Our Users Say</h2>
            <p className="lead">Join thousands of satisfied patients and dermatologists</p>
          </div>
          
          <Row className="g-4">
            <Col md={6} lg={4} className="testimonial-card-anim">
              <Card className="testimonial-card h-100 border-0 shadow-sm">
                <Card.Body>
                  <div className="d-flex mb-3">
                    <span className="star">★</span>
                    <span className="star">★</span>
                    <span className="star">★</span>
                    <span className="star">★</span>
                    <span className="star">★</span>
                  </div>
                  <Card.Text className="mb-3">
                    "DermaScan made it so easy for me to consult with a dermatologist without leaving my home. The treatment plan I received was personalized and effective."
                  </Card.Text>
                  <div className="d-flex align-items-center">
                    <div className="testimonial-avatar me-3">
                      LS
                    </div>
                    <div>
                      <h6 className="mb-0 fw-bold">Laura S.</h6>
                      <small className="text-muted">Patient</small>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            
            <Col md={6} lg={4} className="testimonial-card-anim delay-1">
              <Card className="testimonial-card h-100 border-0 shadow-sm">
                <Card.Body>
                  <div className="d-flex mb-3">
                    <span className="star">★</span>
                    <span className="star">★</span>
                    <span className="star">★</span>
                    <span className="star">★</span>
                    <span className="star">★</span>
                  </div>
                  <Card.Text className="mb-3">
                    "As a dermatologist, this platform has transformed how I provide care. I can efficiently manage more patients while delivering personalized attention."
                  </Card.Text>
                  <div className="d-flex align-items-center">
                    <div className="testimonial-avatar me-3">
                      DM
                    </div>
                    <div>
                      <h6 className="mb-0 fw-bold">Dr. Michael R.</h6>
                      <small className="text-muted">Dermatologist</small>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            
            <Col md={6} lg={4} className="testimonial-card-anim delay-2">
              <Card className="testimonial-card h-100 border-0 shadow-sm">
                <Card.Body>
                  <div className="d-flex mb-3">
                    <span className="star">★</span>
                    <span className="star">★</span>
                    <span className="star">★</span>
                    <span className="star">★</span>
                    <span className="star">★</span>
                  </div>
                  <Card.Text className="mb-3">
                    "The follow-up care on DermaScan is exceptional. I love how I can track my progress and communicate with my doctor whenever I have questions."
                  </Card.Text>
                  <div className="d-flex align-items-center">
                    <div className="testimonial-avatar me-3">
                      JT
                    </div>
                    <div>
                      <h6 className="mb-0 fw-bold">James T.</h6>
                      <small className="text-muted">Patient</small>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
      
      {/* Call to Action */}
      <section className="cta-section py-5 bg-primary text-white">
        <Container className="text-center">
          <h2 className="fw-bold mb-3 bounce-in">Ready to Transform Your Skin Care?</h2>
          <p className="lead mb-4">Join DermaScan today and experience dermatology care like never before.</p>
          <Button variant="light" size="lg" className="rounded-pill">Get Started Now</Button>
        </Container>
      </section>
    </div>
  );
};

export default Index;
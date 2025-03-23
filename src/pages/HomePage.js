import React from 'react';
import Header from '../components/header/Header';
import ConsultationForm from '../components/consultation/ConsultationForm';   
import TreatmentsServices from '../components/treatment/TreatmentsServices';
import DermaCareSection from '../components/dermacaresection/DermaCareSection';
import GenderToggle from '../components/gender/GenderToggle';
import Testimonials from '../components/testimonials/Testimonials';
import HowItWorks from '../components/howitworks/HowItWorks';
import Chatbot from '../components/chatbott/chatbot';

const HomePage = () => {
  return (
    <>
  
      <Header />
      <ConsultationForm/>
      <HowItWorks/>
      <Chatbot/>
      <TreatmentsServices/>
     <DermaCareSection/>
     <GenderToggle/>
     <Testimonials/>
    
    </>
  );
};

export default HomePage;
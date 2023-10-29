 
import React from 'react';
import Footer from './footer';
//  import Hero1 from './images/ki12.jpg';
import ImageSection from './imageSection';
import Kinde from './gallery';

function Home() {
  return (
     <div>
      
     <ImageSection />
      
      
 <section>

< div className="container1">

<div className="box">
<h2 style={{textAlign:'center',}}>Welcome</h2>
  <p style={{ paddingLeft: 10,
    paddingRight: 10}}>Welcome to our Occupational Health and Safety Training Course website, where we strive to provide comprehensive and expert training on workplace health and safety that will reduce workplace accidents and help businesses thrive.</p>

</div>
<div className="box">
<h2 style={{textAlign:'center',}}>Mission</h2>
    <p style={{ paddingLeft: 10,
    paddingRight: 10}}>Our mission is to equip individuals and organizations with the knowledge and skills necessary to identify, prevent, and respond to hazards and risks in the workplace. We believe that through education and training, we can make workplaces safer and more productive for everyone.
</p>
</div>
<div className="box">
<h2 style={{textAlign:'center',}}>Our team</h2>
  <p style={{ paddingLeft: 10,
    paddingRight: 10}}>Our team of experienced and qualified trainers draws on their extensive industry knowledge and expertise to deliver tailored training programs that meet the needs of each individual or organization. We offer a variety of industry-specific workshops and courses that can be customized to address the specific hazards and risks faced by your employees or business.</p>

</div>
<div className="box">
<h2 style={{textAlign:'center',}}>Our courses</h2>
  <p style={{ paddingLeft: 10,
    paddingRight: 10}}>Our courses cover a range of topics, including hazard identification, risk assessment, incident investigation, emergency response, and workplace safety culture. Each training program is designed to not only meet regulatory compliance requirements but also to promote best practices and a proactive approach to safety.</p>


</div>
<div className="box">
<h2 style={{textAlign:'center',}}>Who we are</h2>
  <p style={{ paddingLeft: 10,
    paddingRight: 10}}>We are proud to be recognized as a leader in the occupational health and safety training industry, with numerous awards, accreditations and partnerships that reflect our commitment to excellence.</p>

</div>
<div className="box">
<h2 style={{textAlign:'center',}}>Enhance</h2>
<p style={{ paddingLeft: 10,
    paddingRight: 10}}>If you are looking to enhance your workplace safety, meet regulatory compliance requirements, or simply improve your knowledge and skills, we invite you to explore our courses and register today. Our training programs offer practical and engaging learning experiences that will equip you with the tools you need to stay safe and succeed in the workplace.</p>

</div>
</div>
  
 </section>
 <section class="testimonials">
  <h2>Testimonials</h2>
  <div class="testimonial-card">
    <blockquote>
      "The occupational health and safety training course was one of the best training programs I have ever attended. It was comprehensive, informative and engaging. Thanks to the trainers for their great work."
    </blockquote>
    <p class="author">- John Smith, Safety Officer</p>
  </div>
  <div class="testimonial-card">
    <blockquote>
      "I highly recommend the occupational health and safety training course to anyone involved in safety-related professions. The course covered everything I needed to know and more."
    </blockquote>
    <p class="author">- Jane Doe, Occupational Health Specialist</p>
  </div>
</section>
<section>
  <Kinde />
</section>
 <Footer />
    </div>
     
  );
}

export default Home;
 
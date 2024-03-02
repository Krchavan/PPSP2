import React from "react";
import "./../About/About.css";
import Team from "../Ourteam/Team";
function About() {
  return (
  <div className="context">

            <ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
    


      <div className="history">
        <h1> Our History</h1>
        
        <h5> 
          Pune Prashikshan Sanstha has been in this company for the last 15
          years. Pps recognized the need of competitive market so emerged in the
          field of training & development from last 15 years. Our mission is to
          reach the people who were unaware of the different concepts required
          for the soft skills development leads to less efficiency while working
          in the workplace. So our company provides different soft skills
          training programs for employees which help the organization to grow
          efficiently. We aim at delivering the highest quality of training
          services to businesses across all industries. We are committed to the
          idea of developing business and staff motivational training. We can
          offer business development services for all levels.
        </h5>
      </div>

      <div className="core">
        <h4>Core value </h4>
        <h6>
          <li>Discipline</li>
          <li>Honesty</li>
          <li>Hard work</li>
          <li>Learn knowledge every day</li>
        </h6>
      </div>
      <div className="pur">
        {" "}
        <h4> PURPOSE OF TRAINING PROGRAMME </h4>
        <h6>
          <li>
            To encourage unemployed youth in rural areas to start their own
            business by imparting skill-oriented training.
          </li>
          <li>
            Empowering destitute women, semi-educated women and needy women by
            training them in agribusiness.
          </li>
          <li>
            To de-addiction youths in rural areas and divert them to
            complementary occupations.
          </li>
          <li>
            To train the needy children of tribal areas in personal development
            and divert them to complementary occupations.
          </li>
          <li>
            To promote and disseminate our organization throughout Maharashtra.
          </li>
          <li>
            To increase the business of the economically weaker sections of the
            society by training them to increase their business.
          </li>
          <li>
            To create education awareness among students through training in
            primary, secondary and higher secondary schools in rural areas of
            Maharashtra.
          </li>
          <li>To develop farmers and laborers by training them through us.</li>{" "}
        </h6>
      </div>
      <div className="sm">
        <h4> Spiritual Mission</h4>   
        <h6>Our Mission Is To Reach The People Who
         Were Unaware Of The Different Concepts Required For The Personal
         Development Leads To Less Efficiency While Working In Work place.</h6>
        <h6>
         To help of quality system improvement, wastage control and increase
          profit in small and middle scale organization Though Soft skills
          Training. Financial Mission  Human skill enhancement by imparting
          system training for 20 lac people till 31/03/2030.
        </h6>
      </div>
      <Team />
    </div>
  );
}

export default About;

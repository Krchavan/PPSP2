import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <div style={{color:"red"}}>
    <Typewriter 
      options={{ 
        strings: [
          "GOLD VALUATIONS TRAINING PROGRAMME",
          "SOFT SKILL DEVELOPMENT PROGRAMME  ",
          "SYSTEM MANAGEMENT TRAINING",
          "MANUFACTURING /MECHANICAL INDUSTRIES ",
          "CONSTRUCTION INDUSTRY TRAINING ",
          "TRAININGS FOR REAL ESTATE INDUSTRY",
          "ENVIRONMENTAL TRAINING AND SERVICES ",
          "FINANCIAL AND AUDIT TRAINING",
          "ISO Consultation, Certification and Motivational Training"

        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 100,
       
        
      }}
    />
    </div>
  );
}

export default Type;

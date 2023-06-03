import { useState, useEffect } from "react";
export default function About() {
  return (
    <>
      <section className="heading">
        <h1>About page</h1>
      </section>
      <section className="aboutFounder">
        <img src="\assets\model3.jpg" alt="model Photo" width="300px"/>
        <div>
          <h5>Shrinidhi Gehnewal</h5>
          <h3>About the Founder</h3>
          <h4>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
            quod!
          </h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error hic
            quae dicta rerum! Vitae dolor sit similique libero quaerat
            exercitationem delectus ipsum, maiores unde accusantium natus quos
            nostrum possimus autem a maxime fugit sunt repellat incidunt
            deserunt molestiae cupiditate omnis? Est excepturi adipisci corporis
            non magni asperiores distinctio eius nulla.
          </p>
        </div>
      </section>
    </>
  );
}

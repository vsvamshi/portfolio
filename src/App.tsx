import React from 'react';
import './index.css';

function App() {
  return (
    <div className="container">
      <nav className="nav">
        <input type="checkbox" id="menu-toggle" className="menu-toggle" />
        <label htmlFor="menu-toggle" className="hamburger">☰</label>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <main>
        <h1>Hi, I'm Surya Vamshi</h1>
        <p>
          Solution Architect & Data Scientist passionate about building intelligent cloud-native solutions that drive business value.
          Explore my journey — personal, professional, and beyond.
        </p>

        <div className="buttons">
          <a href="#journey" className="btn primary">Explore Journey</a>
          <a href="#contact" className="btn outline">Contact Me</a>
        </div>
      </main>

      {/* Timeline Section */}
      <section id="journey">
        <h2>My Journey</h2>
        <div className="timeline">

          <div className="timeline-entry">
            <h3>R V College of Engineering, Bangalore, India</h3>
            <h4>B.E in Information Science and Engineering · Aug 2014 - May 2018</h4>
            <p>CGPA: 8.17/10.0</p>
          </div>

          <div className="timeline-entry">
            <h3>University of Michigan, Dearborn</h3>
            <h4>Masters in Data Science · Aug 2021 - Apr 2023</h4>
            <p>GPA: 3.8/4.0</p>
            <p>
              Relevant Courses: Cloud Computing, Machine Learning, Big Data Processing, Database Systems, Deep Learning,
              Applied Data Analytics, SAP, Multivariate Statistics, Design and Analysis of Algorithms.
            </p>
          </div>

          <div className="timeline-entry">
            <h3>Comviva Technologies, a Tech Mahindra company</h3>
            <h4>Software Engineer · Aug 2018 – Jun 2020</h4>
            <ul>
              <li>Developed a business dashboard using Python for user behavior analytics, enabling data-driven decisions.</li>
              <li>Integrated 3rd party APIs from Ericsson, Techno Tree, and BBC for seamless backend operations.</li>
              <li>Deployed payment gateway modules for smooth transaction processes, enhancing user experience.</li>
              <li>Worked onsite with stakeholders in Lagos, Nigeria, ensuring agile development and delivery.</li>
            </ul>
          </div>

          <div className="timeline-entry">
            <h3>Comviva Technologies, a Tech Mahindra company</h3>
            <h4>Senior Software Engineer · Jul 2020 – Aug 2021</h4>
            <ul>
              <li>Deployed a user service prediction system on the MTN self-care app, driving 45% growth in the active user base to 12M+ users.</li>
              <li>Integrated push notifications via Google Firebase and Apple Push Notification Service, increasing monthly active users from 4M to 7.8M.</li>
              <li>Led a team of five developers, managing client requirements and delivering solutions using agile methodologies.</li>
            </ul>
          </div>

          <div className="timeline-entry">
            <h3>University of Michigan - Intelligent Systems Lab</h3>
            <h4>Research Assistant · Jan 2022 – Apr 2022</h4>
            <ul>
              <li>Developed data mining methodologies to analyze driver behaviors in naturalistic scenarios.</li>
              <li>Conducted deep learning research to assess older adults' driving patterns and physiological responses.</li>
              <li>Created a deep learning scoring system for image processing and clock-drawing segmentation.</li>
            </ul>
          </div>

          <div className="timeline-entry">
            <h3>Acquco</h3>
            <h4>Machine Learning/Data Engineer Intern · May 2022 – Aug 2022</h4>
            <ul>
              <li>Engineered custom analytics solutions for Amazon sellers using SP API and AWS infrastructure, enhancing decision-making capabilities.</li>
              <li>Built predictive models and business reports leveraging Python and Power BI for actionable insights.</li>
              <li>Automated monitoring solutions using AWS Lambdas, improving process efficiency.</li>
            </ul>
          </div>

          <div className="timeline-entry">
            <h3>ZF Group</h3>
            <h4>Data Solutions Manager · Oct 2022 – Present</h4>
            <ul>
              <li>Architected innovative telematics solutions on AWS Cloud for predictive maintenance, fleet monitoring, and regulatory compliance, collaborating with cross-functional teams and customers.</li>
              <li>Spearheaded the development of Scalar, a telematics product enabling fleet health monitoring and predictive maintenance, improving fleet performance by 35%.</li>
              <li>Designed predictive maintenance systems using DTC data and ML algorithms, reducing downtime and enhancing vehicle reliability.</li>
              <li>Developed and deployed an internal AI agent to automate repetitive development and deployment tasks across multiple modules, boosting engineering efficiency by over 60% and reducing manual effort.</li>
              <li>Led strategic partnership initiatives by proposing and evaluating technical integration approaches (e.g., data sharing APIs, embedded analytics, platform interoperability) to enable scalable collaboration models.</li>
              <li>Acted as a cross-functional liaison between engineering, product, and business teams to ensure alignment of technical roadmaps with customer and market needs.</li>
              <li>Championed the use of data-driven insights and product feedback loops to inform prioritization and roadmap decisions, enhancing user adoption and customer satisfaction.</li>
              <li>Delivered Brake Performance Monitoring solutions to detect and mitigate brake issues proactively using regression algorithms, cutting repair costs significantly.</li>
              <li>Developed compliance systems for driving/resting time and EU tax reporting, ensuring regulatory adherence.</li>
              <li>Implemented a GPS Jump Algorithm to identify GPS anomalies caused by solar flares, enhancing product GPS accuracy and reliability.</li>
              <li>Established a data quality pipeline enabling anomaly detection and automated alerts for engineering teams.</li>
              <li>Supported presales activities by translating complex technical capabilities into customer value propositions, participating in client discussions, and creating tailored technical solution briefs.</li>
            </ul>
          </div>

        </div>
      </section>

      {/* Projects Section */}
      <section id="projects">
        <h2>Projects</h2>
        <ul>
          <li><strong>E-Commerce Analytics Platform:</strong> Built with GCP for seamless transaction handling and insights.</li>
          <li><strong>Predictive Maintenance for Aircraft Engines:</strong> LSTM & SVM models predicting engine RUL with over 90% accuracy.</li>
          <li><strong>Steel Surface Defect Diagnosis:</strong> Multi-label classifiers (LogReg, Random Forest) reaching 98% accuracy.</li>
          <li><strong>Book Recommendation System:</strong> Collaborative filtering system achieving 96% user satisfaction.</li>
          <li><strong>Agriculture Yield Prediction:</strong> Data-driven crop planning system aiding farmers via gov data.</li>
        </ul>
      </section>

      <section id="about">
        <h2>About Me</h2>
        <p>Experienced architect blending cloud, computer science, data science and leadership. Thrives in fast-paced, cross-functional teams.</p>
        <p>Outside of work, I love traveling, a foodie, and photography. I love playing sports like Cricket, Badminton and experimenting with cooking.</p>
      </section>

      <section id="travel">
        <h2>Travel History</h2>
        <ul className="travel-list">
          <li>
            <img src="https://flagcdn.com/w40/in.png" alt="India flag" className="flag" />
            India — Karnataka, Tamil Nadu, Kerala, Andhra Pradesh, Goa, Mumbai, Delhi, Andaman
          </li>
          <li>
            <img src="https://flagcdn.com/w40/ng.png" alt="Nigeria flag" className="flag" />
            Nigeria — Lagos
          </li>
          <li>
            <img src="https://flagcdn.com/w40/ae.png" alt="UAE flag" className="flag" />
            UAE — Dubai, Abu Dhabi
          </li>
          <li>
            <img src="https://flagcdn.com/w40/us.png" alt="USA flag" className="flag" />
            America — MI, GA, NY, MA, FL, WV, NV, AZ, UT, IL, OH, CO, TX, PA
          </li>
          <li>
            <img src="https://flagcdn.com/w40/de.png" alt="Germany flag" className="flag" />
            Germany — Heidelberg, Black Forest, Munich, Frankfurt, Tuttlingen
          </li>
          <li>
            <img src="https://flagcdn.com/w40/ch.png" alt="Switzerland flag" className="flag" />
            Switzerland — Basel, Zermatt, Grindelwald, Rhine Falls, Interlaken, Lauterbrunnen
          </li>
          <li>
            <img src="https://flagcdn.com/w40/es.png" alt="Spain flag" className="flag" />
            Spain — Barcelona, Madrid, Sitges, Girona, Tossa de Mar
          </li>
          <li>
            <img src="https://flagcdn.com/w40/pt.png" alt="Portugal flag" className="flag" />
            Portugal — Lisbon, Porto
          </li>
          <li>
            <img src="https://flagcdn.com/w40/nl.png" alt="Netherlands flag" className="flag" />
            Netherlands — Delft, Amsterdam, Haarlem, Rotterdam, Den Haag, Keukenhof, Zaanse Schans
          </li>
          <li>
            <img src="https://flagcdn.com/w40/it.png" alt="Italy flag" className="flag" />
            Italy — Milan, Venice, Rome, Cinque Terre, Pisa
          </li>
          <li>
            <img src="https://flagcdn.com/w40/at.png" alt="Austria flag" className="flag" />
            Austria — Hallstatt, Lammerklamm
          </li>
          <li>
            <img src="https://flagcdn.com/w40/cz.png" alt="Czech Republic flag" className="flag" />
            Czech Republic — Prague
          </li>
          <li>
            <img src="https://flagcdn.com/w40/ie.png" alt="Ireland flag" className="flag" />
            Ireland — Dublin
          </li>
          <li>
            <img src="https://flagcdn.com/w40/be.png" alt="Belgium flag" className="flag" />
            Belgium — Ieper, Brussels
          </li>
          <li>
            <img src="https://flagcdn.com/w40/fr.png" alt="France flag" className="flag" />
            France — Paris
          </li>
        </ul>
      </section>




      <section id="contact">
        <h2>Contact</h2>
        <p>
          Email: 
          <a 
            href="https://mail.google.com/mail/?view=cm&fs=1&to=suryavamshi.manne@gmail.com" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            suryavamshi.manne@gmail.com
          </a>
        </p>
        <p>
          Phone: 
          <a href="tel:+13133848499">
            +1 (313)-384-8499
          </a>
        </p>
        <p>
          LinkedIn: 
          <a 
            href="https://linkedin.com/in/venkatsurya" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            venkatsurya
          </a>
        </p>
      </section>

    </div>
  );
}

export default App;

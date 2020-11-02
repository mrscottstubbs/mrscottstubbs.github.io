import React, { Component } from 'react';
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';
import './App.css';
import Century from './images/c21.png';
import LIRR from './images/LIRR.png';
import TCI from './images/tci.jpeg';
import Medidata from './images/medidata.png';
import BTHS from './images/bths.jpeg';
import Hofstra from './images/hofstra.png';

export default class Contact extends Component  {




  render() {
      return (


          <Timeline lineColor={'#ddd'}>
            <TimelineItem
              key="001"
              dateText="02/2020 – Present"
              dateInnerStyle={{ background: '#61b8ff', color: '#000' }}
              bodyContainerStyle={{
                background: '#ddd',
                padding: '20px',
                borderRadius: '8px',
                boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
              }}
              style={{ color: '#e86971' }}
            >
              <h3 style={{ color: '#61b8ff' }}>Medidata Solutions</h3>
              <h4 style={{ color: '#61b8ff' }}>Technical Support Engineer</h4>
              <p>
              Serves as the final level of escalation for Client Support issues through creating, editing, and testing custom scripts
              designed both internally and by clients in C# and SQL.
              </p>
              <p>
                Manages backend data and offers support for countless clinical studies and their owners/users.
              </p>
              <p>
                Uses tools such as XCode and Android Studio to help manage and create solutions for mobile applications.
              </p>
              <img
                  src={Medidata}
                  alt="me"
                  height="25%"
                  width="25%"
                  className="aboutImg"
              />
            </TimelineItem>

            <TimelineItem
              key="002"
              dateText="06/2019 – 02/2020"
              dateInnerStyle={{ background: '#61b8ff', color: '#000' }}
            >
              <h3 >Teledata Communications Incorporated</h3>
              <h4 >Technology Specialist</h4>
              <p>
                Developed and implemented over 50 customized UI elements a week using Javascript.
              </p>
              <p>
              Developed a script in Python using Selenium to automate testing site functionality and user experience in order to save
              time and optimize efficiency
              </p>
              <p>
              Acted as a mediation between business supervisors and development in order to create a product that was within
              compliance of the client company, but also was up to the aesthetic standards that they envisioned.
              </p>
              <img
                  src={TCI}
                  alt="me"
                  height="25%"
                  width="25%"
                  className="aboutImg"
              />
            </TimelineItem>

            <TimelineItem
              key="003"
              dateText="09/2018 – 12/2019"
              dateInnerStyle={{ background: '#76bb7f' }}
            >
              <h3>Hofstra</h3>
              <h4>Senior</h4>
              <p>
                Major : Computer Science
              </p>
              <p>
                Relevant Courses : Algorithms and Data Structures, Programming Languages
              </p>
              <img
                  src={Hofstra}
                  alt="me"
                  height="25%"
                  width="25%"
                  className="aboutImgReg"
              />
            </TimelineItem>

            <TimelineItem
              key="004"
              dateText="11/2018"

            >
              <h3>MLH ProfHacks</h3>
              <h4>PhilanthFund</h4>
              <p>
              Designed and implemented a Web App that uses crowdsourcing to connect organizations and everyday individuals
              in order to give back to their communities and to help areas in times of disaster.
              </p>
              <p>
              Tech Stack: AWS, React, Node.js, HTML, CSS, GraphQL.
              </p>
              <p>
              Features: Secure user login and payment handling, user profiles, and basic augmented reality.
              </p>

            </TimelineItem>

            <TimelineItem
              key="005"
              dateText="11/2018"
            >
              <h3>Estee Lauder Hackathon</h3>
              <h4>Visage</h4>
              <p>
              Developed and implemented an Android Application that suggests makeup and skin care products based on user
              input.
              </p>
              <p>
              Tech Stack: Java, Android Studio, various Google Cloud Services such as Google’s Vision API as well as Google Firebase.
              </p>
              <p>
              Features: Secure Login, suggestions for makeup and skin care products based on user preferences.
              </p>

            </TimelineItem>

            <TimelineItem
              key="006"
              dateText="06/2018 – 08/2018"
              dateInnerStyle={{ background: '#61b8ff', color: '#000' }}
            >
              <h3>Long Island Rail Road</h3>
              <h4>Intern</h4>
              <p>
              Utilized HTML, PHP, CSS, and Javascript to edit and build upon existing web app code and intranet structure for various
              departments within the LIRR.
              </p>
              <p>
              Deployed and decommissioned over a hundred cameras of various different makes and models on the LIRR/MTA
              network for testing and to increase overall security.
              </p>
              <p>
              Coordinated with five departments within the company to develop tangible and efficient responses to security issues.
              </p>
              <img
                  src={LIRR}
                  alt="me"
                  height="25%"
                  width="25%"
                  className="aboutImgReg"
              />
            </TimelineItem>

            <TimelineItem
              key="007"
              dateText="09/2017 – 06/2018"
              dateInnerStyle={{ background: '#76bb7f' }}
            >
              <h3>Hofstra</h3>
              <h4>Junior</h4>
              <p>
                Major : Computer Science
              </p>
              <p>
                Relevant Courses : Object-Oriented Programming, Operating Systems, Software Engineering
              </p>
              <img
                  src={Hofstra}
                  alt="me"
                  height="25%"
                  width="25%"
                  className="aboutImgReg"
              />
            </TimelineItem>

            <TimelineItem
              key="008"
              dateText="12/2017"
            >
              <h3>Facebook/Codepath Cybersecurity</h3>
              <h4>University Representative</h4>
              <p>
              Learned and conducted penetration testing using concepts such as cross site scripting, SQL injections, and various other
              topics
              </p>
              <p>
              Was selected as 1 of 8 students to represent my school and attend the Enigma Cybersecurity Conference in California.
              </p>

            </TimelineItem>

            <TimelineItem
              key="009"
              dateText="09/2016 – 06/2017"
              dateInnerStyle={{ background: '#76bb7f' }}
            >
              <h3>Hofstra</h3>
              <h4>Sophomore</h4>
              <p>
                Major : Bio-Medical Engineering -> Computer Science
              </p>
              <p>
                Made a leap of faith to change majors. As well as joined Theta Tau, a professional engineering fraternity.
              </p>
              <img
                  src={Hofstra}
                  alt="me"
                  height="25%"
                  width="25%"
                  className="aboutImgReg"
              />
            </TimelineItem>

            <TimelineItem
              key="010"
              dateText="09/2015 – 06/2016"
              dateInnerStyle={{ background: '#76bb7f' }}
            >
              <h3>Hofstra</h3>
              <h4>Freshman</h4>
              <p>
                Major : Bio-Medical Engineering
              </p>
              <img
                  src={Hofstra}
                  alt="me"
                  height="25%"
                  width="25%"
                  className="aboutImgReg"
              />
            </TimelineItem>

            <TimelineItem
              key="011"
              dateText="09/2011 – 06/2015"
              dateInnerStyle={{ background: '#76bb7f' }}
            >
              <h3>Brooklyn Technical High School</h3>
              <h4>Student</h4>
              <p>
                First exposure to a S.T.E.M. environment.
              </p>
              <img
                  src={BTHS}
                  alt="me"
                  height="25%"
                  width="25%"
                  className="aboutImgReg"
              />
            </TimelineItem>
          </Timeline>


        );
      }
}

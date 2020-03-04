import React, { Component } from 'react'
import enigma from './images/enigma.jpg';
import vr from './images/vr.jpg';
import bench from './images/bench.jpg';
import lift from './images/lift.jpg';
import hack from './images/hack.jpg';
import {Row, Col} from 'reactstrap'
import classNames from 'classnames';
import AnimatedCollapsible from './AnimatedCollapsible.js';

const conf= {
    head: "Enigma",
    bio: "In senior year I was selected as a finalist to represent Hofstra University in California at the Enigma Cyber Security Conference.",
    pic: enigma
}

const learn= {
    head: "Business",
    bio: "I offer freelance services for website design and development. (Interested parties feel free to email me!)",
    pic: vr
}

const theta= {
    head: "ΘΤ",
    bio: "A proud member of Theta Tau, a professional Engineering and Computer Science fraternity.",
    pic: bench
}

const hofStrong= {
    head: "Fitness",
    bio: "After months of training I won the Hofstra's Strongest Weight lifting competition.",
    pic: lift
}

const lauder= {
    head: "Hacks",
    bio: "Formed and worked with a team of very talented individuals and competed in 3 Hackathons.",
    pic: hack
}

var activity = [conf, learn, theta, hofStrong, lauder];

export default class Fun extends Component {

    createCarousel = () => {
      const schoolText = {
        padding: "5%",
        borderRadius: "4px",
      }

        let elements = [];


        for(let i =0; i<activity.length; i++){
            elements.push(
             <Col data-aos="zoom-in-up">
                <div style = {{width:"100%", paddingTop:"1em"}}>
                  <img
                    className = {classNames("rounded-image", "shadow-img")}
                    src = {activity[i].pic}
                    alt = {activity[i].name}
                    width="75%"
                  />
                </div>
                <div style={schoolText}>
                 <h4 style={{minHeight:"1em", padding:"3%"}}>{activity[i].head}</h4>

                 <h5><AnimatedCollapsible text={activity[i].bio}></AnimatedCollapsible></h5>
                </div>
              </Col>
            )
          }
        return elements;
    }

  render() {

    return (
      <div className="container">
        <Row style={{display:"flex"}}>
          {this.createCarousel()}
        </Row>
      </div>




    )
  }
}

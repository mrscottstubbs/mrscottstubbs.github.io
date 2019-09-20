import React, { Component } from 'react'
import bths from './images/bths.jpeg';
import hofstra from './images/hofstra.png';
import {Row, Col} from 'reactstrap'
import classNames from 'classnames';
import AnimatedCollapsible from './AnimatedCollapsible.js';

const tech= {
    name: 'Brooklyn Tech High School',
    bio: "Peaked my interest and exposed me to a very nurturing and encouraging S.T.E.M. environment.",
    pic: bths
}

const hof= {
  name: 'Hofstra',
  bio: "Where I discovered my love and interests in Computer Science.",
  pic: hofstra
}

var schools = [tech, hof];

export default class Carousel extends Component {

    createCarousel = () => {
      const schoolText = {
        padding: "2%",
        borderRadius: "4px",
      }

        let elements = [];


        for(let i = 0; i < schools.length; i++) {
            let duration = 900 + i * 450; // Creates staircase effect
            elements.push(
             <Col  data-aos="zoom-in-up" data-aos-duration={duration}>
                <div style = {{width:"100%", paddingTop:"1em"}}>
                  <img
                  className = {classNames("rounded-image")}
                  src = {schools[i].pic}
                  alt = {schools[i].name}
                  width="75%"
                  />
                </div>
                <br />
                <h3 style={{minHeight:"2em"}}>{schools[i].name}</h3>
                <div style={schoolText}>
                 <h5><AnimatedCollapsible text={schools[i].bio}></AnimatedCollapsible></h5>
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

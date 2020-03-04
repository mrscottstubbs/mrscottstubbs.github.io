import React, { Component } from 'react'
import Century from './images/c21.png';
import LIRR from './images/LIRR.png';
import TCI from './images/tci.jpeg';
import Medidata from './images/medidata.png';
import {Row, Col} from 'reactstrap'
import classNames from 'classnames';
import AnimatedCollapsible from './AnimatedCollapsible.js';
import Anchor from './Anchor.js';

const medi= {
    name: "Medidata Solutions",
    pic: Medidata,
    description: "Technical Support Engineer (Level III)",
    url: "https://www.medidata.com/en/",
    bio: "Feb 2020 - Present"
}

const tci= {
    name: "Teledata Communications Inc.",
    pic: TCI,
    description: "Technology Specialist",
    url: "https://tcicredit.com/",
    bio: "June 2019 - Feb 2020"
}

const lirr= {
    name: "Long Island Railroad",
    pic: LIRR,
    description: "Intern, Office of Security.",
    url: "http://www.mta.info/lirr",
    bio: "June 2018 - Aug 2018"
}

const c21= {
    name: "Century 21 American Homes",
    pic: Century,
    description: "Intern",
    url: "https://www.century21.com/century-21-american-homes-4506c",
    bio: "Jan 2018 - Nov 2018"
}

var company = [medi, tci, lirr, c21];

export default class Work extends Component {

    createWork = () => {
      const schoolText = {
        padding: "2%",
        borderRadius: "4px",
      }

        let elements = [];


        for(let i = 0; i < company.length; i++) {
            elements.push(
             <Col  data-aos="zoom-in-up">
                <div style = {{width:"100%", paddingTop:"1em"}}>
                  <img
                    className = {classNames("rounded-image")}
                    src = {company[i].pic}
                    alt = {company[i].name}
                    url = {company[i].url}
                    width="75%"
                  />
                </div>
                  <br />
                  <h3 style={{minHeight:"2em"}}><Anchor name={company[i].name} url={company[i].url}></Anchor></h3>
                  <div style={schoolText}>
                    <h5>{company[i].bio}</h5>
                    <h5><AnimatedCollapsible text={company[i].description}></AnimatedCollapsible></h5>
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
          {this.createWork()}
        </Row>
      </div>
    )
  }
}

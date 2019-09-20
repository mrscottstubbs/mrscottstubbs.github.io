import React, { Component } from 'react';
import NavBar from './NavBar.js';
import classNames from 'classnames';
import './App.css';
import Tachyonsocialfooter from './Tachyonsocialfooter.js'
import { Container, Row, Col } from 'reactstrap';
import Academics from './Academics.js';
import AOS from 'aos';
import 'aos/dist/aos.css';
import FadedHeader from './FadedHeader.js'
import Portrait from './Portrait.js';
import Languages from './Languages.js';
import Fun from './Fun.js';
import Work from './Work.js';


class App extends Component {

  componentDidMount(){
    AOS.init({
      duration : 1800,
    })
  }


  render() {

    return (
      <div className={classNames("App", this.state)}>
       <NavBar/>

        <div className="App-body">

          <div style={{minHeight:"1em"}}></div>
            <FadedHeader title="First Impressions" side="right" fade="left"></FadedHeader>
              <Container id="App-body">
                <Row className="padded-top">
                  <Col>
                    <div data-aos="zoom-in-up"><Portrait></Portrait></div>
                  </Col>
                  <Col data-aos="zoom-in-up">
                    <h1>Scott Lau Stubbs</h1> <br/>
                    <h2> Hey there. As I am sure you have gathered by now, my name is Scott.</h2>
                    <h2> This site serves as a landing page for you to learn a little bit about who I am more in depth than your typical resume does.</h2>
                    <h2> And (let's be honest) it is a nice way to flex some of my react muscles. </h2>
                  </Col>
                </Row>
              </Container>

          <div style={{minHeight:"3em"}}></div>
            <FadedHeader title="Languages/Tools" side="left" fade="right"></FadedHeader>
              <Container id="Languages">
                <Row className="padded-top">
                  <Languages/>
                </Row>
              </Container>

          <br />

          <div style={{minHeight:"1em"}}></div>
            <FadedHeader title="Academics" side="right" fade="left"></FadedHeader>
              <Container id="Academics">
                <Row className="padded-top">
                  <Academics></Academics>
                </Row>
              </Container>

          <br />

          <div style={{minHeight:"2em"}}></div>
            <FadedHeader title="Work Experience" side="left" fade="right"></FadedHeader>
              <Container id="Jobs">
                <Row className="padded-top">
                  <Col>
                    <Work/>
                  </Col>
                </Row>
              </Container>

          <br /><br />

          <div style={{minHeight:"1em"}}></div>
          <FadedHeader title="Some Fun Stuff" side="right" fade="left"></FadedHeader>

            <br/>
            <Container id="Fun">
              <Row className="padded-top">
                <Fun/>
              </Row>
            </Container>



          <div id="bottom"> <hr/>
            <Tachyonsocialfooter></Tachyonsocialfooter>
          </div>

          </div>

      </div>
    );
  }
}

export default App;

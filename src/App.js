import React, { Component } from 'react';
import NavBar from './NavBar.js';
import classNames from 'classnames';
import './App.css';
import Tachyonsocialfooter from './Tachyonsocialfooter.js'
import { Container, Row, Col } from 'reactstrap';
import Academics from './Academics.js';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Portrait from './Portrait.js';
import Languages from './Languages.js';
import Fun from './Fun.js';
import Work from './Work.js';
import Projects from './Projects.js';
import {Tabs, Tab, Nav} from 'react-bootstrap'
import Anchor from './Anchor.js';
import Editor from './images/editor.png';
import Books from './images/books.png';
import Default from './images/default.png';
import Hobbies from './images/hobbies.png';
import Creativity from './images/creativity.png';


class App extends Component {

    componentDidMount(){
      AOS.init({
        duration : 1800,
      })
    }


  render() {

    return (
      <div className={classNames("App", this.state)}>
       <NavBar />

        <div className="App-body">


        <Container id="App-body">
                <Row className="padded-top">
                  <Col>
                    <div data-aos="zoom-in-up"><Portrait></Portrait></div>
                  </Col>
                  <Col>
                    <h1>Scott Lau Stubbs</h1> <br/>

                    <h2> Welcome to my Website! </h2>
                    <h3> Feel free to poke around or to select a button below to get started. </h3>

                  </Col>
                </Row>

                <br/>
          </Container>

          <Tab.Container id="left-tabs-example" defaultActiveKey="None">
            <Row>
                <Nav variant="pills" className="Tabs">
                  <Nav.Item>
                    <Nav.Link className="Tabs" eventKey="Languages">
                    <img width="20px" src={Editor} />  Tech Stacks</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link className="Tabs" eventKey="Academics">
                    <img width="20px" src={Books} />  Academics</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link className="Tabs" eventKey="Jobs">
                    <img width="20px" src={Default} />  Jobs</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link className="Tabs" eventKey="Fun">
                    <img width="20px" src={Hobbies} />  Hobbies</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link className="Tabs" eventKey="Projects">
                    <img width="20px" src={Creativity} />  Projects</Nav.Link>
                  </Nav.Item>
                </Nav>
                </Row>


                <Tab.Content className="Tab-Content">
                  <Tab.Pane eventKey="Languages">
                  <Container id="Languages">
                        <Row className="padded-top">
                          <Languages/>
                        </Row>
                      </Container>
                  </Tab.Pane>
                  <Tab.Pane eventKey="Academics">
                  <Container id="Academics">
                        <Row className="padded-top">
                          <Academics></Academics>
                        </Row>
                      </Container>
                  </Tab.Pane>
                  <Tab.Pane eventKey="Jobs">
                  <Container id="Jobs">
                        <Row className="padded-top">
                          <Col>
                            <Work/>
                          </Col>
                        </Row>
                      </Container>
                  </Tab.Pane>
                  <Tab.Pane eventKey="Fun">
                  <Container id="Fun">
                    <Row className="padded-top">
                      <Fun/>
                    </Row>
                  </Container>
                  </Tab.Pane>
                  <Tab.Pane eventKey="Projects">
                  <Container id="Projects">
                    <Row className="padded-top">
                      <Projects/>
                    </Row>
                  </Container>
                  </Tab.Pane>
                </Tab.Content>
          </Tab.Container>

          <div id="bottom"> <hr/>
            <Tachyonsocialfooter></Tachyonsocialfooter>
          </div>


          </div>


      </div>

    );
  }
}

export default App;

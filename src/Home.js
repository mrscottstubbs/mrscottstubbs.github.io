import React, { Component } from 'react';

import './App.css';

import { Container, Row } from 'reactstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import profileGoogle from './images/profileGoogle.png'

class Home extends Component {

    componentDidMount(){
      AOS.init({
        duration : 1800,
      })
    }


  render() {

    return (
      <div >

        <Container id="App-body" className="bg-image">
                <Row>

                  <img className="grayscale"
                      src={profileGoogle}
                      alt="me"
                  />


                </Row>

        </Container>

        <Container className="bg-text">
        <div class="bg-text">
          <h2>Hello World [ ]</h2>
          <h1 >I am Scott Stubbs</h1>
          <p>And I'm a Technical Support Engineer</p>
        </div>
        </Container>

      </div>



    );
  }
}

export default Home;

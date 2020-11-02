import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Container, Row, Col
      } from 'reactstrap';
import { Form, Label, Input } from 'reactstrap';
import QR from './images/cardQR.png';
import Social from './images/social.png';
import Email from './images/email.png';
import Barcode from './images/barcode.png';

export default class Contact extends Component  {

  constructor(props) {
    super(props)
    this.state = {
      formValues: {}
    }
  }

  handleChange(event) {
    event.preventDefault();
    let formValues = this.state.formValues;
    let name = event.target.name;
    let value = event.target.value;

    formValues[name] = value;

    this.setState({formValues})
  }

  handleSubmit(event) {
    window.location.href = `mailto:scott.lau.stubbs@gmail.com?subject=${this.state.formValues["subject"]}&body=${this.state.formValues["body"]}&cc=${this.state.formValues["name"]}`;
  }


  render() {
      return (

        <div>
        <h1 className="contactStyle">Get In Touch</h1>

        <Row>
          <Col className="center">
            <Row>

              <img className="center"
                src={Barcode}
                height = "50%"
                width = "50%"
                alt = "scan-barcode"
              />
            </Row>

          </Col>
          <Col className="center">
            <img className="center"
              src={Email}
              height = "50%"
              width = "50%"
              alt ="send-email"
            />
          </Col>
          <Col className="center">


            <img className="center"
              src={Social}
              height = "50%"
              width = "50%"
              alt ="social"
            />

          </Col>
        </Row>

        <Row>
          <Col className="center">
            <img
              src={QR}
              height = "75%"
              width = "50%"
              alt ="QR"
            />
          </Col>
          <Col className="center">

            <Container>
              <Form onSubmit={this.handleSubmit.bind(this)}>

                <Label className="emailFields"> What's your Email? :
                  <Input type="text" name="name" placeholder="Put your Email here" value={this.state.formValues["name"]} onChange={this.handleChange.bind(this)} />
                </Label>

                <br />

                <Label className="emailFields"> What are you Emailing about? :
                  <Input type="text" name="subject" placeholder="Put Subject of Email here" value={this.state.formValues["subject"]} onChange={this.handleChange.bind(this)}/>
                </Label>
                <br />
                <Label className="emailFields"> What are you thinking? :
                  <Input type="text" name="body" placeholder="Put Body of Email here" value={this.state.formValues["body"]} onChange={this.handleChange.bind(this)}/>
                </Label>

                <br />

              </Form>
            </Container>

          </Col>
          <Col className="center">
          <a rel="noopener noreferrer"
              className="contactStyle" href="https://github.com/mrscottstubbs" >
              <h3 className="contactStyle">GitHub</h3>
          </a>
          <a rel="noopener noreferrer"
              className="contactStyle" href="https://www.linkedin.com/in/scott-stubbs/" >
              <h3 className="contactStyle">LinkedIn</h3>
          </a>
          </Col>
        </Row>
        <Container>
          <Input className="subBtn" onClick={() => this.handleSubmit()} type="submit" value="Submit" />
        </Container>
        </div>
      );
  }
}

import React, {Component} from 'react';
import {
   Row, Col
} from 'reactstrap';
import Card from 'react-bootstrap/Card';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import ListGroup from 'react-bootstrap/ListGroup'
import Hitchcock from './images/hitchcock.png';
import TABot from './images/TABot.png';
import Here from './images/here.png';


class Projects extends Component {


    render(){
      return(
<div>
        <Row>
          <Col>
            <Card border="primary" style={{ width: '18rem', background: '#f0f5f9', color: '#52616b' }}>
              <Card.Img variant="top" src={Here} />
              <Card.Body>
                <Card.Title>You Are Here</Card.Title>
                <Card.Text>
                 A personal resume website to offer a more in depth look at my life and skills.              </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem style={{ background: '#f0f5f9' }}>React JS</ListGroupItem>
                <ListGroupItem style={{ background: '#f0f5f9' }}>In Production</ListGroupItem>
              </ListGroup>
              <Card.Body>
                <Card.Link target="_blank" href="https://github.com/mrscottstubbs/mrscottstubbs.github.io">GitHub</Card.Link>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card border="warning" style={{ width: '18rem', background: '#f0f5f9', color: '#52616b' }}>
              <Card.Img variant="top" src={TABot} />
              <Card.Body>
                <Card.Title>TABot</Card.Title>
                <Card.Text>
                 Teaching Assisstant Bot, TABot, is a work in progress python script that uses light ML concepts to help in developing a person's Computer Science skills.              </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem style={{ background: '#f0f5f9' }}>Python</ListGroupItem>
                <ListGroupItem style={{background: '#f0f5f9' }}>Still in Development</ListGroupItem>
              </ListGroup>
              <Card.Body>
                <Card.Link target="_blank" href="https://github.com/bavrumov/TABot">GitHub</Card.Link>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card border="primary" style={{ width: '18rem', background: '#f0f5f9', color: '#52616b' }}>
              <Card.Img variant="top" src={Hitchcock} />
              <Card.Body>
                <Card.Title>Hitchcock</Card.Title>
                <Card.Text>
                  A Script that uses the OMDb API to get information on any movie that is entered.
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem style={{ background: '#f0f5f9' }}>Python</ListGroupItem>
                <ListGroupItem style={{ background: '#f0f5f9' }}>In Production</ListGroupItem>
              </ListGroup>
              <Card.Body>
                <Card.Link target="_blank" href="https://github.com/mrscottstubbs/Hitchcock">GitHub</Card.Link>
              </Card.Body>
            </Card>
          </Col>

        </Row>
</div>

      )
    }
}
export default Projects;

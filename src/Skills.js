import React, {Component} from 'react';
import {
  Container, Row, Col, Badge
      } from 'reactstrap';
import Java from './images/java.png';
import Node from './images/nodejs.png';
import Reacts from './images/reactjs.png';
import CPP from './images/cpp.png';
import PostSQL from './images/postsql.png';
import JS from './images/javascript.png';
import PHP from './images/php.png';
import Git from './images/git.png';
import Python from './images/python.png';
import Matlab from './images/matlab.png';
import SQL from './images/SQL.png';
import HTML from './images/html.png';
import GCloud from './images/googlecloud.png';
import Xcode from './images/xcode.png';
import Androidstudio from './images/androidstudio.png';
import Burpe from './images/burpe.png';
import AWS from './images/aws.png';
import Csharp from './images/csharp.png';
import {Card,  OverlayTrigger, Popover} from 'react-bootstrap';
import './App.css';

const java = (
  <Popover>
    <Popover.Title as="h3">Java</Popover.Title>
  </Popover>
);

const python = (
  <Popover>
    <Popover.Title as="h3">Python</Popover.Title>
  </Popover>
);

const reactjs = (
  <Popover>
    <Popover.Title as="h3">React JS</Popover.Title>
  </Popover>
);

const html = (
  <Popover>
    <Popover.Title as="h3">HTML</Popover.Title>
  </Popover>
);

const sql = (
  <Popover>
    <Popover.Title as="h3">SQL</Popover.Title>
  </Popover>
);

const js = (
  <Popover>
    <Popover.Title as="h3">Javascript</Popover.Title>
  </Popover>
);

const git = (
  <Popover>
    <Popover.Title as="h3">Git</Popover.Title>
  </Popover>
);

const node = (
  <Popover>
    <Popover.Title as="h3">Node</Popover.Title>
  </Popover>
);

const postgres = (
  <Popover>
    <Popover.Title as="h3">PostgreSQL</Popover.Title>
  </Popover>
);

const php = (
  <Popover>
    <Popover.Title as="h3">PHP</Popover.Title>
  </Popover>
);

const cpp = (
  <Popover>
    <Popover.Title as="h3">C++</Popover.Title>
  </Popover>
);

const matlab = (
  <Popover>
    <Popover.Title as="h3">MatLab</Popover.Title>
  </Popover>
);

const csharp = (
  <Popover>
    <Popover.Title as="h3">C#</Popover.Title>
  </Popover>
);

const googlecloud = (
  <Popover>
    <Popover.Title as="h3">Google Cloud Services</Popover.Title>
  </Popover>
);

const aws = (
  <Popover>
    <Popover.Title as="h3">Amazon Web Services</Popover.Title>
  </Popover>
);

const xcode = (
  <Popover>
    <Popover.Title as="h3">XCode</Popover.Title>
  </Popover>
);

const androidstudio = (
  <Popover>
    <Popover.Title as="h3">Android Studio</Popover.Title>
  </Popover>
);

const burp = (
  <Popover>
    <Popover.Title as="h3">Burp Suite</Popover.Title>
  </Popover>
);



export default class Skills extends Component {


render() {
  return (



                <Container id="Languages" >


                <h1 className="proficiencyLabel"> <Badge color="info">Proficient</Badge></h1>

                <Row className="padded-top">
                  <Col>
                  <OverlayTrigger trigger="click" placement="right" overlay={java}>

                    <Card style={{  width: '7rem', height: '7rem', borderRadius: '50%'  }}>
                      <Card.Img variant="top" src={Java} />
                    </Card>

                    </OverlayTrigger>
                  <br/>
                  </Col>
                  <Col>
                  <OverlayTrigger trigger="click" placement="right" overlay={python}>
                    <Card style={{  width: '7rem', height: '7rem', borderRadius: '50%'  }}>
                      <Card.Img variant="top" src={Python} />
                    </Card>
                    </OverlayTrigger>
                  <br/>
                  </Col>
                  <Col>
                  <OverlayTrigger trigger="click" placement="right" overlay={reactjs}>
                    <Card style={{  width: '7rem', height: '7rem', borderRadius: '50%'  }}>
                      <Card.Img variant="top" src={Reacts} />
                    </Card>
                    </OverlayTrigger>
                  <br/>
                  </Col>
                  <Col>
                  <OverlayTrigger trigger="click" placement="right" overlay={html}>
                    <Card style={{  width: '7rem', height: '7rem', borderRadius: '50%'  }}>
                      <Card.Img variant="top" src={HTML} />
                    </Card>
                    </OverlayTrigger>
                  <br/>
                  </Col>
                  <Col>
                  <OverlayTrigger trigger="click" placement="right" overlay={sql}>
                    <Card style={{  width: '7rem', height: '7rem', borderRadius: '50%'  }}>
                      <Card.Img variant="top" src={SQL} />
                    </Card>
                    </OverlayTrigger>
                  <br/>
                  </Col>
                  <Col>
                  <OverlayTrigger trigger="click" placement="right" overlay={js}>
                    <Card style={{  width: '7rem', height: '7rem', borderRadius: '50%'  }}>
                      <Card.Img variant="top" src={JS} />
                    </Card>
                    </OverlayTrigger>
                  <br/>
                  </Col>
                  <Col>
                  <OverlayTrigger trigger="click" placement="right" overlay={git}>
                    <Card style={{  width: '7rem', height: '7rem', borderRadius: '50%'  }}>
                      <Card.Img variant="top" src={Git} />
                    </Card>
                    </OverlayTrigger>
                  <br/>
                  </Col>

                </Row>

                <h1 className="proficiencyLabel"> <Badge color="info">Familiar</Badge></h1>
                <Row className="padded-top">

                  <Col>
                  <OverlayTrigger trigger="click" placement="right" overlay={node}>
                    <Card style={{  width: '7rem', height: '7rem', borderRadius: '50%'  }}>
                      <Card.Img variant="top" src={Node} />
                    </Card>
                    </OverlayTrigger>
                  <br/>
                  </Col>
                  <Col>
                  <OverlayTrigger trigger="click" placement="right" overlay={postgres}>
                    <Card style={{  width: '7rem', height: '7rem', borderRadius: '50%'  }}>
                      <Card.Img variant="top" src={PostSQL} />
                    </Card>
                    </OverlayTrigger>
                  <br/>
                  </Col>
                  <Col>
                  <OverlayTrigger trigger="click" placement="right" overlay={php}>
                    <Card style={{  width: '7rem', height: '7rem', borderRadius: '50%'  }}>
                      <Card.Img variant="top" src={PHP} />
                    </Card>
                    </OverlayTrigger>
                  <br/>
                  </Col>
                  <Col>
                  <OverlayTrigger trigger="click" placement="right" overlay={cpp}>
                    <Card style={{  width: '7rem', height: '7rem', borderRadius: '50%'  }}>
                      <Card.Img variant="top" src={CPP} />
                    </Card>
                    </OverlayTrigger>
                  <br/>
                  </Col>
                  <Col>
                  <OverlayTrigger trigger="click" placement="right" overlay={matlab}>
                    <Card style={{  width: '7rem', height: '7rem', borderRadius: '50%'  }}>
                      <Card.Img variant="top" src={Matlab} />
                    </Card>
                    </OverlayTrigger>
                  <br/>
                  </Col>
                  <Col>
                  <OverlayTrigger trigger="click" placement="right" overlay={csharp}>
                    <Card style={{  width: '7rem', height: '7rem', borderRadius: '50%'  }}>
                      <Card.Img variant="top" src={Csharp} />
                    </Card>
                    </OverlayTrigger>
                  <br/>
                  </Col>
                  </Row>

                  <h1 className="proficiencyLabel"> <Badge color="info">Technologies</Badge></h1>
                  <Row className="padded-top">
                  <Col>
                  <OverlayTrigger trigger="click" placement="right" overlay={googlecloud}>
                    <Card style={{  width: '7rem', height: '7rem', borderRadius: '50%'  }}>
                      <Card.Img variant="top" src={GCloud} />
                    </Card>
                    </OverlayTrigger>
                  <br/>
                  </Col>
                  <Col>
                  <OverlayTrigger trigger="click" placement="right" overlay={aws}>
                    <Card style={{  width: '7rem', height: '7rem', borderRadius: '50%'  }}>
                      <Card.Img variant="top" src={AWS} />
                    </Card>
                    </OverlayTrigger>
                  <br/>
                  </Col>
                  <Col>
                  <OverlayTrigger trigger="click" placement="right" overlay={xcode}>
                    <Card style={{  width: '7rem', height: '7rem', borderRadius: '50%'  }}>
                      <Card.Img variant="top" src={Xcode} />
                    </Card>
                    </OverlayTrigger>
                  <br/>
                  </Col>
                  <Col>
                  <OverlayTrigger trigger="click" placement="right" overlay={androidstudio}>
                    <Card style={{  width: '7rem', height: '7rem', borderRadius: '50%'  }}>
                      <Card.Img variant="top" src={Androidstudio} />
                    </Card>
                    </OverlayTrigger>
                  <br/>
                  </Col>
                  <Col>
                  <OverlayTrigger trigger="click" placement="right" overlay={burp}>
                    <Card style={{  width: '7rem', height: '7rem', borderRadius: '50%'  }}>
                      <Card.Img variant="top" src={Burpe} />
                    </Card>
                    </OverlayTrigger>
                  <br/>
                  </Col>

                </Row>


                </Container>



  )
}


}

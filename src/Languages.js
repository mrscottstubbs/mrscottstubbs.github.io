import React, {Component, useState} from 'react';
import {
  Button, Popover, PopoverHeader, PopoverBody, Container, Row, Col
      } from 'reactstrap';
import FadedHeader from './FadedHeader.js';
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
import NewRelic from './images/newrelic.png';
import Xcode from './images/xcode.png';
import Androidstudio from './images/androidstudio.png';
import Burpe from './images/burpe.png';
import AWS from './images/aws.png';
import Csharp from './images/csharp.png';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import classNames from 'classnames';


class Languages extends Component {
    render(){
      return(


        <Container id="Languages">



        <FadedHeader title="Proficient" side="left" fade="left"></FadedHeader>
        <br />

        <Row className="padded-top">
          <Col>
            <Card style={{  width: '7rem', height: '7rem', borderRadius: '50%'  }}>
              <Card.Img variant="top" src={Java} />
            </Card>
          <br/>
          </Col>
          <Col>
            <Card style={{  width: '7rem', height: '7rem', borderRadius: '50%'  }}>
              <Card.Img variant="top" src={Python} />
            </Card>
          <br/>
          </Col>
          <Col>
            <Card style={{  width: '7rem', height: '7rem', borderRadius: '50%'  }}>
              <Card.Img variant="top" src={Reacts} />
            </Card>
          <br/>
          </Col>
          <Col>
            <Card style={{  width: '7rem', height: '7rem', borderRadius: '50%'  }}>
              <Card.Img variant="top" src={HTML} />
            </Card>
          <br/>
          </Col>
          <Col>
            <Card style={{  width: '7rem', height: '7rem', borderRadius: '50%'  }}>
              <Card.Img variant="top" src={SQL} />
            </Card>
          <br/>
          </Col>
          <Col>
            <Card style={{  width: '7rem', height: '7rem', borderRadius: '50%'  }}>
              <Card.Img variant="top" src={JS} />
            </Card>
          <br/>
          </Col>
          <Col>
            <Card style={{  width: '7rem', height: '7rem', borderRadius: '50%'  }}>
              <Card.Img variant="top" src={Git} />
            </Card>
          <br/>
          </Col>

        </Row>

        <FadedHeader title="Familiar" side="right" fade="right"></FadedHeader>
        <br />


        <Row className="padded-top">
          <Col>
            <Card style={{  width: '7rem', height: '7rem', borderRadius: '50%'  }}>
              <Card.Img variant="top" src={Node} />
            </Card>
          <br/>
          </Col>
          <Col>
            <Card style={{  width: '7rem', height: '7rem', borderRadius: '50%'  }}>
              <Card.Img variant="top" src={PostSQL} />
            </Card>
          <br/>
          </Col>
          <Col>
            <Card style={{  width: '7rem', height: '7rem', borderRadius: '50%'  }}>
              <Card.Img variant="top" src={PHP} />
            </Card>
          <br/>
          </Col>
          <Col>
            <Card style={{  width: '7rem', height: '7rem', borderRadius: '50%'  }}>
              <Card.Img variant="top" src={CPP} />
            </Card>
          <br/>
          </Col>
          <Col>
            <Card style={{  width: '7rem', height: '7rem', borderRadius: '50%'  }}>
              <Card.Img variant="top" src={Matlab} />
            </Card>
          <br/>
          </Col>
          <Col>
            <Card style={{  width: '7rem', height: '7rem', borderRadius: '50%'  }}>
              <Card.Img variant="top" src={Csharp} />
            </Card>
          <br/>
          </Col>
          </Row>
          <Row className="padded-top">
          <Col>
            <Card style={{  width: '7rem', height: '7rem', borderRadius: '50%'  }}>
              <Card.Img variant="top" src={GCloud} />
            </Card>
          <br/>
          </Col>
          <Col>
            <Card style={{  width: '7rem', height: '7rem', borderRadius: '50%'  }}>
              <Card.Img variant="top" src={AWS} />
            </Card>
          <br/>
          </Col>
          <Col>
            <Card style={{  width: '7rem', height: '7rem', borderRadius: '50%'  }}>
              <Card.Img variant="top" src={Xcode} />
            </Card>
          <br/>
          </Col>
          <Col>
            <Card style={{  width: '7rem', height: '7rem', borderRadius: '50%'  }}>
              <Card.Img variant="top" src={Androidstudio} />
            </Card>
          <br/>
          </Col>
          <Col>
            <Card style={{  width: '7rem', height: '7rem', borderRadius: '50%'  }}>
              <Card.Img variant="top" src={Burpe} />
            </Card>
          <br/>
          </Col>

        </Row>



        </Container>


      )
    }
}
export default Languages;

import React, { Component } from 'react';
import { FormGroup, PageHeader, FormControl, Button, Grid, Row, Col, Media, Form, Well } from 'react-bootstrap';
import bottomicon from './arrow-circle-bottom.svg';
import webhostingImg from './webhosting.png';
import cloudImg from './cloud.png';
import resellersImg from './resellers.png';
import vpsImg from './vps.png';

class Content extends Component {

  render() {
    return(
      <div>
        <div className="header-h2">
          <h1 className="white-content large">Get a website in <br/> 15 minutes</h1>
          <h1 className="top-color-text"> or less.</h1>
        </div>
      <Form inline>
      <FormGroup>
        <FormControl className="search-input" placeholder="Write your domain name here..">
        </FormControl>{' '}
        <Button bsStyle="success">Search</Button>
      </FormGroup>
    </Form>
      <p className="white-content">LEARN HOW WE CAN ENHANCE YOUR BUSINESS</p>
      <img src={bottomicon} className="Arrow-bot" alt="arrow" />
      <p className="middle-paragraph">
        Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
      </p>
      <Button className="create-account-btn">CREATE YOUR ACCOUNT</Button>
      <p className="services">Our Services</p>
      <hr/>
      <Grid fluid style={{margin: "0 10% 0 10%"}}>
        <Row>

          <Col xs={12} md={6}>
            <Well className="well">
            <Media>
              <Media.Left align="middle">
                <img width={64} height={64} src={webhostingImg} alt="web hosting" />
              </Media.Left>
              <Media.Body align="middle">
                <Media.Heading>WEB HOSTING →</Media.Heading>
                <p className="well-p">
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                  ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                  tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                  fringilla. Donec lacinia congue felis in faucibus.
                </p>
              </Media.Body>
            </Media>
            </Well>
          </Col>

          <Col xs={12} md={6}>
            <Well>
            <Media>
              <Media.Left align="middle">
                <img width={64} height={64} src={resellersImg} alt="resellers" />
              </Media.Left>
              <Media.Body>
                <Media.Heading>RESELLERS →</Media.Heading>
                <p className="well-p">
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                  ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                  tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                  fringilla. Donec lacinia congue felis in faucibus.
                </p>
              </Media.Body>
            </Media>
            </Well>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <Well>
            <Media>
              <Media.Left align="middle">
                <img width={64} height={64} src={vpsImg} alt="vps hosting" />
              </Media.Left>
              <Media.Body>
                <Media.Heading>VPS HOSTING →</Media.Heading>
                <p className="well-p">
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                  ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                  tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                  fringilla. Donec lacinia congue felis in faucibus.
                </p>
              </Media.Body>
            </Media>
            </Well>
          </Col>
          <Col xs={12} md={6}>
            <Well>
            <Media>
              <Media.Left align="middle">
                <img width={64} height={64} src={cloudImg} alt="cloud hosting" />
              </Media.Left>
              <Media.Body>
                <Media.Heading>CLOUD HOSTING →</Media.Heading>
                <p className="well-p">
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                  ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                  tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                  fringilla. Donec lacinia congue felis in faucibus.
                </p>
              </Media.Body>
            </Media>
            </Well>
          </Col>
        </Row>
      </Grid>
      <Grid>
        <Row className="bottom-row">
          <Col xs={11} md={6}>
            <p className="ready-p">Are you ready?</p>
            <p className="create-p">create an account, or contact us.</p>
          </Col>
          <Col xs={11} md={6}>
            <Button className="create-account-btn">CREATE YOUR ACCOUNT</Button>{' '}
            <Button className="contact-btn">CONTACT US</Button>
          </Col>
        </Row>
      </Grid>
      </div>
    )
  }
}
export default Content;

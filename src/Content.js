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
          <h1 className="white-content" style={{display: "inline", fontWeight: "bold", fontSize: "50px"}}>Get a website in <br/> 15 minutes</h1>
          <h1 className="Top-color-text" style={{display: "inline", fontWeight: "bold", fontSize: "50px"}}> or less.</h1>
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
      <p style={{lineHeight: 1.5, padding: "0 23% 2% 23%", fontSize: "18px"}}>
        Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
      </p>
      <Button style={{backgroundColor:"#7472DC", color: "#FFF", fontWeight: "bold"}}>CREATE YOUR ACCOUNT</Button>
      <p style={{padding: "5% 0 0 0", fontSize: "19px"}}>Our Services</p>
      <hr style={{width: "40px", borderColor : "black", marginTop:"1px"}}/>
      <Grid fluid style={{margin: "0 10% 0 10%"}}>
        <Row>

          <Col xs={12} md={6}>
            <Well className="well">
            <Media>
              <Media.Left align="middle">
                <img width={64} height={64} src={webhostingImg} alt="thumbnail" />
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
                <img width={64} height={64} src={resellersImg} alt="thumbnail" />
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
                <img width={64} height={64} src={vpsImg} alt="thumbnail" />
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
                <img width={64} height={64} src={cloudImg} alt="thumbnail" />
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
          <Col xs={4} md={6}>
            <p style={{color:"#7270DE", fontSize:"19px", textAlign:"left", paddingBottom:"5px"}}>Are you ready?</p>
            <p style={{color:"#4B2E8F", fontSize: "19px", textAlign:"left"}}>create an account, or contact us.</p>
          </Col>
          <Col xs={4} md={6}>
            <Button style={{backgroundColor:"#7472DC", color:"#FFF", fontWeight:"bold"}}>CREATE YOUR ACCOUNT</Button>{' '}
            <Button style={{fontWeight: "bold", boxShadow: "0 4px 8px 0 rgba(0,0,0,0.1), 0 3px 10px 0 rgba(0,0,0,0.12)"}}>CONTACT US</Button>
          </Col>
        </Row>
      </Grid>
      </div>
    )
  }
}
export default Content;

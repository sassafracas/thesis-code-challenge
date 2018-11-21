import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

class Footer extends Component {

  render(){
    return (
      <footer style={{backgroundColor: "#7472DC", color: "white"}}>
        <Grid>
          <Row>
            <Col xs={2} md={2}>
              + 1 800 WEBSITE
            </Col>
            <Col xs={2} md={2}>
              Company
            </Col>
            <Col xs={2} md={2}>
              Services
            </Col>
            <Col xs={2} md={2}>
              Others
            </Col>
            <Col xs={2} md={2}>
              Facebook Icon
            </Col>
          </Row>
          <Row>
            <Col xs={2} md={2}>
              hello@webnow.com
            </Col>
            <Col xs={2} md={2}>
              About Us
            </Col>
            <Col xs={2} md={2}>
              Web Hosting
            </Col>
            <Col xs={2} md={2}>
              Transfer domains
            </Col>
            <Col xs={2} md={2}>
              Youtube Icon
            </Col>
          </Row>
          <Row>
            <Col xs={2} md={2}>
              1 Main St. <br/>
            Floor 6, <br/>
              New York, NY 10005
            </Col>
            <Col xs={2} md={2}>
              News
            </Col>
            <Col xs={2} md={2}>
              Cloud Hosting
            </Col>
            <Col xs={2} md={2}>
              Customer Portal
            </Col>
            <Col xs={2} md={2}>
              Twitter
            </Col>
          </Row>
          <Row>
            <Col xs={2} md={2}>
            </Col>
            <Col xs={2} md={2}>
              FAQ
            </Col>
            <Col xs={2} md={2}>
              VPS Servers
            </Col>
            <Col xs={2} md={2}>
              Support Portal
            </Col>
            <Col xs={2} md={2}>

            </Col>
          </Row>
          <Row>
            <Col xs={2} md={2}>
            </Col>
            <Col xs={2} md={2}>
              Contact Us
            </Col>
            <Col xs={2} md={2}>
              Domain Names
            </Col>
            <Col xs={2} md={2}>
              Video Tutorials
            </Col>
            <Col xs={2} md={2}>

            </Col>
          </Row>
        </Grid>
      </footer>
    )
  }
}

export default Footer;

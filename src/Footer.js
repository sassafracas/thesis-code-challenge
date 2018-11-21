import React, { Component } from 'react';
import { Grid, Row, Col, Clearfix } from 'react-bootstrap';
import youtubeIcon from './youtube.svg';
import twitterIcon from './twitter.svg';
import facebookIcon from './facebook.svg';

class Footer extends Component {

  render(){
    return (
      <footer style={{backgroundColor: "#7472DC", color: "white", padding: "5% 5% 5% 5%"}}>
        <Grid>
          <Row>
            <Col xsHidden md={1} className="footer-icon">📞</Col>
            <Col xs={3} md={3} className="footer-header">
               + 1 800 WEBSITE
            </Col>
            <Col xs={3} md={2} className="footer-header">
              Company
            </Col>
            <Col xs={3} md={2} className="footer-header">
              Services
            </Col>
            <Col xs={3} md={2} className="footer-header">
              Others
            </Col>
            <Clearfix visibleXsBlock>
            </Clearfix>
            <Col xsPush xs={1} md={1}>
              <img className="social-icon" src={facebookIcon}></img>
            </Col>
          </Row>
          <Row>
            <Col xsHidden md={1} className="footer-icon">✉️</Col>
            <Col xs={6} md={3}>
              hello@webnow.com
            </Col>
            <Col xs={3} md={2}>
              About Us
            </Col>
            <Col xs={3} md={2}>
              Web Hosting
            </Col>
            <Col xs={3} md={2}>
              Transfer domains
            </Col>
            <Col xsPush xs={1} md={1}>
              <img className="social-icon" src={youtubeIcon}></img>
            </Col>
          </Row>
          <Row>
            <Col xsHidden md={1} className="footer-icon">📌</Col>
            <Col xs={3} md={3}>
               1 Main St.
            </Col>
            <Col xs={3} md={2}>
              News
            </Col>
            <Col xs={3} md={2}>
              Cloud Hosting
            </Col>
            <Col xs={3} md={2}>
              Customer Portal
            </Col>
            <Col xsPush xs={1} md={1}>
              <img className="social-icon" src={twitterIcon}></img>
            </Col>
          </Row>
          <Row>
            <Col xsHidden md={1}></Col>
            <Col xs={3} md={3}>
                 Floor 3,
            </Col>
            <Col xs={3} md={2}>
              FAQ
            </Col>
            <Col xs={3} md={2}>
              VPS Servers
            </Col>
            <Col xs={3} md={2}>
              Support Portal
            </Col>
            <Col xsPush md={1}>

            </Col>
          </Row>
          <Row>
            <Col xsHidden md={1}></Col>
            <Col xs={3} md={3}>
              New York, NY 10005
            </Col>
            <Col xs={3} md={2}>
              Contact Us
            </Col>
            <Col xs={3} md={2}>
              Domain Names
            </Col>
            <Col xs={3} md={2}>
              Video Tutorials
            </Col>
            <Col xsPush xs={1} md={1}>

            </Col>
          </Row>
        </Grid>
      </footer>
    )
  }
}

export default Footer;

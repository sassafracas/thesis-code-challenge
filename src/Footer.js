import React, { Component } from 'react';
import { Grid, Row, Col, Clearfix } from 'react-bootstrap';
import youtubeIcon from './youtube.svg';
import twitterIcon from './twitter.svg';
import facebookIcon from './facebook.svg';

class Footer extends Component {

  render(){
    return (
      <footer style={{backgroundColor: "#7472DC", color: "white", padding: "5vw 5vw 5vw 5vw"}}>
        <Grid>
          <Row>
            <Col xsHidden smHidden md={1} className="footer-icon">📞</Col>
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
            <Col  xsHidden smHidden md={1}>
              <img className="social-icon" src={facebookIcon}></img>
            </Col>
          </Row>
          <Row>
            <Col xsHidden smHidden md={1} className="footer-icon">✉️</Col>
            <Col xs={6} md={3}>
              hello@webnow.com
            </Col>
            <Col xs={2} md={2} xsOffset={5} xsPull={2} mdPull={0} mdOffset={0}>
              About Us
            </Col>
            <Col xs={2} md={2} xsPull={1} mdOffset={0} mdPull={0}>
              Web Hosting
            </Col>
            <Col xs={2} md={2} xsPull={0} mdPull={0}>
              Transfer domains
            </Col>
            <Col xsHidden smHidden md={1}>
              <img className="social-icon" src={youtubeIcon}></img>
            </Col>
          </Row>
          <Row>
            <Col xsHidden smHidden md={1} className="footer-icon">📌</Col>
            <Col xs={3} md={3}>
               <p className="footer-address">1 Main St.</p>
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
            <Col xsHidden smHidden xs={1} md={1}>
              <img className="social-icon" src={twitterIcon}></img>
            </Col>
          </Row>
          <Row>
            <Col xsHidden smHidden md={1}></Col>
            <Col xs={3} md={3}>
              <p className="footer-address middle-address">Floor 3,</p>
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
            <Col xsHidden smHidden md={1}>

            </Col>
          </Row>
          <Row>
            <Col xsHidden smHidden md={1}></Col>
            <Col xs={3} md={3}>
              <p className="footer-address">New York, NY 10005</p>
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
            <Col xsHidden smHidden md={1}>

            </Col>
          </Row>
        </Grid>
      </footer>
    )
  }
}

export default Footer;

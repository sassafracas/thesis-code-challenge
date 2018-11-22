import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import youtubeIcon from './youtube.svg';
import twitterIcon from './twitter.svg';
import facebookIcon from './facebook.svg';

class Footer extends Component {

  render(){
    return (
      <footer>
        <Grid>
          <Row>
            <Col xsHidden smHidden md={1} className="footer-icon"><span role="img" aria-label="telephone">📞</span></Col>
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
              <a href="https://www.facebook.com"><img className="social-icon" src={facebookIcon} alt="facebook"></img></a>
            </Col>
          </Row>
          <Row>
            <Col xsHidden smHidden md={1} className="footer-icon"><span role="img" aria-label="email">✉️</span></Col>
            <Col xs={6} sm={2} md={3}>
              <a href="mailto:hello@webnow.com">hello@webnow.com</a>
            </Col>
            <Col xs={2} sm={1} md={2} xsOffset={5} xsPull={2} smPull={4} mdPull={0} mdOffset={0}>
              <a href="#about">About Us</a>
            </Col>
            <Col xs={2} sm={1} smPull={2} md={2} xsPull={1} mdOffset={0} mdPull={0}>
              <a href="#webhosting">Web Hosting</a>
            </Col>
            <Col xs={2} sm={1} md={2} xsPull={0} mdPull={0}>
              <a href="#transfer">Transfer domains</a>
            </Col>
            <Col xsHidden smHidden md={1}>
              <a href="https://www.youtube.com"><img className="social-icon" src={youtubeIcon} alt="youtube"></img></a>
            </Col>
          </Row>
          <Row>
            <Col xsHidden smHidden md={1} className="footer-icon"><span role="img" aria-label="pin">📌</span></Col>
            <Col xs={3} md={3}>
               <p className="footer-address">1 Main St.</p>
            </Col>
            <Col xs={3} md={2}>
              <a href="#news">News</a>
            </Col>
            <Col xs={3} md={2}>
              <a href="#cloudhosting">Cloud Hosting</a>
            </Col>
            <Col xs={3} md={2}>
              <a href="#customers">Customer Portal</a>
            </Col>
            <Col xsHidden smHidden xs={1} md={1}>
              <a href="https://www.twitter.com"><img className="social-icon" src={twitterIcon} alt="twitter"></img></a>
            </Col>
          </Row>
          <Row>
            <Col xsHidden smHidden md={1}></Col>
            <Col xs={3} md={3}>
              <p className="footer-address middle-address">Floor 3,</p>
            </Col>
            <Col xs={3} md={2}>
              <a href="#faq">FAQ</a>
            </Col>
            <Col xs={3} md={2}>
              <a href="#vps">VPS Servers</a>
            </Col>
            <Col xs={3} md={2}>
              <a href="#support">Support Portal</a>
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
              <a href="#transfer">Contact Us</a>
            </Col>
            <Col xs={3} md={2}>
              <a href="#transfer">Domain Names</a>
            </Col>
            <Col xs={3} md={2}>
              <a href="#transfer">Video Tutorials</a>
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

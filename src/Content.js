import React, { Component } from 'react';
import { FormGroup, PageHeader, FormControl, Button, Grid, Row, Col, Media, Form } from 'react-bootstrap'
import bottomicon from './arrow-circle-bottom.svg'
class Content extends Component {

  render() {
    return(
      <div>
          <h2 className="white-content" style={{display: "inline", fontWeight: "bold"}}>Get a website in <br/> 15 minutes</h2>
          <h2 className="Top-color-text" style={{display: "inline", fontWeight: "bold"}}> or less.</h2>

      <Form inline>
      <FormGroup>
        <FormControl>
        </FormControl>
        <Button bsStyle="success">Search</Button>
      </FormGroup>
    </Form>
      <p className="white-content">Learn how we can enchance your business.</p>
      <img src={bottomicon} className="Arrow-bot" alt="arrow" />
      <p>
        Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
      </p>
      <Button bsStyle="primary">Create your account</Button>
      <p>Our Services</p>
      <hr style={{width: "40px", borderColor : "black"}}/>
      <Grid fluid>
        <Row>
          <Col xs={6} md={6}>
            <Media>
              <Media.Left align="middle">
                <img width={64} height={64} src="/thumbnail.png" alt="thumbnail" />
              </Media.Left>
              <Media.Body>
                <Media.Heading>WEB HOSTING</Media.Heading>
                <p>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                  ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                  tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                  fringilla. Donec lacinia congue felis in faucibus.
                </p>
              </Media.Body>
            </Media>
          </Col>
          <Col xs={6} md={6}>
            <Media>
              <Media.Left align="middle">
                <img width={64} height={64} src="/thumbnail.png" alt="thumbnail" />
              </Media.Left>
              <Media.Body>
                <Media.Heading>RESELLERS</Media.Heading>
                <p>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                  ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                  tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                  fringilla. Donec lacinia congue felis in faucibus.
                </p>
              </Media.Body>
            </Media>
          </Col>
        </Row>
        <Row>
          <Col xs={6} md={6}>
            <Media>
              <Media.Left align="middle">
                <img width={64} height={64} src="/thumbnail.png" alt="thumbnail" />
              </Media.Left>
              <Media.Body>
                <Media.Heading>VPS HOSTING</Media.Heading>
                <p>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                  ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                  tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                  fringilla. Donec lacinia congue felis in faucibus.
                </p>
              </Media.Body>
            </Media>
          </Col>
          <Col xs={6} md={6}>
            <Media>
              <Media.Left align="middle">
                <img width={64} height={64} src="/thumbnail.png" alt="thumbnail" />
              </Media.Left>
              <Media.Body>
                <Media.Heading>CLOUD HOSTING</Media.Heading>
                <p>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                  ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                  tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                  fringilla. Donec lacinia congue felis in faucibus.
                </p>
              </Media.Body>
            </Media>
          </Col>
        </Row>
      </Grid>
      </div>
    )
  }
}
export default Content;

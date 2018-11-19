import React, { Component } from 'react';
import { FormGroup, PageHeader, FormControl, Button, Grid, Row, Col, Media, Form } from 'react-bootstrap'
import bottomicon from './arrow-circle-bottom.svg'
class Content extends Component {

  render() {
    return(
      <div>
      <PageHeader>Get a website in 15 minutes or less.</PageHeader>
      <Form inline>
      <FormGroup>
        <FormControl>
        </FormControl>
        <Button bsStyle="success">Search</Button>
      </FormGroup>
    </Form>
      <p>Learn how we can enchance your business.</p>
      <img src={bottomicon} className="Arrow-bot" alt="arrow" />
      <p>
        Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
      </p>
      <Button bsStyle="primary">Create your account</Button>
      <p>Our Services</p>
      <Grid fluid>
        <Row>
          <Col xs={6} md={6}>
            <Media>
              <Media.Left align="middle">
                <img width={64} height={64} src="/thumbnail.png" alt="thumbnail" />
              </Media.Left>
              <Media.Body>
                <Media.Heading>Web Hosting</Media.Heading>
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
                <Media.Heading>Resellers</Media.Heading>
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
                <Media.Heading>VPS Hosting</Media.Heading>
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
                <Media.Heading>Cloud Hosting</Media.Heading>
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

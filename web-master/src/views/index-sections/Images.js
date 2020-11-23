import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";
import Particles from "react-particles-js";

// core components

function Images() {
  return (
    <>
      <div
        className="section section-images"
        style={{
          display: 'block'
        }}>
        <Particles
          className="page-header-image"
          params={{
            "particles": {
              "line_linked": {
                "color": "#008000",
                "width": "1"
              },
              "number": {
                "value": 50
              },
              "size": {
                "value": 5
              }
            },
            "interactivity": {
              "events": {
                "onhover": {
                  "enable": true,
                  "mode": "grab"
                },
                "resize": true,
              }
            },
            "retina_detect": true
          }}
          style={{
            bottom: 0,
            position: 'absolute',
            zIndex: '1',
            background: `#FFFFFF`,
          }}
        />
        <Container>
          <Row>
            <Col md="12" style={{
              zIndex: '1',
            }}>
              <div className="hero-images-container">
                <img
                  alt="..."
                  src={require("assets/img/itagro-web-image-1.png")}
                ></img>
              </div>
              <div className="hero-images-container-1">
                <img
                  alt="..."
                  src={require("assets/img/itagro-web-image-2.png")}
                ></img>
              </div>
              <div className="hero-images-container-2">
                <img
                  alt="..."
                  src={require("assets/img/itagro-web-image-3.png")}
                ></img>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Images;

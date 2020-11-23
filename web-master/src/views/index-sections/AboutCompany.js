import React from "react";
// reactstrap components
import { Container, Row, Col } from "reactstrap";
import CarouselItagro from "./CarouselItagro";

// core components

function AboutCompany() {
  return (
    <>
      <div id="about-us-section" className="section section-nucleo-icons">
        <br />
        <br />
        <Container>
          <Row>
            <Col lg="6" md="12">
              <h2 className="title">Sobre Nós</h2>
              <p className="text-justify" style={{ fontWeight: "unset" }}>
                A Itagro conta com uma equipe de profissionais altamente qualificados
                e experientes dentro do seu quadro de funcionários. Ao total são seis
                pilotos e dez técnicos agrícolas que também estão com o curso de
                aviação agrícola em execução com o objetivo de garantir uma aviação de
                qualidade mantendo o compromisso com a excelência na prestação de seus serviços.
              </p>
            </Col>

            <Col lg="6" md="12">
              <CarouselItagro />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default AboutCompany;

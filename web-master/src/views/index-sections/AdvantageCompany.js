import React from "react";
// reactstrap components
import { Container, Row, Col } from "reactstrap";
import CarouselAdvantage from "./CarouselAdvantage";


function AdvantageCompany() {
  return (
    <>
      <div id="advantage-us-section" className="section section-nucleo-icons">
        <br />
        <br />
        <Container>
          <Row>
            <Col lg="7" md="12">
              <h2 className="title">Vantagens da aplicação aérea</h2>
              <p className="text-justify" style={{ fontWeight: "unset", fontSize: "12pt" }}>
                <i className="fas fa-plane"></i> {" "}
                Mais barata, pois não amassa as culturas e nem compacta o solo.
              </p>
              <p className="text-justify" style={{ fontWeight: "unset", fontSize: "12pt" }}>
                <i className="fas fa-plane"></i> {" "}
                Reduz o tempo de aplicação podendo atingir 150 ha/hora com a aeronave Ipanema e com o Air Tractor 250 ha/hora.
              </p>
              <p className="text-justify" style={{ fontWeight: "unset", fontSize: "12pt" }}>
                <i className="fas fa-plane"></i> {" "}
                Menor contaminação do meio ambiente pelo uso de baixas vazões.
              </p>
              <p className="text-justify" style={{ fontWeight: "unset", fontSize: "12pt" }}>
                <i className="fas fa-plane"></i> {" "}
                Aplica o produto no momento certo e oportuno.
              </p>
              <p className="text-justify" style={{ fontWeight: "unset", fontSize: "12pt" }}>
                <i className="fas fa-plane"></i> {" "}
                Tem maior qualidade por trabalhar com aspectro de gotas uniforme.
              </p>
              <p className="text-justify" style={{ fontWeight: "unset", fontSize: "12pt" }}>
                <i className="fas fa-plane"></i> {" "}
                Aproveita melhor a condição climática.
              </p>
              <p className="text-justify" style={{ fontWeight: "unset", fontSize: "12pt" }}>
                <i className="fas fa-plane"></i> {" "}
                Dá garantia aos serviços, pois é planejada e executada por profissionais qualificados.
              </p>
            </Col>

            <Col lg="5" md="12" style={{ display: "flex", alignItems: "center" }}>
              <CarouselAdvantage />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default AdvantageCompany;

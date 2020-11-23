import React from "react";

// reactstrap components
import {
  Button,
  Container,
  Row,
  Col
} from "reactstrap";

function CompanyValues() {
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    return function cleanup() {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });

  return (
    <>
      <div className="wrapper">
        <div id="company-values-section" className="section section-team text-center">
          <br />
          <Container>
            <h2 className="title">Nossos valores</h2>
            <div className="team">
              <Row>
                <Col md="4">
                  <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src={require("assets/img/missao.jpg")}
                    ></img>
                    <h4 className="title">Missão</h4>
                    <p className="text-justify" style={{ fontWeight: "unset" }}>
                      <a style={{ color: "#c92222" }}>
                        Priorizar a qualidade
                      </a> de nossos serviços, visando atender as expectativas e necessidades de nossos clientes.
                      <br />
                      Contribuir para o incremento de{" "}
                      <a style={{ color: "#c92222" }}>
                        produtividade
                      </a> nas lavouras atendidas.
                    </p>
                  </div>
                </Col>
                <Col md="4">
                  <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src={require("assets/img/visao.jpg")}
                    ></img>
                    <h4 className="title">Visão</h4>
                    <p className="text-justify" style={{ fontWeight: "unset" }}>
                      <a style={{ color: "#c92222" }}>
                        Melhoria constante
                      </a>{" "}na prestação de serviços aéreos, utilizando as melhores técnicas e equipamentos.
                      <br />
                      Utilização da{" "}
                      <a style={{ color: "#c92222" }}>
                        melhor sistemática
                      </a>{" "}de trabalho disponível, visando sempre a segurança operacional.
                      <br />
                      <a style={{ color: "#c92222" }}>
                        Treinamento constante
                      </a>{" "}
                      do pessoal envolvido com os serviços.
                    </p>
                  </div>
                </Col>
                <Col md="4">
                  <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src={require("assets/img/valores.jpg")}
                    ></img>
                    <h4 className="title">Valores</h4>
                    <p className="text-center" style={{ fontWeight: "unset" }}>
                      Ética
                      <br />
                      Profissionalismo
                      <br />
                      Responsabilidade técnica e social
                      <br />
                      Respeito ao meio ambiente
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
}

export default CompanyValues;

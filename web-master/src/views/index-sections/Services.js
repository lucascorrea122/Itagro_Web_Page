import React from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col
} from "reactstrap";

// core components

function Services() {
  const [iconPills, setIconPills] = React.useState("1");
  return (
    <>
      <div id="services-section" className="section section-tabs">
        <Container>
          <h2 className="title">Serviços</h2>
          <Row>
            <Col className="ml-auto mr-auto" md="12" xl="12">
              <Card>
                <CardHeader>
                  <Nav className="justify-content-center" role="tablist" tabs>
                    <NavItem>
                      <NavLink
                        className={iconPills === "1" ? "active" : ""}
                        href="#"
                        onClick={e => {
                          e.preventDefault();
                          setIconPills("1");
                        }}
                      >
                        <i className="fas fa-globe"></i>
                        &nbsp;Todos
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={iconPills === "2" ? "active" : ""}
                        href="#"
                        onClick={e => {
                          e.preventDefault();
                          setIconPills("2");
                        }}
                      >
                        <i className="fas fa-plane-departure"></i>
                        &nbsp;Pulverização
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={iconPills === "3" ? "active" : ""}
                        href="#"
                        onClick={e => {
                          e.preventDefault();
                          setIconPills("3");
                        }}
                      >
                        <i className="fas fa-seedling"></i>
                        &nbsp;Adubação
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={iconPills === "4" ? "active" : ""}
                        href="#pablo"
                        onClick={e => {
                          e.preventDefault();
                          setIconPills("4");
                        }}
                      >
                        <i className="fas fa-leaf"></i>
                        &nbsp;Pastagens
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={iconPills === "5" ? "active" : ""}
                        href="#pablo"
                        onClick={e => {
                          e.preventDefault();
                          setIconPills("5");
                        }}
                      >
                        <i className="fas fa-fire-alt"></i>
                        &nbsp;Combate à Incêndios
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={iconPills === "6" ? "active" : ""}
                        href="#pablo"
                        onClick={e => {
                          e.preventDefault();
                          setIconPills("6");
                        }}
                      >
                        <i className="fas fa-spa"></i>
                        &nbsp;Plantação de Arroz
                      </NavLink>
                    </NavItem>
                  </Nav>
                </CardHeader>
                <CardBody>
                  <TabContent
                    className="text-center"
                    activeTab={"iconPills" + iconPills}
                  >
                    <TabPane tabId="iconPills1">
                      <Container>
                        <Row>
                          <Col lg="6" md="12">
                            <p className="text-justify" style={{fontWeight:"unset"}}>
                              Nós prestamos diversos serviços aereos, dentre eles é possível citar a
                              Pulverização, Adubação, Pastagens, Combate à Incêndios, Plantação de Arroz
                              Olhe as abas para ou entrem contato para demais informações.
                            </p>
                          </Col>
                          <Col lg="6" md="12">
                            <img
                              alt="..."
                              height="231" width="415"
                              src={require("assets/img/servicos-aereos.jpg")}
                            ></img>
                          </Col>
                        </Row>
                      </Container>
                    </TabPane>
                    <TabPane tabId="iconPills2">
                      <Container>
                        <Row>
                          <Col lg="6" md="12">
                            <p className="text-justify" style={{fontWeight:"unset"}}>
                              Utilizamos todos os tipos de bicos e atomizadores
                              com o intuito de garantir a melhor eficiência das
                              aplicações dos defensivos agrícolas de acordo com
                              as vazões e exigências das diversas culturas conforme
                              as recomendações técnicas.
                              </p>
                          </Col>
                          <Col lg="6" md="12">
                            <img
                              alt="..."
                              height="231" width="415"
                              src={require("assets/img/pulverizacao-aerea.jpg")}
                            ></img>
                          </Col>
                        </Row>
                      </Container>
                    </TabPane>
                    <TabPane tabId="iconPills3">
                      <Container>
                        <Row>
                          <Col lg="6" md="12">
                            <p className="text-justify" style={{fontWeight:"unset"}}>
                              A adubação é realizada com o uso do difusor
                              "Swathmaster" para garantir uma maior uniformidade
                              e precisão com o melhor custo benefício.
                              </p>
                          </Col>
                          <Col lg="6" md="12">
                            <img
                              alt="..."
                              height="231" width="415"
                              src={require("assets/img/difusor-aereo.jpg")}
                            ></img>
                          </Col>
                        </Row>
                      </Container>
                    </TabPane>
                    <TabPane tabId="iconPills4">
                      <Container>
                        <Row>
                          <Col lg="6" md="12">
                            <p className="text-justify" style={{fontWeight:"unset"}}>
                              Utilização do difusor "Swathmaster" para
                              maior homogeinização e uniformidade das
                              sementes lançadas através do avião. Podemos semear
                              aveia, azevém, milheto, braquiárias, soja, milho, dentre outras.
                              Com base nisto o agricultor acaba ganhando no mínimo 30 dias para
                              a germinação, pois não há necessidade de esperar a colheita
                              para efetuar a semeadura.
                              </p>
                          </Col>
                          <Col lg="6" md="12">
                            <img
                              alt="..."
                              height="231" width="415"
                              src={require("assets/img/pastagem-aerea.jpg")}
                            ></img>
                          </Col>
                        </Row>
                      </Container>
                    </TabPane>
                    <TabPane tabId="iconPills5">
                      <Container>
                        <Row>
                          <Col lg="6" md="12">
                            <p className="text-justify" style={{fontWeight:"unset"}}>
                              Para o combate à incêndios utilizamos a aeronave Air Tractor,
                              que tem sido utilizada em vários países. No Brasil também é
                              amplamente usada devido a sua alta capacidade de carga e rapidez.
                              Assim chegando aos focos de incêndio e locais de difícil acesso
                              com muita eficiência.
                              </p>
                          </Col>
                          <Col lg="6" md="12">
                            <img
                              alt="..."
                              height="231" width="415"
                              src={require("assets/img/air-tractor.jpg")}
                            ></img>
                          </Col>
                        </Row>
                      </Container>
                    </TabPane>
                    <TabPane tabId="iconPills6">
                      <Container>
                        <Row>
                          <Col lg="6" md="12">
                            <p className="text-justify" style={{fontWeight:"unset"}}>
                              Realizamos Semeadura de sementes de arroz pré-germinados
                              ou sementes normais. Garantindo ótimos resultados.
                              </p>
                          </Col>
                          <Col lg="6" md="12">
                            <img
                              alt="..."
                              height="231" width="415"
                              src={require("assets/img/plantacao-aerea.jpg")}
                            ></img>
                          </Col>
                        </Row>
                      </Container>
                    </TabPane>
                  </TabContent>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Services;

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

import CarouselAT402B from "./CarouselAT402B.js";
import CarouselIpanema from "./CarouselIpanema202.js";
import CarouselIpanema202A from "./CarouselIpanema202A.js";

function Aircrafts() {
  const [airtractor, setAirtractor] = React.useState("1");
  const [ipanema, setIpanema] = React.useState("1");
  const [ipanemaAlcool, setIpanemaAlcool] = React.useState("1");
  const [pills, setPills] = React.useState("1");

  return (
    <>
      <div id="aircrafts-section" className="section ">
        <Container>
          <h2 className="title">Nossas Aeronaves</h2>
          <br />
          <Row >
            <Col md="4" sm="12">
              <Card>
                <h3 className="title text-center" style={{fontSize:"14pt"}}>AirTractor AT-402B</h3>
                <div style={{ height: 231 }}>
                  <CarouselAT402B />
                </div>
                <br />
                <CardHeader>
                  <Nav className="justify-content-center nav-tabs-secondary" role="tablist" tabs>
                    <NavItem>
                      <NavLink
                        className={airtractor === "1" ? "active" : ""}
                        href="#pablo"
                        onClick={e => {
                          e.preventDefault();
                          setAirtractor("1");
                        }}
                      >
                        Especificação
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={airtractor === "2" ? "active" : ""}
                        href="#pablo"
                        onClick={e => {
                          e.preventDefault();
                          setAirtractor("2");
                        }}
                      >
                        Performance
                      </NavLink>
                    </NavItem>
                  </Nav>
                </CardHeader>
                <CardBody>
                  <TabContent
                    activeTab={"airtractor" + airtractor}
                  >
                    <TabPane tabId="airtractor1">
                      <h10>
                        <strong>Tipo de motor:</strong> P&W PT6A-15AG<br />
                        <strong>Motor S.H.P:</strong> 600 2200RPM<br />
                        <strong>Hélice:</strong> Hartzell HC-B3TN-3D/T10282N + 4<br />
                        <strong>Peso para decolagem:</strong> 9,170 lbs (4.159 kg)<br />
                        <strong>Peso de desembarque:</strong> 7,000 lbs (3.175 kg)<br />
                        <strong>Peso vazio com equipamento de pulverização:</strong> 4,020 k lbs (1.823 g)<br />
                        <strong>Carga útil:</strong> 5,150 lbs (2.336 kg)<br />
                        <strong>Capacidade do funil:</strong> 400 US gal (1.514 L)<br />
                        <strong>Capacidade de combustível:</strong> 170 US gal (644 L)<br />
                        <strong>Extensão de asa:</strong> 51 ft (15,54 m)<br />
                        <strong>Área da asa:</strong> 306 sq ft (28,45 m2)<br />
                      </h10>
                    </TabPane>

                    <TabPane tabId="airtractor2">
                      <h10>
                        <strong>Velocidade de cruzeiro:</strong> 162 mph (261 kph) a 8,000 ft (2.438 kph)<br />
                        <strong>Velocidade de Trabalho (Típica):</strong>	120-140 mph (193-225 kph)<br />
                        <strong>Alcance, cruzeiro econômico a 8,000 ft. (2.438 m):</strong> 660 mi (1 062km)<br />
                        <strong>Velocidade de travagem, oscila:</strong> 77 mph (124 kph) at 7,000 lbs<br />
                        <strong>Velocidade de parada, abas para baixo:</strong> 66mph (106 kph) at 8,600 lbs (3,901 kg)<br />
                        <strong>Velocidade de parada como normalmente desembarcada:</strong> 53 mph (85kph)<br />
                        <strong>Taxa de escalada:</strong> 800 fpm (244 mpm) at 8,600 lbs (3 901kg)<br />
                        <strong>Distância de decolagem:</strong> 975 ft (297 m) at 8,600 lbs (3 901 kg)
                      </h10>
                    </TabPane>

                  </TabContent>
                </CardBody>
              </Card>
            </Col>
            <Col md="4" sm="12">
              <Card>
                <h3 className="title text-center" style={{fontSize:"14pt"}}>Embraer IPANEMA</h3>
                <div style={{ height: 231 }}>
                  <CarouselIpanema />
                </div>
                <br />
                <CardHeader>
                  <Nav className="justify-content-center nav-tabs-secondary" role="tablist" tabs>
                    <NavItem>
                      <NavLink
                        className={ipanema === "1" ? "active" : ""}
                        href=""
                        onClick={e => {
                          e.preventDefault();
                          setIpanema("1");
                        }}
                      >
                        Especificação
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={ipanema === "2" ? "active" : ""}
                        href="#pablo"
                        onClick={e => {
                          e.preventDefault();
                          setIpanema("2");
                        }}
                      >
                        Performance
                      </NavLink>
                    </NavItem>
                  </Nav>
                </CardHeader>
                <CardBody>
                  <TabContent
                    className=""
                    activeTab={"ipanema" + ipanema}
                  >
                    <TabPane tabId="ipanema1">

                      <h10>

                        <strong>Motor:</strong> Lycoming IO-540-K1J5, 300HP, 2.700RPM, 6 cilindros (Motor a Gasolina)<br />
                        <strong>Hélice:</strong> Hartzell tripá com velocidade constante<br />
                        <strong>Comprimento total:</strong> 7,43m<br />
                        <strong>Altura:</strong> 2,22m<br />
                        <strong>Envergadura:</strong> 11,07m<br />
                        <strong>Peso máximo:</strong> 1800 kg<br />
                        <strong>Categoria restrita:</strong> Decolagem e Pouso<br />
                        <strong>Capacidade de combustível total:</strong> 292 litros (77 US gal) <br />
                        <strong>Capacidade de combustível utilizável:</strong> 264 litros (70 US gal) <br />
                        <strong>Tanque de produtos químicos (Hopper):</strong> Volume total de 950 litros <br />

                      </h10>
                    </TabPane>
                    <TabPane tabId="ipanema2">
                      <h10>

                        <strong>Cruzeiro a 75% da PMC:</strong> 213km/h(133mph) Va (Motor a gasolina)<br />
                        <strong>Cruzeiro a 65% da PMC:</strong> 198km/h(123mph) Va (Motor a gasolina)<br />
                        <strong>Estol com flape a 30% 88km/h(55mph) Va</strong>

                      </h10>
                    </TabPane>

                  </TabContent>
                </CardBody>
              </Card>
            </Col>
            <Col md="4" sm="12">
              <Card>
                <h3 className="title text-center" style={{fontSize:"14pt"}}>Embraer IPANEMA-Etanol</h3>
                <div style={{ height: 231 }}>
                  <CarouselIpanema202A />
                </div>
                <br />
                <CardHeader>
                  <Nav className="justify-content-center nav-tabs-secondary" role="tablist" tabs>
                    <NavItem>
                      <NavLink
                        className={ipanemaAlcool === "1" ? "active" : ""}
                        href="#pablo"
                        onClick={e => {
                          e.preventDefault();
                          setIpanemaAlcool("1");
                        }}
                      >
                        Especificação
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={ipanemaAlcool === "2" ? "active" : ""}
                        href="#pablo"
                        onClick={e => {
                          e.preventDefault();
                          setIpanemaAlcool("2");
                        }}
                      >
                        Performance
                      </NavLink>
                    </NavItem>
                  </Nav>
                </CardHeader>
                <CardBody>
                  <TabContent
                    className=""
                    activeTab={"ipanemaAlcool" + ipanemaAlcool}
                  >
                    <TabPane tabId="ipanemaAlcool1">
                      <h10>

                        <strong>Motor:</strong> Lycoming IO-540-K1J5, 320HP, 2.700RPM, 6 cilindros (Motor a etanol)<br />
                        <strong>Hélice:</strong> Hartzell tripá com velocidade constante<br />
                        <strong>Comprimento total:</strong> 7,43m<br />
                        <strong>Altura:</strong> 2,22m<br />
                        <strong>Envergadura:</strong> 11,07m<br />
                        <strong>Peso máximo:</strong> 1800 kg<br />
                        <strong>Categoria restrita:</strong> Decolagem e Pouso<br />
                        <strong>Capacidade de combustível total:</strong> 292 litros (77 US gal) <br />
                        <strong>Capacidade de combustível utilizável:</strong> 264 litros (70 US gal) <br />
                        <strong>Tanque de produtos químicos (Hopper):</strong> Volume total de 950 litros <br />

                      </h10>
                    </TabPane>
                    <TabPane tabId="ipanemaAlcool2">
                      <h10>

                        <strong>Cruzeiro a 75% da PMC:</strong> 222km/h(138mph) Va (Motor a Etanol)<br />
                        <strong>Cruzeiro a 65% da PMC:</strong> 204km/h(127mph) Va (Motor a Etanol)<br />
                        <strong>Estol com flape a 30% 88km/h(55mph) Va</strong>

                      </h10>
                    </TabPane>

                  </TabContent>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}


export default Aircrafts;
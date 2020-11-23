import React from "react";
// reactstrap components
import { Container, Row, Col } from "reactstrap";

function DifferentialCompany() {
  return (
    <>
      <div id="differential-us-section" className="section section-nucleo-icons">
        <br />
        <br />
        <Container>
          <Row>
            <Col sm="12">
              <h2 className="title">Diferenciais</h2>
            </Col>
            <Col lg="6" md="12">
              <p className="text-justify" style={{ fontWeight: "unset", fontSize: "12pt" }}>
                <i className="fas fa-plane"></i> {" "}
                Os profissionais da Itagro mantém-se atualizados constantemente em relação às legislações vigentes e aos conhecimentos das novas tecnologias de aplicação.
              </p>
              <p className="text-justify" style={{ fontWeight: "unset", fontSize: "12pt" }}>
                <i className="fas fa-plane"></i> {" "}
                Objetivando uma aplicação aérea com eficácia, a equipe da Itagro planeja com precisão todos os passos necessários para um resultado perfeito, observando os fatores climáticos necessários.
              </p>
              <p className="text-justify" style={{ fontWeight: "unset", fontSize: "12pt" }}>
                <i className="fas fa-plane"></i> {" "}
                Pilotos agrícolas habilitados e qualificados.
              </p>
              <p className="text-justify" style={{ fontWeight: "unset", fontSize: "12pt" }}>
                <i className="fas fa-plane"></i> {" "}
                Técnico agrícola responsável pela interpretação do receituário agronômico e pelo preparo da calda, com curso de executor em aviação agrícola.
              </p>
              <p className="text-justify" style={{ fontWeight: "unset", fontSize: "12pt" }}>
                <i className="fas fa-plane"></i> {" "}
                Lavadores de embalagens de alta pressão, facilitando a tríplice lavagem.
              </p>
              <p className="text-justify" style={{ fontWeight: "unset", fontSize: "12pt" }}>
                <i className="fas fa-plane"></i> {" "}
                Pátio de descontaminação química e física dentro dos padrões exigidos pelos órgãos fiscalizadores: Norma 02 do MAPA (Ministério da Agricultura, Pecuária e Abastecimento).
              </p>
            </Col>

            <Col lg="6" md="12">
              <p className="text-justify" style={{ fontWeight: "unset", fontSize: "12pt" }}>
                <i className="fas fa-plane"></i> {" "}
                Preservar a natureza é uma das prioridades da Itagro. A empresa possui uma área de descontaminação através de ozonização, bem como toda infraestrutura voltada para o cuidado com o meio ambiente.
              </p>
              <p className="text-justify" style={{ fontWeight: "unset", fontSize: "12pt" }}>
                <i className="fas fa-plane"></i> {" "}
                Com a aeronave Air Tractor pode-se operar na base, não necessitando deslocamentos terrestres para levar os produtos químicos até as lavouras, sendo que este equipamento tem dispositivo de retrolavagem, o que é feito ainda na lavoura tratada, retornando à base já devidamente descontaminada, o que favorece o cuidado com o meio ambiente.
              </p>
              <p className="text-justify" style={{ fontWeight: "unset", fontSize: "12pt" }}>
                <i className="fas fa-plane"></i> {" "}
                Banco de dados salvos em todas as safras em pastas específicas com nome dos cliente e todas as lavouras trabalhadas, para consulta em qualquer tempo dos parâmetros utilizados no momento daquele serviço facilitando o planejamento de futuras aplicações.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default DifferentialCompany;

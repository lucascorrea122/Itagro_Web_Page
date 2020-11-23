import React from "react";

// reactstrap components
import {
  Button,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  Form,
  FormGroup,
  Input,
  Label,
  InputGroupAddon,
  InputGroupText,
  InputGroup
} from "reactstrap";

// core components
// function sendMail(userName, userEmail, userPhone, message) {

//   console.log(userName, userEmail, userPhone, message);

//   /* SmtpJS.com - v3.0.0 */
//   var Email = { send: function (a) { return new Promise(function (n, e) { a.nocache = Math.floor(1e6 * Math.random() + 1), a.Action = "Send"; var t = JSON.stringify(a); Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (e) { n(e) }) }) }, ajaxPost: function (e, n, t) { var a = Email.createCORSRequest("POST", e); a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.onload = function () { var e = a.responseText; null != t && t(e) }, a.send(n) }, ajax: function (e, n) { var t = Email.createCORSRequest("GET", e); t.onload = function () { var e = t.responseText; null != n && n(e) }, t.send() }, createCORSRequest: function (e, n) { var t = new XMLHttpRequest; return "withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest).open(e, n) : t = null, t } };

//   Email.send({
//     SecureToken: "5634ff6c-8efd-437f-a804-5be114e14f1b",
//     To: 'yuryalencar19@gmail.com',
//     From: "contato@softratz.com",
//     Subject: "This is the subject",
//     Body: "And this is the body"
//   }).then(
//     message => alert(message)
//   );
// }

// 8e3d1b55-7c87-49de-af2f-0a43d708d9fd
function Contact() {
  const [iconPills, setIconPills] = React.useState("1");
  const [pills, setPills] = React.useState("1");

  return (

    <>
      <div
        className="section section-contact Contact"
        data-background-color="black"
        id="contact-section"
      >
        <Container>
          <Row>
            <Col lg="6" md="12">
              <h4 className="d-flex justify-content-center">Contato</h4>
              <hr />
              <Row>
                <Col lg="4">
                  <div className="align-self-center d-flex justify-content-center">
                    <i className="fas fa-map-marker-alt fa-2x"></i>
                  </div>
                </Col>
                <Col lg="8">
                  <p className="mb-0 d-flex justify-content-center">Alegrete - RS:</p>
                  <p className="mb-0 d-flex justify-content-center">ROD RS 377 KM 398/202 - 1º Distrito Palma</p>
                  <p className="mt-0 d-flex justify-content-center">Cx. Postal 305 - CEP 97541-970 </p>
                </Col>
              </Row>
              <br />
              <Row>
                <Col lg="4">
                  <div className="align-self-center d-flex justify-content-center">
                    <i className="fas fa-phone-volume fa-2x"></i>
                  </div>
                </Col>

                <Col lg="8">
                  <p className="mb-0 d-flex justify-content-center">(55) 99696-6986, (55) 99962-1960,</p>
                  <p className="mt-0 d-flex justify-content-center">(55) 99974-1960</p>
                </Col>
              </Row>
              <br />
              <Row>
                <Col lg="4">
                  <div className="align-self-center d-flex justify-content-center">
                    <i className="fas fa-envelope fa-2x"></i>
                  </div>
                </Col>
                <Col lg="8">
                  <p className="d-flex justify-content-center"> itagro@itagro.ag </p>
                </Col>
              </Row>
              <br />
              <Row>
                <Col lg="4">
                  <div className="align-self-center d-flex justify-content-center">
                    <i className="fas fa-broadcast-tower fa-2x"></i>
                  </div>
                </Col>
                <Col lg="8">
                  <p className="d-flex justify-content-center"> 151.410 </p>
                </Col>
              </Row>
            </Col>

            <Col>
              <h4 className="d-flex justify-content-center" >Contate-nos</h4>
              <hr />
              <Col lg="12">
                <FormGroup>
                  <Input
                    name="name"
                    defaultValue=""
                    placeholder="Seu Nome"
                    type="text"
                  ></Input>
                </FormGroup>
                <FormGroup>
                  <Input
                    name="email"
                    defaultValue=""
                    placeholder="Seu email"
                    type="email"
                  ></Input>
                </FormGroup>
                <FormGroup>
                  <Input
                    name="phone"
                    defaultValue=""
                    placeholder="Seu Telefone"
                    type="text"
                  ></Input>
                </FormGroup>
                <FormGroup>
                  <Input
                    name="message"
                    defaultValue=""
                    placeholder="Sua Mensagem"
                    type="textarea"
                  ></Input>
                </FormGroup>
                <Row>
                  <Col className="d-flex justify-content-center">
                    <Button className="btn btn-round" outline type="button">Enviar Mensagem</Button>
                  </Col>
                </Row>
              </Col>
            </Col>
            <Col lg="12">
              <h4 className="d-flex justify-content-center">Veja nossa localização!</h4>
              <iframe className="col-md-12" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1731.4716557198894!2d-55.69880204197354!3d-29.7792806674832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95aabaec89eeb983%3A0x7fa4cd117a1ff4ee!2zSVRBR1JPIEF2aWHDp8OjbyBBZ3LDrWNvbGE!5e0!3m2!1spt-BR!2sbr!4v1568689607920!5m2!1spt-BR!2sbr" height="250" frameBorder="0" allowFullScreen=""></iframe>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}



export default Contact;
import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledTooltip
} from "reactstrap";

function IndexNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 399 ||
        document.body.scrollTop > 399
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400
      ) {
        setNavbarColor("navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className={"fixed-top " + navbarColor} expand="lg" color="info">
        <Container>
          <div className="navbar-translate">
            <NavbarBrand
              id="navbar-brand"
              href="#softratz"
              onClick={e => {
                e.preventDefault();
                document
                  .getElementById("header")
                  .scrollIntoView({ behavior: "smooth" });
              }}
            >
              <img
                width="170x"
                height="40px"
                alt="..."
                className="n-logo"
                src={require("assets/img/logo-itagro.png")}
              ></img>
              {/* Itagro: Aviação de Qualidade */}
            </NavbarBrand>
            <UncontrolledTooltip target="#navbar-brand">
              Voltar ao topo da página
            </UncontrolledTooltip>
            <button
              className="navbar-toggler navbar-toggler"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              type="button"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
          >
            <Nav navbar>
              <NavItem>
                <NavLink
                  href="#"
                  onClick={e => {
                    e.preventDefault();
                    document
                      .getElementById("company-values-section")
                      .scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  <p>Valores</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="#"
                  onClick={e => {
                    e.preventDefault();
                    document
                      .getElementById("about-us-section")
                      .scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  <p>Sobre nós</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="#"
                  onClick={e => {
                    e.preventDefault();
                    document
                      .getElementById("services-section")
                      .scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  <p>Serviços</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="#"
                  onClick={e => {
                    e.preventDefault();
                    document
                      .getElementById("aircrafts-section")
                      .scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  <p>Aeronaves</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="#"
                  onClick={e => {
                    e.preventDefault();
                    document
                      .getElementById("contact-section")
                      .scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  <p>Contato</p>
                </NavLink>
              </NavItem>
              {/* <NavItem>
                <NavLink
                  href="#"
                  onClick={e => {
                    e.preventDefault();
                    document
                      .getElementById("download-app-section")
                      .scrollIntoView({ behavior: "smooth" });
                  }}
                  id="download-app"
                >

                </NavLink>
                <UncontrolledTooltip target="#download-app">
                  Baixe nosso Aplicativo e Fique por Dentro
                </UncontrolledTooltip>
              </NavItem> */}
              <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color="default"
                  href="#"
                  nav
                  onClick={e => e.preventDefault()}
                >
                  <p>Mais Informações</p>
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem
                    href="#softratz"
                    onClick={e => {
                      e.preventDefault();
                      document
                        .getElementById("our-history-section")
                        .scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    <i class="now-ui-icons education_agenda-bookmark"></i>
                    Nossa História
                  </DropdownItem>
                  <DropdownItem
                    href="#softratz"
                    onClick={e => {
                      e.preventDefault();
                      document
                        .getElementById("differential-us-section")
                        .scrollIntoView({ behavior: "smooth" });
                    }}>
                    <i class="now-ui-icons business_bulb-63"></i>
                    Diferenciais
                  </DropdownItem>
                  <DropdownItem
                    href="#softratz"
                    onClick={e => {
                      e.preventDefault();
                      document
                        .getElementById("advantage-us-section")
                        .scrollIntoView({ behavior: "smooth" });
                    }}>
                    <i class="now-ui-icons education_hat"></i>
                    Vantagens da aplicação aérea
                  </DropdownItem>
                  <DropdownItem
                    href="#softratz"
                  >
                    <i className="now-ui-icons arrows-1_cloud-download-93"></i>
                    <p>Download do APP Itagro</p>
                  </DropdownItem>
                  <DropdownItem to="/index" tag={Link}>
                    <i className="now-ui-icons business_globe mr-1"></i>
                    Notícias
                  </DropdownItem>
                  <DropdownItem to="/index" tag={Link}>
                    <i className="fas fa-sign-in-alt"></i>
                    Login
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink
                  href="https://www.facebook.com/ItagroAviacao"
                  target="_blank"
                  id="facebook-tooltip"
                >
                  <i className="fab fa-facebook-square"></i>
                  <p className="d-lg-none d-xl-none">Facebook</p>
                </NavLink>
                <UncontrolledTooltip target="#facebook-tooltip">
                  Siga-nos no Facebook
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://www.instagram.com/itagroaviacao/"
                  target="_blank"
                  id="instagram-tooltip"
                >
                  <i className="fab fa-instagram"></i>
                  <p className="d-lg-none d-xl-none">Instagram</p>
                </NavLink>
                <UncontrolledTooltip target="#instagram-tooltip">
                  Siga-nos no Instagram
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <NavLink
                  href='https://api.whatsapp.com/send?phone=5555996966986&text=Ol%C3%A1%20Itagro%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20seus%20servi%C3%A7os%20!'
                  target="_blank"
                  id="whatsapp-tooltip"
                >
                  <i className="fab fa-whatsapp"></i>
                  <p className="d-lg-none d-xl-none">WhatsApp</p>
                </NavLink>
                <UncontrolledTooltip target="#whatsapp-tooltip">
                  Fale conosco pelo Whattsapp
                </UncontrolledTooltip>
              </NavItem>

            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default IndexNavbar;

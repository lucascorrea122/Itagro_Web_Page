/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

function DarkFooter() {
  return (
    <footer className="footer" data-background-color="black">
      <Container>
        <nav>
          <ul>
            <li>
              <a
                href="https://www.softratz.com"
                target="_blank"
              >
                <img
                  alt="Softratz"
                  height="35"
                  src={require("assets/img/softratz-white.png")}
                ></img>
              </a>
            </li>
          </ul>
        </nav>
        <div className="copyright" id="copyright">
          © {new Date().getFullYear()}, Desenvolvido para a {" "}
          <a
            href=""
          >
            Itagro
          </a>
          {" "} pela {" "}
          <a
            href="https://www.softratz.com"
            target="_blank"
          >
            Softratz
          </a>
          .
        </div>
      </Container>
    </footer>
  );
}

export default DarkFooter;

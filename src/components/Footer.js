import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon4 from "../assets/img/nav-icon4.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/willy-kevin-42838320a/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://www.instagram.com/ihikaryi/"><img src={navIcon3} alt="Icon" /></a>
              <a href="https://github.com/WillyKevin"><img src={navIcon4} alt="Icon" /></a>
            </div>
            <p>Copyright 2022. Direitos Reservados</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

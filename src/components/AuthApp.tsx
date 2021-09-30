import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Routes from "src/Routes";
import SideBar from "./SideBar";

export default function AuthApp() {
  return (
    <Container>
      <Row>
        <Col sm="1" xl="2" className="sticky-top">
          <SideBar />
        </Col>
        <Col sm="11" xl="10">
          <Routes />
        </Col>
      </Row>
    </Container>
  );
}

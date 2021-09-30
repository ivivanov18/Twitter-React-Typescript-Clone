import React from "react";
import { Row, Col } from "react-bootstrap";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";

export default function Routes() {
  return (
    <Row>
      <Col>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </Col>
    </Row>
  );
}

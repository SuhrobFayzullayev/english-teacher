import React from "react";
import Header from "./Header";
import Main from "./Main";
import { Container } from "react-bootstrap";

export default function Layout() {
  return (
    <Container fluid className="border border-success">
      <Header />
      <Main />
    </Container>
  );
}

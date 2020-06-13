import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";

const Layout = (props) => {
  return <Container>{props.children}</Container>;
};

export default Layout;

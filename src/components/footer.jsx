import styled from "styled-components";

const Footer = styled.div(({ theme }) => ({
  alignItems: "center",
  background: theme.foreground,
  display: "flex",
  height: "80vh",
  justifyContent: "center",
  marginTop: "5em",
  padding: "4em",
  textAlign: "center",
  width: "100%",
}));

export default Footer;

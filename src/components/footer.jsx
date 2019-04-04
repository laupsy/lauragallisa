import styled from "styled-components";

const Footer = styled.div(({ theme }) => ({
  alignItems: "center",
  background: theme.foreground,
  display: "flex",
  height: "80vh",
  marginTop: "5em",
  padding: "4em",
  width: "100%",
}));

export default Footer;

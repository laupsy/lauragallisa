import styled from "styled-components";

const H2 = styled.h2(({ theme }) => ({
  fontFamily: "Lora",
  fontSize: "1.5em",
  letterSpacing: "-0.04em",
  fontWeight: "600",
  color: theme.title,
  marginBottom: "0.6em",
}));

export default H2;

import styled from "styled-components";

const H1 = styled.h1(({ theme }) => ({
  fontFamily: "Lora",
  fontSize: "2.125em",
  letterSpacing: "-0.02em",
  fontWeight: "600",
  color: theme.title,
  padding: "0",
  margin: "0",
}));

export default H1;

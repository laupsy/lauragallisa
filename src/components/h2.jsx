import styled from "styled-components";

const H2 = styled.h2(({ theme }) => ({
  color: theme.title,
  fontFamily: "'Bitter', serif",
  fontSize: "1.5em",
  fontWeight: "600",
  marginBottom: "0.6em",
}));

export default H2;

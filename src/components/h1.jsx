import styled from "styled-components";

const H1 = styled.h1(({ theme }) => ({
  color: theme.title,
  fontFamily: "'Bitter', serif",
  fontSize: "2.125em",
  fontWeight: "600",
  margin: "0",
  padding: "0",
}));

export default H1;

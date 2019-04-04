import React from "react";
import styled from "styled-components";
import H2 from "../components/h2";
import Link from "../components/link";
import Footer from "../components/footer";
import Paragraph from "../components/paragraph";

const Wrapper = styled.div({
  maxWidth: "40em",
  width: "100%",
  margin: "0 auto",
  padding: "0 2em",
});

const Conlusion = () => (
  <Footer>
    <Wrapper>
      <H2>Thanks for reading ♥</H2>
      <Paragraph>
        Want to chat? Send an email over to{" "}
        <Link href="mailto:laura@lauragallisa.com">laura@lauragallisa.com</Link>{" "}
        or contact me on{" "}
        <Link href="https://www.twitter.com/Laupsy" newTab>
          Twitter
        </Link>
        .
      </Paragraph>
    </Wrapper>
  </Footer>
);

export default Conlusion;

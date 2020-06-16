import React from "react";
import styled from "styled-components";
import H2 from "../components/h2";
import Link from "../components/link";
import Footer from "../components/footer";
import Paragraph from "../components/paragraph";
import P2 from "../components/p2";
import EmailLink from "../components/email-link";

const Wrapper = styled.div({
  maxWidth: "40em",
  width: "100%",
  margin: "0 auto",
  padding: "0 2em",
});

const Conlusion = () => (
  <Footer>
    <Wrapper>
      <H2>Thanks for reading 😎</H2>
      <br/>
      <EmailLink href="mailto:laura@lauragallisa.com">
        laura@lauragallisa.com
      </EmailLink>
      <P2>
        <Link href="https://www.twitter.com/lauragallisa" newTab>
          Twitter
        </Link>
      </P2>
      <P2>
        <Link href="https://www.dribbble.com/lauragallisa" newTab>
          Dribbble
        </Link>
      </P2>
      <P2>
        <Link href="https://www.linkedin.com/in/lauragallisa/" newTab>
          LinkedIn
        </Link>
      </P2>
    </Wrapper>
  </Footer>
);

export default Conlusion;

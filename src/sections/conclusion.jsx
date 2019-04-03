import React from "react";
import styled from "styled-components";
import H1 from "../components/h1";
import P1 from "../components/p1";
import Link from "../components/link";
import Footer from "../components/footer";

const ConclusionBody = styled(P1)({
  margin: "1.5em auto 0",
  width: "23em",
});

const Conlusion = () => (
  <Footer>
    <div>
      <H1>Yay! Thanks for reading.</H1>
      <ConclusionBody>
        Want to chat? Send an email over to{" "}
        <Link href="mailto:laura@lauragallisa.com">laura@lauragallisa.com</Link>{" "}
        or contact me on{" "}
        <Link href="https://www.twitter.com/Laupsy" newTab>
          Twitter
        </Link>
        .
      </ConclusionBody>
    </div>
  </Footer>
);

export default Conlusion;

import React from "react";
import Link from "../components/link";
import Paragraph from "../components/paragraph";
import ParagraphGrid from "../components/paragraph-grid";

const Intro = () => (
  <ParagraphGrid>
    <Paragraph>
      I run Product & Design at{" "}
      <Link href="https://www.fleetsmith.com" newTab>
        Fleetsmith
      </Link>{" "}
      where our mission is to democratize IT and Security by making it
      transparent and automated.
    </Paragraph>
    <Paragraph>
      I’ve shipped things at awesome places -{" "}
      <Link href="https://www.dropbox.com" newTab>
        Dropbox
      </Link>
      ,{" "}
      <Link href="https://www.twitch.tv" newTab>
        Twitch
      </Link>
      ,{" "}
      <Link href="https://www.tendigi.com" newTab>
        Tendigi
      </Link>{" "}
      - and I received my B.S. in Computer Science from NYU.
    </Paragraph>
  </ParagraphGrid>
);

export default Intro;

import React from "react";
import H2 from "../components/h2";
import Paragraph from "../components/paragraph";
import Link from "../components/link";
import TextGrid from "../components/text-grid";
import ZoomIn from "../components/zoom-in";
import AspectRatio from "../components/aspect-ratio";
import * as Work from "../assets/work";

const Tendigi = () => (
  <TextGrid>
    <div>
      <H2>Tendigi</H2>
      <Paragraph>
        My design career began at{" "}
        <Link href="https://www.tendigi.com" newTab>
          Tendigi
        </Link>
        , a design and development agency where I lead their identity overhaul,
        resulting in a redesigned website, case study templates, and social
        media templates.
      </Paragraph>
    </div>
    <ZoomIn>
      <AspectRatio width={3120} height={2304}>
        <img
          alt="A landing page for Tendigi feature bold text and a pink neon photographic background of a person using a switch board."
          src={Work.TendigiStart}
        />
      </AspectRatio>
    </ZoomIn>
    <ZoomIn>
      <AspectRatio width={3120} height={2304}>
        <img
          alt="A website footer featuring the quote: 'Clean code, thoughtful design, beautiful products.'"
          src={Work.TendigiEnd}
        />
      </AspectRatio>
    </ZoomIn>
  </TextGrid>
);

export default Tendigi;

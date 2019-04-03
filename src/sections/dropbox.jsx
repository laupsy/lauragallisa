import React from "react";
import * as Work from "../assets/work";
import AspectRatio from "../components/aspect-ratio";
import H2 from "../components/h2";
import Paragraph from "../components/paragraph";
import ParagraphGrid from "../components/paragraph-grid";
import TextGrid from "../components/text-grid";
import Video from "../components/video";
import ZoomIn from "../components/zoom-in";

const Dropbox = () => (
  <TextGrid>
    <div>
      <H2>Dropbox</H2>
      <ParagraphGrid>
        <Paragraph>
          At Dropbox I primarily worked on a new desktop experience{" "}
          <span role="img" aria-label="Lock emoji">
            🔒
          </span>{" "}
          where I owned the end-to-end user funnel, product positioning, drove
          key activation &amp; retention metrics, and owned the web &amp;
          Android apps. I also helped to run the new grad designer program.
        </Paragraph>

        <Paragraph>
          I also designed onboarding for Dropbox Home to introduce useful new
          ways to retrieve files.
        </Paragraph>
      </ParagraphGrid>
    </div>
    <ZoomIn>
      <AspectRatio width={3120} height={2304}>
        <img
          alt="Modal overlaying the Dropbo Home interface. It says 'Welcome to your new Dropbox home!' and it has a button that says 'Show me around'."
          src={Work.HomeIntro}
        />
      </AspectRatio>
    </ZoomIn>

    <ZoomIn>
      <AspectRatio width={3120} height={2304}>
        <img
          alt="A magnifying glass-like circle is hovered over a Paper doc in the Dropbox Home interface. There's a blue box explaining that because that Paper doc was recently viewed, you can get back to it quickly with the Recently Viewed section."
          src={Work.HomeSpotlight}
        />
      </AspectRatio>
    </ZoomIn>

    <Paragraph>
      I also explored ways to incorporate our new brand into the product,
      ranging from iconography sets to an internal particles library in native
      Swift, which was quickly adopted in various onboarding screens and
      tooltips.
    </Paragraph>

    <ZoomIn>
      <Video src={Work.GlitterVideo} />
    </ZoomIn>
    <ZoomIn>
      <AspectRatio width={3120} height={2304}>
        <img
          alt="A document with usage guidelines for a Particles library created in native swift."
          src={Work.Particles}
        />
      </AspectRatio>
    </ZoomIn>
    <ZoomIn>
      <AspectRatio width={3120} height={2304}>
        <img
          alt="A set of artboards with a broad exploration of iconography treatments ranging from inverted color to texture."
          src={Work.Iconography}
        />
      </AspectRatio>
    </ZoomIn>

    <Paragraph>
      I also launched multiple landing pages for various projects{" "}
      <span role="img" aria-label="Lock emoji">
        🔒
      </span>
      . One featured stars and constellations, built by dynamically generating
      objects on an HTML5 canvas and using a shortest path formula create the
      effect of constellations.
    </Paragraph>

    <ZoomIn>
      <Video src={Work.StarsVideo} />
    </ZoomIn>
  </TextGrid>
);

export default Dropbox;

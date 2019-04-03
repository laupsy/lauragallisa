import React from "react";
import * as Work from "../assets/work";
import AspectRatio from "../components/aspect-ratio";
import H2 from "../components/h2";
import Link from "../components/link";
import MeEatingFrenchToast from "../assets/me3.jpg";
import MeWearingACoat from "../assets/me2.jpg";
import Paragraph from "../components/paragraph";
import ParagraphGrid from "../components/paragraph-grid";
import TextGrid from "../components/text-grid";
import ZoomIn from "../components/zoom-in";

const Philosiphies = () => (
  <TextGrid>
    <div>
      <H2>About Me</H2>
      <Paragraph>
        I&apos;m a technical designer with extensive experience designing and
        developing for web. I&apos;ve also designed and developed for Android
        and native macOS.{" "}
      </Paragraph>
    </div>
    <AspectRatio width={1280} height={1598}>
      <img
        alt="Laura smiling while wearing a winter coast"
        src={MeWearingACoat}
      />
    </AspectRatio>
    <ParagraphGrid>
      <Paragraph>
        I care about low-pressure transparency, involving all functions in the
        design process, and designing experiences that are self-aware. Design
        doesn&apos;t exist in a vacuum, it exists alongside all of the emotions,
        environments, and scenarios that are going on a person&apos;s life.
      </Paragraph>
      <Paragraph>
        During my time at Dropbox, I wrote this checklist to remind myself of my
        good and bad habits:
      </Paragraph>
    </ParagraphGrid>
    <ZoomIn>
      <AspectRatio width={3120} height={2304}>
        <img
          alt="A handwritten piece of paper with a list of habits to follow, like communicating frequently and solving the right problem."
          src={Work.Notes}
        />
      </AspectRatio>
    </ZoomIn>
    <Paragraph>
      In my spare time I&apos;m{" "}
      <Link href="https://www.instagram.com/p/BscjNeQHb10/" newTab>
        exploring tropical places
      </Link>
      ,{" "}
      <Link
        href="https://www.instagram.com/p/BkLLWgrglH6/?taken-by=laupsy"
        newTab
      >
        decorating my home
      </Link>
      , or{" "}
      <Link
        href="https://www.instagram.com/p/BZuHeZVn0QJ/?taken-by=laupsy"
        newTab
      >
        eating pancakes
      </Link>
      .
    </Paragraph>
    <AspectRatio width={1280} height={1598}>
      <img
        alt="Laura smiling while eating French toast outside in Aruba"
        src={MeEatingFrenchToast}
      />
    </AspectRatio>
  </TextGrid>
);

export default Philosiphies;

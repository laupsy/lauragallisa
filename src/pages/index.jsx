import React from "react";
import styled from "styled-components";
import { Link as GatsbyLink } from "gatsby";
import { Tabs, Tab } from "../components/tabs";
import BaseLayout from "../templates/base";
import Intro from "../sections/intro";
import Me from "../components/me";
import H1 from "../components/h1";
import SectionGrid from "../components/section-grid";
import Conclusion from "../sections/conclusion";
import AspectRatio from "../components/aspect-ratio";
import H2 from "../components/h2";
import Link from "../components/link";
import MeEatingFrenchToast from "../assets/me3.jpg";
import MeWearingACoat from "../assets/me2.jpg";
import MyNotes from "../assets/Notes.jpg";
import Paragraph from "../components/paragraph";
import ParagraphGrid from "../components/paragraph-grid";
import TextGrid from "../components/text-grid";
import ZoomIn from "../components/zoom-in";

const Wrapper = styled.div({
  maxWidth: "40em",
  width: "100%",
  margin: "0 auto",
  padding: "0 2em",
});

const TitleBlock = styled.div({
  position: "relative",
  display: "inline-block",
  marginBottom: "5em",
  paddingTop: "5em",
});

const Title = styled(H1)({
  marginBottom: "0.5em",
  marginTop: "1em",
});

const Overview = () => (
  <BaseLayout>
    <Wrapper>
      <TitleBlock>
        <Me />
        <Title>Hi—I&apos;m Laura</Title>
        <Intro />
      </TitleBlock>
      <SectionGrid>
        <Tabs>
          <GatsbyLink to="/"><Tab isActive>About</Tab></GatsbyLink>
          <GatsbyLink to="/work"><Tab>Some Work</Tab></GatsbyLink>
        </Tabs>
        <TextGrid>
          <div>
            <H2>About Me</H2>
            <Paragraph>
              I&apos;m a technical design lead and manager with experience designing and developing for web, React, macOS, and iOS.
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
              I care about designing conscientious experiences that are delightfully accessible to everyone. My generative approach starts by identifying the problem that needs to be solved, and then analyzes optimizations and trade-offs of potential solutions before making an opinionated decision on the right solution.
            </Paragraph>
            <Paragraph>
              Problems are solved in both the interface and in the technical infrastructure, which is why I work closely with the engineers on my team to achieve the best possible outcome.
            </Paragraph>
            <Paragraph>
              I value transparency and emphasize taking balanced mental and physical care at work. Involving all functions in the design process is especially important, as the best solutions are discovered by cross-functional teams. I believe that experiences should be self-aware; design doesn&apos;t exist in a vacuum, it exists alongside all of the emotions,
              environments, and scenarios that exist in a person&apos;s life.
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
                src={MyNotes}
              />
            </AspectRatio>
          </ZoomIn>
          <Paragraph>
            In my spare time I&apos;m exploring tropical places, decorating my home, or eating pancakes.
          </Paragraph>
          <AspectRatio width={1280} height={1598}>
            <img
              alt="Laura smiling while eating French toast outside in Aruba"
              src={MeEatingFrenchToast}
            />
          </AspectRatio>
          <Paragraph>Check out <Link href="/work">some of my work</Link> from Dropbox, Twitch, and Tendigi.</Paragraph>
        </TextGrid>
      </SectionGrid>
    </Wrapper>
    <Conclusion />
  </BaseLayout>
)

export default Overview;

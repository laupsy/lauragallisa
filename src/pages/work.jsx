import React from "react";
import styled from "styled-components";
import { Tabs, Tab } from "../components/tabs";
import BaseLayout from "../templates/base";
import Me from "../components/me";
import H1 from "../components/h1";
import SectionGrid from "../components/section-grid";
import Conclusion from "../sections/conclusion";
import * as WorkThumbnails from "../assets/work";
import AspectRatio from "../components/aspect-ratio";
import H2 from "../components/h2";
import H3 from "../components/h3";
import Paragraph from "../components/paragraph";
import ParagraphGrid from "../components/paragraph-grid";
import TextGrid from "../components/text-grid";
import Video from "../components/video";
import ZoomIn from "../components/zoom-in";
import { Link } from "gatsby";

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

const Name = styled(H3)({
  marginLeft: "0.5em",
  color: "#FFF",
});

const SmallerHeading = styled.div(({ theme }) => ({
  padding: "0em 2em",
  display: "flex",
  alignItems: "center",
  background: theme.highlight,
  marginBottom: "3em",
}))

const Work = () => (
  <BaseLayout>
    <Link to="/">
      <SmallerHeading>
        <Me size="50" />
        <Name>Laura Gallisá</Name>
      </SmallerHeading>
    </Link>
    <Wrapper>
      <SectionGrid>
        <Tabs>
          <Link to="/"><Tab>About</Tab></Link>
          <Link to="/work"><Tab isActive>Some Work</Tab></Link>
        </Tabs>
        <TextGrid>
            <div>
            <H2>Some Work</H2>
            <H3>Dropbox</H3>
            <ParagraphGrid>
                <Paragraph>
                At Dropbox I worked on an experimental native macOS experience{" "}
                <span role="img" aria-label="Lock emoji">
                    🔒
                </span>{" "}
                on a small team of research and engineering. I also helped to run the new grad designer program.
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
                src={WorkThumbnails.HomeIntro}
                />
            </AspectRatio>
            </ZoomIn>

            <ZoomIn>
            <AspectRatio width={3120} height={2304}>
                <img
                alt="A magnifying glass-like circle is hovered over a Paper doc in the Dropbox Home interface. There's a blue box explaining that because that Paper doc was recently viewed, you can get back to it quickly with the Recently Viewed section."
                src={WorkThumbnails.HomeSpotlight}
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
            <Video src={WorkThumbnails.GlitterVideo} />
            </ZoomIn>
            <ZoomIn>
            <AspectRatio width={3120} height={2304}>
                <img
                alt="A document with usage guidelines for a Particles library created in native swift."
                src={WorkThumbnails.Particles}
                />
            </AspectRatio>
            </ZoomIn>
            <ZoomIn>
            <AspectRatio width={3120} height={2304}>
                <img
                alt="A set of artboards with a broad exploration of iconography treatments ranging from inverted color to texture."
                src={WorkThumbnails.Iconography}
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
            <Video src={WorkThumbnails.StarsVideo} />
            </ZoomIn>
            <div>
              <H2>Twitch</H2>
              <Paragraph>
                At Twitch I co-founded their design system and styles framework where I
                contributed core components and ramped up new designers. The accessible,
                modular system now fuels all of{" "}
                <Link href="https://www.twitch.tv" newTab>
                  twitch.tv
                </Link>
                .
              </Paragraph>
            </div>
            <ZoomIn>
              <AspectRatio width={3120} height={2304}>
                <img
                  alt="The Bricks component in the Twitch design system, showing version updates and BEM building blocks."
                  src={WorkThumbnails.Bricks}
                />
              </AspectRatio>
            </ZoomIn>
            <ZoomIn>
              <AspectRatio width={3120} height={2304}>
                <img
                  alt="The Colors page in the Twitch design system, showing off accessibility contrast ratios of the Twitch color scheme."
                  src={WorkThumbnails.Styles}
                />
              </AspectRatio>
            </ZoomIn>
            <ZoomIn>
              <AspectRatio width={3120} height={2304}>
                <img
                  alt="A quick-start landing page in the Twitch design system, showing off a npm and grunt commands to get started."
                  src={WorkThumbnails.Styles2}
                />
              </AspectRatio>
            </ZoomIn>
            <Paragraph>
              I also designed and built the Twitch 2015 Retrospective, a performant
              single-page scroller with{" "}
              <Link href="https://www.turnislefthome.com" newTab>
                illustrations
              </Link>{" "}
              animated with CSS and JS. This was a particularly challenging project that
              required strategic art direction in order to meet a tight deadline. The
              page is no longer live, but you can read about it{" "}
              <Link
                href="https://thenextweb.com/insider/2016/02/11/twitch-users-watched-459366-years-worth-of-content-in-2015/"
                newTab
              >
                here
              </Link>
              .
            </Paragraph>
            <ZoomIn>
              <AspectRatio width={3120} height={2304}>
                <img
                  alt="The first screen of the Twitch 2015 Retrospective says 'Welcome Home' and shows a house in the sky."
                  src={WorkThumbnails.Retro2015}
                />
              </AspectRatio>
            </ZoomIn>
            <ZoomIn>
              <Video src={WorkThumbnails.RetroAnimations} />
            </ZoomIn>
            <ZoomIn>
              <AspectRatio width={3120} height={2304}>
                <img
                  alt="The final screen of the Twich 2015 Retrospective says 'Thank You' and shows Glitch made out of clouds."
                  src={WorkThumbnails.RetroEnding}
                />
              </AspectRatio>
            </ZoomIn>
            <ParagraphGrid>
              <Paragraph>
                I also worked as the sole designer on the Twitch Creative team, most
                well known for airing the{" "}
                <Link
                  href="https://techcrunch.com/2015/11/09/after-pulling-in-5-6m-viewers-twitch-is-keeping-bob-ross-on-the-air/"
                  newTab
                >
                  Bob Ross
                </Link>{" "}
                and{" "}
                <Link
                  href="https://www.theverge.com/2016/3/15/11232744/twitch-food-channel-launch-julia-child"
                  newTab
                >
                  Julia Child
                </Link>{" "}
                marathons that pulled in millions of concurrent viewers.
              </Paragraph>
              <Paragraph>
                On Twitch Creative, I worked on a wide range of things to carve out a
                space for artists on Twitch, including a Creative landing page and
                designing Community pages. I also created the{" "}
                <Link href="https://twitchemotes.com/emotes/92904" newTab>
                  foodBacon
                </Link>
                ,{" "}
                <Link href="https://twitchemotes.com/emotes/90240" newTab>
                  foodKappa
                </Link>
                ,{" "}
                <Link href="https://twitchemotes.com/emotes/89411" newTab>
                  foodWaffle
                </Link>
                , and{" "}
                <Link href="https://twitchemotes.com/emotes/90755" newTab>
                  foodButter
                </Link>{" "}
                emotes.
              </Paragraph>
            </ParagraphGrid>
            <ZoomIn>
              <AspectRatio width={3120} height={2304}>
                <img
                  alt="The user interface for Communities on Twitch, featuring a large customizable banner and different live streams to choose from."
                  src={WorkThumbnails.Communities}
                />
              </AspectRatio>
            </ZoomIn>
            <ZoomIn>
              <AspectRatio width={3120} height={2304}>
                <img
                  alt="A landing page for Twitch Creative featuring a large, magical floating pencil."
                  src={WorkThumbnails.CreativeLanding}
                />
              </AspectRatio>
            </ZoomIn>
            <ZoomIn>
              <AspectRatio width={3120} height={2304}>
                <img
                  alt="Twitch's BibleThump emoji wearing too-big and too-small chef hats."
                  src={WorkThumbnails.BibleThump}
                />
              </AspectRatio>
            </ZoomIn>
            <ZoomIn>
              <AspectRatio width={3120} height={2304}>
                <img
                  alt="Twitch's Bacon emoji, smiling and with jagged comic book-style lines around it."
                  src={WorkThumbnails.Bacon}
                />
              </AspectRatio>
            </ZoomIn>
            <ZoomIn>
              <AspectRatio width={3120} height={2304}>
                <img
                  alt="Twitch's Butter emoji, making a face as if it thinks its really cool."
                  src={WorkThumbnails.Butter}
                />
              </AspectRatio>
            </ZoomIn>
            <div>
              <H2>Tendigi</H2>
              <Paragraph>
                My career began at{" "}
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
                  src={WorkThumbnails.TendigiStart}
                />
              </AspectRatio>
            </ZoomIn>
            <ZoomIn>
              <AspectRatio width={3120} height={2304}>
                <img
                  alt="A website footer featuring the quote: 'Clean code, thoughtful design, beautiful products.'"
                  src={WorkThumbnails.TendigiEnd}
                />
              </AspectRatio>
            </ZoomIn>
        </TextGrid>
      </SectionGrid>
    </Wrapper>
    <Conclusion />
  </BaseLayout>
)

export default Work;

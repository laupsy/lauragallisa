import React from "react";
import * as Work from "../assets/work";
import AspectRatio from "../components/aspect-ratio";
import H2 from "../components/h2";
import Link from "../components/link";
import Paragraph from "../components/paragraph";
import ParagraphGrid from "../components/paragraph-grid";
import TextGrid from "../components/text-grid";
import Video from "../components/video";
import ZoomIn from "../components/zoom-in";

const Twitch = () => (
  <TextGrid>
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
          src={Work.Bricks}
        />
      </AspectRatio>
    </ZoomIn>
    <ZoomIn>
      <AspectRatio width={3120} height={2304}>
        <img
          alt="The Colors page in the Twitch design system, showing off accessibility contrast ratios of the Twitch color scheme."
          src={Work.Styles}
        />
      </AspectRatio>
    </ZoomIn>
    <ZoomIn>
      <AspectRatio width={3120} height={2304}>
        <img
          alt="A quick-start landing page in the Twitch design system, showing off a npm and grunt commands to get started."
          src={Work.Styles2}
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
          src={Work.Retro2015}
        />
      </AspectRatio>
    </ZoomIn>
    <ZoomIn>
      <Video src={Work.RetroAnimations} />
    </ZoomIn>
    <ZoomIn>
      <AspectRatio width={3120} height={2304}>
        <img
          alt="The final screen of the Twich 2015 Retrospective says 'Thank You' and shows Glitch made out of clouds."
          src={Work.RetroEnding}
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
          src={Work.Communities}
        />
      </AspectRatio>
    </ZoomIn>
    <ZoomIn>
      <AspectRatio width={3120} height={2304}>
        <img
          alt="A landing page for Twitch Creative featuring a large, magical floating pencil."
          src={Work.CreativeLanding}
        />
      </AspectRatio>
    </ZoomIn>
    <ZoomIn>
      <AspectRatio width={3120} height={2304}>
        <img
          alt="Twitch's BibleThump emoji wearing too-big and too-small chef hats."
          src={Work.BibleThump}
        />
      </AspectRatio>
    </ZoomIn>
    <ZoomIn>
      <AspectRatio width={3120} height={2304}>
        <img
          alt="Twitch's Bacon emoji, smiling and with jagged comic book-style lines around it."
          src={Work.Bacon}
        />
      </AspectRatio>
    </ZoomIn>
    <ZoomIn>
      <AspectRatio width={3120} height={2304}>
        <img
          alt="Twitch's Butter emoji, making a face as if it thinks its really cool."
          src={Work.Butter}
        />
      </AspectRatio>
    </ZoomIn>
  </TextGrid>
);

export default Twitch;

import React, { useState } from "react";
import styled from "styled-components";
import { Tabs, Tab } from "../components/tabs";
import BaseLayout from "../templates/base";
import Dropbox from "../sections/dropbox";
import H1 from "../components/h1";
import Intro from "../sections/intro";
import Me from "../components/me";
import Philosiphies from "../sections/philosophies";
import SectionGrid from "../components/section-grid";
import Tendigi from "../sections/tendigi";
import Twitch from "../sections/twitch";
import Conclusion from "../sections/conclusion";

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

const Overview = () => {
  const [activeID, setActiveID] = useState("dropbox");
  const isDropboxActive = activeID === "dropbox";
  const isTwitchActive = activeID === "twitch";
  const isTendigiActive = activeID === "tendigi";
  const isChecklistActive = activeID === "checklist";
  return (
    <BaseLayout>
      <Wrapper>
        <TitleBlock>
          <Me />
          <Title>Hi—I&apos;m Laura</Title>
          <Intro />
        </TitleBlock>
        <SectionGrid>
          <Tabs>
            <Tab
              isActive={isDropboxActive}
              tabIndex={isDropboxActive ? "-1" : "1"}
              onClick={() => setActiveID("dropbox")}
            >
              Dropbox
            </Tab>
            <Tab
              isActive={isTwitchActive}
              tabIndex={isTwitchActive ? "-1" : "1"}
              onClick={() => setActiveID("twitch")}
            >
              Twitch
            </Tab>
            <Tab
              isActive={isTendigiActive}
              tabIndex={isTendigiActive ? "-1" : "1"}
              onClick={() => setActiveID("tendigi")}
            >
              Tendigi
            </Tab>
            <Tab
              isActive={isChecklistActive}
              tabIndex={isChecklistActive ? "-1" : "1"}
              onClick={() => setActiveID("checklist")}
            >
              About
            </Tab>
          </Tabs>
          {isDropboxActive && <Dropbox />}
          {isTwitchActive && <Twitch />}
          {isTendigiActive && <Tendigi />}
          {isChecklistActive && <Philosiphies />}
        </SectionGrid>
      </Wrapper>
      <Conclusion />
    </BaseLayout>
  );
};

export default Overview;

import React, { useState } from "react";
import styled from "styled-components";
import BaseLayout from "../templates/base";
import H1 from "../components/h1";
import P1 from "../components/p1";
import Link from "../components/link";
import Label from "../components/label";
import Underline from "../assets/underline";
import Me from "../components/me";
import Tendigi from "../sections/tendigi";
import Twitch from "../sections/twitch";
import Dropbox from "../sections/dropbox";
import Intro from "../sections/intro";
import SectionGrid from "../components/section-grid";
import Philosiphies from "../sections/philosophies";

const Wrapper = styled.div({
  maxWidth: "40em",
  width: "100%",
  margin: "0 auto",
  padding: "0 2em",
});

const Title = styled.div({
  position: "relative",
  display: "inline-block",
  marginBottom: "1.3em",
});

const PositionedUnderline = styled(Underline)({
  position: "absolute",
  bottom: "0",
  right: "0.5em",
  width: "5.4em",
});

const ConclusionBody = styled(P1)({
  margin: "1.5em auto 0",
  width: "23em",
});

const StyledTab = styled.button(({ isActive, theme }) => ({
  outline: "0",
  border: "0",
  borderBottom: isActive ? `1px solid ${theme.title}` : `1px solid transparent`,
  marginRight: "1.5em",
  whiteSpace: "nowrap",
  padding: "0",
  color: isActive ? theme.title : theme.body,
  ...(!isActive && {
    ":hover, :focus": {
      borderBottomColor: theme.highlight,
      cursor: "pointer",
    },
  }),
}));

const Footer = styled.div(({ theme }) => ({
  background: theme.foreground,
  padding: "4em",
  width: "100%",
  height: "80vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "5em",
  textAlign: "center",
}));

const Tabs = styled.div(({ theme }) => ({
  background: theme.background,
  position: "sticky",
  top: "0",
  zIndex: "1",
  display: "flex",
  margin: "-1em -3em",
  padding: "3em",
}));

const Tab = ({ onClick, isActive, children }) => (
  <StyledTab onClick={onClick} isActive={isActive}>
    <Label isCurrentColor>{children}</Label>
  </StyledTab>
);

const Overview = () => {
  const [activeID, setActiveID] = useState("dropbox");
  const isDropboxActive = activeID === "dropbox";
  const isTwitchActive = activeID === "twitch";
  const isTendigiActive = activeID === "tendigi";
  const isChecklistActive = activeID === "checklist";
  return (
    <BaseLayout>
      <Wrapper>
        <Title>
          <Me />
          <H1>Hi—I&apos;m Laura!</H1>
          {console.log(activeID)}
          <PositionedUnderline />
        </Title>
        <SectionGrid>
          <Intro />

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
      <Footer>
        <div>
          <H1>Yay! Thanks for reading.</H1>
          <ConclusionBody>
            Want to chat? Send an email over to{" "}
            <Link href="fdsfsd">laura@lauragallisa.com</Link> or contact me on{" "}
            <Link href="fdsfds">Twitter</Link>.
          </ConclusionBody>
        </div>
      </Footer>
    </BaseLayout>
  );
};

export default Overview;

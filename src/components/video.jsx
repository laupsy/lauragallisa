import React from "react";
import styled from "styled-components";

const VideoWrapper = styled.div(({ theme }) => ({
  alignItems: "center",
  background: theme.foreground,
  borderRadius: "0.5em",
  display: "flex",
  justifyContent: "center",
  overflow: "hidden",
  padding: "1em",
}));

const VideoBlock = styled.video({
  height: "auto",
  width: "100%",
});

const Video = ({ src }) => (
  <VideoWrapper>
    <VideoBlock controls autoPlay loop>
      <source src={src} type="video/mp4" />
    </VideoBlock>
  </VideoWrapper>
);

export default Video;

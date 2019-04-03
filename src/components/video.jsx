import React from "react";
import styled from "styled-components";

const VideoWrapper = styled.div({
  borderRadius: "12px",
  overflow: "hidden",
  padding: "1em",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "rgba(0,0,0,0.05)",
});

const VideoBlock = styled.video({
  width: "100%",
  height: "auto",
});

const Video = ({ src }) => (
  <VideoWrapper>
    <VideoBlock controls autoPlay loop>
      <source src={src} type="video/mp4" />
    </VideoBlock>
  </VideoWrapper>
);

export default Video;

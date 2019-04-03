import React, { useState } from "react";
import styled from "styled-components";
import FadeIn from "./fade-in";

const SmallWrapper = styled.div({
  cursor: "zoom-in",
  position: "relative",
});

const LargeWrapper = styled(FadeIn)({
  position: "fixed",
  top: "0",
  left: "0",
  right: "0",
  bottom: "0",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "rgba(255,255,255,0.9)",
  zIndex: "2",
});

const LargeContent = styled.div({
  cursor: "zoom-out",
  width: "100%",
  height: "100%",
  padding: "5em",
  overflow: "auto",
  display: "flex",
  justifyContent: "center",
  alignItems: "start",
  "> *": {
    maxWidth: "80vw",
  },
});

const ZoomIn = ({ children, className }) => {
  const [isZoomed, setZoom] = useState(false);
  return (
    <div className={className}>
      <SmallWrapper onClick={() => setZoom(true)}>{children}</SmallWrapper>
      {isZoomed && (
        <LargeWrapper onClick={() => setZoom(false)}>
          <LargeContent>{children}</LargeContent>
        </LargeWrapper>
      )}
    </div>
  );
};

export default ZoomIn;

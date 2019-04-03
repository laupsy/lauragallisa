import React, { useState } from "react";
import styled from "styled-components";
import FadeIn from "./fade-in";

const SmallWrapper = styled.div({
  cursor: "zoom-in",
  position: "relative",
});

const LargeWrapper = styled(FadeIn)(({ theme }) => ({
  alignItems: "center",
  background: theme.fog,
  bottom: "0",
  display: "flex",
  justifyContent: "center",
  left: "0",
  position: "fixed",
  right: "0",
  top: "0",
  zIndex: "2",
}));

const LargeContent = styled.div({
  alignItems: "start",
  cursor: "zoom-out",
  display: "flex",
  height: "100%",
  justifyContent: "center",
  overflow: "auto",
  padding: "5em",
  width: "100%",
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

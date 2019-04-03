import React from "react";
import styled from "styled-components";

const ContentWrapper = styled.div(({ width, isCentered, offset }) => ({
  maxWidth: `${width / 2}px`,
  width: "100%",
  ...(isCentered
    ? { margin: offset ? `${offset} auto` : "0 auto" }
    : {
        margin: offset,
      }),
}));

const Image = styled.div(({ width, height }) => ({
  boxShadow: "0px 4px 10px -2px rgba(0,0,0,0.1)",
  paddingBottom:
    width / height !== 0.75
      ? `${(height / width) * 100}%`
      : `${(width / height) * 100}%`,
  height: "0px",
  position: "relative",
  background: "transparent",
  borderRadius: "0.5em",
  overflow: "hidden",
  "svg, img, figure": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
  },
}));

const AspectRatio = ({ children, width, height, isCentered, offset }) => (
  <ContentWrapper isCentered={isCentered} offset={offset} width={width}>
    <Image width={width} height={height}>
      {children}
    </Image>
  </ContentWrapper>
);

export default AspectRatio;

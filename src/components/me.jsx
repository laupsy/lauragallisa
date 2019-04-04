import React from "react";
import styled from "styled-components";
import AspectRatio from "./aspect-ratio";
import PictureOfMe from "../assets/me.jpg";

const StyledMe = styled.img({
  borderRadius: "100%",
});

const Me = ({ className }) => (
  <AspectRatio width="200" height="200" isNaked>
    <StyledMe
      className={className}
      src={PictureOfMe}
      alt="Laura standing inside of an arboretum, where she is smiling with her head slightly tilted"
    />
  </AspectRatio>
);

export default Me;

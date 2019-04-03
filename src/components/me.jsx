import React from "react";
import styled from "styled-components";
import PictureOfMe from "../assets/me.jpg";

const StyledMe = styled.img({
  width: "10em",
  borderRadius: "100%",
  margin: "6em 0 3em",
});

const Me = ({ className }) => (
  <StyledMe
    className={className}
    src={PictureOfMe}
    alt="Laura standing inside of an arboretum, where she is smiling with her head slightly tilted"
  />
);

export default Me;

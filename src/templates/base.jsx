import React from "react";
import styled from "styled-components";

const BaseLayout = ({ className, children }) => (
  <div>
    <section className={className}>{children}</section>
  </div>
);

export default BaseLayout;

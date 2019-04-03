import React from "react";

const BaseLayout = ({ className, children }) => (
  <div>
    <section className={className}>{children}</section>
  </div>
);

export default BaseLayout;

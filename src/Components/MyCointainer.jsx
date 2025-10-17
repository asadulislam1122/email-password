import React from "react";

const MyContainer = ({ className, children }) => {
  return (
    <div className={`${className} flex container mx-auto`}>{children}</div>
  );
};

export default MyContainer;

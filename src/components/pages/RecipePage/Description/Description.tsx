import React from "react";

const Description = (props: React.PropsWithChildren) => {
  const { children } = props;
  return <p className="font-medium">{children}</p>;
};

export default Description;

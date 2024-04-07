import React from "react";

type Variant = "transparent" | "solid";

type BaseStyles = {
  className?: string;
};

interface ContainerProps {
  variant?: Variant;
}

const baseStylesFactory = (variant: Variant) => {
  if (!variant) undefined;

  const baseStyles: BaseStyles = {
    className: "h-auto w-full",
  };

  switch (variant) {
    case "transparent":
      break;
    case "solid":
      baseStyles.className = `${baseStyles.className} p-6 rounded-lg bg-rose-white`;
      break;

    default:
      break;
  }

  return baseStyles;
};

const Container = (props: React.PropsWithChildren<ContainerProps>) => {
  const { variant = "transparent", children } = props;

  const baseStyles = baseStylesFactory(variant);
  return <div {...baseStyles}>{children}</div>;
};

export default Container;

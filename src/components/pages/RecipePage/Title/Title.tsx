import React, { useRef } from "react";

type Variant = "title" | "hero" | "subtitle";

type BaseStyles = {
  className?: string;
};

interface TitleProps {
  variant?: Variant;
}

const getVariant = (variant: Variant) => {
  const baseStyles: BaseStyles = {
    className: "font-young-serif",
  };

  switch (variant) {
    case "hero":
      baseStyles.className = `${baseStyles.className} text-dark-charcoal text-5xl`;
      break;
    case "subtitle":
      baseStyles.className = "font-bold text-secondary text-xl";
      break;
    case "title":
      baseStyles.className = `${baseStyles.className} text-primary text-3xl`;
      break;
  }

  return baseStyles;
};

const Title = (props: React.PropsWithChildren<TitleProps>) => {
  const { variant = "title", children } = props;
  const baseStyles = useRef(getVariant(variant));
  return <h1 {...baseStyles.current}>{children}</h1>;
};

export default Title;

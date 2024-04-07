import React from "react";

interface ItemProps {
  [key: string]: string;
}

interface ListProps {
  ordered?: boolean;
  showStyles?: boolean;
}

const List = (props: React.PropsWithChildren<ListProps>) => {
  const { ordered = false, children, showStyles = true } = props;
  return ordered ? (
    <ol className={showStyles ? "list-decimal list-inside" : ""}>{children}</ol>
  ) : (
    <ul className={showStyles ? "list-disc list-inside" : ""}>{children}</ul>
  );
};

const Item = (props: React.PropsWithChildren) => {
  const { children } = props;
  return <li className="ml-2">{children}</li>;
};

List.Item = Item;

export default List;

type Positions = { y: number; x?: undefined } | { y?: undefined; x: number };
type Props = { withDivider?: boolean };
type SpacerProps = Positions & Props;

const Spacer = (props: SpacerProps) => {
  const { y, x, withDivider = false } = props;

  return (
    <div
      className={withDivider ? "border-b-[0.2px] border-b-light-grey" : ""}
      style={{ height: `calc(${y} * 4px)`, width: `calc(${x} * 4px)` }}
    ></div>
  );
};

export default Spacer;

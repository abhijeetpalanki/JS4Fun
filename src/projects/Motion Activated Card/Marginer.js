const HorizontalMargin = () => <span className={`flex w-[1.2em]`}></span>;

const VerticalMargin = () => <span className={`flex h-[1.2em]`}></span>;

function Marginer(props) {
  const { direction } = props;

  if (direction === "horizontal") return <HorizontalMargin {...props} />;
  else {
    return <VerticalMargin {...props} />;
  }
}

Marginer.defaultProps = {
  direction: "horizontal",
};

export { Marginer };

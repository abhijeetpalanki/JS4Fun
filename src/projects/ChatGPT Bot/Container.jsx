import { forwardRef } from "react";
import clsx from "clsx";

const OuterContainer = forwardRef(function OuterContainer(
  { className, children, ...props },
  ref
) {
  return (
    <div
      ref={ref}
      className={clsx(
        "sm:px-8 h-screen flex flex-col justify-center items-center",
        className
      )}
      {...props}
    >
      <h1 className="text-lg font-bold text-center">ChatGPT Bot</h1>
      <div className="m-3 rounded bg-zinc-200">{children}</div>
    </div>
  );
});

const InnerContainer = forwardRef(function InnerContainer(
  { className, children, ...props },
  ref
) {
  return (
    <div
      ref={ref}
      className={clsx(
        "flex-col m-3 space-y-5 w-[350px] h-[350px] md:min-w-[400px] md:min-h-[400px]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
});

export const Container = forwardRef(function Container(
  { children, ...props },
  ref
) {
  return (
    <OuterContainer ref={ref} {...props}>
      <InnerContainer>{children}</InnerContainer>
    </OuterContainer>
  );
});

Container.Outer = OuterContainer;
Container.Inner = InnerContainer;

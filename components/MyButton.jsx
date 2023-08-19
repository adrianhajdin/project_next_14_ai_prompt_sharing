

import React from "react";
import {forwardRef} from "react";

import {useButton, Drip, Spinner} from "@nextui-org/react";

const MyButton = forwardRef((props, ref) => {
  const {
    domRef,
    children,
    classNames,
    drips,
    spinnerSize,
    spinner = <Spinner color="current" size={spinnerSize} />,
    spinnerPlacement,
    startContent,
    endContent,
    isLoading,
    disableRipple,
    getButtonProps,
  } = useButton({
    ref,
    ...props,
  });

  return (
    <button ref={domRef} className={classNames} {...getButtonProps()}>
      {startContent}
      {isLoading && spinnerPlacement === "start" && spinner}
      {children}
      {isLoading && spinnerPlacement === "end" && spinner}
      {endContent}
    </button>
  );
});

MyButton.displayName = "MyButton";

export default MyButton;



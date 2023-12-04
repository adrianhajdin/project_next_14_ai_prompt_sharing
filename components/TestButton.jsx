"use client";

import React from "react";
import {forwardRef} from "react";

import {useButton, Drip, Spinner} from "@nextui-org/react";

const TestButton = forwardRef((props, ref) => {
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
    <button ref={domRef} className={""} {...getButtonProps()}>
      {startContent}
      {isLoading && spinnerPlacement === "start" && spinner}
      {children}
      {isLoading && spinnerPlacement === "end" && spinner}
      {endContent}
      {!disableRipple && <Drip drips={drips} />}
    </button>
  );
});

TestButton.displayName = "MyButton";

export default TestButton;
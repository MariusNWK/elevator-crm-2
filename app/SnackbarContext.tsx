/* eslint-disable @typescript-eslint/no-unused-vars */

"use client";

import Snackbar from "@/components/Snackbar";
import type { ReactNode } from "react";
import { createContext, useCallback, useMemo, useState } from "react";

export const snackbarContext = createContext({
  success: (value: string) => {},
  error: (value: string) => {},
});

interface ISnackbarContextProps {
  children: ReactNode;
}

export default function SnackbarContext(props: ISnackbarContextProps): JSX.Element {
  const [type, setType] = useState<"error" | "success">("success");
  const [text, setText] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const show = useCallback((value: string) => {
    setText(value);
    setIsVisible(true);
  }, []);

  const success = useCallback(
    (value: string) => {
      setType("success");
      show(value);
    },
    [show]
  );

  const error = useCallback(
    (value: string) => {
      setType("error");
      show(value);
    },
    [show]
  );

  const value = useMemo(() => ({ success, error }), [success, error]);

  return (
    <snackbarContext.Provider value={value}>
      {props.children}
      <Snackbar type={type} text={text} isVisible={isVisible} setIsVisible={setIsVisible} />
    </snackbarContext.Provider>
  );
}

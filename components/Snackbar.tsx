"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";
import { AlertCircle, CheckCircle } from "react-feather";

interface ISnackbarProps {
  /**
   * The text to display in the snackbar.
   */
  text: string;
  /**
   * The type of the snackbar to change the style based on success or error.
   */
  type: "error" | "success";
  isVisible: boolean;
  setIsVisible: (value: boolean) => void;
}

export default function Snackbar({ isVisible, setIsVisible, type, text }: ISnackbarProps): JSX.Element {
  useEffect(() => {
    if (!isVisible) return;
    setTimeout(() => {
      setIsVisible(false);
    }, 5000);
  }, [isVisible, setIsVisible]);

  let bgColor = "bg-green-200";
  let borderColor = "border-green-400";
  let icon = <CheckCircle size={15} className="text-green-400" />;

  if (type === "error") {
    bgColor = "bg-red-200";
    borderColor = "border-red-400";
    icon = <AlertCircle size={15} className="text-red-400" />;
  }

  return (
    <motion.div
      initial="close"
      variants={{
        open: { top: 12 },
        close: { top: -44 },
      }}
      animate={isVisible ? "open" : "close"}
      transition={{ duration: 0.2 }}
      className="fixed inset-x-0 z-50 mx-auto flex w-96 justify-center"
    >
      <div className={`flex w-96 items-center gap-2 rounded-md border p-2 ${bgColor} ${borderColor}`}>
        <div className="w-4">{icon}</div>
        <p className="text-sm">{isVisible ? text : ""}</p>
      </div>
    </motion.div>
  );
}

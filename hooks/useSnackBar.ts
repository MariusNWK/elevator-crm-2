import { snackbarContext } from "@/app/SnackbarContext";
import { useContext } from "react";

export default function useSnackbar(): {
  success: (value: string) => void;
  error: (value: string) => void;
} {
  const notif = useContext(snackbarContext);

  return notif;
}

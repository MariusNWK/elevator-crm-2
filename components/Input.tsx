import { HTMLInputTypeAttribute } from "react";
import { useController } from "react-hook-form";

interface IInputProps {
  type: HTMLInputTypeAttribute;
  name: string;
  placeholder: string;
  title?: string;
  hideError?: boolean;
}

/* c8 ignore start */

export default function Input(props: IInputProps): JSX.Element {
  const {
    field: { onChange, value },
    fieldState: { error },
  } = useController({ name: props.name });

  return (
    <div className="flex flex-col gap-2 sm:min-w-min min-w-0">
      {props.title && <div className="text-lg text-tertiary">{props.title}</div>}
      <input
        type={props.type}
        name={props.name}
        id={props.name}
        className="p-2 rounded"
        placeholder={props.placeholder}
        onChange={onChange}
        value={value}
      />
      {error && !props.hideError && <div className="text-sm text-red-400">{error.message}</div>}
    </div>
  );
}

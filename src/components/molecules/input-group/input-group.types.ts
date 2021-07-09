import { FC, InputHTMLAttributes, LabelHTMLAttributes } from "react";

export type TInputGroupProperties = {
  renderInput: FC<InputHTMLAttributes<HTMLInputElement>>;
  renderLabel: FC<LabelHTMLAttributes<HTMLLabelElement>>;
};

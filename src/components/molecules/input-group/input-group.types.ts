import { FC, InputHTMLAttributes, LabelHTMLAttributes } from "react";

export type TInputGroupProperties = {
  Input: FC<InputHTMLAttributes<HTMLInputElement>>;
  Label: FC<LabelHTMLAttributes<HTMLLabelElement>>;
};

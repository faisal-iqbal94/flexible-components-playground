import { useRandomId } from "../../../hooks";
import { TInputGroupProperties } from "./input-group.types";

export const InputGroup = ({
  Input = (props) => <input {...props} />,
  Label = (props) => <label {...props} />,
}: TInputGroupProperties) => {
  const id = useRandomId();

  return (
    <div>
      <Label htmlFor={id} />
      <Input id={id} />
    </div>
  );
};

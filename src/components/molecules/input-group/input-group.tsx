import { useRandomId } from "../../../hooks";
import { TInputGroupProperties } from "./input-group.types";

export const InputGroup = ({
  renderInput = (props) => <input {...props} />,
  renderLabel = (props) => <label {...props} />,
}: TInputGroupProperties) => {
  const id = useRandomId();

  return (
    <div>
      {renderLabel({ htmlFor: id })}
      {renderInput({ id })}
    </div>
  );
};

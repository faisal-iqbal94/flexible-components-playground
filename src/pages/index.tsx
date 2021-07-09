import { useState } from "react";
import styles from "../styles/Home.module.css";
import {
  TextInput,
  Label,
  InputGroup,
  Button,
  Checkbox,
} from "./../components";

export default function Home() {
  const [value, setValue] = useState("");
  console.log("Value: ", value);

  return (
    <div className={styles.container}>
      {/* <Label>Username: </Label>
      <Input value={value} onChange={(e) => setValue(e.target.value)} /> */}
      <InputGroup
        renderLabel={(props) => <Label {...props}>Username: </Label>}
        renderInput={(props) => (
          <TextInput
            {...props}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        )}
      />
      <InputGroup
        renderLabel={(props) => <Label {...props}>Are you having fun?</Label>}
        renderInput={(props) => (
          <Checkbox {...props} onChange={() => console.log("Woohoo!")} />
        )}
      />
      <Button onClick={() => console.log("Button clicked!")}>Click me!</Button>
    </div>
  );
}

import { useState } from "react";
import styles from "../styles/Home.module.css";
import { Input, Label, InputGroup, Button } from "./../components";

export default function Home() {
  const [value, setValue] = useState("");
  console.log("Value: ", value);

  return (
    <div className={styles.container}>
      <Label>Username: </Label>
      <Input value={value} onChange={(e) => setValue(e.target.value)} />
      <InputGroup
        Label={() => <Label>Username: </Label>}
        Input={() => (
          <Input value={value} onChange={(e) => setValue(e.target.value)} />
        )}
      />
      <Button onClick={() => console.log("Button clicked!")}>Click me!</Button>
    </div>
  );
}

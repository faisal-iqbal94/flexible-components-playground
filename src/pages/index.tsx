import { useState } from 'react';
import styles from '../styles/Home.module.css';
import {
    TextInput,
    Label,
    InputGroup,
    Button,
    Checkbox,
} from './../components';

export default function Home() {
    const [value, setValue] = useState('');

    return (
        <div className={styles.container}>
            <InputGroup>
                <Label>Username: </Label>
                <TextInput
                    value={value}
                    onChange={e => setValue(e.target.value)}
                />
            </InputGroup>
            <InputGroup>
                <Label>Are you having fun?</Label>
                <Checkbox onChange={() => console.log('Woohoo!')} />
            </InputGroup>

            <Button onClick={() => console.log('Button clicked!')}>
                Click me!
            </Button>
        </div>
    );
}

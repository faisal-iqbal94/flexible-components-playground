import { useRandomId } from '../../../hooks';
import { InputGroupProvider } from './input-group.context';
import { TInputGroupProperties } from './input-group.types';

export const InputGroup = ({ children }: TInputGroupProperties) => {
    const id = useRandomId();

    return (
        <InputGroupProvider value={{ id }}>
            {children}
        </InputGroupProvider>
    );
};

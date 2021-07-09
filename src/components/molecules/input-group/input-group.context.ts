import { createContext, useContext } from 'react';
import { TInputGroupContext } from './input-group.types';

const InputGroupContext = createContext<TInputGroupContext | undefined>(
    undefined
);

const useInputGroup = () => {
    const context = useContext(InputGroupContext);

    if (context === undefined) {
        throw new Error(
            'useInputGroup must be used within an InputGroupProvider. Did you forget to wrap your input in an InputGroup?'
        );
    }

    return context;
};

const InputGroupProvider = InputGroupContext.Provider;

export { InputGroupProvider, useInputGroup };

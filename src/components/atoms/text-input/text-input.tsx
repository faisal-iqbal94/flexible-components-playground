import { useInputGroup } from '../../molecules/input-group';
import { TInputProperties } from './text-input.types';

export const TextInput = (props: TInputProperties) => {
    const { id } = useInputGroup();

    return <input id={id} {...props} />;
};

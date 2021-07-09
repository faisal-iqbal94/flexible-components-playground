import { useInputGroup } from '../../molecules/input-group';
import { TInputProperties } from './text-input.types';

export const TextInput = (props: TInputProperties) => {
    const { id } = useInputGroup();

    return <input className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" id={id} {...props} />;
};

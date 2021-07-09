import { useInputGroup } from '../../molecules/input-group';
import { TLabelProperties } from './label.types';

export const Label = (props: TLabelProperties) => {
    const { id } = useInputGroup();
    return <label htmlFor={id} {...props} />;
};

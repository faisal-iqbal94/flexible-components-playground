import { TCheckboxProperties } from './checkbox.types';

export const Checkbox = (props: TCheckboxProperties) => (
    <input type="checkbox" {...props} />
);

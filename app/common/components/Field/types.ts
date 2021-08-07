import { ChangeEvent } from 'react';

export type Props = {
    placeholder: string,
    label: string,
    onChange: (e: string | ChangeEvent<any>) => void,
    value: string | undefined,
    error?: string | false | undefined,
};

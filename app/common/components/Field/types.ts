import { ChangeEvent } from 'react';
import { TextInputMaskTypeProp } from 'react-native-masked-text';
export type Props = {
    placeholder: string,
    label: string,
    onChange: (e: string | ChangeEvent<any>) => void,
    value: string | undefined,
    error?: string | false | undefined,
    mask?: TextInputMaskTypeProp,
    maskOptions?: any
};

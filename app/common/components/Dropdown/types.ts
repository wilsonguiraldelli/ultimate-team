
export type Props = {
    label: string,
    placeholder?: string,
    onChange: (e: string) => void,
    value: string | number | undefined,
    options: option[],
    error?: string | false | undefined,
    onBlur: () => void,
};

type option = {
    label: string | undefined,
    value: string | number,
};

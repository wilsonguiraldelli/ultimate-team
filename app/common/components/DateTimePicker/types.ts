export type Props = {
    placeholder: string,
    isOpen: boolean,
    onClose: () => void,
    onSubmit: (date: Date) => void,
}
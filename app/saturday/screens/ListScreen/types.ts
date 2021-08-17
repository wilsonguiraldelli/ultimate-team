import { SaturdayProps } from "saturday/types";

export type Props = {
    onSubmit: (date: Date) => void,
    onSelect: (saturday: SaturdayProps) => void,
    handleDatePicker: (value: boolean) => void,
    onEdit: () => void,
    onDelete: () => void,
    isDatePickerOpen: boolean,
    days: SaturdayProps[],
};

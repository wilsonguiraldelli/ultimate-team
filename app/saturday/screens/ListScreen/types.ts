import { SaturdayProps } from "saturday/types";

export type Props = {
    onSubmit: (date: Date) => void,
    onSelect: (saturday: SaturdayProps) => void,
    handleDatePicker: (value: boolean) => void,
    onDelete: (id: string | number[]) => void,
    isDatePickerOpen: boolean,
    days: SaturdayProps[],
};

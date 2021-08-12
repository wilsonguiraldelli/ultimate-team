import { GameDay } from "game-days/types";

export type Props = {
    onSubmit: (date: Date) => void,
    handleDatePicker: (value: boolean) => void,
    isDatePickerOpen: boolean,
    days: GameDay[],
};

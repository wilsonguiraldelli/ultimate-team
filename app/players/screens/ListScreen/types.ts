import { PlayerProps } from "players/types";
import { SaturdayProps } from "saturday/types";

export type Props = {
    onAdd: () => void,
    onGoAnalytics: () => void,
    onGoBack: () => void,
    onDelete: (id: string | number[]) => void
    onEdit: (player: PlayerProps, index: number) => void
    current: SaturdayProps
};
